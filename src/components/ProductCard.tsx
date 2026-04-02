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

  return (
    <div className="space-y-4">
      {/* Product info header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex items-center justify-between"
      >
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-display font-bold text-xl text-primary whitespace-nowrap">{price}</p>
          <button className="glow-button p-2.5 rounded-full shrink-0">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Individual image cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {allImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.1 + i * 0.08 }}
            className="glass-card group/img overflow-hidden rounded-xl cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={img}
                alt={`${name} - view ${i + 1}`}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
              {i === 0 && (
                <span className="absolute top-3 left-3 text-[10px] font-display font-medium uppercase tracking-wider text-primary bg-primary/10 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-primary/20">
                  {category}
                </span>
              )}
              <span className="absolute bottom-2 right-2 text-[10px] font-display font-medium text-muted-foreground bg-background/60 backdrop-blur-sm px-2 py-0.5 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                {i + 1}/{allImages.length}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;