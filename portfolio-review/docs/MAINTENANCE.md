# Buku Panduan Mengelola Portfolio Eriel

Panduan ini menjelaskan file yang perlu diedit, folder tempat menyimpan gambar,
cara menghubungkan gambar ke isi halaman, cara menambah project, dan cara
memperbarui situs yang sudah tayang.

Semua lokasi di bawah dihitung dari folder utama project:

```text
C:\Eriel\Codex_Erl\portfolio-review
```

Jangan edit file di dalam `.next/` atau `node_modules/`. Keduanya dibuat otomatis
oleh aplikasi.

---

## 1. Peta cepat: bagian situs dan file sumbernya

| Bagian situs | File data atau tulisan | Komponen yang menampilkannya |
|---|---|---|
| Foto dan pengenalan utama | `content/site.ts` | `components/home/Hero.tsx` |
| About | `components/home/AboutSection.tsx` | File itu sendiri |
| Experience dan foto pengalaman | `content/experience.ts` | `components/home/ExperienceSection.tsx` |
| Pendidikan, bootcamp, sertifikat | `content/education.ts` | `components/home/EducationSection.tsx` |
| Skills, kategori, bahasa | `content/skills.ts` | `components/home/SkillsSection.tsx` |
| Project cards dan copy bahasa Inggris | `content/projects.ts` | `components/projects/ProjectCard.tsx` dan `components/case-study/` |
| Terjemahan project ke Bahasa Indonesia | `content/project-translations.ts` | Dipilih otomatis berdasarkan slug project |
| Kontak, WhatsApp, navigasi, footer | `content/site.ts` | `components/home/ContactSection.tsx`, `components/layout/` |
| Judul tab browser dan metadata situs | `app/layout.tsx` | Metadata Next.js |
| Warna dan tampilan umum | `app/globals.css` | Dipakai di semua halaman |

Untuk perubahan isi, biasanya edit `content/*.ts`. Komponen hanya perlu diedit
kalau ingin mengubah susunan atau cara tampilnya.

### Bahasa Inggris dan Bahasa Indonesia

Pengunjung bisa mengganti bahasa melalui tombol **EN / ID** di navigasi.
Pilihan bahasa disimpan di browser pengunjung. Teks utama situs tersedia dalam
dua bahasa; untuk project, isi Inggris ada di `content/projects.ts` dan
terjemahan Indonesia berada di `content/project-translations.ts` dengan `slug`
yang sama. Saat membuat project baru, isi semua kolom `TODO` pada kedua file
sebelum mengubah `status` menjadi `published`.

---

## 2. Cara kerja foto dan path gambar

Semua gambar situs disimpan di dalam `public/`. Contohnya:

```text
File sebenarnya: public/images/experience/event-2027.jpg
Path yang ditulis dalam data: /images/experience/event-2027.jpg
```

Jangan tulis `public/` di dalam `src`. Folder `public` otomatis menjadi akar
alamat situs. Karena itu, file `public/images/certs/toefl.png` dipanggil sebagai
`/images/certs/toefl.png`.

Nama file dan huruf besar/kecil harus sama persis. Hal ini penting karena server
Vercel membedakan huruf besar dan kecil. Hindari nama file dengan spasi; gunakan
nama seperti `event-brand-2027.jpg`.

### Format dan ukuran yang disarankan

- Foto: `.jpg` atau `.webp`.
- Grafik, logo, atau gambar transparan: `.png` atau `.svg`.
- Gunakan gambar yang cukup tajam, tetapi kompres foto besar sebelum menaruhnya
  ke project agar situs cepat dibuka di ponsel.
- Isi `alt` dengan deskripsi singkat tentang isi gambar. Alt membantu pengguna
  pembaca layar dan menjadi keterangan gambar jika gambar gagal dimuat.

Jika gambar experience atau sertifikat tidak ditemukan, situs dapat
menyembunyikan gambar tersebut. Jadi, bila gambar tidak muncul, pertama cek
nama file dan path. Foto profil dimuat langsung oleh Hero; pastikan file yang
dirujuk benar-benar tersedia.

---

## 3. Mengganti foto profil

### Cara paling mudah: pertahankan nama file

1. Buka `public/images/profile/`.
2. Cadangkan foto lama jika masih ingin menyimpannya.
3. Ganti foto dengan foto baru, tetapi beri nama persis `eriel.jpeg`.
4. Preview situs. Tidak perlu mengganti kode karena path-nya tetap.

Hero memanggil path foto lewat `site.profileImage` di `content/site.ts`;
komponen yang menampilkan foto adalah `components/home/Hero.tsx` (baris sekitar
82). Foto profil ditampilkan dalam bingkai vertikal dan dipotong mengikuti
area foto, jadi gunakan foto portrait dengan posisi wajah yang sesuai.

