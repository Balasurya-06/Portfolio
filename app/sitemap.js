const SITE_URL = "https://balasurya.me"

export default function sitemap() {
  const lastModified = new Date()

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
      images: [`${SITE_URL}/surya-founder.jpg`],
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [`${SITE_URL}/surya-founder.jpg`],
    },
  ]
}
