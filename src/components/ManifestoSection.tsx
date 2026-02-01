import { siteContent } from "@/data/siteContent";

const ManifestoSection = () => {
  return (
    <section id="manifesto" className="py-16 md:py-24">
      <div className="relative max-w-2xl mx-auto">
        {/* Margin line decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/30 hidden md:block" />
        <div className="absolute left-4 top-0 bottom-0 w-px bg-accent/20 hidden md:block" />
        
        {/* Content styled like margin notes */}
        <div className="md:pl-12 space-y-4">
          {siteContent.manifesto.map((line, index) => (
            <p
              key={index}
              className={`font-serif leading-relaxed ${
                index === siteContent.manifesto.length - 1
                  ? "text-2xl md:text-3xl font-semibold text-accent"
                  : index === 0
                  ? "text-lg md:text-xl text-muted-foreground"
                  : "text-lg md:text-xl text-foreground/80"
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Decorative annotation marks */}
        <div className="absolute -right-2 top-1/4 text-accent/40 text-6xl font-serif hidden lg:block">
          *
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
