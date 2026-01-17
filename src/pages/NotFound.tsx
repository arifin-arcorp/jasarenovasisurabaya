import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-secondary/30">
      <h1 className="text-9xl font-display font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-6">Halaman Tidak Ditemukan</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
      </p>
      <Link href="/">
        <Button size="lg">Kembali ke Beranda</Button>
      </Link>
    </div>
  );
}
