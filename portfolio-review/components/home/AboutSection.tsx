import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/ui/Reveal";
import { LocalizedText } from "@/components/ui/LocalizedText";

export function AboutSection() {
  return (
    <section id="about" className="section-space scroll-mt-20">
      <div className="container-max">
        <h2 className="section-title"><LocalizedText en="About" id="Tentang Saya" /></h2>
        <Reveal>
          <div className="card p-6 md:p-10">
            <p className="reading text-[17px] leading-[1.8] text-[var(--color-text-secondary)] md:text-[18px]">
              <LocalizedText
                en="Eriel is an Information Technology graduate from Universitas Bina Sarana Informatika with a 3.70/4.00 GPA. His projects show how he uses data to answer practical questions, from Jakarta air quality and customer activity to food-delivery times. He has also coordinated weekly programs and partner events for around 150 members. During his internship at Kementerian Agama Kota Bekasi, he supported communications, records, administration, and basic computer troubleshooting. He brings together careful analysis, clear communication, and dependable day-to-day support."
                id="Eriel adalah lulusan Teknologi Informasi dari Universitas Bina Sarana Informatika dengan IPK 3,70/4,00. Proyeknya menggunakan data untuk menjawab kebutuhan nyata, seperti memahami kualitas udara Jakarta, aktivitas pelanggan, dan waktu pengantaran makanan. Ia juga pernah mengoordinasikan kegiatan mingguan dan acara mitra untuk sekitar 150 anggota. Saat magang di Kementerian Agama Kota Bekasi, ia membantu komunikasi, pencatatan, administrasi, dan penanganan masalah komputer dasar. Pengalaman tersebut memadukan ketelitian, komunikasi yang jelas, dan dukungan operasional yang dapat diandalkan."
              />
            </p>
            <div className="mt-6 flex gap-6 text-[15px]">
              <TextLink href="/projects"><LocalizedText en="See projects" id="Lihat proyek" /></TextLink>
              <TextLink href="/#experience"><LocalizedText en="See experience" id="Lihat pengalaman" /></TextLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
