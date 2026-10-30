# Push portfolio ke GitHub dan deploy ke Vercel

Repository GitHub menyimpan situs di dalam folder `portfolio-review`. Jalankan
perintah Git dari folder induk repository, bukan dari dalam folder situs.

## Push perubahan dari komputer

Buka PowerShell, lalu jalankan:

```powershell
cd C:\Eriel\Codex_Erl
git status
git add -A
git commit -m "Update portfolio"
git push origin main
```

`git status` menampilkan file yang akan berubah. `.gitignore` di folder ini
mengabaikan `output/`, `outputs/`, `tmp/`, dan `work/`; `.gitignore` di dalam
`portfolio-review/` mengabaikan file build dan dependency seperti `.next/` dan
`node_modules/`.

Kalau Git menjawab bahwa remote memiliki perubahan baru, ambil dulu perubahan
GitHub lalu coba push lagi:

```powershell
git pull --rebase origin main
git push origin main
```

Jika muncul pesan konflik, jangan hapus file secara acak. Kirimkan teks error
untuk ditinjau sebelum melanjutkan.

## Hubungkan atau periksa Vercel

1. Di Vercel, buka project portfolio lalu **Settings → Git** dan pastikan
   repository `erielsdewantoro/eriel-portfolio` terhubung.
2. Buka **Settings → Build and Development Settings** dan set **Root
   Directory** ke `portfolio-review`.
3. Framework harus terdeteksi sebagai **Next.js**. Build command dan output
   directory gunakan nilai bawaan Vercel.
4. Jalankan push di atas. Vercel akan membuat deployment dari branch `main`.
   Setelah status deployment **Ready**, buka URL `*.vercel.app` untuk
   memastikan hasilnya.

## Domain sendiri (opsional)

Tambahkan domain di **Settings → Domains**, ikuti petunjuk DNS Vercel, lalu
tambahkan `NEXT_PUBLIC_SITE_URL=https://domain-kamu` pada **Settings →
Environment Variables** dan lakukan redeploy. Contoh variabel tersedia di
`.env.example`.

GitHub menyimpan source code; tautan Vercel adalah situs portfolio yang dapat
dibuka dan dibagikan. GitHub Pages tidak cocok untuk konfigurasi Next.js ini.
