import { siteContent } from "@/data/siteContent";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Mission */}
        <p className="font-serif text-lg text-foreground/80 max-w-md">
          {siteContent.footer.mission}
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6">
          {siteContent.footer.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href={siteContent.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${siteContent.social.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Location & Copyright */}
        <div className="text-sm text-muted-foreground space-y-1">
          <p>{siteContent.footer.location}</p>
          <p>© {new Date().getFullYear()} The Margins Club</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
