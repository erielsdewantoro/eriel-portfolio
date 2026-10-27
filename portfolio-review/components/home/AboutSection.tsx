import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="section-space scroll-mt-20">
      <div className="container-max">
        <h2 className="section-title">About</h2>
        <Reveal>
          <div className="card p-6 md:p-10">
            <p className="reading text-[17px] leading-[1.8] text-[var(--color-text-secondary)] md:text-[18px]">
              Eriel is an Information Technology graduate from Universitas Bina Sarana Informatika
              with a 3.70/4.00 GPA. His academic work includes a Jakarta air-quality classification
              thesis, while his portfolio demonstrates customer segmentation, business intelligence,
              and delivery-time prediction using Python, SQL, Power BI, and machine learning. He
              brings the same practical focus to operations: coordinating weekly activities and
              partner events for a community of about 150 members, then applying his public-relations,
              documentation, and basic IT-support experience during an internship at Kementerian Agama
              Kota Bekasi. He is comfortable connecting analysis with clear
              communication and reliable day-to-day execution.
            </p>
            <div className="mt-6 flex gap-6 text-[15px]">
              <TextLink href="/projects">See projects</TextLink>
              <TextLink href="/#experience">See experience</TextLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
