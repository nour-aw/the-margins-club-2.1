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
            className="bg-card rounded-lg border border-border hover:border-primary/20 transition-colors overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image placeholder */}
              <div className="md:w-1/3 aspect-[4/3] md:aspect-auto bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/10" />
                <span className="text-muted-foreground/50 text-sm font-medium z-10">Event Image</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                <div>
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
                  
                  <p className="text-foreground/70 max-w-xl mb-6">{event.description}</p>
                </div>

                <Button asChild className="w-fit">
                  <a 
                    href={event.rsvpLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    RSVP Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

EventsSection.displayName = "EventsSection";

export default EventsSection;
