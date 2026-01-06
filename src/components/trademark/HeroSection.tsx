import { motion } from "framer-motion";
import { Rocket, FileText, Star, Sparkles, BadgeCheck, ArrowRight } from "lucide-react";
import { FloatingOrbs } from "./FloatingOrbs";
import { AnimatedCounter } from "./AnimatedCounter";

const recentRegistrations = [
  { brand: "TechFlow Pro", class: "9", owner: "Rajesh Kumar", city: "Mumbai" },
  { brand: "StyleHub Fashion", class: "25", owner: "Priya Sharma", city: "Delhi" },
  { brand: "FreshBite Café", class: "43", owner: "Amit Patel", city: "Bangalore" },
  { brand: "EduSmart Learning", class: "41", owner: "Neha Singh", city: "Pune" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-8 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <FloatingOrbs />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-primary px-6 py-3 rounded-full shadow-glow"
            >
              <Sparkles className="h-5 w-5 text-white" />
              <span className="font-semibold text-white text-sm">ISO 27001 Certified • 50,000+ Registrations</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-gradient animate-gradient-x">
                Protect Your Brand
              </span>
              <br />
              <span className="text-foreground">in Just </span>
              <span className="text-brand-gold">6 Hours</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              India's <span className="text-primary font-semibold">fastest</span> and most{" "}
              <span className="text-primary font-semibold">trusted</span> trademark registration platform. 
              Get legal protection starting at{" "}
              <span className="text-brand-emerald font-bold">₹1,499</span> with expert guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-primary px-8 py-4 rounded-xl font-bold text-lg text-white shadow-glow overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket className="h-6 w-6" />
                  <span>Start Registration Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-glass px-8 py-4 rounded-xl font-bold text-lg text-foreground border border-white/20 hover:border-primary/50 transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <FileText className="h-6 w-6" />
                  <span>View Sample Certificate</span>
                </span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {['👨', '👩', '👨‍💼', '👩‍💼'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-lg border-2 border-background"
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">5,000+</strong> registered this month
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">4.8/5</strong> (7,500+ reviews)
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-glass rounded-3xl p-8 border border-white/10 shadow-elevated">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-emerald"></span>
                  </span>
                  <span>Live Registrations</span>
                </h3>
                <span className="text-sm text-muted-foreground">Real-time</span>
              </div>
              
              <div className="space-y-3 max-h-80 overflow-hidden">
                {recentRegistrations.map((reg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.15 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-muted/50 rounded-xl p-4 border border-white/5 hover:border-primary/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-bold text-foreground">{reg.brand}</p>
                          <BadgeCheck className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground">{reg.owner} • {reg.city}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-gradient-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          Class {reg.class}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">Just now</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-6 p-4 bg-brand-emerald/10 rounded-xl border border-brand-emerald/30"
              >
                <p className="text-center text-brand-emerald">
                  <strong className="text-3xl font-display">
                    <AnimatedCounter value={50234} />
                  </strong>
                  <span className="text-sm block mt-1 text-brand-emerald/80">Brands Protected & Growing</span>
                </p>
              </motion.div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-brand-gold text-accent-foreground px-5 py-2.5 rounded-full font-bold shadow-glow-gold rotate-12"
            >
              ⚡ 6 Hour Filing
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-brand-emerald text-white px-5 py-2.5 rounded-full font-bold shadow-lg -rotate-12"
            >
              ✅ 98% Success
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
