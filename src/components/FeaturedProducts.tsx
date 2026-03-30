import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        >
          <div>
            <span className="text-primary font-display text-sm font-medium uppercase tracking-widest mb-3 block">
              Curated Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Featured <span className="text-gradient">Products</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-display font-medium"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} {...product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
