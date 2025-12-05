import React from "react";
import { motion } from "framer-motion";

export default function OutreachHero() {
  return (
    <section className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Outbound outreach that actually{" "}
          <span className="text-accent">books meetings.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-lg text-slate-600 max-w-xl"
        >
          Multi-channel outreach, tested copy, and clean workflows — all set up
          for you so your team only focuses on talking to qualified prospects.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-white rounded-full font-semibold shadow hover:shadow-lg"
          >
            Request outreach audit
          </a>
          <a
            href="#workflow"
            className="px-6 py-3 border border-slate-200 rounded-full font-medium hover:bg-slate-50"
          >
            See workflow
          </a>
        </div>

        <div className="mt-6 flex gap-3 text-sm text-slate-500">
          <span className="px-3 py-1 border rounded-full">
            Cold email & LinkedIn
          </span>
          <span className="px-3 py-1 border rounded-full">
            Playbooks included
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="rounded-2xl bg-white shadow-2xl p-6 border border-slate-100 w-full md:max-w-lg">
          <div className="text-sm text-slate-500">Sequence snapshot</div>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
              <span>Day 1 — Intro email</span>
              <span className="text-xs text-slate-500">Sent</span>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
              <span>Day 3 — LinkedIn touch</span>
              <span className="text-xs text-slate-500">Queued</span>
            </div>
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg">
              <span>Day 6 — Bump email</span>
              <span className="text-xs text-slate-500">Scheduled</span>
            </div>
          </div>
        </div>

        <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
      </motion.div>
    </section>
  );
}
