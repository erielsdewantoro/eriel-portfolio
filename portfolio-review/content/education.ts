export const education = {
  logo: "/images/logos/ubsi.png",
  logoAlt: "Universitas Bina Sarana Informatika logo",
  institution: "Universitas Bina Sarana Informatika (UBSI)",
  degree: "Bachelor of Information Technology (S1 Teknologi Informasi)",
  status: "Graduated September 2026 · GPA 3.70/4.00",
  relevantCoursework:
    "Relevant coursework: Database, Operating Systems, Statistics, Machine Learning, and Data Analysis.",
};

export type Credential = {
  title: string;
  issuer: string;
  period?: string;
  detail?: string;
  credentialId?: string;
  /** Certificate image under /public (renders only if the file exists). */
  image?: string;
  imageAlt?: string;
  /** Link to the certificate itself (e.g. a shared Drive file). */
  href?: string;
};

export type NonFormalProgram = Credential & {
  summary: string;
  learningAreas: string[];
};

/** Add completed bootcamps, courses, or other non-formal programs here. */
export const nonFormalEducation: NonFormalProgram[] = [
  {
    title: "Data Science & Analysis Bootcamp",
    issuer: "Dibimbing.id",
    period: "May 2025 – November 2025",
    detail: "Final Score 88.09 · Grade A",
    credentialId: "201029DS34113026",
    summary:
      "Project-based training that complements the Information Technology degree with practical data analysis and machine learning work. These skills support the ISPU classification thesis and analytics projects in this portfolio.",
    learningAreas: [
      "Python and data preparation",
      "Statistics and exploratory data analysis",
      "SQL and database management",
      "Data visualization and storytelling",
      "Machine learning fundamentals",
    ],
    image: "/images/certs/dibimbing.png",
    imageAlt: "Data Science & Analysis Bootcamp certificate from Dibimbing.id",
    href: "https://dibimbing.id/certificate-validation?cn=201029DS34113026",
  },
];

export const certifications: Credential[] = [
  {
    title: "TOEFL Prediction Test",
    issuer: "Language Institute, Universitas Bina Sarana Informatika",
    period: "August 2026",
    detail: "Total score 603 · Listening 55 · Structure & Written Expression 63 · Reading 63",
    image: "/images/certs/toefl-prediction-test.png",
    imageAlt: "TOEFL Prediction Test certificate from Universitas Bina Sarana Informatika, total score 603",
    href: "/certificates/toefl-prediction-test.pdf",
  },
  {
    title: "Program Analyst (Analis Program)",
    issuer: "BNSP",
    period: "2025",
    detail: "Sertifikasi kompetensi nasional BNSP sebagai Analis Program",
    image: "/images/certs/bnsp.png",
    imageAlt: "Program Analyst competency certificate from BNSP",
    href: "https://drive.google.com/file/d/1jIOBTDiYn-KFhZrSDzvzTv3MiovIHAP-/view?usp=drive_link",
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Cisco Networking Academy / OpenEDG Python Institute",
    period: "2023",
    image: "/images/certs/Python-Certif.png",
    href: "https://drive.google.com/file/d/1yVxrD0uXBarrYqw5f62uflIYzkn3QA2O/view?usp=drive_link",
  },
  {
    title: "Fundamental Database MySQL",
    issuer: "Coding Studio",
    detail: "Sertifikat penyelesaian kursus Fundamental Database MySQL",
    period: "2024",
    image: "/images/certs/mysql.png",
    imageAlt: "Fundamental Database MySQL certificate from Coding Studio",
    href: "https://drive.google.com/file/d/1wWpJxC1pw5PFjO7gx8SO6qQxlQHdjfpT/view?usp=sharing",
  },
];
