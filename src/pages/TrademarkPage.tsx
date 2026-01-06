import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  Shield, Check, Clock, Award, FileText, Users, TrendingUp, Globe, Zap, 
  ChevronRight, Star, CheckCircle, ArrowRight, Sparkles, Target, Lock, 
  Rocket, BadgeCheck, ChevronDown
} from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, { duration });
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, duration, count, rounded]);

  return <span>{prefix}{displayValue}{suffix}</span>;
};

// Glass Card Component
const GlassCard = ({ children, className = "", hover = true, delay = 0 }: { children: React.ReactNode; className?: string; hover?: boolean; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Floating Orbs Background
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 80, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -60, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl"
      />
    </div>
  );
};

export default function TrademarkPage() {
  const [registrationCount, setRegistrationCount] = useState(50234);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Animated counter for registrations
  useEffect(() => {
    const interval = setInterval(() => {
      setRegistrationCount(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const recentRegistrations = [
    { brand: "TechFlow Pro", class: "9", owner: "Rajesh Kumar", city: "Mumbai", verified: true },
    { brand: "StyleHub Fashion", class: "25", owner: "Priya Sharma", city: "Delhi", verified: true },
    { brand: "FreshBite Café", class: "43", owner: "Amit Patel", city: "Bangalore", verified: true },
    { brand: "EduSmart Learning", class: "41", owner: "Neha Singh", city: "Pune", verified: true },
    { brand: "FitZone Gym", class: "41", owner: "Vikram Shah", city: "Ahmedabad", verified: true },
  ];

  const trademarkTypes = [
    { name: "Brand Name", icon: "🏷️", description: "Business name for your brand identity", gradient: "from-purple-500 to-pink-500", examples: "Nike, Apple, Samsung" },
    { name: "Brand + Logo", icon: "🎨", description: "Name + Graphic representation", gradient: "from-blue-500 to-cyan-500", examples: "McDonald's, Starbucks" },
    { name: "Logo Only", icon: "✨", description: "Graphic representation of brand", gradient: "from-green-500 to-emerald-500", examples: "Apple Logo, Nike Swoosh" },
    { name: "Slogan", icon: "💬", description: "Your brand's catchy tagline", gradient: "from-orange-500 to-red-500", examples: "Just Do It, I'm Lovin' It" },
  ];

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Filing in 6 hours, TM symbol in 24 hours", stat: "6 hrs", color: "text-yellow-400" },
    { icon: Shield, title: "100% Legal Protection", description: "Complete protection under Trade Marks Act, 1999", stat: "100%", color: "text-blue-400" },
    { icon: BadgeCheck, title: "Expert Team", description: "Senior IP lawyers with 10+ years experience", stat: "10+ yrs", color: "text-green-400" },
    { icon: Target, title: "High Success Rate", description: "98% approval rate with thorough search", stat: "98%", color: "text-purple-400" },
    { icon: Users, title: "Trusted Nationwide", description: "50,000+ businesses protected", stat: "50K+", color: "text-indigo-400" },
    { icon: Lock, title: "Secure Process", description: "ISO 27001 certified platform", stat: "ISO", color: "text-red-400" },
  ];

  const pricingPlans = [
    {
      id: 'standard',
      name: 'Standard Filing',
      price: '1,499',
      originalPrice: '1,999',
      discount: '25',
      timeframe: '3 days',
      icon: FileText,
      features: ['30-min expert consultation', 'TM Class Search & Selection', 'Thorough trademark search', 'Filing within 3 working days', 'TM Receipt in 3-5 days', 'TM Certificate included', 'Regular status updates', 'Objection handling support'],
      govt_fee: '4,500',
      popular: false
    },
    {
      id: 'express',
      name: 'Express Filing',
      price: '1,999',
      originalPrice: '2,999',
      discount: '40',
      timeframe: '6 hours',
      icon: Rocket,
      popular: true,
      features: ['Priority 30-min consultation', 'Instant TM Class Selection', 'Advanced trademark search', 'Super-fast filing in 6 hours', 'TM Receipt in 24 hours', 'Free MSME Registration', 'TM Certificate included', 'Priority support 24/7', 'Fast-track objection handling'],
      govt_fee: '4,500'
    }
  ];

  const testimonials = [
    { name: "Rahul Verma", business: "Tech Startup, Bangalore", rating: 5, text: "Incredible service! My trademark was filed within hours and the team guided me through every step. The express service is worth every penny!", image: "👨‍💼" },
    { name: "Sneha Desai", business: "Fashion Brand, Mumbai", rating: 5, text: "Best decision to go with this service. The express filing saved my product launch timeline. Professional team and transparent process!", image: "👩‍💼" },
    { name: "Vikram Singh", business: "Restaurant Chain, Delhi", rating: 5, text: "Outstanding service with transparent pricing. They handled everything from search to registration smoothly. Highly recommended!", image: "👨‍🍳" },
  ];

  const processSteps = [
    { step: "1", title: "Trademark Search", desc: "AI-powered comprehensive search across 10M+ trademarks to ensure uniqueness", icon: "🔍", duration: "1 hour" },
    { step: "2", title: "Expert Review", desc: "Senior IP lawyer reviews and prepares your application with precision", icon: "⚖️", duration: "2 hours" },
    { step: "3", title: "File Application", desc: "Submit application to Trademark Registry with all required documents", icon: "📝", duration: "3 hours" },
    { step: "4", title: "Get TM Symbol", desc: "Start using ™ symbol on your brand immediately after filing", icon: "™️", duration: "24 hours" },
  ];

  const faqs = [
    { q: "What is a trademark and why do I need one?", a: "A trademark is a unique symbol, word, or phrase that identifies your brand. It provides legal protection, prevents others from using similar marks, and helps build brand recognition and trust with customers." },
    { q: "How long does trademark registration take?", a: "While complete registration takes 12-18 months, you can start using the TM symbol within 24 hours of filing with our express service. This gives you immediate legal standing while the full process completes." },
    { q: "What's the difference between TM and ® symbols?", a: "TM symbol can be used once you file your application, indicating you claim rights to the mark. The ® symbol is only for registered trademarks after complete approval. Both provide legal protection." },
    { q: "Can my trademark application be rejected?", a: "Our thorough search process ensures a 98% approval rate. If objections arise, our expert legal team handles all responses and hearings at no extra cost in most cases." },
    { q: "Do I need to register in multiple classes?", a: "It depends on your business. If you sell both products (Class 9) and services (Class 35), you need multiple classes. Our experts will guide you on the best protection strategy for your brand." },
    { q: "What happens after 10 years?", a: "Trademarks are renewable indefinitely. We send timely reminders before expiry and handle the renewal process. Many famous brands have trademarks over 100 years old!" },
  ];

  const stats = [
    { value: 50234, label: "Trademarks Protected", icon: Shield, suffix: "+" },
    { value: 6, label: "Hour Express Filing", icon: Zap, suffix: " hrs" },
    { value: 98, label: "Success Rate", icon: Target, suffix: "%" },
    { value: 4.8, label: "Customer Rating", icon: Star, suffix: "/5" },
  ];

  const benefits = [
    { title: "Exclusive Rights", desc: "Sole ownership and usage rights", icon: "🔐" },
    { title: "Legal Protection", desc: "Sue infringers in court", icon: "⚖️" },
    { title: "Brand Value", desc: "Increases business valuation", icon: "💰" },
    { title: "Customer Trust", desc: "Builds credibility & recognition", icon: "🤝" },
    { title: "Global Expansion", desc: "Easier international registration", icon: "🌍" },
    { title: "Asset Creation", desc: "Can be sold or licensed", icon: "📈" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <FloatingOrbs />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-300 px-6 py-3 rounded-full"
              >
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">ISO 27001 Certified • 50,000+ Registrations</span>
              </motion.div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                  Protect Your Brand
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  in Just 6 Hours
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                India's <span className="font-bold text-purple-400">fastest</span> and most <span className="font-bold text-purple-400">trusted</span> trademark registration platform. Get legal protection starting at <span className="font-bold text-green-400">₹1,499</span> with expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-amber-500/25 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Rocket className="h-6 w-6" />
                    <span>Start Registration Now</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <FileText className="h-6 w-6" />
                    <span>View Sample Certificate</span>
                  </span>
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {['👨', '👩', '👨‍💼', '👩‍💼'].map((emoji, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg border-2 border-slate-900">
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-400"><strong className="text-white">5,000+</strong> registered this month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400"><strong className="text-white">4.8/5</strong> (7,500+ reviews)</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Live Activity Feed */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <GlassCard className="p-8" hover={false}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>Live Registrations</span>
                  </h3>
                  <span className="text-sm text-gray-400">Real-time</span>
                </div>
                
                <div className="space-y-3 max-h-80 overflow-hidden">
                  {recentRegistrations.map((reg, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <p className="font-bold text-white">{reg.brand}</p>
                            {reg.verified && <BadgeCheck className="h-4 w-4 text-blue-400" />}
                          </div>
                          <p className="text-sm text-gray-400">{reg.owner} • {reg.city}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                            Class {reg.class}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">Just now</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                  <p className="text-center text-green-300">
                    <strong className="text-2xl text-white"><AnimatedCounter value={registrationCount} /></strong>
                    <span className="text-sm block mt-1">Brands Protected & Growing</span>
                  </p>
                </div>
              </GlassCard>

              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl"
              >
                ⚡ 6 Hour Filing
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl"
              >
                ✅ 98% Success
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-3 text-white/80" />
                <p className="text-4xl font-extrabold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRADEMARK TYPES SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Trademark Type</span>
            </h2>
            <p className="text-xl text-gray-400">Select the perfect protection for your brand identity</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trademarkTypes.map((type, idx) => (
              <GlassCard key={idx} className="p-6 group cursor-pointer" delay={idx * 0.1}>
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <div className="relative">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">{type.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                  <p className="text-xs text-gray-500 italic mb-4">Examples: {type.examples}</p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${type.gradient} text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2`}
                  >
                    <span>Register Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Why <span className="text-amber-400">50,000+</span> Businesses Trust Us
            </h2>
            <p className="text-xl text-gray-400">Industry-leading features that make trademark registration effortless</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <GlassCard key={idx} className="p-8 group" delay={idx * 0.1}>
                <div className="flex items-start justify-between mb-4">
                  <feature.icon className={`h-14 w-14 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-2xl font-bold text-white">{feature.stat}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <FloatingOrbs />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Perfect Plan</span>
            </h2>
            <p className="text-xl text-gray-400">Transparent pricing with no hidden costs</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative rounded-3xl overflow-hidden ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500' 
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-1.5 rounded-full text-sm font-bold">
                      POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <plan.icon className={`h-12 w-12 ${plan.popular ? 'text-purple-400' : 'text-gray-400'}`} />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                      <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full mt-1">
                        <Zap className="h-3 w-3" />
                        <span className="text-xs font-bold">{plan.timeframe} filing</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end space-x-3 mb-6">
                    <span className="text-5xl font-extrabold text-white">₹{plan.price}</span>
                    <div>
                      <span className="text-xl text-gray-500 line-through">₹{plan.originalPrice}</span>
                      <span className="ml-2 inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        SAVE {plan.discount}%
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-3 group">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Choose {plan.name}
                  </motion.button>
                  
                  <p className="text-center text-sm text-gray-500 mt-4">
                    + Govt. fees ₹{plan.govt_fee} <span className="text-xs">(for individuals/startups with MSME)</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Need help choosing? Our experts are here to guide you</p>
            <button className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              <span>Schedule Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">Lightning-Fast</span> Process
            </h2>
            <p className="text-xl text-gray-400">From application to protection in record time</p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <GlassCard className="p-6" hover={true}>
                    <div className="text-5xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{step.desc}</p>
                    <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-semibold">{step.duration}</span>
                    </div>
                  </GlassCard>
                </div>
                
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full items-center justify-center text-white text-xl font-bold shadow-lg shadow-purple-500/50 z-10">
                  {step.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <FloatingOrbs />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Benefits of <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Trademark Registration</span>
            </h2>
            <p className="text-xl text-gray-400">Protect your brand and unlock these powerful advantages</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <GlassCard key={idx} className="p-6 group" delay={idx * 0.1}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-white/80">Real stories from real businesses we've helped</p>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-white text-center italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-5xl">{testimonials[currentTestimonial].image}</div>
                <div className="text-left">
                  <p className="font-bold text-lg text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-white/70">{testimonials[currentTestimonial].business}</p>
                </div>
              </div>
            </motion.div>
            
            {/* Navigation dots */}
            <div className="flex items-center justify-center space-x-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`transition-all rounded-full ${
                    currentTestimonial === idx 
                      ? 'w-8 h-3 bg-white' 
                      : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Got <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Questions?</span>
            </h2>
            <p className="text-xl text-gray-400">We've got answers to help you make the right decision</p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="overflow-hidden" hover={false}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-white pr-8">{faq.q}</h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-purple-400 flex-shrink-0 transform transition-transform ${
                        expandedFaq === idx ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <motion.div 
                    initial={false}
                    animate={{ height: expandedFaq === idx ? 'auto' : 0, opacity: expandedFaq === idx ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/25"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <FloatingOrbs />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Ready to Protect Your Brand?
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Join <span className="text-amber-400 font-bold">50,000+</span> successful businesses who secured their trademark with us
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-amber-400 to-orange-500 text-black px-12 py-6 rounded-xl font-bold text-xl shadow-2xl shadow-amber-500/25"
              >
                <span className="flex items-center justify-center space-x-3">
                  <Rocket className="h-7 w-7" />
                  <span>Start Registration Now</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-xl font-bold text-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <span className="flex items-center justify-center space-x-3">
                  <FileText className="h-7 w-7" />
                  <span>Download Brochure</span>
                </span>
              </motion.button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>Expert Legal Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
