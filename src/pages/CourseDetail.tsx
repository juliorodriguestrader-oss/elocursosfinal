import { Star, CheckCircle2, Play, Video, FileText, Smartphone, Award, Share2, Bookmark, Layout, Paintbrush, BookOpen } from 'lucide-react';

export default function CourseDetail() {
  return (
    <div className="pt-20">
      {/* Course Header Section */}
      <section className="bg-surface-container-low pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/10 text-primary-container rounded-full text-xs font-bold tracking-widest uppercase font-headline">
              <Star className="w-3 h-3 fill-current" />
              Bestseller
            </div>
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight tracking-tight">
              Advanced UI Design & <br /> <span className="text-primary-container">Creative Direction</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Master the art of creating high-end digital experiences using tonal layering, editorial typography, and the "Academic Atelier" framework.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/julianne/100/100" 
                    alt="Julianne Sterling" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs font-headline font-bold text-primary-container tracking-wider uppercase">Instructor</p>
                  <p className="font-bold text-on-surface">Julianne Sterling</p>
                </div>
              </div>
              <div className="h-10 w-px bg-outline-variant/30 hidden md:block"></div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-bold text-on-surface">4.9</span>
                <span className="text-on-surface-variant text-sm">(2,450 Reviews)</span>
              </div>
            </div>
          </div>
          
          {/* Progress Arc */}
          <div className="hidden lg:block relative">
            <div className="w-48 h-48 rounded-full border-[12px] border-surface-container-high relative flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle 
                  cx="96" cy="96" fill="none" r="84" 
                  stroke="#b61e3d" strokeDasharray="527" strokeDashoffset="131" 
                  strokeLinecap="round" strokeWidth="12"
                ></circle>
              </svg>
              <div className="text-center">
                <span className="block text-3xl font-black text-on-surface">75%</span>
                <span className="text-[10px] font-headline font-bold uppercase tracking-widest text-on-surface-variant">Popularity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Sidebar Wrapper */}
      <section className="max-w-7xl mx-auto px-8 -mt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Tabs */}
            <div className="bg-white rounded-xl p-2 shadow-[0_20px_40px_rgba(27,28,28,0.05)] flex items-center gap-2">
              <button className="flex-1 py-4 px-6 bg-primary-container text-white font-headline font-bold rounded-lg transition-all">Overview</button>
              <button className="flex-1 py-4 px-6 text-on-surface-variant hover:text-primary-container font-headline font-bold rounded-lg transition-all">Curriculum</button>
              <button className="flex-1 py-4 px-6 text-on-surface-variant hover:text-primary-container font-headline font-bold rounded-lg transition-all">Instructor</button>
              <button className="flex-1 py-4 px-6 text-on-surface-variant hover:text-primary-container font-headline font-bold rounded-lg transition-all">Reviews</button>
            </div>

            {/* Overview Panel */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl font-headline font-extrabold text-on-surface">About the Course</h2>
                <div className="text-on-surface-variant leading-relaxed text-lg space-y-4">
                  <p>This isn't just another UI course. We dive deep into the psychology of premium aesthetics, teaching you how to build layouts that breathe and typography that speaks with authority.</p>
                  <p>By the end of this program, you will have mastered the nuances of tonal depth, asymmetric grid structures, and the silent language of editorial design.</p>
                </div>
              </div>

              {/* Bento Grid Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-low p-8 rounded-xl space-y-4">
                  <Layout className="w-8 h-8 text-primary-container" />
                  <h3 className="font-headline font-bold">Visual Hierarchy</h3>
                  <p className="text-sm text-on-surface-variant">Learn to control the user's focus through scale and contrast.</p>
                </div>
                <div className="bg-secondary-container/10 p-8 rounded-xl space-y-4">
                  <Paintbrush className="w-8 h-8 text-secondary" />
                  <h3 className="font-headline font-bold">Tonal Layering</h3>
                  <p className="text-sm text-on-surface-variant">Master the "No-Line" rule for sophisticated interface edges.</p>
                </div>
                <div className="bg-slate-100 p-8 rounded-xl space-y-4">
                  <BookOpen className="w-8 h-8 text-slate-600" />
                  <h3 className="font-headline font-bold">Editorial Type</h3>
                  <p className="text-sm text-on-surface-variant">Advanced pairing of Jakarta Sans and Manrope.</p>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="space-y-6">
                <h3 className="text-2xl font-headline font-extrabold">What you'll achieve</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Design 5+ premium project case studies for your portfolio",
                    "Advanced mastery of color theory and tonal depth",
                    "Techniques for breaking the standard UI grid safely",
                    "Lifetime access to our private design atelier community"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-primary-container mt-1 fill-current text-white" />
                      <span className="text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Buy Now Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-xl overflow-hidden shadow-[0_40px_80px_rgba(27,28,28,0.1)] border-b-4 border-primary-container">
              <div className="relative aspect-video">
                <img 
                  src="https://picsum.photos/seed/course-preview/800/450" 
                  alt="Course Preview" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-primary-container hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current" />
                  </button>
                </div>
              </div>
              <div className="p-8 space-y-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-headline font-black text-on-surface">$149.00</span>
                  <span className="text-on-surface-variant line-through font-bold">$299.00</span>
                  <span className="bg-secondary-container text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">50% OFF</span>
                </div>
                <button className="w-full py-5 primary-gradient text-white rounded-full font-headline font-black text-lg shadow-xl shadow-primary-container/20 hover:opacity-90 transition-all active:scale-[0.98]">
                  Enroll in the Atelier
                </button>
                <div className="space-y-4">
                  <p className="font-headline font-bold text-on-surface text-sm uppercase tracking-wider">This course includes:</p>
                  <ul className="space-y-4">
                    {[
                      { icon: Video, text: "24 hours on-demand video" },
                      { icon: FileText, text: "15 downloadable resources" },
                      { icon: Smartphone, text: "Access on mobile and TV" },
                      { icon: Award, text: "Certificate of completion" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <item.icon className="w-5 h-5 text-primary-container" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-outline-variant/10 flex justify-between items-center">
                  <button className="text-primary-container font-bold text-sm flex items-center gap-2 hover:underline">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="text-on-surface-variant font-bold text-sm flex items-center gap-2 hover:text-secondary">
                    <Bookmark className="w-4 h-4" /> Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
