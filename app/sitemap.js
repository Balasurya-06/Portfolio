const SITE_URL = "https://balasurya02.vercel.app"

export default function sitemap() {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
      images: [`${SITE_URL}/red-blazer.png`],
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [`${SITE_URL}/red-blazer.png`],
    },
  ]
}
