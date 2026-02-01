import { forwardRef } from "react";
import { siteContent } from "@/data/siteContent";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = forwardRef<HTMLElement>((_, ref) => {
  if (siteContent.events.length === 0) {
    return null;
  }

  return (
    <section ref={ref} id="events" className="py-16 md:py-24 scroll-mt-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
          Upcoming Events
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Join us for quiet gatherings designed for connection, not performance.
        </p>
      </div>
      
      <div className="grid gap-6 md:gap-8">
        {siteContent.events.map((event, index) => (
          <div
            key={index}
            className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-primary/20 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3">
                  {event.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-secondary" />
                    {event.date} · {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {event.location}
                  </span>
                </div>
                
                <p className="text-foreground/70 max-w-xl">{event.description}</p>
              </div>

              <Button asChild className="md:self-center">
                <a 
                  href={event.rsvpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  RSVP
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

EventsSection.displayName = "EventsSection";

export default EventsSection;
