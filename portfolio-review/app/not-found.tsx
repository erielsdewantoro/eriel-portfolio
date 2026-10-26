import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-max text-center">
        <p className="eyebrow text-[var(--color-accent)]">
          404
        </p>
        <h1 className="gradient-text mt-2 text-[36px] font-extrabold md:text-[48px]">Page not found</h1>
        <p className="reading mx-auto mt-3 text-[17px] text-[var(--color-text-secondary)]">
          The page you&apos;re looking for doesn&apos;t exist, or may have moved.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/projects" variant="outline">
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
