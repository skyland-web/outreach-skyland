import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Send,
  Loader2,
  CheckCircle2,
  Mail,
  User,
  MessageSquare
} from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sourceUrl, setSourceUrl] = useState("");
  const form = useRef();

  // Environment variables (Vite standard)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSourceUrl(window.location.href);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      setSuccess(true);
      e.target.reset();

      // restore source_url after reset (so hidden input contains current page)
      setTimeout(() => {
        const input = document.querySelector('input[name="source_url"]');
        if (input) input.value = window.location.href;
      }, 50);

      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please check your config or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl -z-10 opacity-50 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE: Contact Info & Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Get in Touch</span>
            
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Ready to start your <br />
              <span className="text-indigo-600">next big project?</span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Ready to start your next project? We're here to help you scope, design, and build scalable solutions.
            </p>

            {/* Direct Contact Details (EMAIL only) */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg border border-slate-100 shadow-sm text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">Email Us</h4>
                  <p className="text-slate-600">info@skyland.com</p>
                  <p className="text-slate-500 text-sm mt-1">Response time: &lt; 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: The Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="source_url" value={sourceUrl} />

              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@company.com"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell us about your project requirements..."
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {/* Success Overlay */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-8 z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600 mt-2 max-w-xs">
                    Thanks for reaching out. We'll review your inquiry and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
