import { Twitter, Instagram, Github, Youtube, Twitch } from "lucide-react";

interface SocialLink {
  icon: typeof Twitter;
  href: string;
  label: string;
}

const socials: SocialLink[] = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitch, href: "https://twitch.tv", label: "Twitch" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
];

const SocialIcons = () => {
  return (
    <div
      className="animate-fade-up flex items-center justify-center gap-4"
      style={{ animationDelay: "600ms" }}
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
