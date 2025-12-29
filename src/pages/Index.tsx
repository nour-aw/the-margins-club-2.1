import { useRef } from "react";
import { siteContent } from "@/data/siteContent";
import HeroSection from "@/components/HeroSection";
import EventsCard from "@/components/EventsCard";
import LinkCard from "@/components/LinkCard";
import EventsSection from "@/components/EventsSection";
import SupportSection from "@/components/SupportSection";

const Index = () => {
  const eventsRef = useRef<HTMLElement>(null);

  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const hasEvents = siteContent.events.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-[700px] mx-auto px-4 py-8 md:py-12">
        {/* Hero */}
        <HeroSection />

        {/* Main content stack */}
        <div className="space-y-4 mt-8">
          {/* Events card - only show if events exist */}
          {hasEvents && <EventsCard onClick={scrollToEvents} />}

          {/* Link cards */}
          <div className="bg-card rounded-lg p-4 md:p-6 border border-border">
            <div className="space-y-3">
              {siteContent.links.map((link, index) => (
                <LinkCard key={index} label={link.label} href={link.href} />
              ))}
            </div>
          </div>

          {/* Support section */}
          <SupportSection />

          {/* Events section */}
          {hasEvents && <EventsSection ref={eventsRef} />}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The Margins Club</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
