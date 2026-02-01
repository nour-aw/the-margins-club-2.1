import { siteContent } from "@/data/siteContent";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="bg-card rounded-lg p-8 md:p-12 border border-border text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          {siteContent.community.headline}
        </h2>
        
        <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
          {siteContent.community.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              Join the Mailing List
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
