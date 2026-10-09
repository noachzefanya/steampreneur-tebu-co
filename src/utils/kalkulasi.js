/**
 * kalkulasi.js — Modul Logika Bisnis & Matematika Agronomi Tebu.Co
 * ================================================================
 * Berisi fungsi-fungsi murni (pure functions) untuk kalkulasi alur inti:
 * 1. Estimasi Total Tonase Tebu
 * 2. Kebutuhan Alokasi Armada Truk (8 Ton/unit, pembulatan ke atas)
 * 3. Potensi Produksi Gula Kristal (Preservasi Rendemen Mutu Segar 8.0%)
 * 4. Proyeksi Nilai Hasil Gula (Harga Acuan Nasional Rp 14.500/kg)
 * 5. Validasi Formulir Pendaftaran Panen
 */

export const KAPASITAS_TRUK_DEFAULT = 8; // Ton per truk
export const RENDEMEN_STANDAR = 0.08;   // 8.0% mutu segar (< 24 jam)
export const HARGA_GULA_PER_KG = 14500;  // Rp per kg acuan nasional

/**
 * Menghitung estimasi total tonase tebu dari luas lahan dan produktivitas
 * @param {number} luasLahan - Luas dalam Hektar (Ha)
 * @param {number} produktivitas - Estimasi Ton per Hektar (Ton/Ha)
 * @returns {number} Total tonase tebu (2 desimal)
 */
export function hitungTotalTonase(luasLahan, produktivitas) {
  const luas = Number(luasLahan);
  const prod = Number(produktivitas);

  if (isNaN(luas) || isNaN(prod) || luas <= 0 || prod <= 0) {
    throw new Error('Luas lahan dan produktivitas harus bernilai angka lebih besar dari 0');
  }

  const total = luas * prod;
  return Number(total.toFixed(2));
}

/**
 * Menghitung kebutuhan armada truk (kapasitas 8 ton, selalu dibulatkan ke atas)
 * @param {number} totalTonase - Total tonase tebu (Ton)
 * @param {number} kapasitasPerTruk - Kapasitas muatan (default: 8 Ton)
 * @returns {number} Jumlah armada truk yang dibutuhkan
 */
export function hitungKebutuhanTruk(totalTonase, kapasitasPerTruk = KAPASITAS_TRUK_DEFAULT) {
  const tonase = Number(totalTonase);
  const kapasitas = Number(kapasitasPerTruk);

  if (isNaN(tonase) || tonase <= 0 || isNaN(kapasitas) || kapasitas <= 0) {
    throw new Error('Total tonase dan kapasitas truk harus bernilai positif');
  }

  return Math.ceil(tonase / kapasitas);
}

/**
 * Menghitung estimasi gula kristal yang dihasilkan (dalam Kg)
 * @param {number} totalTonase - Total tonase tebu (Ton)
 * @param {number} rendemen - Persentase rendemen (default: 0.08 atau 8%)
 * @returns {number} Estimasi gula kristal dalam kilogram (bilangan bulat terdekat)
 */
export function hitungEstimasiGula(totalTonase, rendemen = RENDEMEN_STANDAR) {
  const tonase = Number(totalTonase);
  if (isNaN(tonase) || tonase <= 0) {
    throw new Error('Total tonase harus bernilai positif');
  }

  const tonaseKg = tonase * 1000;
  return Math.round(tonaseKg * rendemen);
}

/**
 * Menghitung proyeksi nilai bruto hasil bagi gula (dalam Rupiah)
 * @param {number} estimasiGulaKg - Jumlah gula kristal dalam Kg
 * @param {number} hargaPerKg - Harga acuan per kg (default: Rp 14.500)
 * @returns {number} Proyeksi nilai hasil dalam Rupiah
 */
export function hitungProyeksiNilai(estimasiGulaKg, hargaPerKg = HARGA_GULA_PER_KG) {
  const gula = Number(estimasiGulaKg);
  if (isNaN(gula) || gula < 0) {
    throw new Error('Estimasi gula harus berupa angka non-negatif');
  }

  return Math.round(gula * hargaPerKg);
}

/**
 * Menghitung seluruh metrik sekaligus dalam satu panggilan praktis
 * @param {number} luasLahan - Luas lahan (Ha)
 * @param {number} produktivitas - Hasil tebang (Ton/Ha)
 * @returns {object} Kumpulan hasil kalkulasi
 */
export function hitungSemuaMetrik(luasLahan, produktivitas) {
  const totalTonase = hitungTotalTonase(luasLahan, produktivitas);
  const jumlahTruk = hitungKebutuhanTruk(totalTonase);
  const estimasiGulaKg = hitungEstimasiGula(totalTonase);
  const proyeksiNilaiRp = hitungProyeksiNilai(estimasiGulaKg);

  return {
    totalTonase,
    jumlahTruk,
    estimasiGulaKg,
    proyeksiNilaiRp
  };
}

/**
 * Validasi input form pendaftaran panen tebang-angkut
 * @param {object} data - Form payload { namaPetak, luasLahan, produktivitas, tanggalTebang, varietas }
 * @returns {{ valid: boolean, errors: object }}
 */
export function validasiInputPanen(data = {}) {
  const errors = {};

  if (!data.namaPetak || typeof data.namaPetak !== 'string' || data.namaPetak.trim() === '') {
    errors.namaPetak = 'Nama petak atau petani wajib diisi';
  }

  const luas = Number(data.luasLahan);
  if (data.luasLahan === undefined || data.luasLahan === null || data.luasLahan === '' || isNaN(luas) || luas <= 0) {
    errors.luasLahan = 'Luas lahan harus berupa angka lebih besar dari 0';
  } else if (luas < 0.1) {
    errors.luasLahan = 'Luas lahan minimal adalah 0.1 Hektar';
  }

  const prod = Number(data.produktivitas);
  if (data.produktivitas === undefined || data.produktivitas === null || data.produktivitas === '' || isNaN(prod) || prod <= 0) {
    errors.produktivitas = 'Estimasi produktivitas harus berupa angka valid';
  } else if (prod < 10 || prod > 200) {
    errors.produktivitas = 'Estimasi produktivitas harus di antara 10 hingga 200 Ton/Ha';
  }

  if (!data.tanggalTebang || typeof data.tanggalTebang !== 'string' || data.tanggalTebang.trim() === '') {
    errors.tanggalTebang = 'Tanggal rencana tebang wajib diisi';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
