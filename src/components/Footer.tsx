import { Link } from "react-router-dom";
import { Zap, Instagram, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground">The Tech Byte Innovations</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium computer accessories for the modern tech enthusiast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@techbyteinnovations.com</li>
            <li>03131027500</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display font-semibold text-foreground mb-4 text-sm">Follow Us</h4>
          <div className="flex gap-4">
            {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border/40 mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 The Tech Byte Innovations. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
