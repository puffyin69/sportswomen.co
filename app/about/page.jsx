import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 font-outfit">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-2xl text-purple-800">Sportswomen</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-800 hover:text-purple-600 font-medium">Home</Link>
              <Link href="/about" className="text-purple-600 font-medium">About Us</Link>
              <Link href="/content" className="text-gray-800 hover:text-purple-600 font-medium">Content Hub</Link>
              <Link href="/collaborate" className="text-gray-800 hover:text-purple-600 font-medium">Collaborate</Link>
              <Link href="/contact" className="text-gray-800 hover:text-purple-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">Sportswomen</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering women through sports, wellness, and authentic community connections.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sportswomen was born from a simple belief: every woman deserves to feel strong, 
                confident, and supported in her fitness journey. What started as an Instagram page 
                has evolved into a thriving community where women share their victories, challenges, 
                and everything in between.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We understand that being a sportswoman isn&apos;t just about athletic performance. 
                It&apos;s about balancing motherhood with marathon training, finding the perfect 
                workout gear that makes you feel confident, and discovering nutrition tips 
                that actually work for your lifestyle.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to create a space where women can be authentic about their 
                fitness journeys - celebrating the wins and supporting each other through the struggles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  SW
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded in 2024</h3>
                <p className="text-gray-700 mb-6">
                  Started as an Instagram page to share authentic stories of women in sports.
                </p>
                <div className="flex justify-center space-x-8 text-sm text-gray-600">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-purple-600">10K+</div>
                    <div>Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-pink-500">500+</div>
                    <div>Stories Shared</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empowerment</h3>
              <p className="text-gray-600">
                Every woman has the strength to achieve her goals. We&apos;re here to remind you of that power.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Together we&apos;re stronger. Building connections and supporting each other through every journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                Real stories, real challenges, real victories. No filters needed when sharing your truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
            <p className="text-xl text-gray-600">The woman behind the movement</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="relative mx-auto lg:mx-0 mb-6">
                    <Image 
                      src="/insta.png" 
                      alt="Sarah Williams - Founder" 
                      width={128} 
                      height={128}
                      className="rounded-full shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
                      <span className="text-white text-xl">💪</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Williams</h3>
                  <p className="text-purple-600 font-medium mb-4">Founder & Community Builder</p>
                  <div className="flex justify-center lg:justify-start space-x-4 text-sm text-gray-600 mb-4">
                    <span>🏃‍♀️ Marathon Runner</span>
                    <span>👶 Mom of 2</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 text-purple-600">
                    <Image 
                      src="/insta.png" 
                      alt="Instagram" 
                      width={16} 
                      height={16}
                      className="rounded"
                    />
                    <span className="text-sm">@sportswomen.co</span>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    &quot;I started this journey as a new mom trying to find my way back to fitness. 
                    I realized there wasn&apos;t enough honest conversation about the real challenges 
                    women face in sports and wellness.&quot;
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    &quot;What began as sharing my own struggles on Instagram became a movement of 
                    women supporting women. Today, Sportswomen is more than just a platform - 
                    it&apos;s a family where every woman can find her tribe.&quot;
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    &quot;My goal is simple: to make sure no woman feels alone in her fitness journey. 
                    Whether you&apos;re training for your first 5K or your tenth marathon, 
                    there&apos;s a place for you here.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a movement that&apos;s changing how women approach fitness and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block">
              Get Started Today
            </Link>
            <Link href="/" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-block">
              Back to Home
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
