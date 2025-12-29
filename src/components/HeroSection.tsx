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
        <p className="max-w-lg text-lg md:text-xl text-foreground/80 font-serif leading-relaxed mb-6">
          A community for readers, writers, and creatives in KW. We host quiet reading nights, creative workshops, and literary events to bring people together through the magic of words.
        </p>

        {/* Handwritten tagline with animation */}
        <div className="mb-8">
          <svg
            viewBox="0 0 320 50"
            className="w-72 md:w-80 h-auto handwriting-svg"
            aria-label="Join us in the margins!"
          >
            <text
              x="50%"
              y="35"
              textAnchor="middle"
              className="handwriting-text"
              style={{
                fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
                fontSize: "32px",
                fill: "none",
                stroke: "#E0644E",
                strokeWidth: "1.5",
              }}
            >
              Join us in the margins!
            </text>
            <text
              x="50%"
              y="35"
              textAnchor="middle"
              className="handwriting-fill"
              style={{
                fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
                fontSize: "32px",
                fill: "#E0644E",
              }}
            >
              Join us in the margins!
            </text>
          </svg>
        </div>

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