### Jika ingin menggunakan nama file berbeda

Simpan file baru di `public/images/profile/`, lalu ubah dua nilai di
`content/site.ts`:

```ts
profileImage: "/images/profile/eriel-profile-baru.jpg",
profileAlt: "Portrait of Eriel wearing a dark suit",
```

Nama di `profileImage` harus sama persis dengan nama file yang disimpan.

---

## 4. Mengganti atau menambah foto Experience

Data experience berada di `content/experience.ts`. Setiap pekerjaan atau
organisasi adalah satu objek di dalam array `experience`. Setiap objek punya
`organization`, `role`, `period`, `bullets`, dan daftar foto opsional `images`.

### Mengganti foto yang sudah ada

Contoh entry Tennis Circle menggunakan file
`public/images/experience/tennis-circle.jpeg`. Untuk mengganti fotonya dengan
tetap memakai path yang sama:

1. Salin foto baru ke `public/images/experience/`.
2. Beri nama `tennis-circle.jpeg` untuk menggantikan foto lama.
3. Preview situs. Tidak perlu mengganti kode karena path-nya tetap.

### Mengganti nama file foto

Misalnya foto baru bernama `tennis-event-2027.jpg`. Simpan di
`public/images/experience/`, lalu ubah objek Experience terkait di
`content/experience.ts`:

```ts
images: [
  {
    src: "/images/experience/tennis-event-2027.jpg",
    alt: "Tennis Circle members taking part in a 2027 event",
  },
],
```

Inilah hubungan antara file dan tampilan: `content/experience.ts` menyimpan
path di `images[].src`; `components/home/ExperienceSection.tsx` membaca
`entry.images` (sekitar baris 13), memastikan file ada, lalu menampilkan
gambarnya.

### Menambah beberapa foto untuk experience yang sama

Tambahkan setiap foto sebagai objek baru di dalam `images`. Contoh tiga foto:

```ts
images: [
  {
    src: "/images/experience/tennis-training.jpg",
    alt: "Members practicing on the tennis court",
  },
  {
    src: "/images/experience/tennis-tournament.jpg",
    alt: "Players competing in a Tennis Circle tournament",
  },
  {
    src: "/images/experience/brand-event.jpg",
    alt: "Brand partner event organized with Tennis Circle",
  },
],
```

Pastikan ketiga file benar-benar diletakkan di
`public/images/experience/`. Di halaman, satu gambar ditampilkan sebagai satu
foto lebar. Jika ada dua foto atau lebih, `components/home/ExperienceSection.tsx`
menyerahkan daftar gambar ke `components/home/ExperienceGallery.tsx`. Slider
membalik kartu secara 3D, berpindah otomatis setiap 5 detik, dan mengulang dari
foto pertama setelah foto terakhir. Foto memakai `object-contain`, sehingga
keseluruhan gambar terlihat tanpa dipotong. Tombol Previous/Next berpindah
manual; Pause/Play mengontrol putar otomatis. Putar otomatis berhenti sementara
saat pointer berada di galeri atau saat galeri mendapat fokus keyboard.

Untuk menghapus foto dari halaman, hapus objeknya dari daftar `images`. Untuk
menghapus seluruh foto dari suatu experience, hapus properti `images` dari
entry tersebut. File fisik yang tidak lagi dirujuk boleh dihapus dari folder.

### Menambah experience baru

Di `content/experience.ts`, tambahkan objek baru ke array `experience`:

```ts
{
  organization: "Nama Organisasi",
  role: "Nama Peran",
  period: "Jan 2027 – Jun 2027",
  images: [
    {
      src: "/images/experience/nama-organisasi-2027.jpg",
      alt: "Describe what is visible in the photo",
    },
  ],
  bullets: [
    "Tindakan atau tanggung jawab utama yang kamu lakukan.",
    "Hasil atau cakupan kerja, gunakan angka hanya jika dapat dibuktikan.",
  ],
},
```

Foto tidak wajib. Kalau ingin galeri, tambahkan lebih banyak objek di `images`.
Gunakan koma setelah setiap objek, kecuali objek terakhir dalam array.

### Menambahkan tombol tautan pada experience

Objek experience dapat memiliki daftar `links`. Tombol akan muncul di bawah
bullet deskripsi. Contoh untuk tombol nilai magang Kemenag:

```ts
links: [
  {
    label: "View Internship Evaluation",
    href: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
  },
],
```

Ganti URL contoh dengan tautan Drive milikmu. `ExperienceSection.tsx` membaca
`entry.links` dan menampilkan setiap item sebagai tombol eksternal yang dibuka
di tab baru. Pastikan file/folder Drive memiliki izin akses yang sesuai.

---

## 5. Mengubah tulisan utama dan About

