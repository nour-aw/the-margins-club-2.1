import { Link, Music, ShoppingBag, MessageCircle, Calendar } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import SocialIcons from "@/components/SocialIcons";

const links = [
  {
    icon: Link,
    title: "My Website",
    href: "https://example.com",
  },
  {
    icon: Music,
    title: "Listen on Spotify",
    href: "https://spotify.com",
  },
  {
    icon: ShoppingBag,
    title: "Shop Merch",
    href: "https://shop.example.com",
  },
  {
    icon: MessageCircle,
    title: "Join Discord",
    href: "https://discord.gg",
  },
  {
    icon: Calendar,
    title: "Book a Call",
    href: "https://calendly.com",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Main content */}
      <main className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center px-6 py-16">
        <ProfileHeader
          name="Your Name"
          bio="Creator, builder, and community enthusiast. Welcome to my corner of the internet ✨"
        />

        {/* Links */}
        <div className="mt-10 flex w-full flex-col gap-4">
          {links.map((link, index) => (
            <LinkCard
              key={link.title}
              icon={link.icon}
              title={link.title}
              href={link.href}
              delay={300 + index * 100}
            />
          ))}
        </div>

        {/* Social icons */}
        <div className="mt-10">
          <SocialIcons />
        </div>

        {/* Footer */}
        <footer
          className="animate-fade-up mt-auto pt-12 text-center text-sm text-muted-foreground"
          style={{ animationDelay: "800ms" }}
        >
          <p>Made with 💙</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
