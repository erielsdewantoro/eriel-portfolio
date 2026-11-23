import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { LocalizedText } from "@/components/ui/LocalizedText";
import { Button } from "@/components/ui/Button";
import { DownloadIcon } from "@/components/ui/Icons";

export function AboutSection() {
  return (
    <section id="about" className="section-space scroll-mt-20">
      <div className="container-max grid gap-6 md:grid-cols-[0.65fr_1.35fr] md:gap-14">
        <div>
          <p className="eyebrow mb-2"><LocalizedText en="Working approach" id="Cara kerja" /></p>
          <h2 className="section-title"><LocalizedText en="About" id="Tentang Saya" /></h2>
        </div>
        <Reveal>
          <div>
            <p className="max-w-[760px] text-[17px] leading-[1.85] text-[var(--color-text-secondary)] md:text-[20px]">
              <LocalizedText
                en="Eriel is an Information Technology graduate from Universitas Bina Sarana Informatika with a 3.84/4.00 GPA. His projects show how he uses data to answer practical questions, from Jakarta air quality and customer activity to food-delivery times. He has also coordinated weekly programs and partner events for around 150 members. During his internship at Kementerian Agama Kota Bekasi, he supported communications, records, administration, and basic computer troubleshooting. He brings together careful analysis, clear communication, and dependable day-to-day support."
                id="Eriel adalah lulusan Teknologi Informasi dari Universitas Bina Sarana Informatika dengan IPK 3,84/4,00. Proyeknya menggunakan data untuk menjawab kebutuhan nyata, seperti memahami kualitas udara Jakarta, aktivitas pelanggan, dan waktu pengantaran makanan. Ia juga pernah mengoordinasikan kegiatan mingguan dan acara mitra untuk sekitar 150 anggota. Saat magang di Kementerian Agama Kota Bekasi, ia membantu komunikasi, pencatatan, administrasi, dan penanganan masalah komputer dasar. Pengalaman tersebut memadukan ketelitian, komunikasi yang jelas, dan dukungan operasional yang dapat diandalkan."
              />
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
              <TextLink href="/projects"><LocalizedText en="See projects" id="Lihat proyek" /></TextLink>
              <TextLink href="/#experience"><LocalizedText en="See experience" id="Lihat pengalaman" /></TextLink>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/cv/cv-eriel-en.pdf" download="Eriel-Setiawan-Dewantoro-CV-English.pdf" variant="outline" className="min-h-11 px-4 py-2 text-sm">
                <DownloadIcon size={16} />
                <LocalizedText en="Download CV (English)" id="Unduh CV (Inggris)" />
              </Button>
              <Button href="/cv/cv-eriel-id.pdf" download="Eriel-Setiawan-Dewantoro-CV-Bahasa-Indonesia.pdf" variant="outline" className="min-h-11 px-4 py-2 text-sm">
                <DownloadIcon size={16} />
                <LocalizedText en="Download CV (Indonesian)" id="Unduh CV (Bahasa Indonesia)" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