### Hero atau bagian paling atas

Edit `content/site.ts`:

- `eyebrow`: teks kecil di atas nama, misalnya status lulusan/IPK.
- `positioning`: headline bidang atau keahlian.
- `supportingStatement`: paragraf pengenalan.
- `primaryCta` dan `secondaryCta`: tombol utama.
- `snapshot`: kartu ringkasan bukti atau pencapaian di bawah Hero.

Komponen yang memanggil data tersebut adalah `components/home/Hero.tsx`. Ubah
teks di `content/site.ts`; jangan mengetik salinan teks yang sama di komponen.

### About

Tulisan About saat ini ditulis langsung di
`components/home/AboutSection.tsx`. Edit paragraf di dalam elemen `<p>` untuk
mengubah isinya. Ini berbeda dari Hero: sumber tulisan About memang berada
langsung di komponen, bukan di `content/site.ts`.

Gunakan fakta yang bisa dibuktikan, seperti alat yang benar-benar dipakai,
jumlah anggota yang dilayani, hasil proyek, atau lingkup tanggung jawab.

### Teks kontak

Alamat dan tautan sosial disimpan di bagian `social` pada `content/site.ts`:

```ts
social: {
  github: "https://github.com/username/",
  linkedin: "https://www.linkedin.com/in/username/",
  email: "nama@email.com",
  whatsapp: "https://wa.me/6281234567890",
},
```

Nomor WhatsApp di URL memakai kode negara dan angka saja: tanpa `+`, spasi,
atau tanda hubung. Ikon WhatsApp di Hero, navbar, kontak, dan footer membaca
`site.social.whatsapp`; jadi mengganti URL di satu tempat memperbarui semua
tombol tersebut.

---

## 6. Menambah atau mengubah pendidikan dan sertifikat

Edit `content/education.ts`:

- Pendidikan universitas: objek `education`.
- Bootcamp atau kursus: tambahkan objek ke `nonFormalEducation`.
- Sertifikat yang berdiri sendiri: tambahkan objek ke `certifications`.

Untuk sertifikat bergambar, taruh file di `public/images/certs/`, lalu tulis
path-nya seperti `/images/certs/nama-sertifikat.png`. Tambahkan `imageAlt`,
`issuer`, `period`, `detail`, dan `href` bila tersedia. `href` dapat berupa
tautan verifikasi resmi atau PDF yang boleh dibagikan.

Di kartu nonformal, `summary` menjelaskan program dan `learningAreas` adalah
daftar area belajar. Di kartu sertifikat biasa, `detail` dapat memuat skor atau
hasil. Komponen `components/home/EducationSection.tsx` membaca kedua array dan
membuat kartunya otomatis. Contoh data siap salin ada di
`docs/ADDING-EDUCATION.md`.

Jangan memasukkan sertifikat yang sama sekaligus ke `nonFormalEducation` dan
`certifications`, agar tidak tampil dua kali.

---

## 7. Mengubah skills dan logo skill

Edit `content/skills.ts`:

- `skillGroups`: kelompok dan label skill yang tampil dalam daftar.
- `marqueeSkills`: baris logo skill yang bergerak di atas daftar.

Kalau hanya menambah label skill, tambahkan ke `chips` di kelompok yang cocok.
Kalau ingin menambah logo, simpan file di `public/images/skills/` dan tambahkan
objek ke `marqueeSkills`:

```ts
{ label: "Python", icon: "/images/skills/python.png" },
```

Project yang memakai skill mencantumkannya di `techTags` dalam
`content/projects.ts`. Bagian "Used in" dihitung otomatis dari tag tersebut;
jangan mengetik relasi project secara manual di komponen skills.

---

## 8. Membuat atau memperbarui project

### Membuat kerangka otomatis

Buka PowerShell di folder utama project. Contoh:

```powershell
npm run new-project -- sales-forecast "Sales Forecasting Dashboard"
```

Pakai slug unik dengan huruf kecil, angka, dan tanda hubung. Perintah ini:

1. Menambahkan kerangka objek ke `content/projects.ts` dengan `status: "draft"`.
2. Membuat folder `public/images/projects/sales-forecast/`.
3. Membuat kerangka copy Bahasa Indonesia di `content/project-translations.ts`.

### Mengisi project

Buka entry baru di `content/projects.ts` dan `content/project-translations.ts`,
lalu ganti semua teks `TODO` di kedua bahasa. Slug di kedua file harus sama.
Jika terjemahan belum diisi, teks Inggris akan dipakai sementara.

- `title`: nama yang tampil.
- `cardDescription`: satu kalimat sederhana untuk kartu.
- `resultLine`: hasil singkat, tulis hanya bila sudah terverifikasi.
- `categories`: pilih `"data-bi"`, `"machine-learning"`, `"web-it"`, dan/atau
  `"academic"`.
