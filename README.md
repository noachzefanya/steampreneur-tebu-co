# Tebu.Co

Tebu.Co adalah platform *Smart Agriculture* yang menjembatani komunikasi data waktu-nyata (*real-time*) antara petani tebu mandiri dan Pabrik Gula (PG). Website ini dirancang untuk menyinkronkan jadwal tebang dengan kapasitas pabrik guna mencegah penurunan kualitas rendemen akibat antrean panjang (*cut-to-crush delay*).

## Alur Inti

Jelaskan langkah yang dilakukan pengguna dari awal sampai akhir.

1. **Petani mendaftarkan lahan & panen:** Petani memasukkan data petak kebun dan menjadwalkan masa tebang sesuai kapasitas harian pabrik.


2. **Penerbitan SPTA Digital:** Sistem menerbitkan Surat Perintah Tebang Angkut (SPTA) berupa *Dynamic QR Code* untuk setiap armada truk yang akan berangkat.


3. **Validasi & Pemantauan:** Admin Pabrik Gula memindai QR Code di jembatan timbang secara instan, sementara sistem memperbarui dasbor antrean dan tonase secara *real-time*.



## Cara Menjalankan (How to Run)

Tulis langkah selengkap mungkin. Juri akan meng-clone repositori ini ke komputer yang bersih dan mengikuti langkah di bawah persis seperti yang tertulis.

### Prasyarat

* Node.js versi 18 LTS atau lebih baru.


* Browser Chrome atau Firefox.


* Akun / Proyek Supabase yang sudah aktif.



### Langkah

1. Clone repositori:
```bash
git clone https://github.com/nama-akun/steampreneur-nama-tim.git

```


*(Catatan: Sesuaikan URL dengan link repositori lomba kalian)*
2. Masuk ke folder proyek:
```bash
cd steampreneur-nama-tim

```


3. Install dependensi:
```bash
npm install

```


4. Konfigurasi Variabel Lingkungan:
Ubah nama file `.env.example` menjadi `.env` dan tambahkan kredensial `VITE_SUPABASE_URL` serta `VITE_SUPABASE_ANON_KEY` sesuai proyek Supabase kalian.


5. Jalankan website:
```bash
npm run dev

```


6. Buka alamat berikut di browser: http://localhost:5173.



### Akun atau data contoh

Jika website memerlukan login atau data awal, tuliskan di sini. Gunakan data contoh, bukan data sungguhan.

| Peran | Username | Password |
| --- | --- | --- |
| Petani Tebu | petani_demo | tebuco123 |
| Admin Pabrik Gula | admin_pg | admin123 |

### Jika terjadi masalah

Tuliskan masalah yang mungkin muncul dan cara mengatasinya.

* **Error saat instalasi dependensi:** Hapus folder `node_modules` dan file `package-lock.json`, lalu jalankan kembali `npm install`.
* **Gagal terhubung ke Database:** Pastikan kunci anonim (*Anon Key*) dan URL Supabase di file `.env` sudah benar dan tidak menggunakan tanda kutip.


* **Port 5173 sudah dipakai:** Vite otomatis akan mencari port lain (seperti 5174). Perhatikan pesan di terminal untuk URL lokal yang baru.

## Tangkapan Layar Alur Inti

Minimal satu tangkapan layar untuk setiap langkah alur inti, termasuk hasil change request. Simpan gambar di `docs/bukti/`.

1. Langkah 1 (Pendaftaran Kebun): 

2. Langkah 2 (Tiket QR SPTA): 

3. Langkah 3 (Dasbor Timbang Pabrik): 


## Cara Menjalankan Pengujian

```bash
npm run test

```

*(Atau gunakan perintah `node --test` jika menggunakan test runner bawaan Node.js)*

Hasil yang diharapkan: semua test lulus.

## Fitur

* Registrasi digital petak kebun dan profil varietas tebu (*Smart Plot & Crop Registration*).


* Penjadwalan tebang yang terintegrasi langsung dengan slot kapasitas giling Pabrik Gula.


* Dukungan *Offline-First* (PWA) untuk daerah perkebunan minim sinyal.


* Penerbitan SPTA Digital dan *Dynamic QR Code* secara massal per armada truk.


* Dasbor *real-time* untuk pelacakan antrean pabrik, tonase timbang, dan estimasi nilai rendemen.



## Batasan yang Diketahui

Apa yang belum bisa dilakukan atau masih kurang?

* Sistem belum terintegrasi langsung dengan sensor IoT dari perangkat Jembatan Timbang pabrik secara otomatis.


* Belum memiliki fitur prediksi nilai rendemen (*Brix Scoring*) berbasis *Machine Learning*.


* Pelacakan armada truk belum mendukung teknologi geofencing atau integrasi GPS *real-time*.



## Struktur Folder

| File / folder | Isi |
| --- | --- |
| `docs/` | Dokumen proses kerja (spesifikasi, rencana, log prompt, kasus uji, dan lainnya).

 |
| `src/` | Kode website Tebu.Co.

 |
| `tes/` | Unit test.

 |
| `bughunt-kasir/` | Hasil Bug Hunt.

 |

## Link Demo (opsional)

Jika website di-hosting (misalnya GitHub Pages), tuliskan link-nya di sini.
[https://tebu.co.nozz.my.id/](https://www.google.com/search?q=https://tebu.co.nozz.my.id/)

## Sumber dan Lisensi

Cantumkan library, template, gambar, ikon, atau font yang dipakai beserta lisensinya.

| Nama | Sumber (link) | Lisensi |
| --- | --- | --- |
| React.js | [https://reactjs.org/](https://reactjs.org/) | MIT

 |
| Vite | [https://vitejs.dev/](https://vitejs.dev/) | MIT

 |
| Tailwind CSS | [https://tailwindcss.com/](https://tailwindcss.com/) | MIT

 |
| Supabase | [https://supabase.com/](https://supabase.com/) | MIT

 |
| Lucide React | [https://lucide.dev/](https://lucide.dev/) | ISC

 |

## Tim

Jangan cantumkan nomor HP, alamat, atau email.

| Nama | Peran |
| --- | --- |
| Noach Zefanya Rifian | Navigator Utama / Programmer |
| Prama Javas Aryatama | Penguji / Dokumentator |
| Mevlana Ravi Atmajati | Desainer UI/UX |