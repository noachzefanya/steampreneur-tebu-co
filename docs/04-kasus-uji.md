# Kasus Uji

Bagian A diisi **sebelum** mulai membangun (Checkpoint 1). Hasil yang diharapkan dihitung secara matematis dan mandiri oleh tim (kalkulator manual), bukan oleh AI, mengacu pada persona lapangan dan aturan bisnis resmi Tebu.Co (kapasitas truk 8 ton, rendemen mutu segar 8,0%, dan harga acuan gula Rp 14.500/kg).  
Bagian B (Hasil sebenarnya, Lulus?, dan Bukti) diisi setelah aplikasi dibangun dan diuji pada Tahap 5.

| ID | Kriteria yang diuji | Langkah / input | Hasil yang diharapkan | Hasil sebenarnya | Lulus? | Bukti (nama file tangkapan layar) |
|---|---|---|---|---|---|---|
| U01 | Alur Normal: Input form dan perhitungan bisnis lengkap (Kasus Nyata Persona Pak Yayan) | Petak: "Petak Timur Blok B (Pak Yayan)", Varietas: "Bululawang", Luas: `3.5` Ha, Produktivitas: `80` Ton/Ha, Tanggal: `2026-10-25`. Klik simpan pengajuan. | Form berhasil disimpan. Muncul di rekap antrean dengan: Total Tonase = `280.00 Ton`, Kebutuhan Armada = `35 Truk` (ceil(280/8)), Estimasi Gula = `22.400 Kg` (280.000 * 8%), Proyeksi Nilai = `Rp 324.800.000`. | - | - | - |
| U02 | Input Salah: Luas lahan kosong atau bernilai negatif | Isi petak: "Petak Barat", Luas: `-1.5` Ha (atau kosong `0`), Produktivitas: `75` Ton/Ha, Tanggal: `2026-10-22`. Klik simpan. | Sistem menolak submit, menampilkan pesan error validasi: "Luas lahan harus berupa angka lebih besar dari 0". Tidak ada data yang tersimpan di rekap. | - | - | - |
| U03 | Input Salah: Tanggal rencana tebang belum dipilih | Isi semua data valid (Luas `2.0`, Produktivitas `70`), namun kolom tanggal rencana tebang dibiarkan kosong. Klik simpan. | Sistem menolak submit, menampilkan pesan validasi: "Tanggal rencana tebang wajib diisi". Form tidak tersimpan. | - | - | - |
| U04 | Nilai Batas Minimum: Pengujian batas terendah aturan | Luas: `0.1` Ha, Produktivitas: `10` Ton/Ha, Tanggal: `2026-10-25`. Klik simpan. | Form berhasil disubmit. Nilai terhitung: Total Tonase = `1.00 Ton`, Kebutuhan Truk = `1 Truk` (ceil(1/8)), Estimasi Gula = `80 Kg` (1.000 * 8%), Proyeksi Nilai = `Rp 1.160.000`. | - | - | - |
| U05 | Nilai Batas Pembulatan Armada: Sisa tonase memerlukan tambahan 1 truk | Luas: `1.0` Ha, Produktivitas: `65` Ton/Ha, Tanggal: `2026-10-28`. Klik simpan. | Total Tonase = `65.00 Ton`. Kebutuhan truk = `9 Truk` (karena 65/8 = 8.125, dibulatkan ke atas menjadi 9). Estimasi Gula = `5.200 Kg`, Proyeksi Nilai = `Rp 75.400.000`. | - | - | - |
| U06 | Ketahanan Data (Persistence): Refresh browser (F5) | Masukkan data valid (kasus U01), pastikan data muncul di tabel rekap, lalu lakukan reload/refresh browser (F5). | Data pengajuan sebelumnya tetap tersimpan utuh di tabel rekap dari `localStorage` (tidak hilang atau ter-reset). | - | - | - |

---

## Unit test otomatis (jika ada)
- **Framework pengujian:** Node.js Native Test Runner (`node:test` dan `node:assert/strict`) tanpa dependensi tambahan, sesuai panduan challenge.
- **Nama file test:** `tes/kalkulasi-tebu.test.js`
- **Fungsi logika bisnis yang diuji:**
  1. `hitungTotalTonase(luas, produktivitas)`: Pengujian kalkulasi desimal dan validasi batas input.
  2. `hitungKebutuhanTruk(totalTonase)`: Pengujian pembulatan ke atas dengan kapasitas 8 ton per unit.
  3. `hitungEstimasiGula(totalTonase)`: Pengujian formula rendemen 8,0% terhadap tonase bersih.
  4. `hitungProyeksiNilai(estimasiGulaKg)`: Pengujian perkalian harga acuan gula Rp 14.500/kg.
  5. `validasiInputPanen(payload)`: Pengujian penolakan input negatif, nilai kosong, atau tanggal tidak valid.
- **Perintah menjalankan:** `node --test tes/kalkulasi-tebu.test.js`
- **Status pengujian saat ini (Checkpoint 1):** Belum dijalankan (kode unit test akan diimplementasikan pada Tahap 4 dan dieksekusi pada Tahap 5).
- **Jumlah test akhir:** *(akan diisi jumlah aktual yang lulus pada Tahap 5)*
