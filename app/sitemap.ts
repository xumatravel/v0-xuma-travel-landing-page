import type { MetadataRoute } from "next"

const BASE = "https://www.xuma.com.ar"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/traslados-las-lenas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/paquetes-las-lenas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/mendoza`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/san-rafael-malargue`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ]
}
