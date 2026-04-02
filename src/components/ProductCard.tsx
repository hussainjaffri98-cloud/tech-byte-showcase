import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group cursor-pointer"
    >
      {/* Main image */}
      <div className="relative overflow-hidden rounded-t-xl aspect-square">
        <motion.img
          key={activeIdx}
          src={allImages[activeIdx]}
          alt={`${name} - view ${activeIdx + 1}`}
          loading="lazy"
          width={1024}
          height={1024}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button className="glow-button p-3 rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        <span className="absolute top-4 left-4 text-xs font-display font-medium uppercase tracking-wider text-primary bg-primary/10 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
          {category}
        </span>
      </div>

      {/* Thumbnail strip */}
      {allImages.length > 1 && (
        <div className="flex gap-2 px-4 pt-3">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`relative flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                i === activeIdx
                  ? "border-primary shadow-[0_0_8px_hsl(var(--primary)/0.4)]"
                  : "border-border/30 opacity-50 hover:opacity-80 hover:border-border/60"
              }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="p-5 pt-3">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <p className="font-display font-bold text-xl text-primary">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
