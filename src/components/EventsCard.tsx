import { Calendar } from "lucide-react";

interface EventsCardProps {
  onClick: () => void;
}

const EventsCard = ({ onClick }: EventsCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group w-full bg-card rounded-lg px-5 py-5 border border-border transition-all duration-200 hover:border-primary/20 text-left"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
          <Calendar className="w-5 h-5 text-primary" />
        </div>
        <div>
          <span className="text-foreground font-semibold text-lg font-serif">
            Upcoming Events
          </span>
          <p className="text-sm text-secondary">See what's happening</p>
        </div>
      </div>
    </button>
  );
};

export default EventsCard;
