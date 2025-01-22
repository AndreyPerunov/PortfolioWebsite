import { MetadataRoute } from "next"

const BASE_URL = "https://andreyperunov.com"

export default function Sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]
}
