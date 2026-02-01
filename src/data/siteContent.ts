// All site content lives here - edit this file to update the site

export const siteContent = {
  // Hero
  hero: {
    headline: "A community for readers, writers, and creatives.",
    description: "We host quiet reading nights, journaling nights, creative workshops, and literary gatherings. Our events are low pressure, intentional, and designed for real connection—not performance.",
    primaryCta: {
      label: "View Events",
      href: "#events",
    },
    secondaryCta: {
      label: "Join the Community",
      href: "https://instagram.com/themarginsclub",
    },
  },

  // Manifesto / Philosophy
  manifesto: [
    "The main text tells you how life should go.",
    "The margins are where you choose for yourself.",
    "Choose what makes you feel alive.",
    "Question the narrative.",
    "Write your own story.",
    "In the margins.",
  ],

  // Social links
  social: {
    instagram: "https://instagram.com/themarginsclub",
    email: "hello@themarginsclub.com",
  },

  // Community shelf links (book cover style)
  shelfLinks: [
    {
      title: "Community Bookshelf",
      subtitle: "What we're reading",
      helperText: "Browse books →",
      href: "https://buttered-pipe-997.notion.site/1b674207413580d6b8e5e202a7d11034?v=1b674207413580ca9dae000cb70a4a4d",
    },
    {
      title: "Add Your Book",
      subtitle: "Share your current read",
      helperText: "Add yours →",
      href: "https://noteforms.com/forms/what-are-you-reading-efd3ig",
    },
    {
      title: "Book Club Directory",
      subtitle: "Find your people",
      helperText: "Explore clubs →",
      href: "https://buttered-pipe-997.notion.site/1b6742074135800b9e15f97e0388f85b?v=1b67420741358063a98a000c8e7a9b96",
    },
    {
      title: "Add Your Club",
      subtitle: "List your book club",
      helperText: "Submit →",
      href: "https://noteforms.com/forms/the-margins-club-book-club-directory-hzke2b",
    },
  ],

  // Support
  support: {
    label: "Buy Us a Coffee (or a Book!)",
    href: "https://buymeacoffee.com/themarginsclub",
  },

  // Event types
  eventTypes: [
    {
      title: "Quiet Reading Nights",
      description: "Bring your own book. Read in the company of others. No discussion required.",
    },
    {
      title: "Journaling Nights",
      description: "Prompts, stillness, and space to reflect. Write for yourself, not an audience.",
    },
    {
      title: "Creative Workshops",
      description: "Hands-on sessions exploring writing, zines, poetry, and other creative forms.",
    },
    {
      title: "Pop-ups & Collaborations",
      description: "Special events with cafés, bookshops, libraries, and cultural partners.",
    },
  ],

  // How events work
  howItWorks: [
    {
      step: "Arrival & settling in",
      description: "Find a seat, get comfortable, order a drink if you'd like.",
    },
    {
      step: "Reading or writing time",
      description: "The main event. Quiet, focused, shared stillness.",
    },
    {
      step: "Optional sharing",
      description: "Share what you're reading or writing—only if you want to.",
    },
    {
      step: "Phones away",
      description: "We encourage disconnecting for the duration.",
    },
    {
      step: "Clear start & end",
      description: "Events have defined times. No awkward lingering.",
    },
  ],

  // Community section
  community: {
    headline: "Who this is for",
    description: "People who value calm over chaos. Ideas over small talk. Presence over performance. If you crave intentional connection and quiet spaces to think, you belong here.",
    cta: {
      label: "Follow on Instagram",
      href: "https://instagram.com/themarginsclub",
    },
  },

  // Collaborate section
  collaborate: {
    headline: "Partner with us",
    description: "We work with cafés, libraries, bookshops, cultural organizations, and brands who share our values. Paid programming available for private events, corporate wellness, and community partnerships.",
    cta: {
      label: "Get in Touch",
      href: "https://noteforms.com/forms/the-margins-club-collaboration-form-mrzlik",
    },
  },

  // Upcoming events - UPDATED with real events
  events: [
    {
      title: "Quiet Reading Night with an Antiquarian Book Browse",
      date: "February 5, 2025",
      time: "7:00 PM EST",
      location: "KW Region",
      description: "A calm evening of silent reading paired with an antiquarian book browse.",
      rsvpLink: "https://www.eventbrite.ca/e/the-margins-club-quiet-reading-night-antiquarian-book-browse-feb-5th-tickets-1981326136811",
    },
    {
      title: "Journaling and Love Letters Night",
      date: "February 9, 2025",
      time: "7:00 PM EST",
      location: "KW Region",
      description: "A Valentine's edition journaling and letter writing night.",
      rsvpLink: "https://www.eventbrite.ca/e/the-margins-club-journallinglove-letters-night-feb-9th-tickets-1981327488855",
    },
    {
      title: "Quiet Reading Night",
      date: "February 19, 2025",
      time: "7:00 PM EST",
      location: "KW Region",
      description: "A low pressure, silent group reading night with optional sharing.",
      rsvpLink: "https://www.eventbrite.ca/e/the-margins-club-quiet-reading-night-feb-19th-tickets-1981327393570",
    },
  ],

  // Footer
  footer: {
    mission: "Rethinking how we gather. One quiet night at a time.",
    location: "KW and beyond",
    navLinks: [
      { label: "Events", href: "#events" },
      { label: "About", href: "#manifesto" },
      { label: "Contact", href: "mailto:hello@themarginsclub.com" },
    ],
  },
};

export type SiteContent = typeof siteContent;
