# Pedoman Arsitektur Desain Proyek "bandungsari.com"

Sebagai seorang Vibe Coding Architect, pedoman ini dirancang untuk memastikan konsistensi dan integritas visual proyek "bandungsari.com" dengan menggabungkan estetika **Neobrutalism** dan prinsip fungsional dari **Raycast Design System**.

---

## 1. Visi Desain

Menciptakan antarmuka yang jujur, lugas, dan fungsional, memadukan ketegasan Neobrutalism dengan efisiensi dan kejelasan Raycast. Website ini akan menampilkan kekayaan budaya dan potensi Desa Bandungsari dengan presentasi yang modern namun berakar kuat pada otentisitas. Warna utama `#00d5ff` akan berfungsi sebagai aksen cerah di tengah palet monokromatik yang kuat.

---

## 2. Arsitektur Layout

*   **Grid System:** Gunakan pendekatan grid responsif (disarankan CSS Grid untuk layout utama, Flexbox untuk komponen). Layout harus terasa "kokoh" dengan blok-blok konten yang jelas.
*   **Kontainer Utama:** Konten utama harus berada dalam kontainer dengan `max-width` yang terdefinisi (misal: 1200px) dan terpusat (`margin: 0 auto;`). Namun, elemen Neobrutalism (misalnya, garis batas atau background blok) dapat meluas hingga lebar penuh viewport untuk efek dramatis.
*   **Hirarki Visual:** Pastikan hierarki informasi sangat jelas. Gunakan ukuran font yang kontras, ketebalan, dan ruang negatif untuk memandu mata pengguna.
*   **Asimetri & Ketegasan:** Izinkan sedikit asimetri atau ketidakseimbangan yang disengaja dalam penempatan elemen untuk mencerminkan nuansa Neobrutalism. Gunakan garis batas (border) yang tebal dan tajam sebagai pemisah visual yang kuat.
*   **Responsivitas:** Desain harus mobile-first. Prioritaskan keterbacaan dan fungsionalitas di layar kecil, kemudian tingkatkan pengalaman untuk layar yang lebih besar.

---

## 3. Komponen Inti

Semua komponen harus mencerminkan prinsip Neobrutalism dan Raycast.

### 3.1. Navigasi (`Header`)
*   **Struktur:** Header akan tetap statis atau *sticky* di bagian atas, dengan tinggi minimalis.
*   **Logo:** Logo `bandungsari.com` (disarankan text-based dengan font heading utama) di sisi kiri.
*   **Menu:** Navigasi utama di sisi kanan, menggunakan gaya `nb-link` atau `ray-nav-item` yang jelas, tanpa dekorasi berlebihan.
*   **Interaksi:** Hover dan fokus harus memberikan umpan balik yang cepat dan kontras (misal: perubahan warna latar belakang atau teks ke `--primary-color`).

### 3.2. Hero Section
*   **Visual:** Gambar atau video udara desa/gerbang pesantren yang beresolusi tinggi, memenuhi lebar penuh, atau diatur dalam blok dengan border tebal.
*   **Teks:** Judul utama (misal: "Bandungsari: Pusat Tradisi dan Inovasi") menggunakan font heading yang sangat besar dan tebal, dengan kontras warna yang tinggi. Teks berjalan (seperti berita tebu nasional) ditempatkan secara strategis, mungkin di bawah atau di atas judul utama dengan gaya monospaced.
*   **Call to Action (Opsional):** Jika ada, tombol harus menggunakan gaya `nb-button` yang solid dan kontras.

### 3.3. Kartu & Blok Konten (`Card`, `Block`)
*   **Estetika:** Menggunakan kelas `nb-block` atau `ray-card`. Blok-blok ini harus memiliki border solid yang jelas (misal: `1px solid var(--border-color)`), background yang kontras dengan latar belakang halaman, dan kemungkinan shadow tunggal yang tebal dan tajam (misal: `box-shadow: 4px 4px 0px var(--shadow-color);`).
*   **Struktur Internal:** Tata letak internal kartu harus bersih, menggunakan grid atau flexbox untuk menyusun gambar, judul, dan deskripsi dengan jelas.
*   **Contoh Penggunaan:** Untuk menampilkan data dusun, daftar pesantren, potensi ekonomi, atau berita terbaru.

### 3.4. Tombol (`Button`)
*   **Gaya:** Menggunakan kelas `nb-button`. Tombol harus memiliki latar belakang solid, teks kontras, dan border yang jelas.
*   **Sudut:** Tidak ada atau sangat minimal `border-radius` (mendekati 0px) untuk mempertahankan estetika Neobrutalism.
*   **Interaksi:** Efek hover/active harus langsung dan jelas, seperti perubahan warna background ke `--primary-color` atau pergeseran shadow singkat.

### 3.5. Formulir (`Form`)
*   **Input Fields:** Minimalis, dengan border jelas. Latar belakang input harus kontras dengan background formulir.
*   **Label:** Jelas dan terpisah dari input, menggunakan font body yang mudah dibaca.
*   **Error States:** Jelas dan tegas, mungkin dengan border merah yang tebal.

### 3.6. Tipografi

*   **Font Primer (Heading - `--font-heading`):**
    *   **Pilihan:** Inter Black, Montserrat Black, atau sejenisnya. Font sans-serif yang sangat tebal, kuat, dan lugas.
    *   **Penggunaan:** Judul utama (`h1`), sub-judul penting (`h2`). Dapat menggunakan `text-transform: uppercase;` untuk penekanan Neobrutalism.
