import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  Globe, 
  Search, 
  TrendingUp, 
  Smartphone, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Menu, 
  X,
  MapPin,
  Instagram,
  Zap,
  Clock,
  ShieldCheck,
  MonitorSmartphone,
  Headset,
  ChevronRight,
  ChevronDown,
  ChevronLeft
} from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const WHATSAPP_NUMBER = "919892676143"; // Replace with actual number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Digiकर,%20I%20want%20to%20get%20my%20business%20online!`;
const PHONE_LINK = `tel:+${WHATSAPP_NUMBER}`;

const testimonials = [
  { name: "Rahul S.", biz: "Fitness Studio Owner", text: "Got my website in 2 days! The WhatsApp integration is amazing, I'm getting inquiries directly on my phone now." },
  { name: "Dr. Anjali M.", biz: "Dental Clinic", text: "Very professional service. They understood exactly what a clinic needs. Highly recommended for the price!" },
  { name: "Vikram D.", biz: "Travel Agency", text: "Best investment for my business. The website looks premium and loads very fast. Great support team." },
  { name: "Priya K.", biz: "Boutique Owner", text: "I was worried about the cost, but ₹4999 is a steal for this quality. My online sales have doubled since the launch." },
  { name: "Amit P.", biz: "Real Estate Agent", text: "The lead generation form is working wonders. I get 3-4 solid property inquiries every week directly to my email." },
  { name: "Sneha R.", biz: "Yoga Instructor", text: "Digiकर made the whole process so simple. I just sent my photos and they handled the rest. Beautiful website!" },
  { name: "Rajesh V.", biz: "Restaurant Owner", text: "Having our menu online with a direct WhatsApp ordering button has completely changed our takeaway business." },
  { name: "Neha Gupta", biz: "Makeup Artist", text: "My portfolio looks stunning on mobile. Most of my brides find me through the new Google ranking. Thank you!" },
  { name: "Sanjay T.", biz: "Auto Repair Shop", text: "Never thought a garage needed a website, but the Google My Business setup brings me new local customers daily." },
  { name: "Meera L.", biz: "Coaching Classes", text: "Students can now easily find our batch timings and syllabus online. The WhatsApp chat makes admissions so much faster." },
  { name: "Kiran B.", biz: "Interior Designer", text: "The team is very responsive. They delivered a premium looking portfolio site that matches my design aesthetic perfectly." },
  { name: "Suresh M.", biz: "Hardware Store", text: "Simple, fast, and exactly what was promised. The local SEO basics really helped my shop appear on Google Maps." }
];

