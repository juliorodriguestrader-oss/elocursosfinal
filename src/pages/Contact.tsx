import { MapPin, Mail, Phone, Share2, Globe, Send, ChevronRight, GraduationCap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/5 rounded-bl-[10rem] -z-0"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col gap-4">
            <nav className="flex items-center gap-2 text-sm font-headline tracking-widest uppercase text-outline">
              <a href="/" className="hover:text-primary-container transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary-container font-bold">Contact Us</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface">
              Contact <span className="text-primary-container">Us</span>
            </h1>
            <p className="max-w-xl text-lg text-on-surface-variant font-body mt-4 leading-relaxed">
              We're here to help you navigate your academic journey. Reach out to our atelier of experts for personalized guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Info */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-6 text-on-surface">Get in Touch</h2>
              <p className="text-on-surface-variant leading-relaxed">Have a question or just want to say hi? We'd love to hear from you. Our team is dedicated to providing the best support for our students.</p>
            </div>
            <div className="flex flex-col gap-8">
              {[
                { icon: MapPin, title: "Our Location", text: "Studio 76d, Riley Ford, North Michael chester, CF99 6QQ", color: "bg-primary-container/10 text-primary-container" },
                { icon: Mail, title: "Email Address", text: "edublink@example.com", color: "bg-secondary-container/10 text-secondary" },
                { icon: Phone, title: "Phone Number", text: "+091 413 554 8598", color: "bg-slate-100 text-slate-600" }
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 p-6 rounded-lg bg-white transition-all hover:shadow-[0_20px_40px_rgba(27,28,28,0.05)] border border-slate-50">
                  <div className={cn("w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", item.color)}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <h4 className="font-headline font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Globe, Share2, Mail].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-white hover:border-primary-container transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_40px_rgba(27,28,28,0.05)] relative overflow-hidden border border-slate-50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/5 rounded-bl-full"></div>
              <form className="flex flex-col gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-headline font-bold text-on-surface-variant ml-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-primary-container/40 placeholder:text-outline transition-all" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-headline font-bold text-on-surface-variant ml-1">Email</label>
                    <input type="email" placeholder="Your Email" className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-primary-container/40 placeholder:text-outline transition-all" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-headline font-bold text-on-surface-variant ml-1">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-primary-container/40 placeholder:text-outline transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-headline font-bold text-on-surface-variant ml-1">Message</label>
                  <textarea rows={6} placeholder="Your Message" className="w-full bg-surface-container-highest border-none rounded-md px-6 py-4 focus:ring-2 focus:ring-primary-container/40 placeholder:text-outline transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="mt-4 primary-gradient text-white font-headline font-bold py-5 px-10 rounded-full shadow-lg shadow-primary-container/20 hover:scale-[1.02] active:scale-[0.98] transition-all self-start">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] relative mt-12 grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 bg-primary-container/5 pointer-events-none mix-blend-multiply"></div>
        <img 
          src="https://picsum.photos/seed/map/1920/500" 
          alt="Map" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-container animate-ping rounded-full opacity-20"></div>
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center text-white shadow-xl relative z-10 border-4 border-white">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
