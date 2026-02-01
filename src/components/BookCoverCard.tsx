import { useState } from "react";

interface BookCoverCardProps {
  title: string;
  subtitle?: string;
  helperText?: string;
  href: string;
}

const BookCoverCard = ({ title, subtitle, helperText, href }: BookCoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[2/3] bg-card rounded-sm border border-border shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between p-5 overflow-hidden">
        {/* Subtle spine effect */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-r from-border to-transparent" />
        
        {/* Top area - decorative line */}
        <div className="w-8 h-[2px] bg-secondary/50" />
        
        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center text-center px-2">
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground leading-tight mb-2">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground leading-snug">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Bottom area - helper text on hover */}
        <div className="h-8 flex items-end justify-center">
          <span 
            className={`text-xs text-accent font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {helperText || "Open →"}
          </span>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-border/50 rounded-br-sm" />
      </div>
    </a>
  );
};

export default BookCoverCard;
