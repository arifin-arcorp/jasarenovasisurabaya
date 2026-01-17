import { Star, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@/assets/hero-modern.jpg"; // Using the modern facade image

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Renovated House in Indonesia" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-2xl text-white space-y-8 animate-in slide-in-from-left-5 duration-700">
          
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium">4.8/5 dari 979+ Klien Puas</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Wujudkan Rumah Impian <br />
            <span className="text-accent">Tanpa Drama.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            Jasa renovasi rumah & kosan terpercaya di Surabaya & Sidoarjo. 
            Transparan, tepat waktu, dan <span className="font-bold text-accent">GRATIS DESAIN</span> untuk setiap proyek.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/kontak">
              <Button size="lg" className="h-14 px-8 text-lg font-bold bg-accent hover:bg-accent/90 border-none">
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/galeri">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold border-white text-white hover:bg-white hover:text-primary bg-transparent">
                Lihat Galeri Proyek
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-lg text-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Bergaransi</p>
                <p className="text-xs text-white/60">Konstruksi Aman</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-lg text-accent">
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Tepat Waktu</p>
                <p className="text-xs text-white/60">Sesuai Deadline</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-accent/20 p-2 rounded-lg text-accent">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Transparan</p>
                <p className="text-xs text-white/60">Tanpa Hidden Fee</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
