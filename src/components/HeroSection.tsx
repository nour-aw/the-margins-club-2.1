import { Instagram, Mail } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-16">
      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
        <span className="watermark-text font-serif font-bold text-primary">
          THE MARGINS CLUB
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="The Margins Club - Est 2025 - KW Region" 
            className="w-64 md:w-80 h-auto"
          />
        </div>

        {/* Mission */}
        <p className="max-w-md text-lg md:text-xl text-foreground/80 font-serif italic leading-relaxed mb-8">
          {siteContent.mission}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href={siteContent.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${siteContent.social.email}`}
            className="text-primary hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
