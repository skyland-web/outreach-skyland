import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';

const testimonials = [
  {
    quote: "We were skeptical about cold email, but Skyland completely changed our minds. We closed a $50k deal in month two.",
    name: "Alex Johnson",
    role: "CEO, TechFlow",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    company: "TechFlow"
  },
  {
    quote: "The quality of leads is what impressed me. They aren't just spamming; they actually research the prospects.",
    name: "Sarah Chen",
    role: "VP Sales, DataSphere",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    company: "DataSphere"
  },
  {
    quote: "It feels like having a team of 5 SDRs working for us, but for a fraction of the cost. Highly recommended.",
    name: "Mike Ross",
    role: "Founder, AgencyScale",
    image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    company: "AgencyScale"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute bottom-[20%] left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-purple-600 font-bold tracking-wider text-xs uppercase bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
            Wall of Love
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4 text-gray-900 tracking-tight">
            Trusted by founders who <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              value results over talk.
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Join 500+ companies scaling their outreach with Skyland.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col p-8 bg-gray-50/50 hover:bg-white rounded-3xl border border-transparent hover:border-purple-100 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              {/* Large Background Quote Icon */}
              <Quote 
                className="absolute top-8 right-8 text-gray-200 group-hover:text-purple-100 transition-colors duration-300" 
                size={64} 
                fill="currentColor"
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6 text-amber-400 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="drop-shadow-sm" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 text-lg font-medium leading-relaxed mb-8 relative z-10 flex-grow">
                "{t.quote}"
              </blockquote>

              {/* Author Footer */}
              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-gray-100 group-hover:border-gray-50 transition-colors">
                <div className="relative">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md" 
                  />
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <div className="bg-green-500 rounded-full p-0.5">
                      <CheckIcon size={8} className="text-white" strokeWidth={4} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-0.5">
                    <Building2 size={12} />
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Small helper component for the checkmark badge
const CheckIcon = ({ size, className, strokeWidth }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default Testimonials;