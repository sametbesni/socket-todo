const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
const mongoose = require('mongoose');
const path = require('path');
const ip = require('ip');
const qrcode = require('qrcode-terminal');


mongoose.connect('mongodb://localhost/todo_app', {   });

const Todo = mongoose.model('Todo', {
  text: String,
  completed: Boolean
});

io.on('connection', (socket) => {
  socket.on('saveTodos', async (todos) => {
    await Todo.deleteMany({});
    await Todo.insertMany(todos);
    socket.broadcast.emit('todosUpdated', todos);
  });

  socket.on('getTodos', async () => {
    const todos = await Todo.find();
    socket.emit('todosLoaded', todos);
  });
});

// CORS middleware'ini ekleyin
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Statik dosyaları serve et
app.use(express.static(path.join(__dirname, 'public')));

// Ana rotayı tanımla
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

http.listen(3000, () => {
  const localIP = ip.address();
  const serverURL = `http://${localIP}:3000`;
  console.log(`Server çalışıyor: ${serverURL}`);
  
  qrcode.generate(serverURL, {small: true}, (qrcode) => {
    console.log('QR Kodu:');
    console.log(qrcode);
  });
});
