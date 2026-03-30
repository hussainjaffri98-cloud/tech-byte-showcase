import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  description: string;
  index?: number;
}

const ProductCard = ({ image, name, price, category, description, index = 0 }: ProductCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-card group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-t-xl aspect-square">
      <img
        src={image}
        alt={name}
        loading="lazy"
        width={1024}
        height={1024}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
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

export default ProductCard;
