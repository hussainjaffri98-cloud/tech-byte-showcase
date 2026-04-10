import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Instagram, Twitter, Youtube, Github } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20 md:pt-24">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-display text-sm font-medium uppercase tracking-widest mb-3 block">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Have a question, suggestion, or just want to say hello? We'd love to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: Mail, text: "info@ttbi.co.uk" },
                  { icon: Phone, text: "+44 7787 454955" },
                  { icon: MapPin, text: "San Francisco, CA" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 hover:translate-y-0 hover:shadow-none"
            >
              <div className="space-y-6">
                {[
                  { label: "Name", type: "text", key: "name" as const, placeholder: "Your name" },
                  { label: "Email", type: "email", key: "email" as const, placeholder: "you@example.com" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-display font-medium text-foreground mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.key]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 font-body"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-display font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 font-body resize-none"
                  />
                </div>
                <button type="submit" className="glow-button w-full py-4 rounded-lg inline-flex items-center justify-center gap-2 text-base">
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
