import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

/* ─── SOCIAL PROFILES ──────────────────────────────────────────── */
const GITHUB    = "https://github.com/Balasurya-06"
const INSTAGRAM = "https://www.instagram.com/surya.007._"
const LINKEDIN  = "https://www.linkedin.com/in/balasurya06/"
const EMAIL     = "mailto:balasurya9597@gmail.com"
const SITE_URL  = "https://balasurya02.vercel.app"
const OG_IMAGE  = `${SITE_URL}/red-blazer.png`
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const BING_SITE_VERIFICATION = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
const YANDEX_SITE_VERIFICATION = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION

/* ─── METADATA ─────────────────────────────────────────────────── */
export const metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Titles ── */
  title: {
    default:  "Balasurya | Balasurya Suresh | Full Stack Developer, AI Specialist, Founder of Vygron Technology",
    template: "%s | Balasurya Suresh – Full Stack Developer & AI Specialist",
  },

  /* ── Description ── */
  description:
    "Balasurya (Balasurya Suresh) is a top Full Stack Developer, AI Specialist, and Founder of Vygron Technology based in Tirupur, Tamil Nadu, India. Expert in Next.js, React, Node.js, Agentic AI, LLM Integration, and scalable web/mobile solutions. Explore Balasurya's portfolio, projects, and achievements at balasurya02.vercel.app",

  abstract:
    "Official portfolio of Balasurya (Balasurya Suresh, Bala Surya S), Full Stack Developer and AI Specialist from Tirupur, Tamil Nadu, India.",

  /* ── Keywords ── */
  keywords: [
    "Balasurya S",
    "balasurya s",
    /* ── Name & Personal Branding ─────────────────────────── */
    "Bala Surya", "Balasurya", "Balasurya Suresh", "Bala Surya S", "S Bala Surya",
    "Surya Suresh", "Surya Suresh Vygron", "Surya Suresh KAHE", "Surya Suresh Paruvai", "Surya Suresh Palladam",
    "Surya Suresh Tirupur", "Surya Suresh Portfolio", "surya-suresh.me", "balasurya02.vercel.app", "balasurya.in",
    "Bala Surya Vygron", "Balasurya KAHE", "Bala Surya Paruvai", "Bala Surya Palladam",
    "Bala Surya Tirupur", "Bala Surya Portfolio", "balasurya02.vercel.app", "balasurya.in",
    "Balasurya Suresh Full Stack Developer", "Balasurya Suresh AI Specialist", "Surya Suresh Full Stack Developer", "Surya Suresh AI Specialist",
    "Balasurya Suresh Software Architect", "Surya Suresh Software Architect", "Balasurya Suresh Web Developer", "Surya Suresh Web Developer",
    "Balasurya Suresh Next.js", "Surya Suresh Next.js", "Balasurya Suresh React.js", "Surya Suresh React.js",
    "Balasurya Suresh Node.js", "Surya Suresh Node.js", "Balasurya Suresh Python", "Surya Suresh Python",
    "Balasurya Suresh AI", "Surya Suresh AI", "Balasurya Suresh Agentic AI", "Surya Suresh Agentic AI",
    "Balasurya Suresh LLM", "Surya Suresh LLM", "Balasurya Suresh Tirupur", "Surya Suresh Tirupur",
    "Balasurya Suresh Portfolio", "Surya Suresh Portfolio",

    /* ── Social Profiles ───────────────────────────────────── */
    "Balasurya GitHub", "Balasurya-06 GitHub", "github.com/Balasurya-06",
    "Balasurya Instagram", "surya.007._ Instagram",
    "Balasurya LinkedIn", "linkedin.com/in/balasurya06",
    "balasurya9597@gmail.com",

    /* ── Titles & Roles ────────────────────────────────────── */
    "Founder of Vygron", "CEO Vygron Technology", "Vygron Tech Founder",
    "Student Entrepreneur India", "Youngest CEO Tirupur", "Technical Lead India",
    "Full Stack Developer", "AI Engineer", "Software Architect",
    "Freelance Web Developer Tirupur", "Best Developer 2024", "Best Developer 2025",
    "Open Source Contributor", "Hackathon Mentor", "Startup Consultant",

    /* ── Frontend ──────────────────────────────────────────── */
    "Next.js Expert", "React.js Developer", "React Native Developer",
    "TypeScript Specialist", "Tailwind CSS Developer", "Redux Toolkit",
    "Framer Motion Animations", "Three.js", "WebGL", "Progressive Web Apps PWA",
    "Responsive Web Design", "UI UX Developer",

    /* ── Backend & Database ────────────────────────────────── */
    "Node.js Developer", "Express.js", "Python Developer", "Django",
    "FastAPI", "GoLang", "PostgreSQL", "MongoDB", "Redis",
    "Firebase Developer", "Supabase", "GraphQL", "REST API Design",
    "Microservices Architecture",

    /* ── AI / ML / Emerging Tech ───────────────────────────── */
    "Agentic AI Developer", "Generative AI Solutions", "LLM Integration",
    "OpenAI API Expert", "Hugging Face", "Computer Vision Engineer",
    "TensorFlow", "PyTorch", "NLP Specialist", "Chatbot Development",
    "AI Automation", "Prompt Engineering", "RAG Systems",
    "Metaverse Development", "AR VR Solutions", "Blockchain Basics",

    /* ── DevOps & Cloud ────────────────────────────────────── */
    "AWS Cloud", "Docker", "Kubernetes", "CI CD Pipelines",
    "Vercel Deployment", "Google Cloud Platform", "Nginx",
    "Linux Administration", "Cloud Architecture",

    /* ── Services ──────────────────────────────────────────── */
    "Custom Web Application Development", "Mobile App Development Android iOS",
    "E-commerce Solutions", "AI Consulting Services",
    "MVP Development for Startups", "SaaS Product Development",
    "Website Redesign Services", "SEO Optimization Services",
    "Performance Tuning", "API Development", "Web Scraping",

    /* ── Location – Hyperlocal ─────────────────────────────── */
    "Web Design Paruvai", "Software Company Palladam",
    "Best IT Services Tirupur", "Web Development Coimbatore",
    "Top Developer Tamil Nadu", "Tech Startup South India",
    "Digital Agency Tirupur", "Software Development Company Coimbatore",
    "Website Developers Tirupur", "App Developers Erode",
    "Tech Services Pollachi", "IT Solutions Udumalpet",
    "Full Stack Developer Chennai", "AI Developer Bangalore",

    /* ── Education & Achievements ─────────────────────────── */
    "Karpagam Academy of Higher Education", "KAHE CSE Final Year",
    "CSE Department KAHE", "Karpagam Innovation",
    "Hackathon Winner", "Smart India Hackathon SIH 2024 2025",
    "IEEE Chair KAHE", "ICSCIS Developer",
    "HackSprint 2.0 Organizer", "Metaverse Students Association Head",
    "Anti Terrorism Squad Tech Partner",
  ],

  /* ── Authors & Publisher ── */
  authors:     [
    { name: "Balasurya S", url: SITE_URL },
    { name: "Bala Surya S", url: SITE_URL },
    { name: "Balasurya Suresh", url: SITE_URL },
    { name: "Surya Suresh", url: SITE_URL }
  ],
  creator:     "Balasurya S, Bala Surya S, Balasurya Suresh, Surya Suresh",
  publisher:   "Vygron Technology",
  category:    "Technology, Software Development, Artificial Intelligence",
  generator:   "Next.js",
  applicationName: "Bala Surya Portfolio",
  referrer:    "origin-when-cross-origin",

  /* ── Robots ── */
  robots: {
    index:  true,
    follow: true,
    nocache: false,
    googleBot: {
      index:  true,
      follow: true,
      noimageindex: false,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },

  /* ── Canonical & Alternates ── */
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "en": SITE_URL,
    },
  },

  /* ── Open Graph ── */
  openGraph: {
    type:        "profile",
    locale:      "en_IN",
    alternateLocale: ["en_US"],
    url:         SITE_URL,
    title:       "Balasurya | Balasurya Suresh | Full Stack Developer, AI Specialist, Founder of Vygron",
    description:
      "Balasurya (Balasurya Suresh) is a top Full Stack Developer, AI Specialist, and Founder of Vygron Technology based in Tirupur, Tamil Nadu, India. Explore Balasurya's portfolio, projects, and achievements at balasurya02.vercel.app",
    siteName: "Balasurya Portfolio | Balasurya Suresh",
    firstName: "Bala Surya",
    lastName:  "S",
    username:  "balasurya06",
    gender:    "male",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    "Bala Surya – Founder of Vygron Technology | Full Stack Developer & AI Specialist",
        type:   "image/jpeg",
      },
      {
        url:    `${SITE_URL}/surya4.png`,
        width:  800,
        height: 800,
        alt:    "Bala Surya – AI Specialist & Software Architect",
        type:   "image/png",
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card:        "summary_large_image",
    site:        "@balasurya_06",
    creator:     "@balasurya_06",
    title:       "Balasurya | Balasurya Suresh | Full Stack Developer, AI Specialist, Founder of Vygron",
    description:
      "Balasurya (Balasurya Suresh) is a top Full Stack Developer, AI Specialist, and Founder of Vygron Technology based in Tirupur, Tamil Nadu, India.",
    images: [
      {
        url:   OG_IMAGE,
        alt:   "Bala Surya – Full Stack Developer & AI Specialist | Founder Vygron Technology",
        width: 1200,
        height: 630,
      },
    ],
  },

  /* ── Icons / Favicon ── */
  icons: {
    icon:    [
      { url: "/red-blazer.png", type: "image/jpeg" },
      { url: "/red-blazer.png", sizes: "32x32",  type: "image/jpeg" },
      { url: "/red-blazer.png", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/red-blazer.png",
    apple:    [
      { url: "/red-blazer.png", sizes: "180x180", type: "image/jpeg" },
    ],
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/red-blazer.png" },
      { rel: "mask-icon",                    url: "/red-blazer.png", color: "#000000" },
    ],
  },

  /* ── Verification ── */
  verification: {
    google:  GOOGLE_SITE_VERIFICATION,
    yandex:  YANDEX_SITE_VERIFICATION,
    bing:    BING_SITE_VERIFICATION,
  },

  other: {
    subject: "Balasurya Portfolio | Balasurya Suresh",
    topic: "Full Stack Development and AI Engineering",
    url: SITE_URL,
    "profile:username": "balasurya06",
    "geo.region": "IN-TN",
    "geo.placename": "Tirupur, Tamil Nadu, India",
    name: "Balasurya | Balasurya Suresh",
    identifier: "balasurya",
    "alternate-domain": "balasurya.in",
  },

  /* ── Extra Meta ── */
  manifest: "/site.webmanifest",

  appleWebApp: {
    capable:            true,
    statusBarStyle:     "black-translucent",
    title:              "Balasurya | Balasurya Suresh Portfolio",
  },

  formatDetection: {
    email:     false,
    address:   false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Favicon ── */}
        <link rel="icon"       href="/red-blazer.png" />
        <link rel="shortcut icon" href="/red-blazer.png" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/red-blazer.png" />

        {/* ── Canonical ── */}
        <link rel="canonical" href="https://balasurya02.vercel.app" />

        {/* ── Preconnect for performance ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Geo / Region meta ── */}
        <meta name="geo.region"      content="IN-TN" />
        <meta name="geo.placename"   content="Tirupur, Tamil Nadu, India" />
        <meta name="geo.position"    content="11.1085;77.3411" />
        <meta name="ICBM"            content="11.1085, 77.3411" />

        {/* ── Language & Content ── */}
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="language"     content="English" />
        <meta name="rating"       content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="coverage"     content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="classification" content="Technology, Software Development, AI" />
        <meta name="subject" content="Balasurya Portfolio | Balasurya Suresh" />
        <meta name="topic" content="Full Stack Development and AI Engineering" />
        <meta name="url" content="https://balasurya02.vercel.app" />

        {/* ── Brand & Identity Meta Tags ── */}
        <meta name="identifier-url" content="https://balasurya02.vercel.app" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Balasurya | Balasurya Suresh Portfolio" />
        <meta name="category" content="Technology" />
        <meta name="copyright" content="Balasurya Suresh" />

        {/* ── SEO-Critical Brand Keywords ── */}
        <meta name="og:site_name" content="Balasurya | Balasurya Suresh" />
        <meta name="application-name" content="Balasurya Portfolio" />
        <meta name="msapplication-tooltip" content="Balasurya Suresh - Full Stack Developer" />
        <meta name="DC.title" content="Balasurya | Balasurya Suresh Portfolio" />
        <meta name="DC.creator" content="Balasurya Suresh" />
        <meta name="DC.subject" content="Full Stack Development, AI Engineering" />
        <meta name="DC.description" content="Official portfolio of Balasurya (Balasurya Suresh)" />

        {/* ── Social Profile Links ── */}
        <link rel="me" href="https://github.com/Balasurya-06" />
        <link rel="me" href="https://www.linkedin.com/in/balasurya06/" />
        <link rel="me" href="https://www.instagram.com/surya.007._" />
        <link rel="me" href="mailto:balasurya9597@gmail.com" />
        <link rel="author" href="https://balasurya02.vercel.app" />

        {/* ── Profile meta ── */}
        <meta name="author"       content="Balasurya Suresh" />
        <meta name="designer"     content="Balasurya Suresh" />
        <meta name="owner"        content="Balasurya Suresh" />
        <meta name="contact"      content="balasurya9597@gmail.com" />
        <meta name="reply-to"     content="balasurya9597@gmail.com" />

        {/* ── Person & Brand Identity ── */}
        <meta name="person" content="Balasurya" />
        <meta name="fullname" content="Balasurya Suresh" />
        <meta name="nickname" content="Balasurya" />
        <meta name="given-name" content="Bala Surya" />
        <meta name="family-name" content="S" />

        {/* ── OpenGraph extra ── */}
        <meta property="profile:first_name" content="Bala Surya" />
        <meta property="profile:last_name"  content="S" />
        <meta property="profile:username"   content="balasurya06" />

        {/* ── Pinterest / Rich-pin ── */}
        <meta name="pinterest-rich-pin" content="true" />
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>

        {/* ═══════════════════════════════════════════════════════
            JSON-LD Structured Data — Multiple Schemas
            ═══════════════════════════════════════════════════════ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [

                /* ── 1. Person ─────────────────────────────── */
                {
                  "@type":     "Person",
                  "@id":       `${SITE_URL}/#person`,
                  "name":      "Balasurya",
                  "givenName": "Bala Surya",
                  "familyName": "Suresh",
                  "additionalName": "S",
                  "alternateName": ["Balasurya Suresh", "Bala Surya", "Balasurya S", "Bala Surya S", "S Bala Surya", "Surya Suresh"],
                  "identifier": "balasurya",
                  "disambiguatingDescription": "Balasurya (Balasurya Suresh) - Full Stack Developer, AI Specialist, and Founder of Vygron Technology from Tirupur, Tamil Nadu, India",
                  "url":       SITE_URL,
                  "image": {
                    "@type":       "ImageObject",
                    "url":          OG_IMAGE,
                    "width":        1200,
                    "height":       630,
                    "caption":      "Bala Surya S – Founder of Vygron Technology | Full Stack Developer & AI Specialist",
                    "contentUrl":   OG_IMAGE,
                    "license":      SITE_URL,
                    "acquireLicensePage": `${SITE_URL}/contact`,
                    "creditText":   "Bala Surya S",
                    "creator": {
                      "@type": "Person",
                      "name":  "Bala Surya S"
                    }
                  },
                  "sameAs": [
                    GITHUB,
                    INSTAGRAM,
                    LINKEDIN,
                    "https://balasurya02.vercel.app",
                    "https://balasurya.in",
                  ],
                  "email":     "balasurya9597@gmail.com",
                  "jobTitle":  "Full Stack Developer & AI Specialist",
                  "description":
                    "Balasurya (Balasurya Suresh) is the Founder of Vygron Technology and a leading Full Stack Developer & AI Specialist based in Paruvai, Palladam, Tirupur, Tamil Nadu, India. Expert in Next.js, React, Node.js, Agentic AI, and Scalable Web Solutions.",
                  "knowsAbout": [
                    "Next.js", "React.js", "Node.js", "Python", "Agentic AI",
                    "LLM Integration", "Generative AI", "Full Stack Development",
                    "Mobile App Development", "Cloud Architecture", "DevOps",
                  ],
                  "hasOccupation": {
                    "@type":         "Occupation",
                    "name":          "Full Stack Developer & AI Specialist",
                    "occupationLocation": {
                      "@type":    "Country",
                      "name":     "India"
                    }
                  },
                  "worksFor": {
                    "@type": "Organization",
                    "@id":   `${SITE_URL}/#organization`,
                    "name":  "Vygron Technology"
                  },
                  "founder": {
                    "@type": "Organization",
                    "name": "Vygron Technology",
                    "url": SITE_URL
                  },
                  "alumniOf": {
                    "@type": "EducationalOrganization",
                    "name":  "Karpagam Academy of Higher Education (KAHE)",
                    "url":   "https://kahedu.edu.in"
                  },
                  "address": {
                    "@type":              "PostalAddress",
                    "streetAddress":       "Paruvai",
                    "addressLocality":    "Palladam",
                    "addressRegion":      "Tirupur, Tamil Nadu",
                    "postalCode":         "641662",
                    "addressCountry":     "IN"
                  },
                  "nationality": {
                    "@type": "Country",
                    "name":  "India"
                  },
                  "contactPoint": [
                    {
                      "@type":        "ContactPoint",
                      "email":        "balasurya9597@gmail.com",
                      "contactType":  "Personal",
                      "areaServed":   "IN",
                      "availableLanguage": ["English", "Tamil"]
                    }
                  ]
                },

                /* ── 2. Organization ────────────────────────── */
                {
                  "@type":       "Organization",
                  "@id":         `${SITE_URL}/#organization`,
                  "name":        "Vygron Technology",
                  "alternateName": "Vygron Tech",
                  "legalName":   "Vygron Technology",
                  "url":         SITE_URL,
                  "logo": {
                    "@type":       "ImageObject",
                    "url":          `${SITE_URL}/vygron.png`,
                    "width":        512,
                    "height":       512,
                    "caption":      "Vygron Technology Logo"
                  },
                  "image":         `${SITE_URL}/red-blazer.png`,
                  "description":
                    "Vygron Technology is a software development company founded by Balasurya (Balasurya Suresh), specialising in Full Stack Web Development, AI Solutions, Mobile Apps, and SaaS Products.",
                  "founder": {
                    "@type": "Person",
                    "@id":   `${SITE_URL}/#person`,
                    "name":  "Balasurya Suresh"
                  },
                  "foundingDate": "2023",
                  "areaServed":   "Worldwide",
                  "sameAs": [
                    GITHUB,
                    LINKEDIN,
                  ],
                  "address": {
                    "@type":           "PostalAddress",
                    "streetAddress":   "Paruvai",
                    "addressLocality": "Palladam",
                    "addressRegion":   "Tirupur, Tamil Nadu",
                    "postalCode":      "641662",
                    "addressCountry":  "IN"
                  },
                  "contactPoint": {
                    "@type":       "ContactPoint",
                    "email":       "balasurya9597@gmail.com",
                    "contactType": "customer support",
                    "areaServed":  "IN"
                  }
                },

                /* ── 3. WebSite ─────────────────────────────── */
                {
                  "@type":         "WebSite",
                  "@id":           `${SITE_URL}/#website`,
                  "url":           SITE_URL,
                  "name":          "Balasurya Portfolio | Balasurya Suresh",
                  "alternateName": "Balasurya.me",
                  "description":
                    "Official portfolio website of Balasurya (Balasurya Suresh) – Full Stack Developer, AI Specialist & Founder of Vygron Technology.",
                  "publisher": {
                    "@type": "Person",
                    "@id":   `${SITE_URL}/#person`
                  },
                  "inLanguage":    "en-IN",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://balasurya02.vercel.app?s={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },

                /* ── 4. WebPage / ProfilePage ───────────────── */
                {
                  "@type":         "ProfilePage",
                  "@id":           `${SITE_URL}/#profilepage`,
                  "url":           SITE_URL,
                  "name":          "Balasurya | Balasurya Suresh | Full Stack Developer & AI Specialist Portfolio",
                  "isPartOf":      { "@id": `${SITE_URL}/#website` },
                  "about":         { "@id": `${SITE_URL}/#person` },
                  "mainEntity":    { "@id": `${SITE_URL}/#person` },
                  "inLanguage":    "en-IN",
                  "datePublished": "2023-01-01",
                  "dateModified":  "2026-06-19",
                  "image": {
                    "@type":   "ImageObject",
                    "url":      OG_IMAGE,
                    "width":    1200,
                    "height":   630,
                    "caption":  "Bala Surya S – Full Stack Developer & AI Specialist"
                  }
                },

                /* ── 5. Service ─────────────────────────────── */
                {
                  "@type": "Service",
                  "@id": `${SITE_URL}/#service`,
                  "name": "Full Stack Development and AI Engineering Services",
                  "provider": { "@id": `${SITE_URL}/#person` },
                  "areaServed": "Worldwide",
                  "serviceType": [
                    "Full Stack Web Development",
                    "AI Integration",
                    "Portfolio and Business Website Development",
                    "SaaS Product Development"
                  ],
                  "url": SITE_URL
                },

                /* ── 6. FAQPage ─────────────────────────────── */
                {
                  "@type": "FAQPage",
                  "@id": `${SITE_URL}/#faq`,
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Who is Balasurya?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Balasurya (Balasurya Suresh) is a Full Stack Developer, AI Specialist, and Founder of Vygron Technology based in Tirupur, Tamil Nadu, India. Visit balasurya02.vercel.app to explore his portfolio."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Who is Balasurya Suresh?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Balasurya Suresh is a leading Full Stack Developer and AI Specialist from Tirupur, India. He founded Vygron Technology and specializes in Next.js, React, Node.js, and Agentic AI solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What technologies does Balasurya work with?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Balasurya Suresh works with Next.js, React, Node.js, Python, Agentic AI, and LLM integrations to build scalable web and AI solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I contact Balasurya for projects?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can connect with Balasurya Suresh through LinkedIn, GitHub, Instagram, or email at balasurya9597@gmail.com. Visit balasurya02.vercel.app for more contact options."
                      }
                    }
                  ]
                },

                /* ── 7. BreadcrumbList ──────────────────────── */
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type":    "ListItem",
                      "position": 1,
                      "name":     "Home",
                      "item":     SITE_URL
                    },
                    {
                      "@type":    "ListItem",
                      "position": 2,
                      "name":     "Projects",
                      "item":     `${SITE_URL}/#projects`
                    },
                    {
                      "@type":    "ListItem",
                      "position": 3,
                      "name":     "Skills",
                      "item":     `${SITE_URL}/#skills`
                    },
                    {
                      "@type":    "ListItem",
                      "position": 4,
                      "name":     "Contact",
                      "item":     `${SITE_URL}/#contact`
                    }
                  ]
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  )
}
