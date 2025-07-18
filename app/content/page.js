import Link from "next/link";

export default function Content() {
  const categories = [
    {
      title: "Wellness Tips",
      description: "Evidence-based advice for optimal health and fitness",
      icon: "🧘‍♀️",
      color: "purple",
      posts: [
        "10-Minute Morning Yoga Routine",
        "Nutrition for Busy Moms",
        "Recovery and Rest Day Ideas",
        "Mindfulness for Athletes"
      ]
    },
    {
      title: "Fashion Inspiration",
      description: "Stylish and functional athletic wear for every activity",
      icon: "👕",
      color: "pink",
      posts: [
        "Best Leggings for Every Body Type",
        "Transitioning from Gym to Street",
        "Affordable Athletic Wear Finds",
        "Sustainable Activewear Brands"
      ]
    },
    {
      title: "Motherhood Stories",
      description: "Real experiences of balancing family life with fitness goals",
      icon: "👶",
      color: "purple",
      posts: [
        "Getting Back to Fitness After Baby",
        "Working Out with Kids Around",
        "Pregnancy Fitness Safety",
        "Mom Guilt and Self-Care"
      ]
    },
    {
      title: "Sports News",
      description: "Latest updates and inspiring stories from women's sports",
      icon: "🏆",
      color: "pink",
      posts: [
        "Women's Marathon World Records",
        "Rising Stars in Women's Soccer",
        "Olympic Training Insights",
        "Local Sports Heroes"
      ]
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
              <Link href="/content" className="text-purple-600 font-medium">Content Hub</Link>
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
            Content <span className="text-purple-600">Hub</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your go-to resource for wellness tips, fashion inspiration, motherhood stories, and sports news.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                  ⭐ Featured Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  From Postpartum to Personal Best: Sarah's Marathon Journey
                </h2>
                <p className="text-xl opacity-90 mb-6">
                  Follow Sarah's inspiring 18-month journey from new mom to marathon finisher, 
                  including the challenges, victories, and everything in between.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Read Full Story →
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🏃‍♀️</div>
                <div className="text-2xl font-bold mb-2">26.2 Miles</div>
                <div className="opacity-90">Completed in 4:15:32</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Categories</h2>
            <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-4 ${
                    category.color === 'purple' ? 'bg-purple-100' : 'bg-pink-100'
                  }`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {category.posts.map((post, postIndex) => (
                    <div key={postIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{post}</span>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        category.color === 'purple' 
                          ? 'bg-purple-100 text-purple-600' 
                          : 'bg-pink-100 text-pink-600'
                      }`}>
                        New
                      </span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  category.color === 'purple'
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-pink-500 text-white hover:bg-pink-600'
                }`}>
                  View All {category.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Posts</h2>
            <p className="text-xl text-gray-600">Fresh content from our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Pre-Workout Snacks That Actually Work",
                category: "Wellness",
                time: "5 min read",
                color: "purple"
              },
              {
                title: "Matching Sets: Trend or Timeless?",
                category: "Fashion",
                time: "3 min read",
                color: "pink"
              },
              {
                title: "Naptime Workouts: 15-Minute Routines",
                category: "Motherhood",
                time: "7 min read",
                color: "purple"
              },
              {
                title: "Women's World Cup Highlights",
                category: "Sports News",
                time: "4 min read",
                color: "pink"
              },
              {
                title: "Strength Training for Beginners",
                category: "Wellness",
                time: "8 min read",
                color: "purple"
              },
              {
                title: "Budget-Friendly Activewear Haul",
                category: "Fashion",
                time: "6 min read",
                color: "pink"
              }
            ].map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  post.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-pink-100 text-pink-600'
                }`}>
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.time}</span>
                  <button className={`font-semibold transition-colors ${
                    post.color === 'purple' ? 'text-purple-600 hover:text-purple-800' : 'text-pink-500 hover:text-pink-700'
                  }`}>
                    Read →
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest content delivered straight to your inbox. No spam, just quality content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Subscribe
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
