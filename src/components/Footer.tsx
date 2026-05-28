import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { SiDevpost, SiLinktree } from "react-icons/si";
import logo from "@/assets/hackpeel-logo-horizontal.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 group">
              <span className="text-xl md:text-5xl mb-4 font-bold text-foreground group-hover:text-primary transition-colors">
                hack<span className="text-primary">::</span>peel
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Built with 💙 by Harjap Singh Johar and Aaron Saini.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</Link></li>
              <li><Link to="/workshops" className="text-muted-foreground hover:text-primary transition-colors">Workshops</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="text-muted-foreground hover:text-primary transition-colors">Register</Link></li>
              <li><Link to="/sponsors" className="text-muted-foreground hover:text-primary transition-colors">Sponsor Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/discord" className="text-muted-foreground hover:text-primary transition-colors">Join Discord</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/code-of-conduct" className="text-muted-foreground hover:text-primary transition-colors">Code of Conduct</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} hack::peel — All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="https://linktr.ee/hackpeel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Linktree">
              <SiLinktree className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/hackpeel/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://devpost.com/hackpeel" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Devpost">
              <SiDevpost className="h-5 w-5" />
            </a>
            <a href="mailto:hello@hackpeel.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;