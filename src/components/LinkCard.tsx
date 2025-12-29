import { LucideIcon } from "lucide-react";

interface LinkCardProps {
  icon: LucideIcon;
  title: string;
  href: string;
  delay?: number;
}

const LinkCard = ({ icon: Icon, title, href, delay = 0 }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-fade-up group block w-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="glass rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] hover-glow group-hover:border-primary/50">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/20">
            <Icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
          </div>
          <span className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
            {title}
          </span>
          <svg
            className="ml-auto h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
