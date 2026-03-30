import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import { motion } from "framer-motion";
import { Shield, Truck, Headphones, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "2-Year Warranty", desc: "Every product backed by our quality guarantee" },
  { icon: Truck, title: "Free Shipping", desc: "On all orders over $99 worldwide" },
  { icon: Headphones, title: "24/7 Support", desc: "Expert help whenever you need it" },
  { icon: Award, title: "Premium Quality", desc: "Rigorously tested for peak performance" },
];

const Index = () => (
  <div>
    <HeroSection />
    <FeaturedProducts />

    {/* Features strip */}
    <section className="section-padding bg-card/30 border-y border-border/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Index;
