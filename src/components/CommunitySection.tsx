import { siteContent } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image placeholder */}
        <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center relative overflow-hidden order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/10" />
          <span className="text-muted-foreground/50 text-sm font-medium z-10">Community Image</span>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            {siteContent.community.headline}
          </h2>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            {siteContent.community.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a 
                href={siteContent.community.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                {siteContent.community.cta.label}
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <a 
                href={`mailto:${siteContent.social.email}`}
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
