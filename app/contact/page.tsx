"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Building, Clock } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"

export default function ContactPage() {
  return (
    <section id="contact" className="min-h-screen py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionTitle className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Get in Touch
          </SectionTitle>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Ready to bring your vision to life? Let's discuss how we can create the perfect website for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Name */}
                <div className="flex items-start gap-4">
                  <Building className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Aditya Bobby</h4>
                    <p className="text-muted-foreground">CEO, Zapyon</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:+919446181036" className="text-muted-foreground hover:text-foreground transition-colors">
                      +91 94461 81036
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:aditya@zapyon.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      aditya@zapyon.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Available Worldwide</p>
                    <p className="text-sm text-muted-foreground">Remote & On-site Projects</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 mt-1 text-muted-foreground flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl p-8 border border-border mt-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link
                  href="tel:+919446181036"
                  className="flex items-center gap-3 px-6 py-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call Now</span>
                </Link>
                <Link
                  href="mailto:aditya@zapyon.com?subject=Website Project Inquiry"
                  className="flex items-center gap-3 px-6 py-4 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Send Email</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  <option value="">Select a project type</option>
                  <option value="business-website">Business Website</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="saas">SaaS Platform</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your project, timeline, and budget..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 text-base font-medium text-white rounded-xl transition-all relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                  boxShadow: "0 4px 20px rgba(32, 62, 236, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(32, 62, 236, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(32, 62, 236, 0.3)"
                }}
              >
                Send Message
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
              <p className="text-sm text-muted-foreground mb-3">
                Prefer to talk directly? Reach out to Aditya Bobby personally:
              </p>
              <div className="space-y-2">
                <a href="tel:+919446181036" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  📱 +91 94461 81036
                </a>
                <a href="mailto:aditya@zapyon.com" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  ✉️ aditya@zapyon.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium border border-border rounded-full hover:bg-secondary transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
