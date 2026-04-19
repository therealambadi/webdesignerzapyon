import Link from "next/link"
import { ArrowUpRight, Mail, Phone, Building, MapPin } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 border-border md:py-20 border-t-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">Contact</p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
            Let's Build Something Amazing Together
          </h2>

          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Ready to transform your digital presence? Let's discuss how we can create the perfect website for your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
            {/* Aditya Bobby Info */}
            <div className="bg-card rounded-2xl p-6 border border-border text-left">
              <Building className="w-6 h-6 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Aditya Bobby</h3>
              <p className="text-muted-foreground mb-1">CEO & Founder</p>
              <p className="text-sm text-muted-foreground">Zapyon</p>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-2xl p-6 border border-border text-left">
              <Phone className="w-6 h-6 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+919446181036" className="text-muted-foreground hover:text-foreground transition-colors">
                +91 94461 81036
              </a>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl p-6 border border-border text-left">
              <Mail className="w-6 h-6 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:aditya@zapyon.com" className="text-muted-foreground hover:text-foreground transition-colors">
                aditya@zapyon.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-card rounded-2xl p-6 border border-border text-left">
              <MapPin className="w-6 h-6 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Available Worldwide</p>
              <p className="text-sm text-muted-foreground">Remote & On-site</p>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-2xl p-6 border border-border text-left">
              <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground">Mon-Fri: 9AM-6PM</p>
              <p className="text-muted-foreground">Sat: 10AM-4PM</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>

            {/* Quick Contact */}
            <div className="bg-card rounded-2xl p-6 border border-border text-left">
              <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <Link
                  href="tel:+919446181036"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Link>
                <Link
                  href="mailto:aditya@zapyon.com?subject=Website Project Inquiry"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="mailto:aditya@zapyon.com?subject=Website Project Inquiry"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white rounded-full transition-all hover:shadow-2xl relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #203eec 0%, #00d4ff 100%)",
                boxShadow: "0 8px 32px rgba(32, 62, 236, 0.4)",
              }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Start Your Project
                <ArrowUpRight className="w-4 h-4" />
              </span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-[#203eec] to-[#00d4ff]" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full hover:bg-secondary transition-colors"
              style={{ borderColor: "#203eec", borderWidth: "1px", color: "#203eec" }}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
