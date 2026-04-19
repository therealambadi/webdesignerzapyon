"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

const works = [
  {
    id: 1,
    title: "Boty Skincare",
    category: "E-commerce",
    description: "Beautiful e-commerce website for skincare products with modern design",
    image: "/images/work-fashion.png",
    link: "https://boty-skincare.vercel.app/",
    tags: ["E-commerce", "React", "Design"],
  },
  {
    id: 2,
    title: "Mono E-commerce",
    category: "E-commerce Platform",
    description: "Comprehensive e-commerce platform with advanced functionality",
    image: "/images/work-crypto.png",
    link: "https://v0-mono-ecommerce-template-j8.vercel.app",
    tags: ["E-commerce", "Platform", "Advanced"],
  },
  {
    id: 3,
    title: "Evasion E-commerce",
    category: "E-commerce Template",
    description: "Modern e-commerce template with advanced features and responsive design",
    image: "/images/work-tasks.png",
    link: "https://v0-evasion-ecommerce-template-fc.vercel.app",
    tags: ["E-commerce", "Template", "Next.js"],
  },
  {
    id: 4,
    title: "Optus Platform",
    category: "Business Website",
    description: "Modern business platform with clean design and seamless user experience",
    image: "/images/work-crypto.png",
    link: "https://optimus-hazel.vercel.app/",
    tags: ["Next.js", "React", "Business"],
  },
  {
    id: 5,
    title: "Architecture Studio",
    category: "Portfolio",
    description: "Elegant architecture studio website showcasing projects and services",
    image: "/images/work-onboarding.png",
    link: "https://architecture-studio-lovat.vercel.app/",
    tags: ["Portfolio", "Architecture", "Design"],
  },
]

export function SelectedWorks() {
  return (
    <section id="works" className="py-20 md:py-10 md:pt-32 pb-4">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Our projects
          </SectionTitle>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "#203eec" }}
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" style={{ color: "#203eec" }} />
          </Link>
        </div>

        <div className="relative">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="sticky"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <Link href={work.link || "#"} className="group block pt-10" target="_blank" rel="noopener noreferrer">
                <article className="overflow-hidden rounded-2xl md:rounded-3xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Live Website Preview */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-secondary rounded-t-2xl md:rounded-t-3xl">
                    <iframe
                      src={work.link}
                      title={work.title}
                      className="border-0"
                      loading="lazy"
                      scrolling="no"
                      style={{
                        width: '150%',
                        height: '200%',
                        transform: 'scale(0.67)',
                        transformOrigin: '0 0',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        clip: 'rect(0, 1000px, 600px, 0)',
                        overflow: 'hidden',
                      }}
                      sandbox="allow-same-origin allow-scripts"
                    />
                    <div className="absolute inset-0 pointer-events-none border border-border/20 rounded-t-2xl md:rounded-t-3xl" />
                    <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-muted-foreground">
                      Hero Preview
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{work.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{work.description}</p>
                      </div>
                      <ArrowUpRight
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                        style={{ color: "#203eec" }}
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border rounded-full hover:bg-secondary transition-colors"
            style={{ color: "#203eec", borderColor: "#203eec" }}
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
