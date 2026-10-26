# Add a course or certificate

Edit `content/education.ts`. No page or component changes are needed.

## Add a bootcamp or non-formal course

Add an entry to `nonFormalEducation`:

```ts
{
  title: "Course or Bootcamp Name",
  issuer: "Training Provider",
  period: "Month YYYY – Month YYYY",
  summary: "What the program covered and how it supports your work or projects.",
  learningAreas: ["Skill or topic", "Another topic"],
  // Optional fields:
  detail: "Final score, grade, or other useful result",
  credentialId: "Certificate ID",
  image: "/images/certs/course-name.png",
  imageAlt: "Course completion certificate from Training Provider",
  href: "https://example.com/verify-certificate",
},
```

Copy the certificate image into `public/images/certs/`. Use a public verification
link when the provider offers one. Omit optional fields that do not apply.

## Add a standalone certificate

Add an entry to `certifications` in the same file:

```ts
{
  title: "Certificate Name",
  issuer: "Issuing Organization",
  period: "YYYY",
  detail: "Score or short description",
  image: "/images/certs/certificate-name.png",
  imageAlt: "Certificate name issued by organization",
  href: "https://example.com/verify-certificate",
},
```

Preview with `npm run dev`, then commit and push. The Education section updates
automatically on the next Vercel deployment.
