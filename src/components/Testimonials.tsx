import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    location: "Surabaya Barat",
    role: "Pemilik Kosan",
    text: "Pengerjaan renovasi kosan 10 kamar sangat rapi dan tepat waktu. Mas Arifin sangat komunikatif, setiap progres dilaporkan. Hasilnya kosan saya langsung full booked!",
    rating: 5,
  },
  {
    name: "Siti Rahmawati",
    location: "Sidoarjo",
    role: "Ibu Rumah Tangga",
    text: "Awalnya ragu pakai jasa tukang online, tapi PintuJH membuktikan kualitasnya. Atap bocor beres, plafon rapi lagi. Timnya sopan dan kerjanya bersih.",
    rating: 5,
  },
  {
    name: "Hendra Wijaya",
    location: "Gresik",
    role: "Wiraswasta",
    text: "Transparansi harganya juara. RAB detail, tidak ada biaya siluman. Desain gratisnya juga sangat membantu saya membayangkan hasil akhirnya. Recomended!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
            <div className="p-1 h-full">
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-secondary/30">
                <CardContent className="flex flex-col p-6 h-full justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{item.text}"</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white">
                      <AvatarFallback className="bg-primary text-white font-bold">
                        {item.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}, {item.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
