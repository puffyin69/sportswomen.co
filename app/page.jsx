import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 font-outfit">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-2xl text-purple-800">Sportswomen</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-800 hover:text-purple-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-800 hover:text-purple-600 font-medium">About Us</Link>
              <Link href="/content" className="text-gray-800 hover:text-purple-600 font-medium">Content Hub</Link>
              <Link href="/collaborate" className="text-gray-800 hover:text-purple-600 font-medium">Collaborate</Link>
              <Link href="/contact" className="text-gray-800 hover:text-purple-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                <span className="text-purple-600">Empowering</span> Women
                <br />
                in <span className="text-pink-500">Sports</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Join our community for wellness tips, fashion inspiration, and the latest in women's sports. 
                Building a movement where every woman feels empowered to pursue her athletic dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse">
                  🚀 Join the Movement
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <Image 
                  src="/insta.png" 
                  alt="Sportswomen Instagram Community" 
                  width={400} 
                  height={400}
                  className="relative rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="text-center">
                    <div className="font-bold text-2xl text-purple-600">10K+</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-700 font-medium">Empowered Women</div>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-pink-500 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Success Stories</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-purple-600">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe every woman deserves to feel strong, confident, and empowered in her athletic journey. 
                Our platform bridges the gap between sports, wellness, fashion, and real-life experiences.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From motherhood to marathon training, from finding the perfect athletic wear to nutrition tips, 
                we're here to support women at every stage of their fitness journey.
              </p>
              <Link href="/about" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                Learn More About Us →
              </Link>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <Image 
                    src="/her.png" 
                    alt="Empowered Woman" 
                    width={80} 
                    height={80}
                    className="w-full h-full object-cover object-center"
                    style={{ 
                      objectPosition: 'center 20%'
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded with Purpose</h3>
                <p className="text-gray-600">
                  Started to create a safe space where women can share their athletic journeys, 
                  find inspiration, and build lasting connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="text-purple-600">Highlights</span>
            </h2>
            <p className="text-xl text-gray-600">Fresh content from our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Morning Workout Routine", category: "Wellness", color: "purple" },
              { title: "Athletic Wear Trends", category: "Fashion", color: "pink" },
              { title: "Balancing Sports & Motherhood", category: "Lifestyle", color: "purple" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  item.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-pink-100 text-pink-600'
                }`}>
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">
                  Discover amazing tips and inspiration from our community of strong women.
                </p>
                <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Spotlight */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Community Spotlight</h2>
            <p className="text-xl opacity-90">Real stories from amazing women</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", story: "From couch to 5K in 3 months!", achievement: "First Marathon" },
              { name: "Jessica L.", story: "Balancing fitness with twin toddlers", achievement: "Fitness Mom" },
              { name: "Maya R.", story: "Discovering strength training at 45", achievement: "Powerlifter" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ')[0][0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-75">{testimonial.achievement}</div>
                  </div>
                </div>
                <p className="italic opacity-90">"{testimonial.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of women who are transforming their lives through sports, wellness, and community support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              💪 Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              📱 Follow on Instagram
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
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Image 
                    src="/insta.png" 
                    alt="Instagram" 
                    width={20} 
                    height={20}
                    className="rounded"
                  />
                  <span className="hover:text-white transition-colors cursor-pointer">@sportswomen.co</span>
                </div>
                <div className="hover:text-white transition-colors cursor-pointer">Facebook</div>
                <div className="hover:text-white transition-colors cursor-pointer">Twitter</div>
                <div className="hover:text-white transition-colors cursor-pointer">YouTube</div>
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
