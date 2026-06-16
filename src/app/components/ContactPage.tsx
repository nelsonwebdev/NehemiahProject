import { useState } from "react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-secondary text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Get in Touch
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Contact Us
          </h1>
          <p className="text-white/60 mt-4 max-w-xl">
            Our team is here to answer your questions about the Nehemiah Project, explore giving opportunities, or connect you with the right person.
          </p>
        </div>
      </section>
      <div className="h-1" style={{ backgroundColor: "#a1a8ae" }} />

      <section className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact info */}
        <div>
          <h2 className="mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px" }}>
            Advancement Office
          </h2>

          <div className="space-y-8">
            {[
              {
                label: "Address",
                content: (
                  <>
                    <p>University Advancement</p>
                    <p>Farmer Administration Building</p>
                    <p>1200 Sycamore St.</p>
                    <p>Waxahachie, TX 75165</p>
                  </>
                ),
              },
              {
                label: "Phone",
                content: (
                  <a href="tel:+19728254639" className="text-primary hover:underline underline-offset-4">
                    (972) 825-4639
                  </a>
                ),
              },
              {
                label: "Email",
                content: (
                  <a href="mailto:advancementoffice@nelson.edu" className="text-primary hover:underline underline-offset-4">
                    advancementoffice@nelson.edu
                  </a>
                ),
              },
              {
                label: "Office Hours",
                content: (
                  <>
                    <p>Monday – Friday</p>
                    <p>8:00 am – 5:00 pm CST</p>
                  </>
                ),
              },
            ].map(({ label, content }) => (
              <div key={label}>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {label}
                </p>
                <div className="text-sm leading-relaxed">{content}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Specific Inquiries
            </p>
            <div className="space-y-3 text-sm">
              {[
                { role: "Major Gifts", name: "Mike Robertson", email: "mrobertson@nelson.edu" },
                { role: "Planned Giving", name: "Jo Cardenas", email: "jcardenas@nelson.edu" },
                { role: "Alumni Relations", name: "James Carnell", email: "jcarnell@nelson.edu" },
              ].map(({ role, name, email }) => (
                <div key={role} className="border border-border p-3 hover:border-primary/40 transition-colors">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">{role}</p>
                  <p className="font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</p>
                  <a href={`mailto:${email}`} className="text-xs text-primary hover:underline underline-offset-4">{email}</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border p-8">
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#c5c0e0" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "#502d7f" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px" }} className="mb-3">
                  Thank You, {form.name.split(" ")[0]}
                </h2>
                <p className="text-muted-foreground max-w-sm mx-auto text-sm leading-relaxed">
                  We've received your message and will respond within two business days. We look forward to speaking with you.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" }); }}
                  className="mt-6 text-primary text-sm hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="mb-6" style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px" }}>
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-muted-foreground mb-2" htmlFor="name">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-border bg-input-background px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-muted-foreground mb-2" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-border bg-input-background px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-muted-foreground mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full border border-border bg-input-background px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="+1 (972) 555-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-muted-foreground mb-2" htmlFor="subject">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-border bg-input-background px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Major Gift Inquiry</option>
                        <option>Planned Giving</option>
                        <option>Matching Gifts</option>
                        <option>Alumni Relations</option>
                        <option>Press Inquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-muted-foreground mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-border bg-input-background px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-muted-foreground">* Required fields</p>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", letterSpacing: "0.07em", textTransform: "uppercase" }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="max-w-7xl mx-auto px-6 pb-14">
        <div
          className="w-full border border-border flex items-center justify-center"
          style={{ height: "240px", backgroundColor: "#f2f2f3" }}
        >
          <div className="text-center">
            <p className="text-muted-foreground text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
              Interactive Map Embed
            </p>
            <p className="text-muted-foreground text-xs mt-1">Replace with Google Maps or Mapbox embed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
