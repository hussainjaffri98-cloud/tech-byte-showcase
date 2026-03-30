import { Link } from "react-router-dom";
import { Zap, Instagram, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => (
  <footer className="bg-card/40 border-t border-border/50">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground">Tech Byte</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium computer accessories for the modern tech enthusiast.
          </p>
          <div className="flex gap-4 mt-6">
            {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {[
          { title: "Shop", items: [{ label: "Keyboards", to: "/products" }, { label: "Mouse", to: "/products" }, { label: "Headphones", to: "/products" }, { label: "Monitors", to: "/products" }] },
          { title: "Company", items: [{ label: "About Us", to: "/about" }, { label: "Gallery", to: "/gallery" }, { label: "Contact", to: "/contact" }] },
          { title: "Support", items: [{ label: "FAQ", to: "#" }, { label: "Shipping", to: "#" }, { label: "Returns", to: "#" }, { label: "Warranty", to: "#" }] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">{col.title}</h4>
            <ul className="space-y-3">
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border/50 mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 The Tech Byte Innovations. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
