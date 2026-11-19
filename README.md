# Portofolio Web — Cornelius Adrian Putra

Website CV dan portofolio satu halaman untuk memperkenalkan Cornelius Adrian Putra, mahasiswa Sistem Informasi dan Software Engineering. Situs ini merangkum latar belakang, pendidikan, proyek, keterampilan, dan informasi kontak agar calon kolaborator atau perekrut dapat mengenal pemiliknya dengan cepat.

## Isi situs

- **Beranda:** perkenalan singkat dan foto profil dengan efek pixel yang bisa dijelajahi menggunakan mouse atau sentuhan.
- **Tentang:** ringkasan profil dan bidang yang diminati.
- **Pendidikan:** riwayat studi dan IPK.
- **Proyek:** sistem admin RBAC, task manager Java, monitoring IoT, dan Nihonggo—aplikasi iOS untuk belajar bahasa Jepang.
- **Keterampilan:** bahasa pemrograman, tools, kemampuan personal, dan bahasa.
- **Kontak:** cara menghubungi pemilik portofolio.

Antarmuka menggunakan tema pixel art bernuansa retro, tata letak responsif, pilihan Bahasa Indonesia dan Inggris, serta animasi dekoratif daun pixel. Bagian foto profil mendukung interaksi hover di perangkat dengan mouse dan sentuhan di ponsel.

## Teknologi

- **React 19** untuk komponen dan antarmuka.
- **Vite 6** untuk server pengembangan dan build produksi.
- **Tailwind CSS v4** serta CSS proyek untuk tata letak, tema, dan animasi.
- **Vercel Web Analytics** untuk menghitung kunjungan dan page views, serta **Speed Insights** untuk memantau metrik performa web setelah keduanya diaktifkan di proyek Vercel.

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang, lalu jalankan dari folder proyek:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal (biasanya `http://localhost:5173`).

Perintah lain:

| Perintah | Kegunaan |
| --- | --- |
| `npm run build` | Membuat build produksi ke folder `dist/`. |
| `npm run preview` | Menjalankan pratinjau lokal dari build produksi. |
| `npm run lint` | Memeriksa kode dengan ESLint. |
| `npm run format` | Merapikan format berkas proyek dengan Prettier. |

## Mengubah isi portofolio

- Ubah profil, pendidikan, proyek, keterampilan, dan kontak di [`src/data/content.js`](src/data/content.js).
- Ubah teks terjemahan bahasa Inggris di [`src/data/content-translations.js`](src/data/content-translations.js).
- Label antarmuka dan pesan bahasa berada di [`src/lib/locale.jsx`](src/lib/locale.jsx).
- Foto, ikon, dan dekorasi visual berada di `src/assets/`.
- File CV PDF disimpan di `public/cv/`. Pastikan nilai `cvFile` di `src/data/content.js` cocok dengan nama file di folder tersebut.

Nilai kontak atau tautan yang belum tersedia bisa dibiarkan `null`, dan daftar yang belum memiliki isi bisa dibiarkan kosong supaya elemen terkait tidak ditampilkan.

## Deploy

### Vercel

Hubungkan repository GitHub ini ke Vercel dan deploy sebagai proyek Vite. Jika repository sudah terhubung, push ke branch deployment (biasanya `main`) akan membuat deployment baru.

Komponen Vercel Analytics dan Speed Insights sudah dipasang di aplikasi. Untuk mulai mengumpulkan data, buka proyek di dashboard Vercel, lalu aktifkan **Web Analytics** dan **Speed Insights**. Data kunjungan dan metrik performa akan muncul setelah deployment aktif dan situs dikunjungi.

### GitHub Pages

Konfigurasi Vite menyesuaikan base URL dengan nama repository saat build dijalankan di GitHub Actions. Build lokal menggunakan `/` sebagai base URL. Untuk menerbitkan lewat GitHub Pages, build proyek lalu unggah isi folder `dist/` sebagai artifact Pages.

## Struktur folder

```text
public/              Aset publik, favicon, gambar Open Graph, dan file CV
src/
  assets/            Foto, ikon, audio, dan gambar dekoratif
  components/        Komponen antarmuka dan layout yang digunakan ulang
  data/              Isi CV dan terjemahan
  lib/               Helper, bahasa, dan efek pixel
  sections/          Bagian-bagian halaman portofolio
  styles/            Gaya dasar, layout, tema, dan animasi
```
