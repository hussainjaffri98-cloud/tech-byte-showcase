import { motion } from "framer-motion";

const brands = [
  { name: "Lenovo", letter: "L" },
  { name: "Dell", letter: "D" },
  { name: "HP", letter: "HP" },
  { name: "IBM", letter: "I" },
  { name: "NetApp", letter: "N" },
];

const BrandLogos = () => (
  <section className="section-padding border-y border-border/30">
    <div className="max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold text-[#29f2f2] uppercase tracking-tighter text-foreground mb-16 font-display"

      >
        Trusted by Leading Brands
      </motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group flex flex-col items-center gap-2 px-6 py-5 rounded-xl border border-border/30 bg-card/20 w-full cursor-default transition-all duration-300 hover:border-primary/40 hover:bg-card/50 hover:shadow-[0_0_20px_hsl(180_85%_55%/0.15)] hover:scale-105"
          >
            <span className="text-3xl font-display font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
              {brand.letter}
            </span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground/70 group-hover:text-muted-foreground transition-colors duration-300">
              {brand.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandLogos;
