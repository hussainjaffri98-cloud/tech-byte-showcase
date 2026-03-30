import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroSetup from "@/assets/hero-setup.jpg";
import keyboard from "@/assets/keyboard.jpg";
import headphones from "@/assets/headphones.jpg";
import monitor from "@/assets/monitor.jpg";

const images = [
  { src: heroSetup, alt: "Ultimate gaming battlestation", span: "md:col-span-2 md:row-span-2" },
  { src: keyboard, alt: "RGB mechanical keyboard" },
  { src: gallery3, alt: "Headphones on stand" },
  { src: gallery2, alt: "Hands on RGB keyboard", span: "md:row-span-2" },
  { src: monitor, alt: "Ultrawide curved display" },
  { src: gallery1, alt: "Ambient desk setup" },
  { src: headphones, alt: "Premium gaming headset" },
  { src: gallery4, alt: "Full battlestation setup", span: "md:col-span-2" },
];

const Gallery = () => (
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
            Showcase
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
            Setup <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            Explore stunning setups powered by our premium accessories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`relative overflow-hidden rounded-xl group ${img.span || ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="font-display font-medium text-foreground">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
