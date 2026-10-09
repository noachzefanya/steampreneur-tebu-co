# Spesifikasi Produk

**Nama tim:** Tebu.Co Team (SMK Telkom Malang)  
**Nama produk:** Tebu.Co  
**Alur inti yang dibangun:** Petani mendaftarkan rencana panen tebang-angkut tebu, sistem menghitung estimasi tonase, alokasi armada truk (8 ton), potensi rendemen gula, dan menerbitkan tiket antrean SPTA digital yang tersimpan di rekap antrean giling pabrik.

---

## 1. Masalah
Pada rantai pasokan konvensional Tebang-Muat-Angkut (TMA) tebu rakyat, alur pengiriman berjalan tanpa penjadwalan presisi sehingga menimbulkan antrean truk selama 48–72 jam di pos penimbangan Pabrik Gula (PG).
Masalah ini dialami oleh:
- **Petani Tebu Mandiri:** Mengalami kerugian hasil panen akibat *tunda giling* (*cut-to-crush delay* > 24 jam). Secara biokimia, terjadi hidrolisis inversi sukrosa ($C_{12}H_{22}O_{11} + H_2O \rightarrow C_6H_{12}O_6 + C_6H_{12}O_6$) oleh enzim invertase serta kontaminasi bakteri *Leuconostoc mesenteroides*, menyebabkan rendemen anjlok dari kisaran 7,9%–8,1% menjadi 5,2%–5,5% (penurunan mutu riil > 2%). Petani juga terbebani biaya denda inap armada truk (Rp 200.000–300.000/malam) dan susut bobot tebu 480–500 kg per truk di bak terbuka.
- **Pabrik Gula (PG):** Mengalami *bottleneck* parah di jembatan timbang luar pabrik dan penurunan kualitas nira kristal gula akibat bahan baku asam.
- **Sopir Armada Truk:** Kehilangan kapasitas ritase mingguan hingga >50% (dari 4–5 rit/minggu menjadi hanya 2 rit/minggu) akibat tertahan berhari-hari di jalanan.

---

## 2. Pengguna
1. **Petani Tebu Mandiri:** Membutuhkan kepastian jendela waktu kedatangan giling sebelum tebang dilakukan, mengetahui estimasi tonase, alokasi armada truk, serta proyeksi rendemen gula secara transparan tanpa repot kalkulasi manual di kebun.
2. **Operator & Koordinator Pabrik Gula:** Membutuhkan daftar rekapitulasi antrean tebang yang terstruktur untuk mengatur kuota harian pabrik (*Ton Cane per Day* / TCD) dan mencegah penumpukan armada di pintu timbang.

---

## 3. Hasil wawancara calon pengguna & User Persona

Berdasarkan sintesis riset lapangan dan observasi antrean di Pabrik Gula Jawa Timur, disusun dua **User Persona** utama beserta dasar asumsi kebutuhan:

### User Persona 1: Petani Tebu Rakyat
- **Nama Persona:** Pak Yayan (43 Tahun)
- **Peran:** Petani Tebu Rakyat Mandiri (Luas Garapan: ~3,5 Hektar)
- **Goals (Tujuan):**
  1. Menjaga kualitas rendemen tebu tetap optimal di atas 7,5% dengan memastikan tebu digiling dalam *golden time* (< 24 jam pasca-tebang).
  2. Mencegah bobot tebu susut ratusan kilogram akibat terpapar terik matahari di bak terbuka saat antre.
  3. Mengetahui secara pasti jumlah truk 8 ton yang harus disiapkan sebelum regu tebang mulai memotong kebun.
- **Pain Points & Frustrasi:**
  1. Rendemen tebu anjlok ke level 5,2% karena truk menginap 2 hari di depan pabrik.
  2. Harus menanggung kerugian denda inap sopir truk sebesar Rp 200.000 – Rp 300.000 per malam.
  3. Total estimasi kerugian mencapai Rp 4.500.000 hingga Rp 8.000.000 per musim tebang.
- **Kutipan Kunci (*Verbatim*):**
  > *"Kalau tebu sudah ditebang terus truknya nginep dua malam di pabrik, air tebunya susut, Mas. Rendemen yang harusnya tembus 7,5 bisa jatuh ke 5 koma. Kita petani yang nanggung ruginya, belum lagi sopir minta uang makan tambahan karena nganggur di jalan."*

