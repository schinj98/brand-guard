import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  { 
    q: "What is a trademark and why do I need one?", 
    a: "A trademark is a unique symbol, word, or phrase that identifies your brand. It provides legal protection, prevents others from using similar marks, and helps build brand recognition and trust with customers." 
  },
  { 
    q: "How long does trademark registration take?", 
    a: "While complete registration takes 12-18 months, you can start using the TM symbol within 24 hours of filing with our express service. This gives you immediate legal standing while the full process completes." 
  },
  { 
    q: "What's the difference between TM and ® symbols?", 
    a: "TM symbol can be used once you file your application, indicating you claim rights to the mark. The ® symbol is only for registered trademarks after complete approval. Both provide legal protection." 
  },
  { 
    q: "Can my trademark application be rejected?", 
    a: "Our thorough search process ensures a 98% approval rate. If objections arise, our expert legal team handles all responses and hearings at no extra cost in most cases." 
  },
  { 
    q: "Do I need to register in multiple classes?", 
    a: "It depends on your business. If you sell both products (Class 9) and services (Class 35), you need multiple classes. Our experts will guide you on the best protection strategy for your brand." 
  },
  { 
    q: "What happens after 10 years?", 
    a: "Trademarks are renewable indefinitely. We send timely reminders before expiry and handle the renewal process. Many famous brands have trademarks over 100 years old!" 
  },
];

export const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-xl text-muted-foreground">We've got answers to help you make the right decision</p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-2xl border border-white/10 overflow-hidden hover:border-primary/30 transition-all"
            >
              <motion.button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground pr-8">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold shadow-glow"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