const faqs = [
  {
    q: "What is included in the ₹4999 package?",
    a: "You get a premium 5-page mobile-responsive website, WhatsApp chat integration, a lead generation contact form, basic SEO setup, and 1 month of free technical support."
  },
  {
    q: "Do I need to pay for domain and hosting separately?",
    a: "Yes, domain and hosting are third-party costs. We will guide you to buy the best and most affordable ones (usually around ₹1500-₹2000/year) directly in your name so you have full ownership."
  },
  {
    q: "How long does it take to build the website?",
    a: "Once we receive all your business details, photos, and content, your website will be designed, developed, and live in just 2-3 working days."
  },
  {
    q: "Are there any hidden charges?",
    a: "Absolutely not! The ₹4999 is a one-time development fee. There are no surprise costs or hidden monthly maintenance fees from our side."
  },
  {
    q: "Can I update the website content later?",
    a: "Yes, we build websites on user-friendly platforms. If you need minor text or image updates, we can assist you, or we can offer a small maintenance package for regular updates."
  },
  {
    q: "Do you provide refunds?",
    a: "We work closely with you during the design phase to ensure you are 100% satisfied. Since this is a custom service, we don't offer full refunds once development has started, but we provide revisions to make it right."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border ${isOpen ? 'border-orange-500/50' : 'border-slate-800'} rounded-2xl bg-slate-950 overflow-hidden transition-colors duration-300`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="font-bold text-lg text-slate-200 pr-4">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-orange-500/20' : 'bg-slate-800'}`}>
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-400' : 'text-slate-400'}`} />
        </div>
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-slate-400 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <span className="text-3xl font-extrabold tracking-normal bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Digiकर
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Work</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Pricing</button>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Work</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md">Pricing</button>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-8 border border-orange-500/20"
            >
              <Zap className="w-4 h-4" />
              <span>Limited Time Offer for Local Businesses</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            >
              Take Your Business Online & <br className="hidden md:block" />
              Start Getting Customers Daily 🚀
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-medium"
            >
              Website + Google Ranking + Leads — All in One Place. <br className="hidden sm:block" />
              <span className="text-slate-300">Aapka business, ab online daudega!</span>
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a 
                href="#pricing"
                onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-full text-white bg-orange-600 hover:bg-orange-500 shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Website Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold rounded-full text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Grow</h2>
              <p className="text-slate-400 text-lg">We don't just build websites; we build lead generation machines for your local business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Globe, title: "Website Development", desc: "Fast, mobile-friendly website under ₹5000. Perfect for showcasing your services.", benefit: "Builds Trust & Credibility", color: "text-blue-400", bg: "bg-blue-400/10", border: "hover:border-blue-500/50", shadow: "hover:shadow-[0_0_30px_-10px_rgba(96,165,250,0.3)]" },
                { icon: MapPin, title: "Google My Business", desc: "Rank higher on Google Maps when locals search for your services.", benefit: "More Local Walk-ins", color: "text-red-400", bg: "bg-red-400/10", border: "hover:border-red-500/50", shadow: "hover:shadow-[0_0_30px_-10px_rgba(248,113,113,0.3)]" },
                { icon: MessageCircle, title: "WhatsApp Integration", desc: "Get direct inquiries from your website straight to your WhatsApp.", benefit: "Instant Customer Chat", color: "text-green-400", bg: "bg-green-400/10", border: "hover:border-green-500/50", shadow: "hover:shadow-[0_0_30px_-10px_rgba(74,222,128,0.3)]" },
                { icon: TrendingUp, title: "Lead Generation Setup", desc: "Contact forms and call-to-actions designed to convert visitors into customers.", benefit: "More Phone Calls & Leads", color: "text-orange-400", bg: "bg-orange-400/10", border: "hover:border-orange-500/50", shadow: "hover:shadow-[0_0_30px_-10px_rgba(251,146,60,0.3)]" },
                { icon: Smartphone, title: "Meta Ads Setup", desc: "Start reaching more customers on Facebook and Instagram locally.", benefit: "Targeted Local Reach", color: "text-purple-400", bg: "bg-purple-400/10", border: "hover:border-purple-500/50", shadow: "hover:shadow-[0_0_30px_-10px_rgba(192,132,252,0.3)]" },
                { icon: Search, title: "SEO Basics", desc: "On-page optimization so Google can easily find and rank your website.", benefit: "Free Organic Traffic", color: "text-teal-400", bg: "bg-teal-400/10", border: "hover:border-teal-500/50", shadow: "hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.3)]" }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-slate-950 border border-slate-800 p-8 rounded-2xl transition-all duration-500 group hover:-translate-y-2 ${service.border} ${service.shadow} relative overflow-hidden flex flex-col h-full`}
                >
                  {/* Background Glow Effect on Hover */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}></div>
                  
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-inner`}>
                    <service.icon className={`w-7 h-7 ${service.color} transition-transform duration-300 group-hover:rotate-12`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                  
                  {/* Benefit Section */}
                  <div className="mt-auto pt-5 border-t border-slate-800/50 flex items-start gap-3">
                    <div className={`mt-0.5 rounded-full ${service.bg} p-1`}>
                      <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                    </div>
                    <p className="text-sm font-medium text-slate-300">
                      <span className="text-slate-500 block text-xs uppercase tracking-wider mb-0.5">Outcome</span>
                      {service.benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-orange-500">Digiकर</span>?</h2>
                <p className="text-slate-400 text-lg mb-8">
                  We understand local businesses. You don't need a ₹50,000 complex website. You need a fast, affordable solution that brings customers to your door.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "Affordable Pricing", desc: "Complete package at just ₹4999. No hidden charges." },
                    { icon: Clock, title: "Fast Delivery", desc: "Your website goes live in just 2-3 days." },
                    { icon: MonitorSmartphone, title: "Mobile Optimized", desc: "Looks perfect on every phone, where 90% of your customers are." },
                    { icon: Headset, title: "Personal Support", desc: "Direct WhatsApp support. No bots, talk to real humans." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-200">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"></div>
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full"></div>
                  <h3 className="text-2xl font-bold mb-6">Ready to start?</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(WHATSAPP_LINK, '_blank'); }}>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Business Name</label>
                      <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="e.g. Sharma Dental Clinic" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Phone Number</label>
                      <input type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="+91" />
                    </div>
                    <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-xs text-slate-500 text-center mt-4">We will contact you within 2 hours.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Demos */}
        <section id="portfolio" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Websites That Work</h2>
              <p className="text-slate-400 text-lg">See how we help different local businesses establish their online presence.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Healthcare & Medical", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop", tag: "Clinic / Hospital" },
                { title: "Fitness & Sports", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", tag: "Gym / Yoga" },
                { title: "Food & Restaurant", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", tag: "Cafe / Dining" },
                { title: "Travel & Hospitality", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop", tag: "Tours / Hotels" },
                { title: "Real Estate & Construction", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", tag: "Property / Builders" },
                { title: "Local Shops & Businesses", img: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=800&auto=format&fit=crop", tag: "Retail / Stores" },
                { title: "Education & Coaching", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", tag: "Classes / Tutors" },
                { title: "Beauty & Personal Care", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop", tag: "Salon / Spa" },
                { title: "Automobile Services", img: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?q=80&w=800&auto=format&fit=crop", tag: "Garage / Wash" },
                { title: "Personal Brands & Freelancers", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop", tag: "Portfolio / Resume" }
              ].map((demo, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 border border-slate-800">
                    <img src={demo.img} alt={demo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded mb-2 backdrop-blur-sm border border-orange-500/20">{demo.tag}</span>
                      <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-400 font-medium hover:text-orange-300 transition-colors"
              >
                Get a Similar Website for Your Business <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 4-Step Process</h2>
              <p className="text-slate-400 text-lg">No technical knowledge required. We handle everything for you.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Contact Us", desc: "Message us on WhatsApp to discuss your business needs." },
                { step: "02", title: "Share Details", desc: "Send us your photos, services, and contact information." },
                { step: "03", title: "We Build It", desc: "We design and develop your website in just 2-3 days." },
                { step: "04", title: "Go Live", desc: "Your website is live! Start getting customer inquiries." }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  {idx !== 3 && <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-slate-800"></div>}
                  <div className="relative z-10 bg-slate-950 w-16 h-16 rounded-2xl border border-slate-800 flex items-center justify-center text-2xl font-bold text-orange-500 mb-6 mx-auto lg:mx-0 shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center lg:text-left">{item.title}</h3>
                  <p className="text-slate-400 text-center lg:text-left">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Local Businesses</h2>
              <p className="text-slate-400 text-lg">See what our clients have to say about our services.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Slider Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
                <button 
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
                <button 
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slider Content */}
              <div className="overflow-hidden px-2 py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-950 border border-slate-800 p-8 md:p-10 rounded-2xl flex flex-col items-center text-center hover:border-orange-500/30 transition-colors shadow-xl"
                  >
                    <div className="flex gap-1 text-orange-500 mb-6">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <p className="text-slate-300 text-lg md:text-xl mb-8 italic leading-relaxed">"{testimonials[testimonialIndex].text}"</p>
                    <div className="mt-auto pt-6 border-t border-slate-800/50 w-full">
                      <p className="font-bold text-white text-lg">{testimonials[testimonialIndex].name}</p>
                      <p className="text-md text-orange-500">{testimonials[testimonialIndex].biz}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === testimonialIndex ? 'bg-orange-500' : 'bg-slate-700 hover:bg-slate-500'}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-slate-400 text-lg">Everything you need to get online, in one affordable package.</p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10 pb-10 border-b border-slate-800">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Complete Website Package</h3>
                    <p className="text-slate-400">Perfect for small & local businesses</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="flex items-baseline gap-2 justify-center md:justify-end">
                      <span className="text-5xl font-extrabold text-white">₹4999</span>
                      <span className="text-slate-500 line-through">₹15000</span>
                    </div>
                    <p className="text-orange-400 font-medium mt-1">One-time development cost</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                  {[
                    "Free Domain Guidance",
                    "Premium Mobile-Responsive Design",
                    "Up to 5 Pages (Home, About, Services, etc.)",
                    "WhatsApp Chat Button Integration",
                    "Lead Generation Contact Form",
                    "Google Maps Integration",
                    "Basic SEO Setup",
                    "Fast Loading Speed",
                    "Social Media Links",
                    "1 Month Free Support"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-xl text-white bg-orange-600 hover:bg-orange-500 transition-all text-center flex items-center justify-center gap-2"
                  >
                    Claim This Offer Now
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-400 text-lg">Everything you need to know about our services and pricing.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-orange-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Don’t Lose Customers to Your Competitors</h2>
            <p className="text-orange-100 text-xl mb-10">Go online today and start getting more leads, more calls, and more business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-bold rounded-full text-orange-600 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                WhatsApp Now
              </a>
              <a 
                href={PHONE_LINK}
                className="px-8 py-4 text-lg font-bold rounded-full text-white bg-orange-700 hover:bg-orange-800 transition-all flex items-center justify-center gap-2 border border-orange-500"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-4xl font-extrabold tracking-normal bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Digiकर
                </span>
              </div>
              <p className="text-slate-400 mb-6">
                Empowering local businesses in India with affordable, high-converting websites and digital solutions.
              </p>
              <div className="flex gap-4">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:bg-slate-800 transition-colors">
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/digikarlo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-slate-800 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-orange-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('portfolio')} className="text-slate-400 hover:text-orange-400 transition-colors">Our Work</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-orange-400 transition-colors">Pricing</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Ratnagiri, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href={PHONE_LINK} className="text-slate-400 hover:text-white transition-colors">+91 98926 76143</a>
                </li>
                <li className="flex items-center gap-3">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Chat on WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Digiकर. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Made with <span className="text-orange-500">♥</span> for Local Businesses
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-slate-950"></span>
        </span>
      </a>
    </div>
  );
}

