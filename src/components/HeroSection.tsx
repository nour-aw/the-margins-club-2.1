import { Instagram, Mail } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
        <span className="watermark-text font-serif font-bold text-primary">
          THE MARGINS CLUB
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-10">
          <img 
            src={logo} 
            alt="The Margins Club" 
            className="w-48 md:w-64 h-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 max-w-2xl leading-tight">
          {siteContent.hero.headline}
        </h1>

        {/* Description */}
        <p className="max-w-xl text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
          {siteContent.hero.description}
        </p>

        {/* Handwritten tagline with animation */}
        <div className="mb-10">
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
                stroke: "hsl(var(--accent))",
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
                fill: "hsl(var(--accent))",
              }}
            >
              Join us in the margins!
            </text>
          </svg>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Button asChild size="lg" className="text-base px-8">
            <a href={siteContent.hero.primaryCta.href}>
              {siteContent.hero.primaryCta.label}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8">
            <a 
              href={siteContent.hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteContent.hero.secondaryCta.label}
            </a>
          </Button>
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
