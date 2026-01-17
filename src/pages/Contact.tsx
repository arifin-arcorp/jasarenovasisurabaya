import SEO from "@/components/SEO";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      <SEO 
        title="Hubungi Kami - Arifin PintuJH"
        description="Kontak Arifin PintuJH untuk konsultasi renovasi rumah gratis. Telepon/WA: 0838-3441-8700. Alamat: Taman, Sidoarjo." 
      />

      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Mulai Proyek Anda</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Hubungi kami untuk konsultasi gratis dan survey lokasi. Kami siap mendengar rencana Anda.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary">Informasi Kontak</h2>
            <p className="text-muted-foreground">
              Jangan ragu untuk menghubungi kami. Tim kami standby 24 jam untuk merespons pertanyaan Anda.
            </p>

            <div className="space-y-6">
              <Card className="border-none shadow-md bg-white">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Telepon / WhatsApp</h3>
                    <p className="text-muted-foreground text-lg">0838-3441-8700</p>
                    <a href="https://wa.me/6283834418700" className="text-sm text-primary hover:underline font-bold mt-1 block">
                      Klik untuk Chat Langsung
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Alamat Workshop</h3>
                    <p className="text-muted-foreground">
                      Jl. Ketegan Barat 12, RT 3 RW 1,<br/>
                      Taman, Sidoarjo 61257,<br/>
                      Jawa Timur
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-white">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Jam Operasional</h3>
                    <p className="text-muted-foreground">
                      Senin - Minggu: Buka 24 Jam<br/>
                      <span className="text-sm">(Konsultasi Online)</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold mb-6 text-primary">Kirim Pesan</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <Input placeholder="Nama Anda" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nomor WhatsApp</label>
                  <Input placeholder="08xx xxxx xxxx" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Lokasi Proyek</label>
                <Input placeholder="Contoh: Sidoarjo, Surabaya Barat, dll" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Jenis Layanan</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Renovasi Rumah</option>
                  <option>Bangun Kosan</option>
                  <option>Interior</option>
                  <option>Perbaikan Atap</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Ceritakan Kebutuhan Anda</label>
                <Textarea placeholder="Saya ingin merenovasi dapur dan kamar mandi..." className="min-h-[120px]" />
              </div>

              <Button className="w-full text-lg font-bold h-12" size="lg">
                Kirim Pesan via WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Data Anda aman. Kami akan membalas secepatnya.
              </p>
            </form>
          </div>
        </div>
        
        {/* Map Embed Placeholder */}
        <div className="mt-12 rounded-xl overflow-hidden h-96 shadow-lg border border-border">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.387679366657!2d112.7099!3d-7.3102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7058883657%3A0x3368291410471165!2sTaman%2C%20Sidoarjo%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Arifin PintuJH"
          ></iframe>
        </div>
      </Section>
    </div>
  );
}
