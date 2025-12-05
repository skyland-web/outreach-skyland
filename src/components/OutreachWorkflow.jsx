import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Strategy & ICP",
    desc: "We analyze your market to define exactly who to target and why they should care.",
  },
  {
    step: "02",
    title: "Systems Setup",
    desc: "30+ domains, inbox rotation, and DNS configuration for perfect deliverability.",
  },
  {
    step: "03",
    title: "Copy & Sequence",
    desc: "We craft high-converting scripts using our proven 'pain-agitate-solution' frameworks.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "Daily optimization of campaigns. We double down on the angles that book meetings.",
  },
];

export default function OutreachWorkflow() {
  return (
    <section id="workflow" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Decor Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            From cold lead to <span className="text-indigo-600">warm demo.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-slate-600"
          >
            Our proven 4-step framework designed to generate a predictable pipeline.
          </motion.p>
        </div>

        {/* Timeline Connector (Desktop) */}
        <div className="hidden md:block absolute top-[280px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-200 to-transparent z-0" />

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute -top-[49px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-indigo-100 rounded-full z-10 group-hover:border-indigo-600 group-hover:scale-125 transition-all duration-300" />

              {/* Card */}
              <div className="h-full bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-indigo-500/10 group-hover:-translate-y-2 transition-all duration-300">
                
                {/* Gradient Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Big Watermark Number */}
                <span className="absolute -right-4 -top-6 text-9xl font-black text-slate-100 opacity-50 group-hover:text-indigo-50/80 group-hover:scale-110 transition-all duration-500 select-none">
                  {s.step}
                </span>

                <div className="relative z-10">
                  <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wider mb-4 border border-indigo-100">
                    STEP {s.step}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {s.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}