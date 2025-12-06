import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you guarantee meetings?",
    answer: "We guarantee the work: the setup, the domains, the copywriting, and the volume. While we can't control every prospect's behavior, we work until we hit our benchmarks. Most clients see meetings within the first 14 days."
  },
  {
    question: "Do I need to provide the lead list?",
    answer: "No! We handle the data sourcing. We use premium tools (Apollo, ZoomInfo) to build a verified list based on your Ideal Customer Profile (ICP)."
  },
  {
    question: "Will this hurt my main domain reputation?",
    answer: "Never. We set up secondary domains (e.g., getcompany.com) that redirect to your main site. Your primary domain remains completely safe and untouched."
  },
  {
    question: "What happens after I sign up?",
    answer: "You'll fill out an onboarding form, and we'll schedule a strategy kick-off call. From there, it takes us about 3-5 days to build your infrastructure and draft your scripts."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="text-purple-600 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;