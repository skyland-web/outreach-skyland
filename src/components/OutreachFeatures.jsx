import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiUserCheck, FiBarChart2, FiTarget } from "react-icons/fi";

const features = [
  {
    icon: <FiMail />,
    title: "Cold email systems",
    desc: "Deliverability-safe setups, warmup, and proven campaign structures.",
  },
  {
    icon: <FiUserCheck />,
    title: "Ideal customer targeting",
    desc: "We help define and source your ICP for highly relevant outreach.",
  },
  {
    icon: <FiTarget />,
    title: "Personalization at scale",
    desc: "Dynamic snippets and researched angles without slowing you down.",
  },
  {
    icon: <FiBarChart2 />,
    title: "Clear reporting",
    desc: "Reply rate, meetings booked, pipeline created — easy to track.",
  },
];

export default function OutreachFeatures() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Built for outbound teams
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          We handle the systems, copy and experimentation — you handle the calls.
        </p>

        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white p-6 rounded-2xl shadow border border-slate-100 text-center"
            >
              <div className="text-3xl text-accent mx-auto">{f.icon}</div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
