import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingWhatsApp() {
  const phoneNumber = "6283834418700";
  const message = encodeURIComponent("Halo Arifin PintuJH, saya ingin konsultasi renovasi rumah.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2",
        "bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl",
        "transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a]",
        "animate-in slide-in-from-bottom-10 fade-in duration-700 delay-1000"
      )}
    >
      <MessageCircle size={28} fill="white" className="text-white" />
      <span className="font-bold hidden md:inline pr-1">Chat WhatsApp</span>
    </a>
  );
}
