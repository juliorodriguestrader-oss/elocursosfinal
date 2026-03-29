import { motion } from 'motion/react';
import { Search, Star, Terminal, Brush, TrendingUp, Camera, ChevronRight, CheckCircle2, Quote } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary-container/10 text-primary-container rounded-full">
              Elevate Your Potential
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-6">
              Discover the Art of <span className="text-primary-container">Learning</span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              Join a global community of scholars and industry experts. Master the skills that matter through curated, project-based learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <div className="relative flex-grow group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="What do you want to learn?"
                  className="w-full pl-12 pr-4 py-4 rounded-full border-none bg-surface-container-high focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface"
                />
              </div>
              <button className="bg-primary-container text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary-container/20 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                Search Courses
              </button>
            </div>
            <div className="mt-12 flex items-center space-x-6 text-sm text-on-surface-variant">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-4 border-surface"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p><span className="font-bold text-on-surface">15k+</span> active students already joined</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary-container/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://picsum.photos/seed/learning/800/1000" 
                alt="Students studying" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute top-1/4 -left-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">New Content</p>
                  <p className="font-bold text-slate-800">200+ New Lessons</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-black text-primary-container">4.9/5</p>
                <div className="flex text-yellow-400 justify-center my-1">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase">Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">Explore Top Categories</h2>
              <p className="text-on-surface-variant max-w-xl">Whether you want to start a new career or advance in your current one, we have the right course for you.</p>
            </div>
            <button className="text-primary-container font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              View All Categories <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Development', icon: Terminal, count: 38, color: 'bg-primary/5', text: 'text-primary' },
              { name: 'Design', icon: Brush, count: 24, color: 'bg-secondary/5', text: 'text-secondary' },
              { name: 'Business', icon: TrendingUp, count: 42, color: 'bg-yellow-500/5', text: 'text-yellow-600' },
              { name: 'Photography', icon: Camera, count: 15, color: 'bg-blue-500/5', text: 'text-blue-600' },
            ].map((cat) => (
              <div key={cat.name} className="group bg-white p-8 rounded-lg hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300", cat.color, cat.text)}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">{cat.name}</h3>
                <p className="text-sm text-on-surface-variant">{cat.count} Courses Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary-container font-bold text-sm tracking-widest uppercase">Popular Programs</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mt-4">Pick A Course To Get Started</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Modern UI Design Systems', price: '$49.00', rating: '4.9', reviews: '120', tag: 'Bestseller', seed: 'design' },
              { title: 'Advanced React Architecture', price: '$79.00', rating: '5.0', reviews: '85', tag: null, seed: 'code' },
              { title: 'Growth Marketing Masterclass', price: '$59.00', rating: '4.8', reviews: '210', tag: 'Popular', seed: 'marketing' },
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={`https://picsum.photos/seed/${course.seed}/600/400`} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {course.tag && (
                    <div className="absolute top-4 left-4 bg-primary-container text-white px-3 py-1 rounded-full text-xs font-bold">
                      {course.tag}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-bold text-on-surface">{course.rating}</span>
                    <span className="text-sm text-on-surface-variant">({course.reviews} Reviews)</span>
                  </div>
                  <h3 className="font-headline text-xl font-extrabold mb-4 group-hover:text-primary-container transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-surface-container">
                    <span className="text-2xl font-black text-on-surface">{course.price}</span>
                    <button className="text-primary-container font-bold flex items-center gap-2 group/btn">
                      Enroll Now <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-surface-container-low overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Quote className="absolute -top-10 -left-10 text-primary-container/10 w-32 h-32" />
                <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-10 leading-tight">What Our Students Have To Say</h2>
                <div className="bg-white p-10 md:p-14 rounded-xl shadow-xl relative">
                  <p className="text-xl md:text-2xl italic text-on-surface leading-relaxed mb-10">
                    "EduBlink has completely transformed how I approach complex design problems. The mentors aren't just teachers; they're industry practitioners who genuinely care about your growth."
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://picsum.photos/seed/elena/100/100" 
                      alt="Elena Vance" 
                      className="w-16 h-16 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-headline font-bold text-lg">Elena Vance</h4>
                      <p className="text-on-surface-variant text-sm">Senior Product Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <div className="bg-primary-container p-8 rounded-lg text-white transform translate-y-8">
                <h4 className="text-4xl font-black mb-2">15k+</h4>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Global Scholars</p>
              </div>
              <div className="bg-secondary p-8 rounded-lg text-white">
                <h4 className="text-4xl font-black mb-2">95%</h4>
                <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Completion Rate</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg col-span-2 mt-4">
                <div className="flex items-center space-x-6">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white"><CheckCircle2 className="w-6 h-6 text-primary-container" /></div>
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center border-4 border-white"><CheckCircle2 className="w-6 h-6 text-secondary" /></div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white"><CheckCircle2 className="w-6 h-6 text-blue-500" /></div>
                  </div>
                  <p className="font-bold text-on-surface leading-snug">Accredited by Top World Universities & Organizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="primary-gradient rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-4xl md:text-5xl font-black text-white mb-8 max-w-3xl mx-auto leading-tight">Start Your Professional Transformation Today</h2>
              <p className="text-white/90 text-lg mb-10 max-w-xl mx-auto">Don't wait for the perfect moment. Join over 15,000 students and start building your future now.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-white text-primary-container px-10 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
                  Get Started Now
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
