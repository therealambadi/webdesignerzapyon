"use client"

const skills = [
  "Website Design",
  "Web Development",
  "Responsive Design",
  "E-commerce Solutions",
  "Business Websites",
  "Modern Frameworks",
  "SEO Optimization",
  "Performance",
  "User Experience",
]

const stats = [
  { value: "100+", label: "Websites Built" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
]

import { SectionTitle } from "@/components/ui/section-title"

export function About() {
  return (
    <section id="about" className="py-20 border-border border-t-0 md:py-10 md:pb-32 md:pt-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Building Websites That Drive Business Growth
            </SectionTitle>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We're Zapyon, a team of professional website builders specializing in creating stunning digital experiences for businesses. We combine
              modern web technologies with proven design principles to deliver websites that convert and engage.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our approach focuses on understanding your business goals and target audience to create websites that not only look beautiful but also drive measurable results. We believe great web design should be both impressive and effective.
            </p>
          </div>

          {/* Right Content */}
          <div>
            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium border border-border rounded-full hover:bg-secondary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary rounded-2xl">
                  <div className="text-2xl md:text-3xl font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
