import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="text-primary font-display text-sm font-medium uppercase tracking-widest mb-3 block">
              Our Collection
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
              All <span className="text-gradient">Products</span>
            </h1>
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-display font-medium transition-all duration-300 ${
                  active === cat
                    ? "glow-button"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} {...product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
