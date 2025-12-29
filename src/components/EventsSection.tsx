import { forwardRef } from "react";
import { siteContent } from "@/data/siteContent";
import { MapPin, Clock } from "lucide-react";

const EventsSection = forwardRef<HTMLElement>((_, ref) => {
  if (siteContent.events.length === 0) {
    return null;
  }

  return (
    <section ref={ref} className="scroll-mt-8">
      <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
        <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
          Upcoming Events
        </h2>
        
        <div className="space-y-6">
          {siteContent.events.map((event, index) => (
            <div
              key={index}
              className={`${
                index !== siteContent.events.length - 1
                  ? "pb-6 border-b border-border"
                  : ""
              }`}
            >
              <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                {event.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-2">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-secondary" />
                  {event.date} · {event.time}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {event.location}
                </span>
              </div>
              
              <p className="text-foreground/70">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

EventsSection.displayName = "EventsSection";

export default EventsSection;
