export type SkillGroup = {
  title: string;
  chips: {
    label: string;
    /** A static, always-true qualifier — e.g. "familiar" (no project
     *  evidence), or "via certification" (evidenced by a credential, not a
     *  project). Project-level "Used in" evidence is computed separately
     *  and automatically from each project's techTags — see
     *  lib/skillEvidence.ts — never hand-typed here. */
    note?: string;
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Data & Analytics",
    chips: [
      { label: "Python" },
      { label: "Pandas" },
      { label: "NumPy" },
      { label: "SQL", note: "via certification" },
      { label: "MySQL", note: "via certification" },
      { label: "DBeaver", note: "familiar" },
      { label: "Excel" },
      { label: "Data Cleaning" },
      { label: "EDA" },
      { label: "Descriptive Analysis" },
      { label: "Data Visualization" },
    ],
  },
  {
    title: "BI & Reporting",
    chips: [
      { label: "Power BI" },
      { label: "Tableau", note: "familiar" },
      { label: "Dashboarding" },
      { label: "Reporting" },
      { label: "Data Storytelling" },
    ],
  },
  {
    title: "Machine Learning",
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
    chips: [
      { label: "HTML" },
      { label: "CSS" },
      { label: "JavaScript" },
      { label: "Next.js" },
      { label: "Supabase" },
      { label: "Java", note: "familiar" },
      { label: "GitHub" },
      { label: "Google Colab" },
      { label: "Basic computer troubleshooting" },
      { label: "Microsoft Word" },
    ],
  },
  {
    title: "Operations & Service",
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
    chips: [
      { label: "Indonesian", note: "native" },
      { label: "English", note: "B1 · intermediate" },
    ],
  },
  {
    title: "Tools",
    chips: [
      { label: "Canva", note: "Kemenag internship" },
      { label: "CapCut", note: "Kemenag internship" },
      { label: "Figma" },
    ],
  },
];

/**
 * Logo strip shown above the grouped skills. Each entry needs a logo file in
 * /public/images/skills/. Keep `note` honest ("familiar", "via certification")
 * — it mirrors the grouped list below.
 */
export const marqueeSkills: { label: string; icon: string; note?: string }[] = [
  { label: "Python", icon: "/images/skills/python.png" },
  { label: "Pandas", icon: "/images/skills/pandas.png" },
  { label: "NumPy", icon: "/images/skills/numpy.png" },
  { label: "MySQL", icon: "/images/skills/sql.png", note: "via certification" },
  { label: "DBeaver", icon: "/images/skills/dbeaver.png", note: "familiar" },
  { label: "Excel", icon: "/images/skills/excel.png" },
  { label: "Power BI", icon: "/images/skills/powerbi.png" },
  { label: "Tableau", icon: "/images/skills/tableau.png", note: "familiar" },
  { label: "Figma", icon: "/images/skills/figma.png" },
  { label: "GitHub", icon: "/images/skills/github.png" },
];
