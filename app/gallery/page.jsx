import GalleryPage from "@/components/pages/gallery"

export const metadata = {
  title: "Gallery | Balasurya S Portfolio",
  description:
    "Browse the gallery of Balasurya S featuring project visuals, event moments, and professional highlights.",
  keywords: ["Balasurya S Gallery", "Portfolio Gallery", "Projects Showcase"],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Gallery | Balasurya S Portfolio",
    description:
      "Browse the gallery of Balasurya S featuring project visuals, event moments, and professional highlights.",
    url: "https://balasurya.me/gallery",
    type: "website",
    images: [
      {
        url: "https://balasurya.me/red-blazer.png",
        width: 1200,
        height: 630,
        alt: "Bala Surya Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Balasurya S Portfolio",
    description:
      "Browse visual highlights from Balasurya S portfolio and project journey.",
    images: ["https://balasurya.me/red-blazer.png"],
  },
}

export default function Gallery() {
  return <GalleryPage />
}
