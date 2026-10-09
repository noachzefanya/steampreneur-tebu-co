# Rencana Kerja

Pecah pekerjaan menjadi langkah kecil. Mulai dari versi paling sederhana yang berfungsi, lalu tambahkan sedikit demi sedikit.  
Satu langkah sebaiknya bisa dikerjakan dan diperiksa dalam 30 sampai 60 menit.  
Tidak ada jadwal per jam, jadi rencana ini adalah jadwal tim kalian sendiri.

**Waktu mulai:** 09 Oktober 2026, 08:30 WIB  
**Batas akhir pengumpulan:** Mengikuti jadwal resmi sayembara (11 Oktober 2026, 23:59 WIB)

| No | Langkah | Penanggung jawab | Cara memeriksa bahwa langkah ini selesai | Estimasi waktu | Waktu sebenarnya | Status |
|---|---|---|---|---|---|---|
| 1 | Scaffolding: Inisialisasi struktur proyek web (React + Vite + Tailwind) | Noach Zefanya Rifian | Proyek berhasil dijalankan via `npm run dev` dan halaman pembuka tampil responsif di browser | 30 menit | - | Belum Mulai |
| 2 | Logika Bisnis & Validasi: Pembuatan modul kalkulasi tonase, armada, gula, dan validator | Mevlana Ravi Atmajati | Fungsi dapat dipanggil, mengembalikan nilai kalkulasi yang akurat sesuai rumus spesifikasi di konsol | 40 menit | - | Belum Mulai |
| 3 | Antarmuka Form Panen: Pembuatan formulir input petak tebu dan feedback error validasi | Noach Zefanya Rifian | Form menolak input salah/kosong dengan notifikasi jelas, dan menampilkan kalkulasi otomatis saat input valid | 45 menit | - | Belum Mulai |
| 4 | Penyimpanan & Tiket: Integrasi `localStorage` dan pembuatan ID unik tiket SPTA | Prama Javas Aryatama | Data submit tersimpan ke dalam peramban (`localStorage`) dan tidak hilang saat halaman di-refresh | 40 menit | - | Belum Mulai |
| 5 | Halaman Rekap Antrean: Pembuatan tabel daftar antrean panen dan kartu ringkasan metrik | Prama Javas Aryatama | Riwayat pendaftaran panen tampil terstruktur pada tabel antrean dan kartu total akumulasi tonase akurat | 45 menit | - | Belum Mulai |
| 6 | Pengujian Unit Test & Integrasi Alur Inti: Pembuatan unit test otomatis dan pengujian U01-U06 | Mevlana Ravi Atmajati | Perintah `node --test tes/kalkulasi-tebu.test.js` lulus 100% dan seluruh skenario manual U01-U06 lulus | 45 menit | - | Belum Mulai |
| 7 | **Tugas 2: Bug Hunt (Kasir Kantin STEAM)** | Seluruh Tim | Timer 60 menit dimulai dari commit `bughunt: kode asli`, bug diperbaiki bertahap, test lulus, dan `catatan-bug.md` lengkap | 60 menit | - | Belum Mulai |
| 8 | **Tugas 3: Change Request** (Fitur Pencarian, Filter Status/Varietas, dan Ekspor CSV) | Noach Zefanya Rifian & Prama Javas Aryatama | Commit analisis terdampak terlebih dahulu, fitur search/filter aktif bersamaan, unduh CSV format angka murni, test lama tetap lulus | 50 menit | - | Belum Mulai |
| 9 | **Tugas 4: Penjelasan Kode, Dokumentasi, & Refleksi** | Seluruh Tim | `docs/08-penjelasan-kode.md` terisi penjelasan per anggota & 5 pertanyaan, `docs/07-refleksi.md` lengkap, dan `README.md` teruji | 50 menit | - | Belum Mulai |

---

### Alokasi Total Waktu:
- **Pembangunan Alur Inti & Pengujian (Langkah 1–6):** 245 menit ($\sim$4 jam)
- **Tugas Khusus (Bug Hunt, Change Request, Penjelasan Kode & Dokumen):** 160 menit ($\sim$2,7 jam)
- **Total Estimasi:** 405 menit ($\sim$6,7 jam) — memberikan cadangan waktu yang aman sebelum batas akhir pengumpulan sayembara.
