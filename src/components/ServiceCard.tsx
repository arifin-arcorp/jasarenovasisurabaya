import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  className?: string;
}

export default function ServiceCard({ title, description, icon: Icon, href, className }: ServiceCardProps) {
  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-300 border-none bg-white", className)}>
      <CardHeader>
        <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
          <Icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
        </div>
        <CardTitle className="font-display text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link href={href}>
          <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Selengkapnya <ArrowRight size={18} />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
}
