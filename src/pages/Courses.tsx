import { Filter, Star, Clock, Layers, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Courses() {
  const categories = ['Design & Arts', 'Technology', 'Business', 'Data Science'];
  const levels = ['All Expertise Levels', 'Beginner', 'Intermediate', 'Advanced'];
  
  const courses = [
    {
      title: 'Visual Identity Systems for Modern Enterprises',
      instructor: 'Prof. Julian Sterling',
      category: 'Design',
      rating: '4.9',
      duration: '24.5 Hours',
      level: 'Intermediate',
      price: '$129.00',
      image: 'https://picsum.photos/seed/design1/600/400',
      instructorImg: 'https://picsum.photos/seed/inst1/100/100'
    },
    {
      title: 'Predictive Analytics & Neural Networks',
      instructor: 'Dr. Elena Rodriguez',
      category: 'Data Science',
      rating: '5.0',
      duration: '38 Hours',
      level: 'Advanced',
      price: '$199.00',
      image: 'https://picsum.photos/seed/data1/600/400',
      instructorImg: 'https://picsum.photos/seed/inst2/100/100'
    },
    {
      title: 'Global Market Strategies & Scaling',
      instructor: 'Marcus Thorne',
      category: 'Business',
      rating: '4.8',
      duration: '15 Hours',
      level: 'Beginner',
      price: '$89.00',
      image: 'https://picsum.photos/seed/biz1/600/400',
      instructorImg: 'https://picsum.photos/seed/inst3/100/100'
    },
    {
      title: 'Mastering Next.js & Framer Motion',
      instructor: 'Sasha Ivanova',
      category: 'Technology',
      rating: '4.9',
      duration: '28 Hours',
      level: 'Advanced',
      price: '$149.00',
      image: 'https://picsum.photos/seed/tech1/600/400',
      instructorImg: 'https://picsum.photos/seed/inst4/100/100'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-16">
        <span className="font-headline text-primary-container font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Professional Curriculums</span>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tight leading-[1.1]">
          Explore Our <span className="text-primary-container italic">Premier</span> Courses
        </h1>
        <p className="mt-6 text-on-surface-variant max-w-2xl text-lg leading-relaxed">
          Unlock your potential with our meticulously curated selection of masterclasses, designed by industry experts for the next generation of academic excellence.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 sticky top-32 space-y-10">
          <div className="bg-surface-container-low p-8 rounded-lg">
            <h3 className="font-headline font-bold text-lg mb-6 flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary-container" />
              Refine Search
            </h3>
            <div className="space-y-8">
              <div>
                <label className="font-headline font-bold text-sm text-on-surface-variant uppercase tracking-wider block mb-4">Category</label>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 rounded border-outline-variant text-primary-container focus:ring-primary-container/20 transition-all"
                        defaultChecked={cat === 'Technology'}
                      />
                      <span className={cn("transition-colors", cat === 'Technology' ? "text-primary-container font-medium" : "text-on-surface group-hover:text-primary-container")}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-headline font-bold text-sm text-on-surface-variant uppercase tracking-wider block mb-4">Level</label>
                <select className="w-full bg-surface-container-highest border-none rounded-md px-4 py-3 text-on-surface focus:ring-1 focus:ring-primary-container/40 transition-all font-medium">
                  {levels.map(level => <option key={level}>{level}</option>)}
                </select>
              </div>

              <div>
                <label className="font-headline font-bold text-sm text-on-surface-variant uppercase tracking-wider block mb-4">Price Range</label>
                <input type="range" className="w-full h-1.5 bg-outline-variant/30 rounded-lg appearance-none cursor-pointer accent-primary-container" />
                <div className="flex justify-between mt-2 text-sm font-medium text-on-surface-variant">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 py-4 rounded-full bg-primary-container text-white font-headline font-bold shadow-lg shadow-primary-container/20 hover:scale-[0.98] transition-all">
              Apply Filters
            </button>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-slate-900 p-8 text-white">
            <div className="relative z-10">
              <h4 className="font-headline font-bold text-xl mb-3 leading-tight">Join the Elite Mentorship Program</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">Get personalized guidance from industry titans and accelerate your career trajectory.</p>
              <button className="text-primary-container font-bold text-sm underline underline-offset-4 hover:text-white transition-colors">Learn More</button>
            </div>
          </div>
        </aside>

        {/* Course Grid */}
        <div className="lg:col-span-9">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <p className="text-on-surface-variant font-medium">Showing <span className="text-on-surface font-bold">128</span> sophisticated courses</p>
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Sort By:</span>
              <select className="bg-transparent border-none font-bold text-primary-container focus:ring-0 cursor-pointer">
                <option>Most Renowned</option>
                <option>Newly Published</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {courses.map((course, idx) => (
              <div key={idx} className="group bg-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_rgba(27,28,28,0.08)] border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary-container text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md bg-opacity-90">{course.category}</div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-sm">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <span className="text-sm font-bold text-on-surface">{course.rating}</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={course.instructorImg} 
                      alt={course.instructor} 
                      className="w-8 h-8 rounded-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-sm font-semibold text-on-surface-variant">{course.instructor}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 group-hover:text-primary-container transition-colors leading-snug">{course.title}</h3>
                  <div className="flex items-center gap-6 text-on-surface-variant text-sm font-medium mb-8">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      {course.level}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-surface-container">
                    <span className="text-3xl font-black text-on-surface">{course.price}</span>
                    <button className="p-3 rounded-full bg-secondary-container text-white hover:scale-110 transition-transform">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-white hover:shadow-md transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-primary-container text-white font-bold shadow-lg shadow-primary-container/20">1</button>
            <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center font-bold text-on-surface-variant hover:bg-white transition-all">2</button>
            <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center font-bold text-on-surface-variant hover:bg-white transition-all">3</button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center font-bold text-on-surface-variant hover:bg-white transition-all">12</button>
            <button className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-white hover:shadow-md transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