---

### User Persona 2: Sopir Truk Ekspedisi Tebu
- **Nama Persona:** Pak Dedi (52 Tahun)
- **Peran:** Pengemudi Truk Angkutan Tebu Ekspedisi Mandiri
- **Goals (Tujuan):**
  1. Mendapat kepastian waktu kedatangan (*arrival slot*) di pabrik agar tidak menginap berhari-hari di bahu jalan.
  2. Memaksimalkan perputaran ritase kerja (target normal 4–5 rit per minggu).
  3. Proses administrasi di pos timbang berlangsung cepat tanpa risiko kehilangan dokumen fisik.
- **Pain Points & Frustrasi:**
  1. Tertahan antre 24 hingga 48 jam hanya untuk maju beberapa meter di jalanan berdebu.
  2. Uang saku operasional habis terkuras untuk makan dan solar *idle* mesin (Rp 100.000 – Rp 150.000 per rit).
  3. Lembar kertas Surat Perintah Tebang Angkut (SPTA) rentan sobek, basah, atau terkena noda oli di kabin.
- **Kutipan Kunci (*Verbatim*):**
  > *"Nunggunya itu yang bikin habis tenaga sama uang saku, Mas. Sehari dua hari cuma maju semeter-dua meter di depan pabrik. Kalau ada jadwal pasti jam berapa saya harus masuk, kan saya bisa nunggu di rumah atau narik muatan lain dulu."*

---

### Dasar Asumsi & Rumusan Point of View (POV)
> **POV Tim:** Petani tebu rakyat dan sopir truk angkutan membutuhkan kepastian jadwal kedatangan dan transparansi giliran timbang sebelum tebu dipotong dari kebun, karena pabrik gula beroperasi dengan kapasitas serap harian terbatas. Tanpa koordinasi jadwal panen digital, truk tertahan 24–48 jam di jalanan, menyebabkan degradasi sukrosa hingga rendemen turun >2% serta memicu pembengkakan biaya tunggu sopir dan kerugian hasil panen petani hingga jutaan rupiah per musim.

---

## 4. Fitur wajib (hanya untuk alur inti)
1. **Formulir Pendaftaran Rencana Panen Tebang-Angkut:** Input nama petak/petani, varietas tebu (Bululawang, PSJK 922, Cenning), luas lahan (Ha), taksasi produktivitas (Ton/Ha), dan tanggal rencana tebang.
2. **Validasi Formulir:**
   - Luas lahan harus berupa angka valid $> 0$ (minimal 0.1 Ha).
   - Estimasi produktivitas harus angka valid antara $10$ s/d $200$ Ton/Ha.
   - Nama petak dan tanggal rencana tebang wajib diisi.
   - Input salah ditolak dengan pesan kesalahan yang jelas dan spesifik.
3. **Kalkulasi Bisnis & STEAM Otomatis:**
   - Menghitung total estimasi tonase tebu ($\text{Luas} \times \text{Produktivitas}$).
   - Menghitung kebutuhan armada truk kapasitas 8 ton per unit ($\lceil\text{Tonase}/8\rceil$).
   - Menghitung potensi produksi gula kristal dengan preservasi mutu segar rendemen 8,0% ($\text{Tonase} \times 1.000 \times 8\%$).
   - Menghitung proyeksi nilai hasil bagi petani berdasarkan harga acuan gula nasional Rp 14.500/kg.
4. **Penyimpanan Data (Offline-First / Local Storage):** Menyimpan tiket pendaftaran panen ke penyimpanan lokal peramban (`localStorage`) agar data aman dan tidak lenyap saat peramban dimuat ulang (*refresh*) atau saat berada di area blank spot kebun.
5. **Halaman Rekapitulasi Antrean Panen:** Menampilkan tabel riwayat pengajuan jadwal tebang beserta ringkasan kartu metrik total tonase tebu dan total armada truk siap giling.

---

