import { Search, Calendar, User, ChevronRight, Hash } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of UI Design: Beyond the Glass Morphism',
      excerpt: 'Explore how tonal layering and asymmetric grids are redefining the premium digital landscape in 2024.',
      author: 'Julian Sterling',
      date: 'March 24, 2024',
      category: 'Design',
      image: 'https://picsum.photos/seed/blog1/800/500'
    },
    {
      title: 'Mastering React Server Components for Scale',
      excerpt: 'A deep dive into the architectural shifts required to build high-performance academic platforms.',
      author: 'Elena Rodriguez',
      date: 'March 20, 2024',
      category: 'Technology',
      image: 'https://picsum.photos/seed/blog2/800/500'
    },
    {
      title: 'The Psychology of Learning in the Digital Age',
      excerpt: 'How curated environments and project-based learning accelerate knowledge retention.',
      author: 'Marcus Thorne',
      date: 'March 15, 2024',
      category: 'Education',
      image: 'https://picsum.photos/seed/blog3/800/500'
    }
  ];

  const categories = [
    { name: 'Design & Arts', count: 12 },
    { name: 'Technology', count: 24 },
    { name: 'Business', count: 8 },
    { name: 'Data Science', count: 15 },
    { name: 'Photography', count: 6 }
  ];

  const tags = ['UI/UX', 'React', 'Marketing', 'AI', 'Branding', 'Web Dev', 'Strategy'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="text-primary-container font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Our Journal</span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight mb-6">
            Scholar's <span className="text-primary-container italic">Insights</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the intersection of design, technology, and the future of academic excellence.
          </p>
        </div>
      </section>

      {/* Blog Content Grid */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-16">
            {posts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8 shadow-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary-container uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-6 text-sm text-on-surface-variant font-medium">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary-container" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary-container" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface group-hover:text-primary-container transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-on-surface-variant text-lg leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 font-headline font-bold text-primary-container group/btn">
                    Read Full Article <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}

            {/* Pagination */}
            <div className="pt-12 border-t border-outline-variant/10 flex items-center gap-4">
              <button className="w-12 h-12 rounded-full bg-primary-container text-white font-bold shadow-lg">1</button>
              <button className="w-12 h-12 rounded-full border border-outline-variant/30 font-bold text-on-surface-variant hover:bg-white transition-all">2</button>
              <button className="w-12 h-12 rounded-full border border-outline-variant/30 font-bold text-on-surface-variant hover:bg-white transition-all">3</button>
              <button className="px-6 py-3 rounded-full border border-outline-variant/30 font-bold text-on-surface-variant hover:bg-white transition-all">Next Page</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Search */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <h3 className="font-headline font-bold text-lg mb-6">Search Journal</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Keywords..." 
                  className="w-full bg-white border-none rounded-lg px-4 py-4 pr-12 text-sm focus:ring-2 focus:ring-primary-container/20 shadow-sm"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-container w-5 h-5" />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-6">
              <h3 className="font-headline font-bold text-lg border-b-2 border-primary-container pb-2 inline-block">Categories</h3>
              <div className="flex flex-col gap-4">
                {categories.map((cat) => (
                  <button key={cat.name} className="flex justify-between items-center group">
                    <span className="text-on-surface-variant group-hover:text-primary-container transition-colors">{cat.name}</span>
                    <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-on-surface-variant group-hover:bg-primary-container group-hover:text-white transition-all">
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Latest Posts */}
            <div className="space-y-6">
              <h3 className="font-headline font-bold text-lg border-b-2 border-primary-container pb-2 inline-block">Latest Posts</h3>
              <div className="space-y-6">
                {posts.slice(0, 3).map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-headline font-bold text-sm leading-snug group-hover:text-primary-container transition-colors line-clamp-2">{post.title}</h4>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-6">
              <h3 className="font-headline font-bold text-lg border-b-2 border-primary-container pb-2 inline-block">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button key={tag} className="px-4 py-2 bg-surface-container-low rounded-md text-xs font-bold text-on-surface-variant hover:bg-primary-container hover:text-white transition-all flex items-center gap-1.5">
                    <Hash className="w-3 h-3" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
