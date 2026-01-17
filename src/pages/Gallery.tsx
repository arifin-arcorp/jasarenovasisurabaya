import SEO from "@/components/SEO";
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  return (
    <div className="pt-20">
      <SEO 
        title="Galeri Proyek - Arifin PintuJH"
        description="Lihat portofolio hasil kerja renovasi rumah, kosan, dan interior kami. Bukti nyata kualitas kerja Arifin PintuJH." 
      />

      <div className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">Galeri Proyek</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Dokumentasi hasil kerja kami. Dari renovasi sederhana hingga pembangunan total.
          </p>
        </div>
      </div>

      <Section>
        <GalleryGrid />
        
        <div className="mt-16 text-center bg-muted p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Ingin Melihat Lebih Banyak?</h3>
          <p className="mb-6 text-muted-foreground">
            Kami memiliki ratusan foto dokumentasi proyek lainnya yang bisa kami tunjukkan saat konsultasi.
          </p>
          <Link href="/kontak">
            <Button size="lg" className="font-bold">Jadwalkan Survey Lokasi</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
