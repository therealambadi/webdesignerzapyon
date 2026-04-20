"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const liveSites = [
  {
    id: 1,
    title: "Modern Hero",
    description: "Modern hero section design with contemporary features and animations",
    url: "https://modern-hero-section-840602999067.us-west1.run.app",
    category: "Hero Section",
    status: "Live",
  },
  {
    id: 2,
    title: "Boty Skincare",
    description: "Beautiful e-commerce website for skincare products with modern design",
    url: "https://boty-skincare.vercel.app/",
    category: "E-commerce",
    status: "Live",
  },
  {
    id: 3,
    title: "Datacore Hero",
    description: "Data visualization platform with hero section design",
    url: "https://datacore-hero-section-840602999067.us-west1.run.app",
    category: "Data Platform",
    status: "Live",
  },
  {
    id: 4,
    title: "Aethera Studio",
    description: "Creative studio website with modern design and interactive features",
    url: "https://aethera-studio-840602999067.us-west1.run.app",
    category: "Studio",
    status: "Live",
  },
    {
    id: 6,
    title: "Power AI Platform",
    description: "Advanced AI platform with powerful features and tools",
    url: "https://power-ai-platform-840602999067.us-west1.run.app",
    category: "AI Platform",
    status: "Live",
  },
  {
    id: 7,
    title: "Design AI Studio",
    description: "Creative design studio with AI-powered tools and features",
    url: "https://design-ai-studio-840602999067.us-west1.run.app",
    category: "Design Studio",
    status: "Live",
  },
  {
    id: 8,
    title: "Cinematic Hero",
    description: "Film and media platform with cinematic hero design",
    url: "https://cinematic-hero-840602999067.us-west1.run.app",
    category: "Media Platform",
    status: "Live",
  },
  {
    id: 9,
    title: "Mindloop Platform",
    description: "Mindfulness and meditation platform with modern design",
    url: "https://mindloop-840602999067.us-west1.run.app",
    category: "Wellness Platform",
    status: "Live",
  },
  {
    id: 10,
    title: "Viral Agency",
    description: "Marketing agency website with viral content and features",
    url: "https://viralagency-hero-840602999067.us-west1.run.app",
    category: "Marketing Agency",
    status: "Live",
  },
  {
    id: 11,
    title: "Grow",
    description: "AI-powered growth platform with modern interface and features",
    url: "https://my-google-ai-studio-applet-840602999067.us-west1.run.app",
    category: "AI Application",
    status: "Live",
  },
  {
    id: 12,
    title: "Mono E-commerce",
    description: "Comprehensive e-commerce platform with advanced functionality",
    url: "https://v0-mono-ecommerce-template-j8.vercel.app",
    category: "E-commerce Platform",
    status: "Live",
  },
  {
    id: 13,
    title: "Evasion E-commerce",
    description: "Modern e-commerce template with advanced features and responsive design",
    url: "https://v0-evasion-ecommerce-template-fc.vercel.app",
    category: "E-commerce Template",
    status: "Live",
  },
  {
    id: 14,
    title: "Modern Agency",
    description: "Sleek modern agency website with impressive animations and interactions",
    url: "https://modern-agency-template-840602999067.us-west1.run.app",
    category: "Agency",
    status: "Live",
  },
  {
    id: 15,
    title: "Optus Platform",
    description: "Modern business platform with clean design and seamless user experience",
    url: "https://optimus-hazel.vercel.app/",
    category: "Business Website",
    status: "Live",
  },
  {
    id: 16,
    title: "Architecture Studio",
    description: "Elegant architecture studio website showcasing projects and services",
    url: "https://architecture-studio-lovat.vercel.app/",
    category: "Portfolio",
    status: "Live",
  },
]

export function LiveSites() {
  return (
    <section id="live-sites" className="py-20 md:py-32 border-border border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Live Sites
          </SectionTitle>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#203eec" }}
          >
            View all sites
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>

        {/* Loading Warning */}
        <div className="mb-8 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Live sites take time to load - please be patient
            </p>
          </div>
        </div>

        {/* Live Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {liveSites.map((site) => (
            <Link key={site.id} href={site.url} className="group block" target="_blank" rel="noopener noreferrer">
              <article className="h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Live Site Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  <iframe
                    src={site.url}
                    title={site.title}
                    className="border-0"
                    loading="lazy"
                    style={{
                      width: '200%',
                      height: '200%',
                      transform: 'scale(0.5)',
                      transformOrigin: '0 0',
                      pointerEvents: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                    sandbox="allow-same-origin allow-scripts"
                  />
                  <div className="absolute inset-0 pointer-events-none border border-border/20" />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                    {site.status}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
                    Live Preview
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="bg-secondary px-2 py-1 rounded">{site.category}</span>
                    <span>Live</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold group-hover:text-muted-foreground transition-colors mb-2">
                    {site.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">{site.description}</p>
                  
                  {/* Visit Link */}
                  <div className="flex items-center gap-2 mt-4 text-sm font-medium" style={{ color: "#203eec" }}>
                    Visit Site
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: "#203eec", borderColor: "#203eec" }}
          >
            View all sites
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
