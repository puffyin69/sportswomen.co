import Link from "next/link";

export default function Collaborate() {
  const partnershipTypes = [
    {
      title: "Brand Partnerships",
      description: "Collaborate with us to showcase products that align with our community values",
      icon: "🤝",
      benefits: [
        "Authentic product reviews and features",
        "Instagram story highlights and posts",
        "Community engagement and feedback",
        "Long-term partnership opportunities"
      ]
    },
    {
      title: "Content Collaboration",
      description: "Partner with our community members for user-generated content",
      icon: "📱",
      benefits: [
        "Real customer testimonials",
        "Workout and lifestyle content",
        "Before/after transformation stories",
        "Product styling and outfit inspiration"
      ]
    },
    {
      title: "Event Partnerships",
      description: "Join us for fitness events, workshops, and community gatherings",
      icon: "🎉",
      benefits: [
        "Sponsor local fitness events",
        "Host product launch parties",
        "Wellness workshops and seminars",
        "Community building activities"
      ]
    }
  ];

  const testimonials = [
    {
      brand: "ActiveWear Co.",
      quote: "Working with Sportswomen has been incredible. Their community engagement is authentic and their content quality is top-notch.",
      result: "150% increase in brand awareness"
    },
    {
      brand: "Nutrition Plus",
      quote: "The Sportswomen community provided honest feedback that helped us improve our product and reach our target audience.",
      result: "300+ user-generated posts"
    },
    {
      brand: "FitTech App",
      quote: "Their ability to create meaningful connections with their audience translated into real downloads and engaged users for our app.",
      result: "2,000+ new app downloads"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 font-outfit">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-2xl text-purple-800">Sportswomen</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-800 hover:text-purple-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-800 hover:text-purple-600 font-medium">About Us</Link>
              <Link href="/content" className="text-gray-800 hover:text-purple-600 font-medium">Content Hub</Link>
              <Link href="/collaborate" className="text-purple-600 font-medium">Collaborate</Link>
              <Link href="/contact" className="text-gray-800 hover:text-purple-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let&apos;s <span className="text-purple-600">Collaborate</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Partner with us to reach an engaged community of active women who value authenticity, 
            quality, and empowerment in their fitness journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Partnership
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
              View Media Kit
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Reach & Impact</h2>
            <p className="text-xl text-gray-600">Authentic engagement with real results</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-purple-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-700 font-medium">Instagram Followers</div>
            </div>
            <div className="bg-pink-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-pink-500 mb-2">5.2%</div>
              <div className="text-gray-700 font-medium">Engagement Rate</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">25-40</div>
              <div className="text-gray-700 font-medium">Age Demographics</div>
            </div>
            <div className="bg-pink-50 p-6 rounded-2xl">
              <div className="text-3xl font-bold text-pink-500 mb-2">85%</div>
              <div className="text-gray-700 font-medium">Female Audience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Multiple ways to work together</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                
                <div className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">What our partners are saying</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{testimonial.brand}</h4>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Result:</div>
                  <div className="font-bold text-purple-600">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our collaboration process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Contact", description: "Reach out with your collaboration idea" },
              { step: "2", title: "Strategy Session", description: "We discuss goals and create a custom plan" },
              { step: "3", title: "Content Creation", description: "Professional, authentic content production" },
              { step: "4", title: "Performance Review", description: "Analyze results and plan future campaigns" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Partner?</h2>
            <p className="text-xl text-gray-600">Let&apos;s create something amazing together</p>
          </div>
          
          <form className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Contact Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Partnership Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Select partnership type</option>
                <option>Brand Partnership</option>
                <option>Content Collaboration</option>
                <option>Event Partnership</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Project Details</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us about your collaboration idea..."
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Budget Range</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Select budget range</option>
                <option>Under $1,000</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
                <option>Product collaboration</option>
              </select>
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Send Partnership Proposal
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Questions About Partnerships?</h2>
          <p className="text-xl mb-8 opacity-90">
            We&apos;re here to help you find the perfect collaboration opportunity for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block">
              Contact Us
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Download Media Kit
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-2xl mb-4">Sportswomen</div>
              <p className="text-gray-400">Empowering women through sports, wellness, and community.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <div><Link href="/about" className="hover:text-white transition-colors">About Us</Link></div>
                <div><Link href="/content" className="hover:text-white transition-colors">Content Hub</Link></div>
                <div><Link href="/collaborate" className="hover:text-white transition-colors">Collaborate</Link></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <div className="space-y-2 text-gray-400">
                <div>Wellness Tips</div>
                <div>Fashion Inspiration</div>
                <div>Motherhood Stories</div>
                <div>Sports News</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-gray-400">
                <div>Instagram</div>
                <div>Facebook</div>
                <div>Twitter</div>
                <div>YouTube</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sportswomen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
