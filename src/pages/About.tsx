import SEO from "@/components/SEO";
import Section from "@/components/Section";
import { CheckCircle } from "lucide-react";
import teamImg from "@/assets/worker-team.webp"; // Reuse team image

export default function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="Tentang Kami - Arifin PintuJH"
        description="Cerita Arifin PintuJH dalam membangun kepercayaan pelanggan di Surabaya & Sidoarjo. Spesialis renovasi rumah amanah." 
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary text-center">Membangun Kepercayaan, <br/>Satu Rumah Sekaligus</h1>
          
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed text-justify mb-12">
            <p className="mb-6">
              Halo, saya <strong>Arifin</strong>. Perjalanan <strong>PintuJH DotCom</strong> dimulai dari sebuah keresahan sederhana: 
              banyaknya cerita teman dan tetangga yang kecewa dengan tukang bangunan. Mulai dari pekerjaan yang ditinggal kabur, 
              biaya yang membengkak tanpa alasan, hingga hasil kerja yang jauh dari ekspektasi.
            </p>
            <p className="mb-6">
              Saya percaya renovasi rumah tidak seharusnya menjadi sumber stres. Sebaliknya, itu adalah proses mewujudkan impian. 
              Berbekal pengalaman puluhan tahun di lapangan dan tim yang solid, saya mendirikan jasa ini dengan satu prinsip utama: 
              <strong>Kejujuran dan Kualitas</strong>.
            </p>
            <p>
              Hari ini, dengan rating 4.8 dari 900+ ulasan, kami terus berkomitmen untuk menjadi mitra terpercaya bagi warga 
              Surabaya, Sidoarjo, dan sekitarnya. Kami bukan sekadar tukang, kami adalah partner Anda membangun hunian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img src={teamImg} alt="Tim Arifin PintuJH" className="rounded-xl shadow-lg w-full" />
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Nilai-Nilai Kami</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Amanah & Transparan</h4>
                    <p className="text-sm">RAB detail, spesifikasi material jelas di awal.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">Solutif</h4>
                    <p className="text-sm">Memberikan alternatif solusi sesuai budget Anda.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground">On Time</h4>
                    <p className="text-sm">Manajemen waktu proyek yang ketat dan terukur.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
