import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0); // Set 0 to have the first one open by default (optional)

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-purple-600 font-bold tracking-wider text-xs uppercase bg-purple-100 px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mt-4 text-gray-900 tracking-tight">
            Everything you need to know
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Answers to the most common questions about our process.
          </p>
        </div>
        
        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-purple-200 shadow-[0_4px_20px_-10px_rgba(109,40,217,0.15)] ring-1 ring-purple-100' 
                    : 'border-gray-200 hover:border-purple-100'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-start p-6 text-left focus:outline-none group"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Animated Icon Wrapper */}
                  <span className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-purple-600 border-purple-600 text-white rotate-45' 
                      : 'bg-white border-gray-200 text-gray-400 group-hover:border-purple-200 group-hover:text-purple-600'
                  }`}>
                    <Plus size={20} />
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-500 leading-relaxed text-base border-t border-transparent">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions?{' '}
            <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700 underline underline-offset-2">
              Chat with our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;