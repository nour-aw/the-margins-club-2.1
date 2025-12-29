import { Heart } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const SupportSection = () => {
  return (
    <section>
      <div className="bg-card rounded-lg p-6 border border-border">
        <h2 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
          <Heart className="w-4 h-4 text-accent" />
          Support Us
        </h2>
        
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

export default SupportSection;
