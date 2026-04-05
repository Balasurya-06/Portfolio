import HomePage from "@/components/pages/home"

const SITE_URL = "https://balasurya.me"

export const metadata = {
  title: "Balasurya S | Full Stack Developer and AI Specialist",
  description:
    "Official portfolio of Balasurya S, Full Stack Developer and AI Specialist. Explore projects, skills, achievements, and contact details.",
  keywords: [
    "Balasurya S",
    "balasurya s",
    "Bala Surya",
    "Balasurya",
    "Full Stack Developer",
    "AI Specialist",
    "Next.js Developer",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Balasurya S | Full Stack Developer and AI Specialist",
    description:
      "Official portfolio of Balasurya S, Full Stack Developer and AI Specialist. Explore projects, skills, achievements, and contact details.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/surya-founder.jpg`,
        width: 1200,
        height: 630,
        alt: "Bala Surya Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balasurya S | Full Stack Developer and AI Specialist",
    description:
      "Official portfolio of Balasurya S, Full Stack Developer and AI Specialist.",
    images: [`${SITE_URL}/surya-founder.jpg`],
  },
}

export default function Home() {
  return <HomePage />
}
