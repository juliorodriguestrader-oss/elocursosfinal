import { motion } from 'motion/react';
import { CheckCircle2, Users, GraduationCap, Award, Play, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function About() {
  const stats = [
    { label: 'Students Enrolled', value: '45K+', icon: Users, color: 'text-primary-container' },
    { label: 'Total Courses', value: '1.2K+', icon: GraduationCap, color: 'text-secondary' },
    { label: 'Expert Mentors', value: '350+', icon: Award, color: 'text-slate-600' },
  ];

  const features = [
    'Flexible Learning Schedule',
    'Expert-Led Video Tutorials',
    'Global Community Access',
    'Industry-Recognized Certificates',
    'Project-Based Learning',
    'Lifetime Access to Content'
  ];

  const team = [
    { name: 'Dr. Sarah Jenkins', role: 'Head of Design', image: 'https://picsum.photos/seed/sarah/400/400' },
    { name: 'Marcus Thorne', role: 'Lead Developer', image: 'https://picsum.photos/seed/marcus/400/400' },
    { name: 'Elena Rodriguez', role: 'Marketing Strategist', image: 'https://picsum.photos/seed/elena/400/400' },
    { name: 'Julian Sterling', role: 'UX Researcher', image: 'https://picsum.photos/seed/julian/400/400' },
  ];

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
              <span className="text-primary-container font-bold">About Us</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface">
              About <span className="text-primary-container">Edublink</span>
            </h1>
            <p className="max-w-xl text-lg text-on-surface-variant font-body mt-4 leading-relaxed">
              We are dedicated to providing a world-class education that empowers students to achieve their academic and professional dreams.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/about-main/800/1000" 
                alt="About Edublink" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-container rounded-2xl -z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 border-8 border-primary-container/20 rounded-full -z-0 hidden md:block"></div>
            
            {/* Video Play Button Overlay */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-20 group hover:scale-110 transition-transform">
              <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center text-white">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div className="absolute inset-0 bg-primary-container rounded-full animate-ping opacity-20"></div>
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary-container font-bold text-sm tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface leading-tight">
                Empowering Minds, <br />
                <span className="text-primary-container italic">Shaping Futures</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Founded in 2010, Edublink Academy started with a simple vision: to make high-quality education accessible to everyone, everywhere. Today, we are a global leader in online learning, serving millions of students worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-container shrink-0" />
                  <span className="text-on-surface font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                    <span className="text-3xl font-headline font-black text-on-surface">{stat.value}</span>
                  </div>
                  <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-outline-variant/10 space-y-6">
              <div className="w-16 h-16 bg-primary-container/10 rounded-xl flex items-center justify-center text-primary-container">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-headline font-bold text-on-surface">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                To provide innovative, accessible, and high-quality learning experiences that empower individuals to reach their full potential and contribute meaningfully to society.
              </p>
            </div>
            <div className="bg-white p-12 rounded-2xl shadow-sm border border-outline-variant/10 space-y-6">
              <div className="w-16 h-16 bg-secondary-container/10 rounded-xl flex items-center justify-center text-secondary">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-headline font-bold text-on-surface">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                To be the world's most student-centric learning platform, where anyone, anywhere can transform their life through the power of knowledge and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary-container font-bold text-sm tracking-[0.2em] uppercase">Expert Team</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface">Meet Our <span className="text-primary-container">Instructors</span></h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Our atelier of world-class experts is dedicated to your success, bringing years of industry experience to every lesson.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-container/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary-container transition-colors">{member.name}</h4>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="primary-gradient rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-container/30">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-container/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold leading-tight">
              Ready to Start Your <br />
              <span className="italic">Academic Journey?</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Join thousands of students already learning on Edublink. Get unlimited access to all courses and expert mentorship.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <button className="px-10 py-5 bg-white text-primary-container font-headline font-bold rounded-full shadow-xl hover:scale-105 transition-transform">
                Get Started Now
              </button>
              <button className="px-10 py-5 border-2 border-white/30 text-white font-headline font-bold rounded-full hover:bg-white/10 transition-all">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Globe, TrendingUp } from 'lucide-react';
