"use client"

import { useState } from "react"
import Image from "next/image"
import { SectionTitle } from "@/components/ui/section-title"

const testimonials = [
  {
    id: 1,
    quote:
      "Zapyon built our company website from scratch and it's absolutely stunning. The design is modern, fast, and perfectly captures our brand essence.",
    author: "Sarah Chen",
    role: "CEO at Tech Startup",
    avatar: "/images/imgi_97_user77.webp",
    company: "Neural Labs",
    blurColor: "bg-blue-500",
  },
  {
    id: 2,
    quote:
      "Our new website increased our conversion rate by 40%. Zapyon delivered a professional, responsive site that works perfectly on all devices.",
    author: "Marcus Johnson",
    role: "Marketing Director",
    avatar: "/images/imgi_106_user86.webp",
    company: "Growth Co",
    blurColor: "bg-purple-500",
  },
  {
    id: 3,
    quote:
      "The website Zapyon created for our e-commerce store is incredible. Fast loading, beautiful design, and seamless checkout experience.",
    author: "Emily Rodriguez",
    role: "Founder at Retail Brand",
    avatar: "/images/imgi_105_user85.webp",
    company: "StyleHub",
    blurColor: "bg-pink-500",
  },
  {
    id: 4,
    quote:
      "Zapyon transformed our online presence. Our new website is professional, easy to navigate, and has generated more leads than ever before.",
    author: "David Park",
    role: "Business Owner",
    avatar: "/images/imgi_102_user82.webp",
    company: "Park Consulting",
    blurColor: "bg-emerald-500",
  },
  {
    id: 5,
    quote:
      "Working with Zapyon was a game-changer. They delivered our corporate website on time and it exceeded all our expectations.",
    author: "Lisa Wang",
    role: "VP Marketing",
    avatar: "/images/imgi_100_user80.webp",
    company: "Enterprise Solutions",
    blurColor: "bg-orange-500",
  },
  {
    id: 6,
    quote:
      "Zapyon built our portfolio website and it's absolutely perfect. Clean design, smooth animations, and excellent performance.",
    author: "James Mitchell",
    role: "Creative Director",
    avatar: "/images/imgi_107_user87.webp",
    company: "Creative Agency",
    blurColor: "bg-cyan-500",
  },
  {
    id: 7,
    quote:
      "The website Zapyon created for our startup helped us secure funding. Professional, polished, and perfectly communicates our vision.",
    author: "Nina Patel",
    role: "Founder",
    avatar: "/images/imgi_108_user88.webp",
    company: "Tech Innovations",
    blurColor: "bg-rose-500",
  },
]

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)

  const duplicatedTestimonials = [...testimonials, ...testimonials]
  const duplicatedTestimonialsReverse = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]
  const mobileTestimonials = testimonials.slice(0, 6)

  return (
    <section id="testimonials" className="py-20 border-border overflow-hidden md:py-32 border-t-[0] pb-0 relative">
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-20 hidden lg:block" />

      <div className="hidden lg:block pl-6 md:pl-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-[1280px]">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            What clients say
          </SectionTitle>
        </div>

        <div className="relative mb-6">
          <div
            className="flex gap-6 animate-scroll-left"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${index}`}
                className="relative flex-shrink-0 w-[85vw] md:w-[400px] p-6 md:p-8 border bg-card hover:shadow-lg transition-shadow overflow-hidden border-zinc-100 md:px-6 md:py-6 rounded-3xl"
              >
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-relaxed font-semibold text-zinc-950 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="flex gap-6 animate-scroll-right"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {duplicatedTestimonialsReverse.map((testimonial, index) => (
              <article
                key={`reverse-${testimonial.id}-${index}`}
                className="relative flex-shrink-0 w-[85vw] md:w-[400px] p-6 md:p-8 border bg-card hover:shadow-lg transition-shadow overflow-hidden border-zinc-100 md:px-6 md:py-6 rounded-3xl"
              >
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-relaxed font-semibold text-zinc-950 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            What clients say
          </SectionTitle>
        </div>

        <div className="relative">
          {mobileTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="sticky pt-10"
              style={{
                top: `${70 + index * 0}px`,
                zIndex: index + 1,
              }}
            >
              <article className="relative p-6 md:p-8 border bg-card transition-shadow overflow-hidden border-zinc-100 rounded-3xl">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-base leading-relaxed font-semibold text-zinc-950 relative z-10">
                  "{testimonial.quote}"
                </blockquote>

                <div
                  className={`absolute -bottom-12 -right-12 w-48 h-48 ${testimonial.blurColor} rounded-full opacity-10`}
                  style={{ filter: "blur(72px)" }}
                />
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-10 lg:hidden" />
    </section>
  )
}
