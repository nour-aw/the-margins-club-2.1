import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import EventsSection from "@/components/EventsSection";
import EventTypesSection from "@/components/EventTypesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommunitySection from "@/components/CommunitySection";
import CollaborateSection from "@/components/CollaborateSection";
import LinksSection from "@/components/LinksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-[800px] mx-auto px-4">
        {/* Hero */}
        <HeroSection />

        {/* Manifesto / Philosophy */}
        <ManifestoSection />

        {/* Upcoming Events */}
        <EventsSection />

        {/* Event Types */}
        <EventTypesSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Community */}
        <CommunitySection />

        {/* Collaborate */}
        <CollaborateSection />

        {/* Quick Links (from bio.site) */}
        <LinksSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
