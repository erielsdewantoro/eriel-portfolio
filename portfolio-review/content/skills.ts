export type SkillGroup = {
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  chips: {
    label: string;
    /** A static, always-true qualifier — e.g. "familiar" (no project
     *  evidence), or "via certification" (evidenced by a credential, not a
     *  project). Project-level "Used in" evidence is computed separately
     *  and automatically from each project's techTags — see
     *  lib/skillEvidence.ts — never hand-typed here. */
    note?: string;
    noteId?: string;
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Data & Analytics",
    titleId: "Data & Analitik",
    description: "Tools for organizing, checking, and explaining data.",
    descriptionId: "Alat untuk merapikan, memeriksa, dan menjelaskan data.",
    chips: [
      { label: "Python" },
      { label: "Pandas" },
      { label: "NumPy" },
      { label: "SQL", note: "via certification", noteId: "melalui sertifikasi" },
      { label: "MySQL", note: "via certification", noteId: "melalui sertifikasi" },
      { label: "DBeaver", note: "familiar", noteId: "pernah digunakan" },
      { label: "Excel" },
      { label: "Data Cleaning" },
      { label: "EDA" },
      { label: "Descriptive Analysis" },
      { label: "Data Visualization" },
    ],
  },
  {
    title: "BI & Reporting",
    titleId: "BI & Pelaporan",
    description: "Tools for turning figures into clear reports and dashboards.",
    descriptionId: "Alat untuk mengubah angka menjadi laporan dan dashboard yang mudah dibaca.",
    chips: [
      { label: "Power BI" },
      { label: "Tableau", note: "familiar", noteId: "pernah digunakan" },
      { label: "Dashboarding" },
      { label: "Reporting" },
      { label: "Data Storytelling" },
    ],
  },
  {
    title: "Machine Learning",
    titleId: "Machine Learning",
    description: "Methods that help computers find patterns and make estimates from data.",
    descriptionId: "Metode agar komputer dapat mengenali pola dan membuat perkiraan dari data.",
    chips: [
      { label: "scikit-learn" },
      { label: "XGBoost" },
      { label: "TensorFlow/Keras" },
      { label: "SHAP" },
      { label: "Classification" },
      { label: "Regression" },
    ],
  },
  {
    title: "Web & IT",
    titleId: "Web & Teknologi Informasi",
    description: "Web basics, development tools, and everyday computer support.",
    descriptionId: "Dasar web, alat pengembangan, dan dukungan komputer sehari-hari.",
    chips: [
      { label: "HTML" },
      { label: "CSS" },
      { label: "JavaScript" },
      { label: "Next.js" },
      { label: "Supabase" },
      { label: "Java", note: "familiar", noteId: "pernah digunakan" },
      { label: "GitHub" },
      { label: "Google Colab" },
      { label: "Basic computer troubleshooting" },
      { label: "Microsoft Word" },
    ],
  },
  {
    title: "Operations & Service",
    titleId: "Operasional & Layanan",
    description: "Planning activities, coordinating people, and keeping records organized.",
    descriptionId: "Merencanakan kegiatan, mengoordinasikan orang, dan merapikan pencatatan.",
    chips: [
      { label: "Event coordination" },
      { label: "Member relations" },
      { label: "Registration & scheduling" },
      { label: "Partner coordination" },
      { label: "Documentation & reporting" },
      { label: "Administration" },
    ],
  },
  {
    title: "Languages",
    titleId: "Bahasa",
    description: "Languages used to communicate with teams and stakeholders.",
    descriptionId: "Bahasa yang digunakan untuk berkomunikasi dengan tim dan rekan kerja.",
    chips: [
      { label: "Indonesian", note: "native", noteId: "bahasa ibu" },
      { label: "English", note: "B1 · intermediate", noteId: "B1 · menengah" },
    ],
  },
  {
    title: "Tools",
    titleId: "Perangkat Kerja",
    description: "Tools for creating materials, video edits, and interface designs.",
    descriptionId: "Alat untuk membuat materi, mengedit video, dan merancang antarmuka.",
    chips: [
      { label: "Canva", note: "Kemenag internship", noteId: "magang Kemenag" },
      { label: "CapCut", note: "Kemenag internship", noteId: "magang Kemenag" },
      { label: "Figma" },
    ],
  },
];

/**
 * Logo strip shown above the grouped skills. Each entry needs a logo file in
 * /public/images/skills/. Keep `note` honest ("familiar", "via certification")
 * — it mirrors the grouped list below.
 */
export const marqueeSkills: { label: string; icon: string; note?: string; noteId?: string }[] = [
  { label: "Python", icon: "/images/skills/python.png" },
  { label: "Pandas", icon: "/images/skills/pandas.png" },
  { label: "NumPy", icon: "/images/skills/numpy.png" },
  { label: "MySQL", icon: "/images/skills/sql.png", note: "via certification", noteId: "melalui sertifikasi" },
  { label: "DBeaver", icon: "/images/skills/dbeaver.png", note: "familiar", noteId: "pernah digunakan" },
  { label: "Excel", icon: "/images/skills/excel.png" },
  { label: "Power BI", icon: "/images/skills/powerbi.png" },
  { label: "Tableau", icon: "/images/skills/tableau.png", note: "familiar", noteId: "pernah digunakan" },
  { label: "Figma", icon: "/images/skills/figma.png" },
  { label: "GitHub", icon: "/images/skills/github.png" },
];
