import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Strategy & ICP",
    desc: "We define who you should reach out to and why they should care.",
  },
  {
    title: "2. Systems & setup",
    desc: "Inbox setup, warmup, domains, sending tools and tracking.",
  },
  {
    title: "3. Sequences & copy",
    desc: "We write and test messaging tailored to your audience.",
  },
  {
    title: "4. Optimization",
    desc: "Weekly reviews, tweaks and scaling what works.",
  },
];

export default function OutreachWorkflow() {
  return (
    <section id="workflow" className="py-16 container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center">
        How our outreach works
      </h2>

      <div className="mt-10 grid md:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow border border-slate-100 text-center"
          >
            <div className="text-sm text-accent font-semibold">{s.title}</div>
            <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
