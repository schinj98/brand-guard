import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const trademarkTypes = [
  { 
    name: "Brand Name", 
    icon: "🏷️", 
    description: "Business name for your brand identity",
    gradient: "from-purple-500 to-pink-500",
    examples: "Nike, Apple, Samsung"
  },
  { 
    name: "Brand + Logo", 
    icon: "🎨", 
    description: "Name + Graphic representation",
    gradient: "from-blue-500 to-cyan-500",
    examples: "McDonald's, Starbucks"
  },
  { 
    name: "Logo Only", 
    icon: "✨", 
    description: "Graphic representation of brand",
    gradient: "from-emerald-500 to-teal-500",
    examples: "Apple Logo, Nike Swoosh"
  },
  { 
    name: "Slogan", 
    icon: "💬", 
    description: "Your brand's catchy tagline",
    gradient: "from-orange-500 to-red-500",
    examples: "Just Do It, I'm Lovin' It"
  },
];

export const TrademarkTypesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Trademark Type</span>
          </h2>
          <p className="text-xl text-muted-foreground">Select the perfect protection for your brand identity</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trademarkTypes.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-card rounded-2xl border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-4 inline-block"
                >
                  {type.icon}
                </motion.div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{type.name}</h3>
                <p className="text-muted-foreground mb-3 text-sm">{type.description}</p>
                <p className="text-xs text-muted-foreground/70 italic mb-6">
                  Examples: {type.examples}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${type.gradient} text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg`}
                >
                  <span>Register Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
