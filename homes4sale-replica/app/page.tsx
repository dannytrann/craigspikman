"use client";

import Image from "next/image";
import { Facebook } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "39ad06c2-1d66-420f-bf0b-744f25fabaae",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from Website"
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setShowContactForm(false);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header/Navigation */}
      <header className="bg-white py-5 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-xl font-medium text-foreground tracking-wide">
            Craig Spikman
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-foreground">
                Expert Real<br />
                Estate Service<br />
                in Campbell<br />
                River
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Helping buyers and sellers navigate Vancouver<br />
                Island&apos;s real estate market with honest advice<br />
                and local expertise.
              </p>
              <div>
                <a href="https://campbellriverrealestate.com/campbell-river-houses.html" target="_blank" rel="noopener noreferrer">
                  <button className="bg-foreground text-white px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors">
                    Explore Listings
                  </button>
                </a>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com" target="https://www.facebook.com/profile.php?id=61585639097230" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Facebook size={18} fill="currentColor" />
                </a>

              </div>
            </div>
            <div className="relative h-[550px] md:h-[650px] w-full md:w-[400px] mx-auto md:mx-0">
              <Image
                src="/profile.jpg"
                alt="Craig Spikman - Real Estate Professional"
                fill
                className="object-cover object-top rounded-sm"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover Real Estate Solutions Section */}
      <section id="discover" className="bg-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-56 relative rounded-sm overflow-hidden">
                <Image
                  src="/1.webp"
                  alt="Property 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-56 relative rounded-sm overflow-hidden mt-8">
                <Image
                  src="/3.webp"
                  alt="Property 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-56 relative rounded-sm overflow-hidden -mt-8">
                <Image
                  src="/2.webp"
                  alt="Property 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-foreground leading-tight" style={{ fontSize: '32px' }}>
                Discover Real Estate<br />Solutions
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Craig Spikman is an Associate Broker with Royal<br />
                LePage Advance Realty, serving Campbell River<br />
                and Vancouver Island. Specializing in residential,<br />
                commercial, waterfront, and investment<br />
                properties, Craig is known for his straightforward<br />
                approach, deep local knowledge, and<br />
                commitment to getting results for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Can Help You With Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-16" style={{ color: '#8B7355', fontSize: '32px' }}>
            What I Can Help You With
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-20">
            <div className="space-y-4">
              <div className="h-64 md:h-72 relative rounded-sm overflow-hidden">
                <Image
                  src="/2.webp"
                  alt="Real Estate Service"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-base">✓</span>
                <span className="text-gray-700 text-base">Residential Sales</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-base">✓</span>
                <span className="text-gray-700 text-base">Commercial Real Estate</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-base">✓</span>
                <span className="text-gray-700 text-base">Investment Properties</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-base">✓</span>
                <span className="text-gray-700 text-base">Comprehensive Market Analysis</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-base">✓</span>
                <span className="text-gray-700 text-base">First-Time Home Buyers</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-base">✓</span>
                <span className="text-gray-700 text-base">Relocation Services</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gray-400 mt-1 text-base">✓</span>
                <span className="text-gray-700 text-base">Estate Sales</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#8B7355' }}>
                Areas of Service
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                <strong className="text-foreground font-semibold">Campbell River & Northern Vancouver Island:</strong> From Willow Point to Quadra Island, Campbell River North to South, beach...
              </p>
            </div>
            <div className="h-48 relative rounded-sm overflow-hidden">
              <Image
                src="/3.webp"
                alt="Campbell River Aerial View"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Let's Get Started Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden relative flex-shrink-0">
                <Image
                  src="/profile.jpg"
                  alt="Craig Spikman"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground" style={{ fontSize: '32px' }}>Let&apos;s get started</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Ready to buy, sell, or just have questions about<br />
                the Campbell River market? Reach out anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-20 md:py-32 bg-cream">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#8B7355', fontSize: '32px' }}>Contact Me</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-10"></div>

          <p className="text-lg text-foreground mb-6 font-medium">
            Better yet, see me in person!
          </p>

          <p className="text-base text-foreground font-semibold mb-3">
            Craig Spikman
          </p>

          <p className="text-base text-gray-600 mb-2">
            972 Shoppers Row Campbell River, BC V9W 2C5
          </p>

          <p className="text-base text-gray-600 mb-8">
            250-203-1677
          </p>


          {!showContactForm ? (
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-foreground text-white px-10 py-3.5 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors"
            >
              Drop me a line!
            </button>
          ) : (
            <div className="mt-12">
              <h3 className="text-xl text-foreground font-semibold mb-8">Drop me a line!</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-base"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-base"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 text-base resize-none"
                    required
                  />
                </div>

                <p className="text-xs text-gray-500">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>

                <div className="flex items-center justify-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "SENDING..." : "SEND"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground" style={{ fontSize: '32px' }}>
            Connect With Me
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-16"></div>

          <div className="h-96 bg-gray-200 rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.8!2d-125.244!3d50.024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5488058c7c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2s972%20Shoppers%20Row%2C%20Campbell%20River%2C%20BC%20V9W%202C5!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="972 Shoppers Row, Campbell River, BC"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} fill="currentColor" />
              </a>
            </div>
            <p className="text-gray-400 text-xs text-center">
              Copyright © 2026 Craig Spikman - All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