*   **Font Sekunder (Body & UI - `--font-body`):**
    *   **Pilihan:** Inter Regular/Medium, Roboto Regular/Medium, atau sejenisnya. Sans-serif yang bersih, mudah dibaca, dan fungsional.
    *   **Penggunaan:** Paragraf, label, deskripsi komponen, item menu.
*   **Font Monospace (Data & Spesifik - `--font-mono`):**
    *   **Pilihan:** Fira Code, JetBrains Mono, Space Mono. Font monospaced yang jelas dan konsisten.
    *   **Penggunaan:** Kode, informasi teknis, tanggal, berita berjalan, atau elemen UI yang meniru antarmuka terminal (Raycast influence).

### 3.7. Ikonografi
*   Gunakan ikon minimalis, solid, dan monokromatik (misal: ikon dari Feather Icons, Lucide Icons, atau Heroicons dalam gaya solid). Hindari ikon berwarna-warni atau yang memiliki gradien.

---

## 4. Struktur Folder (Direktori Proyek)

```
bandungsari.com/
├── public/
│   ├── index.html
│   └── assets/
│       ├── images/      # Gambar, foto desa, ikon
│       ├── videos/      # Video hero section (jika ada)
│       └── fonts/       # File font kustom
├── src/
│   ├── scss/            # Folder untuk semua file SCSS/CSS
│   │   ├── base/        # Reset CSS, typography, variables
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _variables.scss # Custom properties dari style.md
│   │   ├── components/  # Styling untuk komponen individu (buttons, cards, forms)
│   │   │   ├── _button.scss
│   │   │   ├── _card.scss
│   │   │   ├── _form.scss
│   │   │   └── ...
│   │   ├── layout/      # Styling untuk struktur layout (header, footer, grid)
│   │   │   ├── _header.scss
│   │   │   ├── _footer.scss
│   │   │   ├── _grid.scss
│   │   │   └── ...
│   │   ├── pages/       # Styling spesifik per halaman (jika sangat berbeda)
│   │   │   ├── _home.scss
│   │   │   └── ...
│   │   ├── utilities/   # Utility classes dari style.md
│   │   │   └── _utilities.scss
│   │   └── main.scss    # File utama yang mengimpor semua bagian
│   └── js/              # File JavaScript
│       ├── main.js
│       └── components/  # JS untuk fungsionalitas komponen interaktif
│           ├── nav.js
│           └── ...
└── README.md
```

---

## 5. Panduan Pengalaman Pengguna (UX)

Mengintegrasikan prinsip UX dari Raycast ke dalam kerangka Neobrutalism:

*   **Clarity over Ornamentation:** Setiap elemen UI harus memiliki tujuan yang jelas. Hindari efek visual yang tidak menambah nilai informatif.
*   **High Contrast:** Pastikan semua teks dan elemen interaktif memiliki kontras warna yang memadai terhadap latar belakangnya untuk keterbacaan optimal, sesuai standar WCAG AAA.
*   **Direct Feedback:** Pengguna harus segera mengetahui hasil dari setiap interaksi mereka. Contoh: tombol yang diklik harus menunjukkan status "loading" atau "sukses" dengan jelas.
*   **Efficiency & Kecepatan:** Website harus responsif dan cepat. Minimalkan transisi dan animasi yang memperlambat. Fokus pada performa.
*   **Authenticity:** Sajikan informasi tentang Bandungsari secara langsung dan tanpa filter. Desain Neobrutalism harus mendukung "kejujuran" ini.
*   **Aksesibilitas:** Selain kontras warna, pastikan navigasi keyboard berfungsi, elemen fokus terlihat jelas, dan penggunaan ARIA attributes yang tepat untuk membantu pengguna assistive technology.
*   **State Management:** Setiap komponen interaktif (tombol, input) harus memiliki state yang jelas: default, hover, focus, active, disabled.

---

## 6. Integrasi Konten (Sitemap)

Gunakan struktur sitemap yang telah disediakan sebagai panduan untuk merancang bagian-bagian utama website:

*   **HOME:** (Hero banner: Foto udara desa/gerbang pesantren, teks berjalan berita tebu nasional).
*   **PROFIL DESA:** (Sejarah Desa, Visi Misi, Struktur Pemerintahan, Data 7 Dusun - dapat ditampilkan sebagai kartu atau daftar dengan efek Neobrutalism).
*   **BANDUNGSARI RELIGI:** (Sejarah PP Al-Ma'ruf, Daftar Pesantren Aktif - dalam format `ray-card` atau `nb-block`, Agenda Pengajian - list atau kalender minimalis).
*   **POTENSI & KULTUR:** (Agrikultur Tebu & Kedelai - visualisasi data atau blok informasi, Tradisi Sedekah Bumi/Barikan - dengan foto dan deskripsi, Kuliner Becek Kebo - kartu produk/informasi).
*   **KONTAK / LAYANAN:** (Nomor penting, peta lokasi - iframe Google Maps dengan border Neobrutalism, formulir hubungi admin desa - sesuai `nb-input` dan `nb-button`).

---

**CATATAN PENTING:** Selalu prioritaskan kepatuhan terhadap pedoman `design.md` dan `style.md`. Inisiatif di luar pedoman ini harus dikonfirmasi.

---