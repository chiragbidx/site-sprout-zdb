import { type HeroContent, type SponsorItem, type SponsorsContent, type BenefitItem, type BenefitsContent, type FeatureItem, type FeaturesContent, type ServiceItem, type ServicesContent, type TestimonialItem, type TestimonialsContent, type SocialLink, type TeamMember, type TeamContent, type PricingPlan, type PricingContent, type ContactInfoBlock, type ContactContent, type FaqItem, type FaqContent, type FooterLink, type FooterColumn, type FooterContent, type NavRoute, type NavFeature, type NavbarContent, type HomeContent } from "./home";

// ----- LEADFLOW Content Starts Here -----

export const homeContent: HomeContent = {
  // Hero
  hero: {
    badgeInner: "Grow With LeadFlow",
    badgeOuter: "Simple CRM for Teams",
    titleBefore: "Grow Your Business with",
    titleHighlight: "LeadFlow",
    titleAfter: "",
    subtitle:
      "The CRM built for teams who want to organize leads, track deals, and supercharge their sales process.",
    primaryCta: { label: "Get Started Free", href: "/auth#signup" },
    secondaryCta: { label: "Book a Demo", href: "/#contact" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "LeadFlow dashboard preview",
  },

  sponsors: {
    heading: "Trusted by modern teams",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  benefits: {
    eyebrow: "Why LeadFlow",
    heading: "A CRM built for modern sales teams",
    description:
      "LeadFlow is the sales platform focused on clarity, speed, and collaboration—so your pipeline never stalls.",
    items: [
      {
        icon: "Users",
        title: "Intuitive lead and contact management",
        description: "Easily manage prospects and customers with rich contact profiles.",
      },
      {
        icon: "KanbanSquare",
        title: "Seamless deal tracking and pipeline visualization",
        description: "Track your deals as they move from lead to closed—with a beautiful pipeline view.",
      },
      {
        icon: "Handshake",
        title: "Collaborative tools for your whole sales team",
        description: "Share notes, assign activities, and keep everyone in sync on every opportunity.",
      },
      {
        icon: "Sparkle",
        title: "Simple, no-fuss setup—get started in minutes",
        description: "Sign up fast and see value immediately. No training required.",
      },
    ],
  },

  features: {
    eyebrow: "Why LeadFlow?",
    heading: "Built for teams who want results",
    subtitle:
      "Stop losing leads in cluttered spreadsheets. LeadFlow’s clean dashboard and powerful features keep your pipeline organized and your team closing more deals.",
    items: [
      { icon: "TabletSmartphone", title: "Intuitive lead and contact management", description: "Organize leads, customers, and every detail in one place." },
      { icon: "KanbanSquare", title: "Seamless deal tracking and pipeline", description: "Visualize your deals and progress naturally." },
      { icon: "Users", title: "Team Collaboration", description: "Assign, comment, and track collaboratively." },
      { icon: "Rocket", title: "Easy setup", description: "Start in minutes, not days." }
    ],
  },

  services: {
    eyebrow: "Services",
    heading: "Core CRM Capabilities",
    subtitle:
      "A pragmatic CRM foundation for growth-focused companies.",
    items: [
      { title: "Contact & Lead Management", description: "Centralize all your contacts and easily import/export data.", pro: false },
      { title: "Pipeline & Deal Tracking", description: "Customizable pipeline stages and deal workflows.", pro: false },
      { title: "Activity Logging", description: "Track calls, meetings, emails, and follow-ups all in one CRM.", pro: false },
      { title: "Integrations", description: "Connect with your favorite email and calendar systems.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Testimonial",
    heading: "What sales leaders say",
    reviews: [
      {
        image: "/demo-img.jpg",
        name: "Alex R.",
        role: "Sales Director",
        comment:
          "LeadFlow keeps our pipeline moving and our team aligned. We closed more deals in the first month!",
        rating: 5.0
      }
    ],
  },

  team: {
    eyebrow: "Team",
    heading: "Meet the LeadFlow Team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Product Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/chiragdodiya" },
        ],
      }
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing for every team",
    subtitle: "Start free, pay as you grow. No contracts, no hidden fees.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free",
        popular: false,
        price: 0,
        description: "Perfect to try LeadFlow solo.",
        buttonText: "Get Started Free",
        benefits: ["1 user", "Unlimited contacts", "Basic pipeline", "Email support"],
      },
      {
        title: "Team",
        popular: true,
        price: 29,
        description: "Work together, close more deals.",
        buttonText: "Start Team Plan",
        benefits: ["Up to 10 users", "Collaboration", "Activities & reminders", "Priority support"],
      },
      {
        title: "Growth",
        popular: false,
        price: 79,
        description: "For ambitious teams needing advanced features.",
        buttonText: "Upgrade to Growth",
        benefits: ["Unlimited users", "Advanced analytics & reporting", "Integrations", "Pipeline automation"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Talk to the LeadFlow team",
    description: "Questions about features or pricing, or want to book a demo? We’re here to help.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote-first, India" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "chirag@bidx.ai" },
      hours: { label: "Availability", value: ["Monday - Friday", "9AM - 6PM IST"] },
    },
    formSubjects: [
      "Book a Demo",
      "Feature Request",
      "Pricing Inquiry",
      "Sales Question",
      "Other"
    ],
    formSubmitLabel: "Send request",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Is LeadFlow suitable for my team?", answer: "LeadFlow is built for small to medium teams but flexible enough to grow with you." },
      { question: "Can I import my existing contacts?", answer: "Yes. You can easily import and export contacts via CSV." },
      { question: "Does LeadFlow integrate with email and calendar?", answer: "Yes—calendar and email integrations are coming soon." },
      { question: "Is there a free plan?", answer: "Absolutely! Start on the Free plan and upgrade whenever you’re ready." },
      { question: "How do I reach support?", answer: "Email us at chirag@bidx.ai and we’ll respond as quickly as possible." },
    ],
  },

  footer: {
    brandName: "LeadFlow",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "LinkedIn", href: "https://linkedin.com/in/chiragdodiya" },
        ],
      },
    ],
    copyright: "© 2026 LeadFlow CRM.",
    attribution: { label: "Built with Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "LeadFlow",
    routes: [
      { href: "/#features", label: "Why LeadFlow?" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "LeadFlow preview" },
    features: [
      { title: "Lead & Contact Management", description: "Powerful yet simple tools to organize and manage every relationship." },
      { title: "Deal Tracking & Pipeline", description: "Visual stages and clear workflow for your sales cycle." },
      { title: "Collaboration", description: "Notes, assignments, and team activity built-in." },
    ],
    signInLabel: "Sign In",
    signUpLabel: "Get Started Free",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/", ariaLabel: "View LeadFlow code" },
  },
};

// For backward compatibility. Prefer importing homeContent directly.
export function getHomeContent(): HomeContent {
  return homeContent;
}