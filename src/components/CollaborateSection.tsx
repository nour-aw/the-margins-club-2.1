import { siteContent } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CollaborateSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          {siteContent.collaborate.headline}
        </h2>
        
        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
          {siteContent.collaborate.description}
        </p>

        <Button asChild size="lg">
          <a 
            href={siteContent.collaborate.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            {siteContent.collaborate.cta.label}
            <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CollaborateSection;
