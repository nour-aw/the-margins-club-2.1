import { ArrowRight } from "lucide-react";

interface LinkCardProps {
  label: string;
  href: string;
}

const LinkCard = ({ label, href }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full"
    >
      <div className="flex items-center justify-between bg-card rounded-lg px-5 py-4 border border-border transition-all duration-200 hover:border-primary/20">
        <span className="text-foreground font-medium">{label}</span>
        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border group-hover:border-primary/30 group-hover:bg-muted transition-all duration-200">
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
