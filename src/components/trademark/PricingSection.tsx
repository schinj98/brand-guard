import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Rocket, CheckCircle, Zap, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard Filing',
    price: '1,499',
    originalPrice: '1,999',
    discount: '25',
    timeframe: '3 days',
    icon: FileText,
    features: [
      '30-min expert consultation',
      'TM Class Search & Selection',
      'Thorough trademark search',
      'Filing within 3 working days',
      'TM Receipt in 3-5 days',
      'TM Certificate included',
      'Regular status updates',
      'Objection handling support'
    ],
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
    features: [
      'Priority 30-min consultation',
      'Instant TM Class Selection',
      'Advanced trademark search',
      'Super-fast filing in 6 hours',
      'TM Receipt in 24 hours',
      'Free MSME Registration',
      'TM Certificate included',
      'Priority support 24/7',
      'Fast-track objection handling'
    ],
    govt_fee: '4,500'
  }
];

export const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground">Transparent pricing with no hidden costs</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 border-2 border-primary shadow-glow scale-105' 
                  : 'bg-card border border-white/10 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 right-0"
                >
                  <div className="bg-gradient-to-r from-brand-gold to-orange-500 text-accent-foreground px-6 py-2 text-sm font-bold transform rotate-0 shadow-lg rounded-bl-xl">
                    ⭐ MOST POPULAR
                  </div>
                </motion.div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={plan.popular ? 'text-primary' : 'text-muted-foreground'}
                  >
                    <plan.icon className="h-14 w-14" />
                  </motion.div>
                  <div className="inline-flex items-center gap-2 bg-brand-emerald/20 text-brand-emerald px-4 py-2 rounded-full border border-brand-emerald/30">
                    <Zap className="h-4 w-4" />
                    <span className="font-bold text-sm">{plan.timeframe} filing</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{plan.name}</h3>
                
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-5xl font-display font-bold text-gradient">
                    ₹{plan.price}
                  </span>
                  <div className="pb-1">
                    <span className="text-xl text-muted-foreground line-through">₹{plan.originalPrice}</span>
                    <span className="ml-2 inline-block bg-gradient-to-r from-brand-emerald to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SAVE {plan.discount}%
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <motion.li
                      key={fIdx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + fIdx * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle className="h-5 w-5 text-brand-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
                    plan.popular
                      ? 'bg-gradient-primary text-white shadow-glow hover:shadow-glow'
                      : 'bg-muted text-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Choose {plan.name}
                </motion.button>
                
                <p className="text-center text-sm text-muted-foreground mt-4">
                  + Govt. fees ₹{plan.govt_fee} <span className="text-xs">(for individuals/startups with MSME)</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Need help choosing? Our experts are here to guide you</p>
          <motion.button
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
