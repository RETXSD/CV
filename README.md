# CV

Portofolio web Cornelius Adrian Putra.

Situs CV satu halaman dengan Vite, React, dan Tailwind CSS v4.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Build produksi memakai `npm run build`; pratinjau hasil build memakai `npm run preview`. `npm run lint` memeriksa kode dan `npm run format` merapikan berkas proyek.

## Mengubah isi CV

Semua isi halaman berada di `src/data/content.js`. Perbarui teks dan daftar di sana. Nilai kontak atau proyek yang belum tersedia dibiarkan `null` atau array kosong agar tidak ditampilkan. File PDF ada di `public/cv/`; ubah `cvFile` hanya jika nama file di folder itu sesuai.

## Deploy ke GitHub Pages

Build mendeteksi `GITHUB_REPOSITORY` saat dijalankan di GitHub Actions dan mengatur base URL mengikuti nama repo. Secara lokal base URL adalah `/`. Unggah isi `dist/` sebagai artifact Pages.

## Pilihan UI dan dependensi

BoldKit dipilih sebagai library utama untuk pola komponen neubrutalism. Lisensi MIT, dukungan React 19, Tailwind v4, dan theming berbasis CSS variable diverifikasi pada 17 November 2026. Struktur varian Button diadaptasi dari [registry Button BoldKit](https://boldkit.dev/r/button.json); Card dan Badge dibuat lokal dengan API singkat dan token brief. Tidak ada runtime library BoldKit atau gaya dark mode.

- `@tailwindcss/vite`: plugin resmi agar Tailwind CSS v4 berjalan di Vite.
- `@vitejs/plugin-react`: transform JSX dan Fast Refresh untuk aplikasi React di Vite.
- `class-variance-authority`: varian Button dan Badge dengan API yang tetap mudah dibaca.
- `clsx`: menyusun class kondisional untuk helper `cn`.
- `tailwind-merge`: menggabungkan utility class tanpa konflik.
- `@fontsource/pixelify-sans` dan `@fontsource/press-start-2p`: self-host font pixel yang diminta.
- `eslint-plugin-react-hooks` dan `eslint-plugin-react-refresh`: aturan hooks React dan dukungan refresh Vite.
- `eslint-plugin-react`: memastikan ESLint mengenali komponen yang digunakan sebagai tag JSX.
- `@eslint/js` dan `globals`: konfigurasi ESLint flat dan global browser/Node.
- `prettier` dan `prettier-plugin-tailwindcss`: format kode dan urutan utility Tailwind.

## Peta folder

- `public/`: favicon, gambar Open Graph, dan PDF CV.
- `src/data/content.js`: semua data dan teks CV.
- `src/styles/globals.css`: token warna, tipografi, bentuk, bayangan, dan gerak.
- `src/styles/base.css`, `layout.css`, `motion.css`: aturan dasar, tata letak, dan animasi.
- `src/components/ui/`: Button, Card, Badge, ExternalLink, dan Section.
- `src/components/layout/`: navbar dan footer.
- `src/sections/`: satu komponen per bagian halaman.
- `src/assets/`: foto asli dan versi pixel.
