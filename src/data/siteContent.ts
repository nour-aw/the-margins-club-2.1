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
      href: "https://noteforms.com/forms/what-are-you-reading-efd3ig",
    },
    {
      label: "Bookshelf",
      href: "https://buttered-pipe-997.notion.site/1b674207413580d6b8e5e202a7d11034?v=1b674207413580ca9dae000cb70a4a4d",
    },
    {
      label: "Add Your Book Club Here",
      href: "https://noteforms.com/forms/the-margins-club-book-club-directory-hzke2b",
    },
    {
      label: "Book Club Directory",
      href: "https://buttered-pipe-997.notion.site/1b6742074135800b9e15f97e0388f85b?v=1b67420741358063a98a000c8e7a9b96",
    },
    {
      label: "Collaboration Form",
      href: "https://noteforms.com/forms/the-margins-club-collaboration-form-mrzlik",
    },
  ],

  support: {
    label: "Buy Us a Coffee (or a Book!)",
    href: "https://buymeacoffee.com/themarginsclub",
  },

  events: [
    {
      title: "Quiet Reading Night",
      date: "January 15, 2025",
      time: "6:00 PM EST",
      location: "Midnight Run Cafe",
      description: "Bring your own book and read quietly alongside others. A simple evening of shared stillness and reading.",
    },
    {
     title: "Quiet Reading Night",
      date: "January 26, 2025",
      time: "6:00 PM EST",
      location: "Midnight Run Cafe",
      description: "Bring your own book and read quietly alongside others. A simple evening of shared stillness and reading.",
    },
  ],
};

export type SiteContent = typeof siteContent;
