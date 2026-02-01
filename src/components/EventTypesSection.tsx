import { siteContent } from "@/data/siteContent";
import { BookOpen, PenLine, Palette, Sparkles } from "lucide-react";

const icons = [BookOpen, PenLine, Palette, Sparkles];

const EventTypesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          What We Do
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Events designed for presence, not performance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {siteContent.eventTypes.map((type, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={index}
              className="bg-card rounded-lg p-6 border border-border hover:border-primary/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                    {type.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EventTypesSection;
