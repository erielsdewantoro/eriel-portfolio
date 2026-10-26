export type ExperienceEntry = {
  organization: string;
  role: string;
  period: string;
  bullets: string[];
  /** Photos under /public. One photo stays as a single feature image; multiple photos become a gallery. */
  images?: { src: string; alt: string }[];
  highlight?: {
    label: string;
    lines: string[];
  };
};

export const experience: ExperienceEntry[] = [
  {
    organization: "Tennis Circle Jakarta",
    role: "Operations & Member Relations",
    period: "Jul 2024 – Nov 2025 · Mar – Aug 2026",
    images: [
      {
        src: "/images/experience/tennis-circle.jpeg",
        alt: "Tennis Circle Jakarta members posing together on a tennis court at sunset",
      },
    ],
    bullets: [
      "Coordinated weekly, multi-court training for a community of about 300 members, including registration, scheduling, communication, and follow-up.",
      "Organized inter-club tournaments, sparring sessions, and brand-hosted events from preparation through event day, coordinating players, partners, guests, and on-court support.",
      "Worked with Dunlop, Wardah, and La Roche-Posay on partner and brand events, including parallel classes and courts organized by skill level.",
    ],
  },
  {
    organization: "Ministry of Religious Affairs, Bekasi City",
    role: "Public Relations Intern",
    period: "Dec 2025 – Feb 2026",
    images: [
      {
        src: "/images/experience/kemenag.jpeg",
        alt: "Eriel with a colleague in front of the information center sign at Kementerian Agama Kota Bekasi",
      },
    ],
    bullets: [
      "Prepared internal activities and routine operations, keeping documentation and activity records organized.",
      "Drafted administrative documents, internal communications, and public-relations materials using Microsoft Word, Excel, Canva, and CapCut.",
      "Resolved basic laptop and computer issues and supported event administration.",
    ],
  },
];