- `techTags`: alat yang benar-benar dipakai. Ini juga memperbarui bukti skill.
- `links`: masukkan GitHub, demo, atau Figma yang memang dapat dibuka publik.
- `recruiterSummary`, `technicalSummary`: ringkasan profesional dan teknis.
- `caseStudy`: cerita masalah, pekerjaan, hasil, metode, keterbatasan, dan gambar.
- `seo`: judul dan deskripsi halaman project untuk hasil pencarian (saat ini Inggris).
- `thumbnail`: gambar kecil untuk kartu project.
- `featured: true`: membuat project eligible tampil di pilihan project Home.
- `status: "published"`: menampilkan project di situs.

### Menambah thumbnail dan gambar dalam studi kasus

Misalnya simpan thumbnail di:

```text
public/images/projects/sales-forecast/thumb.png
```

Lalu pada entry project:

```ts
thumbnail: "/images/projects/sales-forecast/thumb.png",
thumbnailAlt: "Sales forecast dashboard showing monthly sales trends",
```

Gambar thumbnail dipanggil kartu project melalui
`components/projects/ProjectCard.tsx` (sekitar baris 38–44). Ia tampil utuh
dengan ruang sesuai rasio kartu.

Untuk gambar tambahan pada halaman studi kasus, tambah ke `caseStudy`:

```ts
visualEvidence: [
  {
    src: "/images/projects/sales-forecast/overview.png",
    alt: "Overview of the sales forecast dashboard",
    caption: "Dashboard overview showing actual and forecast sales.",
  },
  {
    src: "/images/projects/sales-forecast/model-result.png",
    alt: "Forecast model evaluation chart",
    caption: "Model evaluation on the held-out test period.",
  },
],
```

Masing-masing file harus disimpan di folder project yang sama. Gambar bukti
ditampilkan di halaman detail melalui `components/case-study/CaseStudyParts.tsx`.

### Draft, published, dan private

- `"draft"`: hanya untuk persiapan; tidak tampil di situs publik.
- `"published"`: project publik dengan studi kasus lengkap.
- `"private"`: menampilkan ringkasan terbatas. Gunakan hanya bila memang perlu
  memberi gambaran proyek tanpa membuka rincian privat.

Jangan masukkan data pelanggan, data pribadi, file rahasia, atau klaim hasil
yang tidak bisa dibuktikan ke project publik.

Panduan project lengkap tersedia di `docs/ADDING-A-PROJECT.md`.

---

## 9. Metadata, alamat situs, dan tampilan

- Judul tab dan deskripsi umum situs: `app/layout.tsx`.
- Judul dan deskripsi per halaman project: `seo` pada entry project di
  `content/projects.ts`.
- Alamat domain publik: variabel `NEXT_PUBLIC_SITE_URL`, jika memakai domain
  sendiri. Contoh variabel ada di `.env.example`.
- Warna, ukuran, jarak, tema: `app/globals.css`.

Jangan commit rahasia atau token akses. File `.env*` diabaikan oleh Git; isi
variabel deployment di pengaturan project Vercel.

---

## 10. Preview sebelum mengunggah

Di PowerShell pada folder utama project:

```powershell
npm run dev
```

Buka `http://localhost:3000`. Periksa halaman utama, halaman project, gambar,
tautan, desktop, dan tampilan layar sempit. Untuk menghentikan server lokal,
tekan `Ctrl+C` di PowerShell.

Sebelum push, jalankan:

```powershell
npm run lint
npm run build
```

Jika perintah gagal, baca pesan error. Biasanya penyebabnya tanda kutip atau
koma yang hilang, path gambar salah, atau field wajib project belum diisi.

---

## 11. Mengunggah perubahan ke GitHub dan Vercel

Setelah repository tersambung untuk pertama kali, gunakan:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Tunggu deployment selesai di Vercel, lalu buka alamat situs publik dan cek
perubahan. Push ke branch yang terhubung akan memicu deployment otomatis.
Panduan setup GitHub pertama kali ada di `docs/PUBLISH.md`.

---

## 12. Daftar periksa singkat

Sebelum menyatakan update selesai, cek:

- [ ] Teks, tanggal, skor, dan angka sesuai sumber.
- [ ] Semua gambar yang disebut di data ada di folder `public/images/`.
- [ ] Path dimulai `/images/` dan nama file cocok persis.
- [ ] Setiap gambar punya `alt` yang menjelaskan isinya.
- [ ] Tautan publik bisa dibuka dan tidak menuju placeholder.
- [ ] Preview desktop dan ponsel sudah dilihat.
- [ ] `npm run lint` dan `npm run build` berhasil.
- [ ] Setelah push, deployment Vercel selesai dan situs live sudah diperiksa.
