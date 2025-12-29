// All site content lives here - edit this file to update the site

export const siteContent = {
  mission: "A community celebrating the joy of reading and the power of shared stories.",
  
  social: {
    instagram: "https://instagram.com/themarginsclub",
    email: "hello@themarginsclub.com",
  },

  links: [
    {
      label: "Add Your Book",
      href: "https://forms.example.com/add-book",
    },
    {
      label: "Bookshelf",
      href: "https://themarginsclub.com/bookshelf",
    },
    {
      label: "Add Your Book Club Here",
      href: "https://forms.example.com/add-club",
    },
    {
      label: "Book Club Directory",
      href: "https://themarginsclub.com/directory",
    },
    {
      label: "Collaboration Form",
      href: "https://forms.example.com/collaborate",
    },
  ],

  support: {
    label: "Buy Us a Coffee (or a Book!)",
    href: "https://buymeacoffee.com/themarginsclub",
  },

  events: [
    {
      title: "Monthly Book Club Meetup",
      date: "January 15, 2025",
      time: "7:00 PM EST",
      location: "Virtual via Zoom",
      description: "Join us for our monthly discussion of this month's pick.",
    },
    {
      title: "Author Q&A: Sarah Chen",
      date: "January 22, 2025",
      time: "6:00 PM EST",
      location: "Brooklyn Public Library",
      description: "An intimate conversation about craft and storytelling.",
    },
  ],
};

export type SiteContent = typeof siteContent;
