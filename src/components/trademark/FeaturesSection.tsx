import { motion } from "framer-motion";
import { Zap, Shield, BadgeCheck, Target, Users, Lock } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Filing in 6 hours, TM symbol in 24 hours", stat: "6 hrs", color: "text-brand-gold" },
  { icon: Shield, title: "100% Legal Protection", description: "Complete protection under Trade Marks Act, 1999", stat: "100%", color: "text-brand-cyan" },
  { icon: BadgeCheck, title: "Expert Team", description: "Senior IP lawyers with 10+ years experience", stat: "10+ yrs", color: "text-brand-emerald" },
  { icon: Target, title: "High Success Rate", description: "98% approval rate with thorough search", stat: "98%", color: "text-brand-purple" },
  { icon: Users, title: "Trusted Nationwide", description: "50,000+ businesses protected", stat: "50K+", color: "text-brand-pink" },
  { icon: Lock, title: "Secure Process", description: "ISO 27001 certified platform", stat: "ISO", color: "text-destructive" },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-muted/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="text-gradient-gold">50,000+</span> Businesses Trust Us
          </h2>
          <p className="text-xl text-muted-foreground">Industry-leading features that make trademark registration effortless</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group bg-glass rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className={`h-14 w-14 ${feature.color}`} />
                </motion.div>
                <span className="text-3xl font-display font-bold text-foreground">{feature.stat}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
