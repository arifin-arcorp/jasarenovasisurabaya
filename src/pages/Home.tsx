import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import GalleryGrid from "@/components/GalleryGrid";
import Testimonials from "@/components/Testimonials";
import { Hammer, Home as HomeIcon, PaintBucket, PenTool, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import teamImg from "@/assets/worker-team.webp";

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Arifin PintuJHDotCom – Jasa Tukang Bangunan Renovasi Rumah & Kosan Surabaya"
        description="Jasa renovasi rumah, bangun kosan, dan tukang bangunan profesional di Surabaya & Sidoarjo. Free desain, transparan, dan bergaransi. Hubungi 0838-3441-8700." 
      />

      {/* Hero Section */}
      <Hero />

      {/* USP Section */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold">979+</h3>
              <p className="text-white/80 text-sm">Proyek Selesai</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold">4.8</h3>
              <p className="text-white/80 text-sm">Rating Kepuasan</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold">24 Jam</h3>
              <p className="text-white/80 text-sm">Layanan Konsultasi</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-display font-bold">100%</h3>
              <p className="text-white/80 text-sm">Garansi Konstruksi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Layanan Unggulan Kami</h2>
          <p className="text-muted-foreground">
            Solusi lengkap untuk kebutuhan hunian Anda, dikerjakan oleh tim ahli berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Renovasi Rumah"
            description="Perbaikan atap bocor, tambah lantai, ganti keramik, hingga renovasi total agar rumah kembali nyaman."
            icon={HomeIcon}
            href="/layanan"
          />
          <ServiceCard
            title="Bangun & Renovasi Kos"
            description="Spesialis layout kosan efisien dan hemat biaya untuk memaksimalkan ROI properti Anda."
            icon={Hammer}
            href="/layanan"
          />
          <ServiceCard
            title="Interior & Finishing"
            description="Pemasangan plafon gypsum, partisi, kitchen set, hingga pengecatan dinding dengan hasil rapi."
            icon={PaintBucket}
            href="/layanan"
          />
          <ServiceCard
            title="Tukang Panggilan"
            description="Butuh perbaikan kecil? Tim handyman kami siap datang untuk perbaikan listrik, air, dan sipil."
            icon={PenTool}
            href="/layanan"
          />
        </div>
      </Section>

      {/* About / Why Choose Us Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-xl rotate-3"></div>
            <img src={teamImg} alt="Tim Tukang Arifin PintuJH" className="relative rounded-xl shadow-xl w-full" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-primary font-bold text-lg mb-2">"Kami bekerja dengan hati, membangun dengan teliti."</p>
              <p className="text-sm text-muted-foreground">- Arifin, Founder</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Kenapa Memilih Arifin PintuJH?</h2>
            <div className="space-y-4">
              {[
                "Gratis Desain & Konsultasi 24 Jam",
                "RAB Transparan, Tanpa Mark-up Tersembunyi",
                "Tukang Berpengalaman & Jujur",
                "Garansi Pemeliharaan Pasca Proyek",
                "Laporan Progres Rutin via WhatsApp"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-accent shrink-0" size={24} />
                  <span className="text-lg text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            <a href="https://pintujh.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-bold px-8 mt-4">
                Pelajari Lebih Lanjut
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-secondary/30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Hasil Karya Kami</h2>
            <p className="text-muted-foreground">Lihat transformasi properti klien kami. Kualitas adalah prioritas utama.</p>
          </div>
          <Link href="/galeri">
            <Button variant="outline" className="group">
              Lihat Semua Proyek <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        <GalleryGrid limit={4} />
      </Section>

      {/* Testimonials Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Kata Mereka</h2>
          <p className="text-muted-foreground">Kepercayaan klien adalah aset terbesar kami.</p>
        </div>
        <Testimonials />
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white text-center py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Siap Mewujudkan Rumah Impian?</h2>
          <p className="text-xl text-white/90">
            Jangan biarkan kerusakan kecil menjadi besar. Konsultasikan kebutuhan renovasi Anda sekarang juga. Gratis survey & estimasi biaya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="https://jasarenovasirumahsemua.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold text-primary">
                Hubungi Kami Sekarang
              </Button>
            </a>
            <a href="https://wa.me/6283834418700" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold border-white text-white hover:bg-white hover:text-primary bg-transparent">
                Chat WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
