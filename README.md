# 🛒 Market Commerce

Modern web teknolojileriyle geliştirilmiş, Next.js tabanlı basit ve işlevsel bir e-ticaret uygulamasıdır. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir, ürün detaylarını inceleyebilir ve test modunda ödeme gerçekleştirebilirler.

## 📌 Teknolojiler

- **Next.js** React tabanlı framework
- **React** Arayüz bileşenleri için kütüphane
- **React DOM** React uygulamasını tarayıcıya bağlar
- **Mongoose** MongoDB veritabanı için ODM
- **Stripe** Ödeme işlemleri
- **React Toastify** Bildirim sistemi
- **React Icons** İkon kütüphanesi

## 🚀 Özellikler

- **Ana sayfada** kategori bazlı ürün listeleme
- Doğrudan ana sayfadan sepete ürün ekleyebilme
- **Ürün detay sayfasında** stok bilgisi dahil tüm bilgiler
- **Detay sayfasından**:
  - Sepete ekleme
  - Hemen satın alma
- **Sepetim sayfasında**:
  - Ürünleri görüntüleme
  - Adet artırma / azaltma
  - Ürün silme
  - Sepeti boşaltma
  - Ödeme sayfasına yönlendirme
- **Ödeme işlemi test modunda çalışır**:
  - Gerçek para çekilmez
  - Doğru test bilgileriyle başarılı işlem
  - Yanlış bilgilerde işlem reddi

## 💳 Test Kart Bilgileri

Test modunda aşağıdaki bilgilerle başarılı bir şekilde ödeme yapabilirsiniz:

- **Kart Numarası:** `4242 4242 4242 4242`
- **Tarih:** `12 / 28`
- **CVC:** `345`
- **E-posta:** Herhangi bir e-posta

Başka bilgilerle işlem yapılamaz ve "başarısız" sayfasına yönlendirilirsiniz.

![Uygulama home,detay](/public/home.gif)![Uygulama Sepet](/public/basket.gif)![Uygulama Ödeme](/public/pay.gif)

---

## ⚙️ Kurulum ve Başlatma

```bash

### 1. Reponun klonlanması

git clone https://github.com/1-Adnan-1/Market-commerce.git
cd Market-commerce

### 2. Bağımlılıkların yüklenmesi

npm install

### 3. Geliştirme sunucusunu çalıştırma

npm run dev
```
