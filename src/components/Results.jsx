import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react'; // Using lucide-react from your package.json

const stats = [
  {
    label: "Pipeline Generated",
    value: "$2.4M",
    desc: "In qualified opportunities for a SaaS client in 90 days."
  },
  {
    label: "Meetings Booked",
    value: "140+",
    desc: "For a B2B agency within their first quarter of outreach."
  },
  {
    label: "Open Rate Avg",
    value: "68%",
    desc: "Achieved through our proprietary domain warmup process."
  }
];

const Results = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl">
          <span className="text-purple-700 font-semibold tracking-wide uppercase text-sm">Real Results</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            We don't just send emails.<br />
            We print pipeline.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  {stat.value}
                </h3>
                <div className="p-2 bg-purple-50 rounded-full text-purple-600">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
              <p className="text-gray-500 leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;