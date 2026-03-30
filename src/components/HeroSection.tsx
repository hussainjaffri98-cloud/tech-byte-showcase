import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-setup.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Premium gaming setup" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Next-Gen Tech Accessories</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          Elevate Your
          <br />
          <span className="text-gradient">Digital Experience</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Premium computer accessories engineered for performance, designed for aesthetics. Where innovation meets everyday computing.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/products"
            className="glow-button inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            Explore Products
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground hover:border-primary/50 transition-all duration-300 text-base font-display font-medium"
          >
            Our Story
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
