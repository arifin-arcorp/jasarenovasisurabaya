import SEO from "@/components/SEO";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { Hammer, Home, PaintBucket, PenTool, Zap, Ruler, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const allServices = [
    {
      title: "Renovasi Rumah Total",
      description: "Layanan renovasi menyeluruh dari struktur hingga finishing. Cocok untuk Anda yang ingin mengubah total tampilan rumah lama.",
      icon: Home,
    },
    {
      title: "Bangun & Renovasi Kos",
      description: "Spesialisasi kami. Desain efisien untuk memaksimalkan jumlah kamar dengan tetap memperhatikan kenyamanan penghuni.",
      icon: Hammer,
    },
    {
      title: "Interior & Kitchen Set",
      description: "Pembuatan kitchen set, wardrobe, backdrop TV, dan partisi ruangan dengan bahan HPL atau Duco berkualitas.",
      icon: PaintBucket,
    },
    {
      title: "Tukang Bangunan Harian",
      description: "Menyediakan tukang ahli untuk pekerjaan spesifik dengan sistem harian atau borongan tenaga.",
      icon: PenTool,
    },
    {
      title: "Instalasi Listrik & Air",
      description: "Perbaikan atau instalasi baru jalur listrik (MCB, saklar) dan perpipaan air (pompa, toren, keran).",
      icon: Zap,
    },
    {
      title: "Jasa Desain Arsitek",
      description: "Gratis konsultasi desain 2D/3D untuk setiap proyek pembangunan atau renovasi besar bersama kami.",
      icon: Ruler,
    },
    {
      title: "Bongkaran & Buang Puing",
      description: "Layanan pembersihan lahan sebelum konstruksi, termasuk armada angkut puing.",
      icon: Truck,
    },
    {
      title: "Waterproofing & Atap",
      description: "Solusi atap bocor, rembesan dinding, dan pemasangan rangka atap baja ringan.",
      icon: Shield,
    },
  ];

  return (
    <div className="pt-20">
      <SEO 
        title="Layanan Renovasi & Tukang Bangunan - Arifin PintuJH"
        description="Daftar lengkap layanan kami: Renovasi rumah, bangun kosan, interior, atap bocor, hingga tukang panggilan harian di Surabaya." 
      />

      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Layanan Kami</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Kami siap menangani segala kebutuhan konstruksi Anda, dari perbaikan kecil hingga proyek besar.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href="/kontak"
              className="bg-secondary/20 hover:bg-white border hover:border-accent/20"
            />
          ))}
        </div>
      </Section>

      <Section className="bg-accent text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Butuh Layanan Custom?</h2>
            <p className="text-white/90">Silakan konsultasikan kebutuhan spesifik Anda dengan tim kami.</p>
          </div>
          <Link href="/kontak">
            <Button size="lg" variant="secondary" className="font-bold text-accent h-14 px-8">
              Hubungi Sekarang
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
