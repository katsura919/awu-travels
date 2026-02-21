import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80" 
          alt="Luxury Safari" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 drop-shadow-lg max-w-4xl mx-auto leading-tight">
          AWU Travels <br /> Hallmark of Luxury Travel
        </h1>

        {/* Floating Menu Bar */}
        <div className="mt-8 bg-white/90 backdrop-blur-md rounded-full p-2 pl-6 pr-2 flex items-center gap-4 md:gap-8 shadow-2xl max-w-2xl mx-auto">
          <a href="#" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-gray-800 hover:text-primary flex items-center gap-1">
            Our Experience <ChevronRight size={14} />
          </a>
          <div className="h-4 w-px bg-gray-300"></div>
          <a href="#" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-gray-800 hover:text-primary flex items-center gap-1">
            Plan Your Journey <ChevronRight size={14} />
          </a>
          <div className="h-4 w-px bg-gray-300"></div>
          <a href="#" className="text-xs md:text-sm font-semibold uppercase tracking-wide text-gray-800 hover:text-primary flex items-center gap-1">
            Webinar <ChevronRight size={14} />
          </a>
        </div>
      </div>

      {/* Partners Strip */}
      <div className="relative z-20 bg-gradient-to-t from-black/80 to-transparent pb-10 pt-20 px-6">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          <span className="text-white font-serif italic text-lg md:text-xl">Virtuoso</span>
          <span className="text-white font-serif uppercase tracking-widest text-sm md:text-base border border-white px-2">IATA</span>
          <span className="text-white font-serif text-lg md:text-xl">Luxury Travel</span>
          <span className="text-white font-serif font-bold uppercase text-lg md:text-xl">Condé Nast</span>
          <span className="text-white font-serif font-bold italic text-lg md:text-xl">The New York Times</span>
          <span className="text-white font-serif uppercase tracking-widest text-sm">Ensemble</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;