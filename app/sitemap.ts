import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://sappie.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/empresas", priority: 0.9, changeFrequency: "weekly" },
    { path: "/ensino", priority: 0.9, changeFrequency: "weekly" },
    { path: "/plataforma", priority: 0.8, changeFrequency: "monthly" },
    { path: "/demo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ciencia", priority: 0.7, changeFrequency: "monthly" },
    { path: "/alunos", priority: 0.6, changeFrequency: "monthly" },
    { path: "/criadores", priority: 0.6, changeFrequency: "monthly" },
    { path: "/produtos", priority: 0.6, changeFrequency: "weekly" },
    { path: "/termos-de-uso", priority: 0.2, changeFrequency: "yearly" },
    { path: "/politica-de-privacidade", priority: 0.2, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
