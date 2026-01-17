import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Hammer, Instagram, Facebook } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/layanan", label: "Layanan" },
    { href: "/galeri", label: "Galeri" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <div className="flex min-h-screen flex-col font-body">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <a className={cn("flex items-center gap-2 font-display font-bold text-xl md:text-2xl", scrolled ? "text-primary" : "text-primary md:text-white")}>
              <div className="bg-accent p-1.5 rounded-lg text-white">
                <Hammer size={24} strokeWidth={2.5} />
              </div>
              <span className={cn("hidden md:inline", scrolled ? "text-primary" : "text-white")}>
                Arifin PintuJH
              </span>
              <span className={cn("md:hidden", scrolled ? "text-primary" : "text-white")}>
                Arifin
              </span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-accent uppercase tracking-wide",
                    location === link.href
                      ? "text-accent"
                      : scrolled
                      ? "text-foreground"
                      : "text-white/90"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <Link href="/kontak">
              <Button variant={scrolled ? "default" : "secondary"} className="font-bold">
                Konsultasi Gratis
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={cn("md:hidden p-2", scrolled ? "text-foreground" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-xl animate-in slide-in-from-top-5">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={cn(
                      "text-lg font-medium p-2 rounded-md hover:bg-muted transition-colors",
                      location === link.href ? "text-primary bg-primary/5" : "text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/kontak">
                <Button className="w-full font-bold text-lg h-12">Konsultasi Gratis</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-0">
        {children}
      </main>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-display font-bold text-2xl">
                <div className="bg-accent p-1.5 rounded-lg text-white">
                  <Hammer size={24} />
                </div>
                Arifin PintuJH
              </div>
              <p className="text-white/80 leading-relaxed">
                Jasa tukang bangunan dan renovasi rumah profesional di Surabaya & Sidoarjo. Solusi tepat, hemat, dan berkualitas untuk hunian impian Anda.
              </p>
            </div>
            
            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-accent">Layanan</h3>
              <ul className="space-y-3">
                <li><Link href="/layanan"><a className="text-white/80 hover:text-white transition-colors">Renovasi Rumah</a></Link></li>
                <li><Link href="/layanan"><a className="text-white/80 hover:text-white transition-colors">Bangun Baru</a></Link></li>
                <li><Link href="/layanan"><a className="text-white/80 hover:text-white transition-colors">Desain Interior</a></Link></li>
                <li><Link href="/layanan"><a className="text-white/80 hover:text-white transition-colors">Perbaikan Atap</a></Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-accent">Kontak</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/80">
                  <div className="bg-white/10 p-1.5 rounded shrink-0 mt-1">
                    <span className="text-xs font-bold">📍</span>
                  </div>
                  <span>Jl. Ketegan Barat 12, RT 3 RW 1, Taman, Sidoarjo 61257</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Phone size={18} className="text-accent" />
                  <span>0838-3441-8700</span>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <span className="text-accent font-bold">🕒</span>
                  <span>Buka 24 Jam</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-lg mb-6 text-accent">Sosial Media</h3>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/pintujhdotcom" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/pintujhdotcom" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-accent hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Arifin PintuJHDotCom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
