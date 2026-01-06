import { motion } from "framer-motion";
import { Rocket, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { FloatingOrbs } from "./FloatingOrbs";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      <FloatingOrbs />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl lg:text-6xl font-bold mb-6"
        >
          Ready to <span className="text-gradient">Protect Your Brand?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl text-muted-foreground mb-12"
        >
          Join <span className="text-brand-gold font-bold">50,000+</span> successful businesses who secured their trademark with us
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-primary px-12 py-6 rounded-xl font-bold text-xl text-white shadow-glow"
          >
            <span className="flex items-center justify-center gap-3">
              <Rocket className="h-7 w-7" />
              <span>Start Registration Now</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-card px-12 py-6 rounded-xl font-bold text-xl text-foreground border border-white/20 hover:border-primary/50 transition-colors"
          >
            <span className="flex items-center justify-center gap-3">
              <FileText className="h-7 w-7" />
              <span>Download Brochure</span>
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {["No Hidden Charges", "Expert Legal Support", "98% Success Rate"].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="h-6 w-6 text-brand-emerald" />
              <span className="text-foreground">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
