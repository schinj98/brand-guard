import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const processSteps = [
  { 
    step: "1", 
    title: "Trademark Search", 
    desc: "AI-powered comprehensive search across 10M+ trademarks to ensure uniqueness",
    icon: "🔍",
    duration: "1 hour"
  },
  { 
    step: "2", 
    title: "Expert Review", 
    desc: "Senior IP lawyer reviews and prepares your application with precision",
    icon: "⚖️",
    duration: "2 hours"
  },
  { 
    step: "3", 
    title: "File Application", 
    desc: "Submit application to Trademark Registry with all required documents",
    icon: "📝",
    duration: "3 hours"
  },
  { 
    step: "4", 
    title: "Get TM Symbol", 
    desc: "Start using ™ symbol on your brand immediately after filing",
    icon: "™️",
    duration: "24 hours"
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Lightning-Fast</span> Process
          </h2>
          <p className="text-xl text-muted-foreground">From application to protection in record time</p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 rounded-full" />
          
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-card rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-5xl mb-4 inline-block"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    Step {step.step}: {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-semibold">{step.duration}</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Center Circle */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-primary rounded-full items-center justify-center text-white text-xl font-display font-bold shadow-glow z-10"
              >
                {step.step}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
