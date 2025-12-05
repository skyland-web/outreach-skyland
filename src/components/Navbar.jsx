import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="font-bold text-slate-900">Skyland</span>
            <span className="text-accent font-extrabold">Outreach</span>
          </a>

          {/* Desktop right */}
          <div className=" md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium shadow"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
