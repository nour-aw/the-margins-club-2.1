import { siteContent } from "@/data/siteContent";

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Simple, intentional, no pressure.
        </p>
      </div>

      <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
        <div className="grid gap-0">
          {siteContent.howItWorks.map((item, index) => (
            <div
              key={index}
              className={`flex gap-4 md:gap-6 py-5 ${
                index !== siteContent.howItWorks.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-primary font-medium text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h3 className="font-serif font-medium text-foreground mb-1">
                  {item.step}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
