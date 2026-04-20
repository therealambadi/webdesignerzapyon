"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { useEffect, useRef, useState } from "react"

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
    title: "Viral Agency",
    category: "Marketing Agency",
    description: "Marketing agency website with viral content and features",
    image: "/images/work-crypto.png",
    link: "https://viralagency-hero-840602999067.us-west1.run.app",
    tags: ["Marketing", "Agency", "Viral"],
  },
  {
    id: 3,
    title: "Mindloop Platform",
    category: "Wellness Platform",
    description: "Mindfulness and meditation platform with modern design",
    image: "/images/work-fashion.png",
    link: "https://mindloop-840602999067.us-west1.run.app",
    tags: ["Wellness", "Meditation", "Platform"],
  },
  {
    id: 4,
    title: "Modern Hero",
    category: "Hero Section",
    description: "Modern hero section design with contemporary features and animations",
    image: "/images/work-tasks.png",
    link: "https://modern-hero-section-840602999067.us-west1.run.app",
    tags: ["Hero", "Modern", "Animation"],
  },
  {
    id: 5,
    title: "Mono E-commerce",
    category: "E-commerce Platform",
    description: "Comprehensive e-commerce platform with advanced functionality",
    image: "/images/work-crypto.png",
    link: "https://v0-mono-ecommerce-template-j8.vercel.app",
    tags: ["E-commerce", "Platform", "Advanced"],
  },
  {
    id: 6,
    title: "Power AI Platform",
    category: "AI Platform",
    description: "Advanced AI platform with powerful features and tools",
    image: "/images/work-onboarding.png",
    link: "https://power-ai-platform-840602999067.us-west1.run.app",
    tags: ["AI", "Platform", "Advanced"],
  },
  {
    id: 7,
    title: "Datacore Hero",
    category: "Data Platform",
    description: "Data visualization platform with hero section design",
    image: "/images/work-crypto.png",
    link: "https://datacore-hero-section-840602999067.us-west1.run.app",
    tags: ["Data", "Platform", "Hero"],
  },
  {
    id: 8,
    title: "Aethera Studio",
    category: "Studio",
    description: "Creative studio website with modern design and interactive features",
    image: "/images/work-fashion.png",
    link: "https://aethera-studio-840602999067.us-west1.run.app",
    tags: ["Studio", "Creative", "Interactive"],
  },
]

// Lazy loading iframe component
const LazyIframe = ({ src, title, className, style, sandbox }: any) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (iframeRef.current) {
      observer.observe(iframeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div ref={iframeRef} className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground text-sm">Loading preview...</div>
        </div>
      )}
      {isVisible && (
        <iframe
          src={src}
          title={title}
          className={className}
          style={style}
          sandbox={sandbox}
          onLoad={handleLoad}
          loading="lazy"
        />
      )}
    </div>
  )
}

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
                    <LazyIframe
                      src={work.link}
                      title={work.title}
                      className="border-0"
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
