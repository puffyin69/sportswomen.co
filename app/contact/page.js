import Link from "next/link";
import Image from "next/image";

export default function Contact() {
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
              <Link href="/collaborate" className="text-gray-800 hover:text-purple-600 font-medium">Collaborate</Link>
              <Link href="/contact" className="text-purple-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-purple-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We'd love to hear from you! Whether you have questions, ideas, or just want to connect, 
            we're here to help you on your fitness journey.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-4">For general inquiries and support</p>
              <p className="font-semibold text-purple-600">hello@sportswomen.co</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-4">Join our daily inspiration</p>
              <p className="font-semibold text-pink-500">@sportswomen.co</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partnerships</h3>
              <p className="text-gray-600 mb-4">Collaboration opportunities</p>
              <p className="font-semibold text-purple-600">partners@sportswomen.co</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">We typically respond within 24 hours</p>
          </div>
          
          <form className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your last name"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Partnership Opportunity</option>
                <option>Content Collaboration</option>
                <option>Technical Support</option>
                <option>Media Request</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                rows="6"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How can I collaborate with Sportswomen?",
                answer: "We offer various collaboration opportunities including brand partnerships, content creation, and event partnerships. Visit our Collaborate page or email partners@sportswomen.co to get started."
              },
              {
                question: "Can I share my fitness journey on your platform?",
                answer: "Absolutely! We love featuring real stories from our community. Tag us on Instagram @sportswomen.co or send us an email with your story."
              },
              {
                question: "Do you offer personal training or coaching?",
                answer: "While we don't offer individual training, we provide excellent resources through our Content Hub and connect you with certified trainers in our community."
              },
              {
                question: "How often do you post new content?",
                answer: "We post new content daily on Instagram and update our Content Hub weekly with fresh articles, tips, and community stories."
              },
              {
                question: "Is the community beginner-friendly?",
                answer: "Yes! Our community welcomes women at all fitness levels. Whether you're just starting or training for competitions, you'll find support and resources here."
              },
              {
                question: "How can I stay updated with new content?",
                answer: "Follow us on Instagram @sportswomen.co, subscribe to our newsletter, or bookmark our Content Hub for regular updates."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community on social media for daily inspiration, tips, and behind-the-scenes content.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { platform: "Instagram", handle: "@sportswomen.co", color: "pink", emoji: "📸", useImage: true },
              { platform: "Facebook", handle: "/sportswomen", color: "purple", emoji: "👥", useImage: false },
              { platform: "Twitter", handle: "@sportswomen_co", color: "pink", emoji: "🐦", useImage: false },
              { platform: "YouTube", handle: "/sportswomen", color: "purple", emoji: "📺", useImage: false }
            ].map((social, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  social.color === 'purple' ? 'bg-purple-100' : 'bg-pink-100'
                }`}>
                  {social.useImage ? (
                    <Image 
                      src="/insta.png" 
                      alt="Instagram" 
                      width={30} 
                      height={30}
                      className="rounded"
                    />
                  ) : (
                    <span className="text-xl">{social.emoji}</span>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{social.platform}</h4>
                <p className={`text-sm ${social.color === 'purple' ? 'text-purple-600' : 'text-pink-500'}`}>
                  {social.handle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait to start your journey. Our community is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block">
              Join Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-block">
              Learn More
            </Link>
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
