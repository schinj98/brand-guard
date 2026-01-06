import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { 
    name: "Rahul Verma", 
    business: "Tech Startup, Bangalore", 
    rating: 5, 
    text: "Incredible service! My trademark was filed within hours and the team guided me through every step. The express service is worth every penny!",
    image: "👨‍💼"
  },
  { 
    name: "Sneha Desai", 
    business: "Fashion Brand, Mumbai", 
    rating: 5, 
    text: "Best decision to go with GetLawyer.me. The express filing saved my product launch timeline. Professional team and transparent process!",
    image: "👩‍💼"
  },
  { 
    name: "Vikram Singh", 
    business: "Restaurant Chain, Delhi", 
    rating: 5, 
    text: "Outstanding service with transparent pricing. They handled everything from search to registration smoothly. Highly recommended for anyone serious about brand protection!",
    image: "👨‍🍳"
  },
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80">Real stories from real businesses we've helped</p>
        </motion.div>
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 min-h-[300px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-7 w-7 text-brand-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-2xl text-white text-center italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-5xl"
                  >
                    {testimonials[currentTestimonial].image}
                  </motion.div>
                  <div className="text-left">
                    <p className="font-bold text-xl text-white">{testimonials[currentTestimonial].name}</p>
                    <p className="text-white/70">{testimonials[currentTestimonial].business}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="bg-white/20 backdrop-blur-lg text-white p-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentTestimonial(idx);
                  }}
                  className={`h-3 rounded-full transition-all ${
                    currentTestimonial === idx ? 'bg-white w-8' : 'bg-white/40 w-3'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="bg-white/20 backdrop-blur-lg text-white p-3 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
