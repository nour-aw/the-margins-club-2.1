import { siteContent } from "@/data/siteContent";
import LinkCard from "./LinkCard";
import { Heart } from "lucide-react";

const LinksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          Quick Links
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Share what you're reading, discover book clubs, and connect with us.
        </p>
      </div>

      <div className="bg-card rounded-lg p-4 md:p-6 border border-border mb-6">
        <div className="space-y-3">
          {siteContent.links.map((link, index) => (
            <LinkCard key={index} label={link.label} href={link.href} />
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="bg-card rounded-lg p-6 border border-border">
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
