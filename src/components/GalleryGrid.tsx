import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import beforeAfterImg from "@/assets/before-after-1.jpg";
import modernImg from "@/assets/hero-modern.jpg";
import interiorImg from "@/assets/interior-bali.jpg";
import facadeImg from "@/assets/hero-facade.jpg";

interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
  isBeforeAfter?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: beforeAfterImg,
    category: "Renovasi Total",
    title: "Transformasi Ruang Tamu Modern",
    isBeforeAfter: true,
  },
  {
    id: "2",
    image: modernImg,
    category: "Bangun Baru",
    title: "Rumah Minimalis Tropis Jakarta",
    isBeforeAfter: false,
  },
  {
    id: "3",
    image: interiorImg,
    category: "Interior",
    title: "Interior Villa Bali Style",
    isBeforeAfter: false,
  },
  {
    id: "4",
    image: facadeImg,
    category: "Fasad",
    title: "Upgrade Fasad Rumah Lama",
    isBeforeAfter: false,
  },
];

export default function GalleryGrid({ limit }: { limit?: number }) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer shadow-sm hover:shadow-xl transition-all"
        >
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex gap-2 mb-2">
                <Badge className="bg-accent hover:bg-accent text-white border-none">{item.category}</Badge>
                {item.isBeforeAfter && <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">Before & After</Badge>}
              </div>
              <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
