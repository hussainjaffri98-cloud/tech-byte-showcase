import { motion } from "framer-motion";
import { Target, Lightbulb, Cpu, Users } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";

const values = [
  { icon: Target, title: "Precision Engineering", desc: "Every product is crafted with meticulous attention to detail, ensuring perfect performance in every keystroke and click." },
  { icon: Lightbulb, title: "Innovation First", desc: "We push the boundaries of technology, integrating cutting-edge features that redefine what accessories can do." },
  { icon: Cpu, title: "Premium Materials", desc: "From aircraft-grade aluminum to PBT keycaps, we source only the finest materials for lasting quality." },
  { icon: Users, title: "Community Driven", desc: "Our products are shaped by feedback from a passionate global community of tech enthusiasts and gamers." },
];

const About = () => (
  <div className="pt-20 md:pt-24">
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display text-sm font-medium uppercase tracking-widest mb-3 block">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Redefining the <span className="text-gradient">Tech Lifestyle</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded with a vision to bridge the gap between technology and aesthetics, The Tech Byte Innovations creates premium computer accessories that don't just perform — they inspire.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe your workspace should reflect your ambition. Every product we design merges cutting-edge engineering with striking visual identity, giving you tools that elevate both productivity and style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src={gallery1}
              alt="Tech Byte workspace"
              loading="lazy"
              width={1024}
              height={768}
              className="rounded-2xl w-full object-cover aspect-[4/3] glow-border"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6">
              <p className="text-3xl font-display font-bold text-gradient">5K+</p>
              <p className="text-sm text-muted-foreground">Happy Customers</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-8 flex gap-5"
            >
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 h-fit">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
