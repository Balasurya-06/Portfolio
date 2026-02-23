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
const SITE_URL  = "https://balasurya.me"
const OG_IMAGE  = `${SITE_URL}/surya-founder.jpg`

/* ─── METADATA ─────────────────────────────────────────────────── */
export const metadata = {
  metadataBase: new URL(SITE_URL),

  /* ── Titles ── */
  title: {
    default:  "Bala Surya S | Founder of Vygron & AI Specialist | Top Full Stack Developer in Tirupur",
    template: "%s | Bala Surya S – Full Stack Developer & AI Specialist",
  },

  /* ── Description ── */
  description:
    "Bala Surya S (Balasurya Suresh) is the Founder of Vygron Technology and a top-rated Full Stack Developer & AI Specialist based in Paruvai, Palladam, Tirupur, Tamil Nadu, India. Expert in Next.js, React, Node.js, Agentic AI, LLM Integration, and Scalable Web & Mobile Solutions. Delivering high-performance digital products for startups and enterprises. View portfolio, projects, and resume.",

  /* ── Keywords ── */
  keywords: [
    /* ── Name & Personal Branding ─────────────────────────── */
    "Bala Surya", "Balasurya", "Balasurya Suresh", "Bala Surya S", "S Bala Surya",
    "Bala Surya Vygron", "Balasurya KAHE", "Bala Surya Paruvai", "Bala Surya Palladam",
    "Bala Surya Tirupur", "Bala Surya Portfolio", "balasurya.me",

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
  authors:     [{ name: "Bala Surya S", url: SITE_URL }],
  creator:     "Bala Surya S",
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
    languages: { "en-IN": `${SITE_URL}/en-IN`, "en-US": `${SITE_URL}/en-US` },
  },

  /* ── Open Graph ── */
  openGraph: {
    type:        "profile",
    locale:      "en_IN",
    url:         SITE_URL,
    title:       "Bala Surya S | Full Stack Developer & AI Specialist – Vygron Technology",
    description:
      "Official portfolio of Bala Surya S — Founder of Vygron Technology, Full Stack Developer, and AI Specialist from Tirupur, Tamil Nadu. Explore projects, skills, and get in touch.",
    siteName: "Bala Surya Portfolio",
    firstName: "Bala Surya",
    lastName:  "S",
    username:  "balasurya06",
    gender:    "male",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    "Bala Surya S – Founder of Vygron Technology | Full Stack Developer & AI Specialist",
        type:   "image/jpeg",
      },
      {
        url:    `${SITE_URL}/surya4.png`,
        width:  800,
        height: 800,
        alt:    "Bala Surya S – AI Specialist & Software Architect",
        type:   "image/png",
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card:        "summary_large_image",
    site:        "@balasurya_06",
    creator:     "@balasurya_06",
    title:       "Bala Surya S | Full Stack Developer & AI Specialist",
    description:
      "Founder of Vygron Technology. Expert in Next.js, Agentic AI & Scalable Web Solutions. Based in Tirupur, Tamil Nadu.",
    images: [
      {
        url:   OG_IMAGE,
        alt:   "Bala Surya S – Full Stack Developer & AI Specialist | Founder Vygron Technology",
        width: 1200,
        height: 630,
      },
    ],
  },

  /* ── Icons / Favicon ── */
  icons: {
    icon:    [
      { url: "/surya-founder.jpg", type: "image/jpeg" },
      { url: "/surya-founder.jpg", sizes: "32x32",  type: "image/jpeg" },
      { url: "/surya-founder.jpg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/surya-founder.jpg",
    apple:    [
      { url: "/surya-founder.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/surya-founder.jpg" },
      { rel: "mask-icon",                    url: "/surya-founder.jpg", color: "#000000" },
    ],
  },

  /* ── Verification ── */
  verification: {
    google:  "verification_token",           // Replace with Google Search Console token
    yandex:  "yandex_verification_token",    // Replace with Yandex token
    bing:    "bing_verification_token",      // Replace with Bing Webmaster token
  },

  /* ── Extra Meta ── */
  manifest: "/site.webmanifest",

  appleWebApp: {
    capable:            true,
    statusBarStyle:     "black-translucent",
    title:              "Bala Surya Portfolio",
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
        <link rel="icon"       href="/surya-founder.jpg" />
        <link rel="shortcut icon" href="/surya-founder.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/surya-founder.jpg" />

        {/* ── Canonical ── */}
        <link rel="canonical" href="https://balasurya.me" />

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

        {/* ── Social Profile Links ── */}
        <link rel="me" href="https://github.com/Balasurya-06" />
        <link rel="me" href="https://www.linkedin.com/in/balasurya06/" />
        <link rel="me" href="https://www.instagram.com/surya.007._" />
        <link rel="me" href="mailto:balasurya9597@gmail.com" />

        {/* ── Profile meta ── */}
        <meta name="author"       content="Bala Surya S" />
        <meta name="designer"     content="Bala Surya S" />
        <meta name="owner"        content="Bala Surya S" />
        <meta name="contact"      content="balasurya9597@gmail.com" />
        <meta name="reply-to"     content="balasurya9597@gmail.com" />

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
                  "name":      "Bala Surya S",
                  "alternateName": ["Balasurya", "Balasurya Suresh", "S Bala Surya"],
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
                    "https://balasurya.me",
                  ],
                  "email":     "balasurya9597@gmail.com",
                  "jobTitle":  "Full Stack Developer & AI Specialist",
                  "description":
                    "Bala Surya S is the Founder of Vygron Technology and a leading Full Stack Developer & AI Specialist based in Paruvai, Palladam, Tirupur, Tamil Nadu, India. Expert in Next.js, React, Node.js, Agentic AI, and Scalable Web Solutions.",
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
                  "url":         SITE_URL,
                  "logo": {
                    "@type":       "ImageObject",
                    "url":          `${SITE_URL}/vygron.png`,
                    "width":        512,
                    "height":       512,
                    "caption":      "Vygron Technology Logo"
                  },
                  "image":         `${SITE_URL}/surya-founder.jpg`,
                  "description":
                    "Vygron Technology is a software development company founded by Bala Surya S, specialising in Full Stack Web Development, AI Solutions, Mobile Apps, and SaaS Products.",
                  "founder": {
                    "@type": "Person",
                    "@id":   `${SITE_URL}/#person`,
                    "name":  "Bala Surya S"
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
                  "name":          "Bala Surya S – Portfolio",
                  "description":
                    "Official portfolio website of Bala Surya S – Full Stack Developer, AI Specialist & Founder of Vygron Technology.",
                  "publisher": {
                    "@type": "Person",
                    "@id":   `${SITE_URL}/#person`
                  },
                  "inLanguage":    "en-IN",
                  "potentialAction": {
                    "@type":       "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": `${SITE_URL}/?s={search_term_string}`
                    },
                    "query-input": "required name=search_term_string"
                  }
                },

                /* ── 4. WebPage / ProfilePage ───────────────── */
                {
                  "@type":         "ProfilePage",
                  "@id":           `${SITE_URL}/#profilepage`,
                  "url":           SITE_URL,
                  "name":          "Bala Surya S | Full Stack Developer & AI Specialist Portfolio",
                  "isPartOf":      { "@id": `${SITE_URL}/#website` },
                  "about":         { "@id": `${SITE_URL}/#person` },
                  "mainEntity":    { "@id": `${SITE_URL}/#person` },
                  "inLanguage":    "en-IN",
                  "dateModified":  "2026-02-23",
                  "image": {
                    "@type":   "ImageObject",
                    "url":      OG_IMAGE,
                    "width":    1200,
                    "height":   630,
                    "caption":  "Bala Surya S – Full Stack Developer & AI Specialist"
                  }
                },

                /* ── 5. BreadcrumbList ──────────────────────── */
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
