import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  images?: string[];
  name: string;
  price: string;
  category: string;
  description: string;
  index?: number;
}

const ProductCard = ({ image, images, name, price, category, description, index = 0 }: ProductCardProps) => {
  const allImages = images && images.length > 0 ? images : [image];
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((i) => (i === 0 ? allImages.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((i) => (i === allImages.length - 1 ? 0 : i + 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-t-xl aspect-square">
        <img
          src={allImages[activeIdx]}
          alt={name}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Navigation arrows */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/40 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/80"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border/40 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/80"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {allImages.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIdx ? "bg-primary w-4" : "bg-foreground/40"
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button className="glow-button p-3 rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        <span className="absolute top-4 left-4 text-xs font-display font-medium uppercase tracking-wider text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <p className="font-display font-bold text-xl text-primary">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
