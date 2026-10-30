export type ExperienceEntry = {
  organization: string;
  role: string;
  roleId?: string;
  period: string;
  bullets: string[];
  bulletsId?: string[];
  /** Photos under /public. One photo stays as a single feature image; multiple photos become a gallery. */
  images?: { src: string; alt: string }[];
  /** Optional external links shown as buttons below this experience. */
  links?: { label: string; labelId?: string; href: string }[];
  highlight?: {
    label: string;
    lines: string[];
  };
};

export const experience: ExperienceEntry[] = [
  {
    organization: "Tennis Circle Jakarta",
    role: "Community Operations & Member Relations",
    roleId: "Operasional Komunitas & Hubungan Anggota",
    period: "Jul 2024 – Nov 2025 · Mar – Aug 2026",
    images: [
      {
        src: "/images/experience/tennis-circle.jpeg",
        alt: "Tennis Circle Jakarta members posing together on a tennis court at sunset",
      },
      {
        src: "/images/experience/tennis-circle2.jpeg",
        alt: "Brand partner event organized with Tennis Circle",
      },
    ],
    bullets: [
      "Coordinated weekly tennis activities across several courts for about 150 members, managing sign-ups, schedules, member updates, and follow-ups.",
      "Organized club tournaments, practice matches, and partner events, from preparation through event-day coordination.",
      "Worked with Dunlop, Wardah, and La Roche-Posay on brand events, arranging court activities by skill level.",
    ],
    bulletsId: [
      "Mengoordinasikan kegiatan tenis mingguan di beberapa lapangan untuk sekitar 150 anggota, termasuk pendaftaran, jadwal, informasi kegiatan, dan tindak lanjut.",
      "Mengelola turnamen antarklub, latihan bersama, dan acara mitra, mulai dari persiapan hingga pelaksanaan.",
      "Bekerja sama dengan Dunlop, Wardah, dan La Roche-Posay dalam acara brand serta mengatur kelas tenis sesuai tingkat kemampuan.",
    ],
  },
  {
    organization: "Kementerian Agama Kota Bekasi",
    role: "Public Relations Intern",
    roleId: "Magang Hubungan Masyarakat",
    period: "Dec 2025 – Feb 2026",
    images: [
      {
        src: "/images/experience/kemenag.jpeg",
        alt: "Eriel with a colleague in front of the information center sign at Kementerian Agama Kota Bekasi",
      },
    ],
    bullets: [
      "Helped prepare office activities and kept documents and activity records organized.",
      "Prepared letters, internal updates, and public-information materials using Word, Excel, Canva, and CapCut.",
      "Helped with event administration and solved basic laptop and computer problems.",
    ],
    bulletsId: [
      "Membantu persiapan kegiatan kantor serta merapikan dokumen dan catatan kegiatan.",
      "Membuat surat, informasi internal, dan materi informasi publik menggunakan Word, Excel, Canva, dan CapCut.",
      "Membantu administrasi acara dan menangani kendala dasar pada laptop atau komputer.",
    ],
    links: [
      {
        label: "View Internship Evaluation",
        labelId: "Lihat Penilaian Magang",
        href: "https://drive.google.com/file/d/1UYElqOzgel5rwtICwx0W4mcriKPoCica/view?usp=drive_link",
      },
    ],
  },
];
