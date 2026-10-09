/**
 * kalkulasi-tebu.test.js
 * ========================================================
 * Unit test otomatis untuk logika bisnis & aturan angka Tebu.Co
 * Menggunakan Node.js native test runner (node:test & node:assert/strict).
 *
 * Menjalankan pengujian:
 *   node --test tes/kalkulasi-tebu.test.js
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  hitungTotalTonase,
  hitungKebutuhanTruk,
  hitungEstimasiGula,
  hitungProyeksiNilai,
  hitungSemuaMetrik,
  validasiInputPanen,
  KAPASITAS_TRUK_DEFAULT,
  RENDEMEN_STANDAR,
  HARGA_GULA_PER_KG
} from '../src/utils/kalkulasi.js';

test('U01: Alur Normal - Kasus Nyata Persona Pak Yayan (3.5 Ha, 80 Ton/Ha)', () => {
  const luas = 3.5;
  const prod = 80;

  const totalTonase = hitungTotalTonase(luas, prod);
  assert.equal(totalTonase, 280.00, 'Total tonase harus tepat 280.00 Ton');

  const jumlahTruk = hitungKebutuhanTruk(totalTonase);
  assert.equal(jumlahTruk, 35, 'Kebutuhan truk harus tepat 35 unit (280 / 8)');

  const estimasiGula = hitungEstimasiGula(totalTonase);
  assert.equal(estimasiGula, 22400, 'Estimasi gula harus 22.400 Kg pada rendemen 8.0%');

  const proyeksiNilai = hitungProyeksiNilai(estimasiGula);
  assert.equal(proyeksiNilai, 324800000, 'Proyeksi nilai harus Rp 324.800.000 (acuan Rp 14.500/kg)');
});

test('U02: Input Salah - Luas lahan kosong, nol, atau negatif harus ditolak', () => {
  // Cek via validator form
  const inputNegatif = {
    namaPetak: 'Petak Barat',
    luasLahan: -1.5,
    produktivitas: 75,
    tanggalTebang: '2026-10-22'
  };
  const hasilNegatif = validasiInputPanen(inputNegatif);
  assert.equal(hasilNegatif.valid, false, 'Input negatif harus tidak valid');
  assert.match(hasilNegatif.errors.luasLahan, /lebih besar dari 0/i);

  const inputNol = {
    namaPetak: 'Petak Barat',
    luasLahan: 0,
    produktivitas: 75,
    tanggalTebang: '2026-10-22'
  };
  const hasilNol = validasiInputPanen(inputNol);
  assert.equal(hasilNol.valid, false, 'Luas nol harus tidak valid');

  // Cek langsung pada fungsi kalkulasi
  assert.throws(() => {
    hitungTotalTonase(-2, 80);
  }, /lebih besar dari 0/i);
});

test('U03: Input Salah - Tanggal rencana tebang kosong harus ditolak', () => {
  const inputTanpaTanggal = {
    namaPetak: 'Petak Timur',
    luasLahan: 2.0,
    produktivitas: 70,
    tanggalTebang: ''
  };
  const hasil = validasiInputPanen(inputTanpaTanggal);
  assert.equal(hasil.valid, false, 'Form tanpa tanggal tebang harus ditolak');
  assert.match(hasil.errors.tanggalTebang, /wajib diisi/i);
});

test('U04: Nilai Batas Minimum - Luas 0.1 Ha dan Produktivitas 10 Ton/Ha', () => {
  const luas = 0.1;
  const prod = 10;

  const totalTonase = hitungTotalTonase(luas, prod);
  assert.equal(totalTonase, 1.00, 'Total tonase minimum harus 1.00 Ton');

  const jumlahTruk = hitungKebutuhanTruk(totalTonase);
  assert.equal(jumlahTruk, 1, 'Muatan 1 ton tetap membutuhkan minimal 1 truk');

  const estimasiGula = hitungEstimasiGula(totalTonase);
  assert.equal(estimasiGula, 80, 'Estimasi gula harus 80 Kg');

  const proyeksiNilai = hitungProyeksiNilai(estimasiGula);
  assert.equal(proyeksiNilai, 1160000, 'Proyeksi nilai minimum harus Rp 1.160.000');
});

test('U05: Nilai Batas Pembulatan Armada - Sisa muatan desimal dibulatkan ke atas', () => {
  // Kasus: 65 Ton / 8 = 8.125 -> dibulatkan ke atas menjadi 9 Truk
  const totalTonase = 65.0;
  const jumlahTruk = hitungKebutuhanTruk(totalTonase);
  assert.equal(jumlahTruk, 9, '65 ton / 8 harus dibulatkan ke atas menjadi 9 truk');

  // Kasus tepat batas kelipatan: 16 Ton / 8 = tepat 2 Truk
  assert.equal(hitungKebutuhanTruk(16), 2, '16 ton / 8 harus tepat 2 truk');

  // Kasus kelebihan sedikit: 16.1 Ton / 8 = 3 Truk
  assert.equal(hitungKebutuhanTruk(16.1), 3, '16.1 ton / 8 harus dibulatkan menjadi 3 truk');
});

test('U06: Fungsi Gabungan - hitungSemuaMetrik mengembalikan seluruh metrik dengan benar', () => {
  const hasil = hitungSemuaMetrik(2.0, 80);
  assert.deepEqual(hasil, {
    totalTonase: 160.00,
    jumlahTruk: 20,
    estimasiGulaKg: 12800,
    proyeksiNilaiRp: 185600000
  });
});
