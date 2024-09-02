# Todo Uygulaması

Bu proje, kullanıcıların görevlerini yönetmelerine yardımcı olan basit bir Todo uygulamasıdır. Kullanıcılar yeni görevler ekleyebilir, görevleri tamamlayabilir ve tamamlanan görevleri görüntüleyebilir.

## Özellikler

- Görev ekleme
- Görev tamamlama
- Tamamlanan görevleri görüntüleme
- Gerçek zamanlı güncellemeler (Socket.IO kullanarak)

## Teknolojiler

- **Node.js**: Sunucu tarafı uygulaması için
- **Express**: Web sunucusu için
- **MongoDB**: Görev verilerini depolamak için
- **Socket.IO**: Gerçek zamanlı iletişim için
- **HTML/CSS**: Kullanıcı arayüzü için

## Kurulum

1. **Depoyu Klonlayın**:
   ```bash
   git clone https://github.com/sametbesni/socket-todo.git
   cd socket-todo
   ```

2. **Gerekli Paketleri Yükleyin**:
   ```bash
   npm install
   ```

3. **MongoDB'yi Başlatın**:
   MongoDB'nin yüklü olduğundan emin olun ve veritabanını başlatın.

4. **Uygulamayı Başlatın**:
   ```bash
   npm start
   ```

5. **Tarayıcıda Açın**:
   Tarayıcınızda `http://localhost:3000` adresine gidin.

## Kullanım

- Yeni görev eklemek için metin kutusuna görev adını yazın ve "Ekle" butonuna tıklayın.
- Görevleri tamamlamak için görev üzerine tıklayın.
- Tamamlanan görevler "Tamamlananlar" bölümünde görüntülenecektir.

## Katkıda Bulunma

Herhangi bir katkıda bulunmak isterseniz, lütfen bir pull request oluşturun veya sorunlarınızı bildirin.

## Lisans

Bu proje ISC lisansı altında lisanslanmıştır.