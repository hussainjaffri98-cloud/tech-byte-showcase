import { motion } from "framer-motion";
import lenovoLogo from "@/assets/logos/lenovo.png";
import dellLogo from "@/assets/logos/dell.png";
import hpLogo from "@/assets/logos/hp.png";
import ibmLogo from "@/assets/logos/ibm.png";
import netappLogo from "@/assets/logos/netapp.png";

const brands = [
  { name: "Lenovo", logo: lenovoLogo },
  { name: "Dell", logo: dellLogo },
  { name: "HP", logo: hpLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "NetApp", logo: netappLogo },
];

const BrandLogos = () => (
  <section className="section-padding border-y border-border/30">
    <div className="max-w-7xl mx-auto">
      {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-bold text-[#29f2f2] uppercase tracking-tighter mb-16 font-display"

      >
        Trusted by Leading Brands
      </motion.p> */}
      <motion.p
  className="text-center text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-16 font-display"
>
  <span className="text-white">Trusted by </span>
  <span className="text-[#1BCFDF] drop-shadow-[0_0_10px_#1BCFDF]">
    Leading Brands
  </span>
</motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-5 gap-8 items-center justify-items-center">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group flex items-center justify-center px-6 py-5 rounded-xl border border-border/30 bg-card/20 w-full cursor-default transition-all duration-300 hover:border-primary/40 hover:bg-card/50 hover:shadow-[0_0_20px_hsl(180_85%_55%/0.15)] hover:scale-105"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
              width={512}
              height={512}
              className="h-25 w-auto object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandLogos;
