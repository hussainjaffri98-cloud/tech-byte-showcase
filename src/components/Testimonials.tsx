import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    logoAlt: "Google",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "The quality of their peripherals is outstanding. My mechanical keyboard has been a game-changer for productivity.",
    rating: 5,
  },
  {
    name: "James Carter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/200px-Microsoft_logo_%282012%29.svg.png",
    logoAlt: "Microsoft",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Fast shipping, premium packaging, and the headphones sound incredible. Definitely my go-to tech store now.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
    logoAlt: "Amazon",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Their customer support is top-notch. Helped me pick the perfect monitor setup for my dual-screen workflow.",
    rating: 4,
  },
  {
    name: "David Kim",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/200px-Samsung_Logo.svg.png",
    logoAlt: "Samsung",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "I've been buying accessories here for over a year. Consistent quality and great deals every time.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          What Our <span className="text-gradient">Customers</span> Say
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real feedback from real people who trust The Tech Byte Innovations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="glass-card p-6 flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 shadow-lg shadow-primary/10 mb-4"
              loading="lazy"
            />
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${s < t.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              "{t.text}"
            </p>
            <h4 className="font-display font-semibold text-foreground text-sm">{t.name}</h4>
            <span className="text-xs text-muted-foreground">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
