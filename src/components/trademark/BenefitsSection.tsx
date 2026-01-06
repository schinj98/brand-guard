import { motion } from "framer-motion";

const benefits = [
  { title: "Exclusive Rights", desc: "Sole ownership and usage rights", icon: "🔐" },
  { title: "Legal Protection", desc: "Sue infringers in court", icon: "⚖️" },
  { title: "Brand Value", desc: "Increases business valuation", icon: "💰" },
  { title: "Customer Trust", desc: "Builds credibility & recognition", icon: "🤝" },
  { title: "Global Expansion", desc: "Easier international registration", icon: "🌍" },
  { title: "Asset Creation", desc: "Can be sold or licensed", icon: "📈" },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Benefits of <span className="text-gradient">Trademark Registration</span>
          </h2>
          <p className="text-xl text-muted-foreground">Protect your brand and unlock these powerful advantages</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all cursor-pointer group"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 15 }}
                className="text-5xl mb-4 inline-block"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