## 5. Di luar cakupan (tidak dikerjakan dalam challenge ini)
- Integrasi perangkat keras jembatan timbang pabrik (Web Serial API).
- Integrasi payment gateway perbankan atau pencairan DO gula.
- Pelacakan posisi GPS armada truk secara *live telemetry* di peta interaktif.

---

## 6. Aturan bisnis dan perhitungan
1. **Total Estimasi Tonase (Ton):**
   $$\text{Total Tonase} = \text{Luas Lahan (Ha)} \times \text{Produktivitas (Ton/Ha)}$$
   *Dibulatkan 2 angka di belakang koma.*

2. **Kebutuhan Alokasi Armada Truk (Unit):**
   $$\text{Kebutuhan Armada} = \lceil \frac{\text{Total Tonase}}{8} \rceil$$
   *Standar muatan truk tebu adalah 8 Ton. Sisa muatan tetap membutuhkan 1 unit armada tambahan ($\text{Math.ceil}$).*

3. **Estimasi Produksi Gula Kristal (Kg) - Preservasi Mutu Segar (Rendemen 8.0%):**
   $$\text{Estimasi Gula (Kg)} = (\text{Total Tonase} \times 1.000) \times 8,0\%$$
   *Menjaga tebu digiling $< 24$ jam mengamankan rendemen pada level prima 8,0% (faktor 0,08), mencegah inversi sukrosa yang menurunkannya ke 5,2%.*

4. **Proyeksi Nilai Hasil Gula (Rupiah):**
   $$\text{Proyeksi Nilai (Rp)} = \text{Estimasi Gula (Kg)} \times \text{Rp } 14.500$$
   *Berdasarkan harga acuan gula nasional Rp 14.500 / kg.*

5. **Aturan Batas & Validasi:**
   - Luas lahan: minimal $0.1$ Ha.
   - Produktivitas: minimal $10$ Ton/Ha, maksimal $200$ Ton/Ha.
   - Isian teks tidak boleh kosong atau hanya berupa spasi.

---

## 7. Data yang disimpan
Format data berupa objek JSON di `localStorage` dengan key `'tebu_orders'`:

| Data | Tipe / Contoh Isi | Keterangan |
|---|---|---|
| `id` | `"SPTA-1728456000"` | ID unik registrasi tiket SPTA |
| `namaPetak` | `"Petak B-12 (Pak Yayan)"` | Nama pemilik atau nomor petak kebun |
| `varietas` | `"Bululawang (BL)"` | Varietas tebu yang ditanam |
| `luasLahan` | `3.5` (angka) | Luas lahan dalam satuan Hektar |
| `produktivitas` | `80` (angka) | Estimasi hasil dalam Ton/Ha |
| `tanggalTebang` | `"2026-10-25"` | Tanggal rencana panen tebang |
| `totalTonase` | `280.00` | Hasil kali luas dan produktivitas |
| `jumlahTruk` | `35` | Alokasi armada truk (8 ton/unit) |
| `estimasiGulaKg` | `22400` | Potensi gula kristal (rendemen 8.0%) |
| `proyeksiNilaiRp` | `324800000` | Proyeksi nilai kotor (Rp 14.500/kg) |
| `status` | `"Terjadwal (< 24 Jam)"` | Status antrean giling aman |

---

## 8. Kriteria "selesai"
Setiap kriteria harus bisa diuji secara objektif (jawaban Ya atau Tidak):
- [ ] Pengguna dapat memasukkan data rencana panen melalui formulir antarmuka dengan lancar.
- [ ] Sistem menolak jika luas lahan $\le 0$, kosong, atau bernilai teks non-angka dengan pesan error jelas.
- [ ] Sistem menolak jika tanggal rencana tebang tidak dipilih dengan notifikasi peringatan.
- [ ] Sistem menghitung total tonase, kebutuhan armada truk (8 ton), estimasi gula (8%), dan proyeksi nilai secara akurat tanpa salah hitung.
- [ ] Pengajuan yang berhasil langsung muncul di tabel daftar antrean tebang secara seketika.
- [ ] Saat halaman peramban dimuat ulang (*refresh* / F5), daftar data antrean tetap tersimpan utuh dari `localStorage`.
- [ ] Kartu ringkasan metrik menampilkan akumulasi total tonase dan total armada truk yang terdaftar.
