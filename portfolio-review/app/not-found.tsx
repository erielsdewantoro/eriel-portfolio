import { Button } from "@/components/ui/Button";
import { LocalizedText } from "@/components/ui/LocalizedText";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-max text-center">
        <p className="eyebrow text-[var(--color-accent)]">
          404
        </p>
        <h1 className="gradient-text mt-2 text-[36px] font-extrabold md:text-[48px]"><LocalizedText en="Page not found" id="Halaman tidak ditemukan" /></h1>
        <p className="reading mx-auto mt-3 text-[17px] text-[var(--color-text-secondary)]">
          <LocalizedText en="The page you&apos;re looking for doesn&apos;t exist, or may have moved." id="Halaman yang kamu cari tidak tersedia atau alamatnya sudah berubah." />
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button href="/"><LocalizedText en="Back to Home" id="Kembali ke Beranda" /></Button>
          <Button href="/projects" variant="outline">
            <LocalizedText en="View Projects" id="Lihat Proyek" />
          </Button>
        </div>
      </div>
    </section>
  );
}
