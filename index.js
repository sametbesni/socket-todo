const axios = require('axios');

async function getRandomJoke() {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log('Rastgele Chuck Norris şakası:');
    console.log(response.data.value);
  } catch (error) {
    console.error('Hata oluştu:', error.message);
  }
}

getRandomJoke();
