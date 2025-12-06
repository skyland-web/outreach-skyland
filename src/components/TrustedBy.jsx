import React from 'react';
import { motion } from 'framer-motion';
// Using standard icons as placeholders for company logos
import { FaGoogle, FaMicrosoft, FaSpotify, FaAmazon, FaSlack, FaAirbnb } from 'react-icons/fa';
import { SiNetflix, SiUber, SiAdobe } from 'react-icons/si';

const logos = [
  { name: "Google", icon: FaGoogle },
  { name: "Microsoft", icon: FaMicrosoft },
  { name: "Spotify", icon: FaSpotify },
  { name: "Amazon", icon: FaAmazon },
  { name: "Slack", icon: FaSlack },
  { name: "Airbnb", icon: FaAirbnb },
  { name: "Netflix", icon: SiNetflix },
  { name: "Uber", icon: SiUber },
  { name: "Adobe", icon: SiAdobe },
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest">
          Trusted by high-growth teams
        </p>
      </div>

      {/* Gradient Mask: 
        This creates the fade effect on the left and right edges.
        Tailwind v4 arbitrary value syntax used for the mask-image.
      */}
      <div className="relative flex w-full max-w-[90rem] mx-auto [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        
        {/* Animation Wrapper:
          We double the logos array to create a seamless loop.
          animate x: "-50%" moves the track exactly half its width (the length of one set of logos).
        */}
        <motion.div
          className="flex flex-nowrap gap-16 min-w-max"
          animate={{ x: "-50%" }}
          transition={{
            duration: 20, // Adjust speed (higher = slower)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Render logos twice to ensure seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors duration-300"
            >
              {/* Icon Size */}
              <logo.icon className="text-3xl md:text-4xl" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;