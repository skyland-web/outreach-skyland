import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="text-white font-bold">Skyland Outreach</div>
          <div className="text-sm mt-2 text-slate-400 max-w-xs">
            Done-for-you outbound systems and sequences.
          </div>
        </div>

        <div className="text-sm text-slate-400">
          <div>info@skylandweb.com</div>
          <div className="mt-2">
            © {new Date().getFullYear()} Skyland Web — All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
