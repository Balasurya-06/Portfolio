import HomePage from "@/components/pages/home"

const SITE_URL = "https://balasurya.me"

export const metadata = {
  title: "Balasurya | Balasurya Suresh | Full Stack Developer and AI Specialist",
  description:
    "Official portfolio of Balasurya (Balasurya Suresh), Full Stack Developer and AI Specialist from Tirupur, India. Explore projects, skills, achievements, and contact details at balasurya.me",
  keywords: [
    "Balasurya",
    "balasurya",
    "Balasurya Suresh",
    "balasurya suresh",
    "Bala Surya",
    "Balasurya S",
    "balasurya.me",
    "Balasurya portfolio",
    "Balasurya Suresh portfolio",
    "Balasurya developer",
    "Balasurya Suresh developer",
    "Full Stack Developer",
    "AI Specialist",
    "Next.js Developer",
    "Vygron Technology",
    "Balasurya Tirupur",
    "Balasurya Suresh Tirupur",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Balasurya | Balasurya Suresh | Full Stack Developer and AI Specialist",
    description:
      "Official portfolio of Balasurya (Balasurya Suresh), Full Stack Developer and AI Specialist from Tirupur, India. Explore projects, skills, achievements, and contact details at balasurya.me",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/red-blazer.png`,
        width: 1200,
        height: 630,
        alt: "Balasurya Portfolio | Balasurya Suresh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balasurya | Balasurya Suresh | Full Stack Developer and AI Specialist",
    description:
      "Official portfolio of Balasurya (Balasurya Suresh), Full Stack Developer and AI Specialist from Tirupur, India.",
    images: [`${SITE_URL}/red-blazer.png`],
  },
}

export default function Home() {
  return <HomePage />
}
