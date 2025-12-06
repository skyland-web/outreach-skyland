import React from 'react';
import { Check, X, Trophy } from 'lucide-react';

const ComparisonTable = () => {
  const data = [
    { feature: "Setup Time", us: "3-5 Days", them: "2-3 Months", themBad: true },
    { feature: "Cost per Month", us: "Fixed & Lower", them: "$5k Salary + Comm + Tax", themBad: true },
    { feature: "Tech Stack Cost", us: "Included ($500+ value)", them: "You pay (~$500/mo)", themBad: true },
    { feature: "Data Sourcing", us: "Included & Verified", them: "You pay extra", themBad: true },
    { feature: "Expertise Level", us: "Senior Strategists", them: "Junior Hire", themBad: false },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            The smart way to scale outbound
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Compare the modern Skyland approach against the traditional, expensive in-house model.
          </p>
        </div>

        {/* Table Container with horizontal scroll for small devices */}
        <div className="relative overflow-x-auto pb-12 -mx-4 px-4 md:overflow-visible md:pb-0">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {/* Empty corner cell */}
                <th className="p-6 w-1/4"></th>
                
                {/* Skyland Header - The "Hero" Column */}
                <th className="w-1/3 relative">
                  {/* Floating Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm flex items-center gap-1">
                    <Trophy size={14} /> Recommended
                  </div>
                  
                  <div className="p-8 bg-white rounded-t-3xl shadow-[0_-8px_30px_-5px_rgba(0,0,0,0.1)] border-t border-x border-purple-100 text-center">
                    <span className="block text-2xl font-extrabold text-gray-900">Skyland</span>
                    <span className="block mt-2 text-purple-600 font-medium">The Growth Engine</span>
                  </div>
                </th>

                {/* Competitor Header */}
                <th className="p-8 w-1/3 text-center md:text-left">
                  <span className="block text-xl font-bold text-gray-500">Hiring In-House</span>
                  <span className="block mt-2 text-gray-400 font-medium">The Old Way</span>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="">
                  {/* Feature Label */}
                  <td className="p-6 text-gray-500 font-medium border-b border-gray-200">
                    {row.feature}
                  </td>

                  {/* Skyland Data Cell (High Emphasis) */}
                  <td className="p-0 relative">
                    {/* This div creates the continuous white column effect with shadow */}
                    <div className={`h-full w-full bg-white flex items-center justify-center p-6 shadow-[5px_0_20px_-5px_rgba(0,0,0,0.05),-5px_0_20px_-5px_rgba(0,0,0,0.05)] ${i === data.length -1 ? 'rounded-b-3xl border-b border-x border-purple-50 shadow-[0_20px_30px_-5px_rgba(0,0,0,0.1)]' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 bg-purple-100 text-purple-600 p-1.5 rounded-full">
                           <Check size={20} strokeWidth={3} />
                        </div>
                        <span className="text-lg font-extrabold text-gray-900">{row.us}</span>
                      </div>
                    </div>
                  </td>

                  {/* Competitor Data Cell (Low Emphasis) */}
                  <td className="p-6 border-b border-gray-200 text-center md:text-left">
                    <div className={`flex items-center gap-3 justify-center md:justify-start ${row.themBad ? 'text-red-400' : 'text-gray-500'}`}>
                      {row.themBad ? (
                        <X size={20} className="flex-shrink-0 opacity-70" />
                      ) : (
                        // Empty placeholder for alignment if not "bad"
                        <div className="w-5 h-5 flex-shrink-0" />
                      )}
                      <span className={`text-lg font-medium ${row.themBad ? 'line-through opacity-80' : ''}`}>
                        {row.them}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;