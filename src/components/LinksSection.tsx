import { siteContent } from "@/data/siteContent";
import BookCoverCard from "./BookCoverCard";
import { Heart } from "lucide-react";

const LinksSection = () => {
  return (
    <section className="py-16 md:py-24">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          The Community Shelf
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Browse, share, and discover. A collection of resources from the margins.
        </p>
      </div>

      {/* Book covers grid - responsive */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {siteContent.shelfLinks.map((link, index) => (
          <BookCoverCard
            key={index}
            title={link.title}
            subtitle={link.subtitle}
            helperText={link.helperText}
            href={link.href}
          />
        ))}
      </div>

      {/* Support section */}
      <div className="bg-card rounded-lg p-6 border border-border max-w-md mx-auto">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-accent" />
          Support Us
        </h3>
        
        <a
          href={siteContent.support.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <div className="bg-primary text-primary-foreground rounded-lg px-5 py-4 text-center font-medium transition-all duration-200 hover:opacity-90">
            {siteContent.support.label}
          </div>
        </a>
      </div>
    </section>
  );
};

export default LinksSection;
