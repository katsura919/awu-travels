import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Image Collage */}
        <div className="relative h-[500px] w-full hidden md:block">
           <div className="absolute top-0 right-10 w-64 h-80 bg-gray-200 rounded-[50px] overflow-hidden rotate-[-5deg] z-10 border-4 border-white shadow-xl">
             <img src="https://picsum.photos/400/500?random=20" alt="Travel 1" className="w-full h-full object-cover" />
           </div>
           <div className="absolute bottom-10 left-10 w-60 h-72 bg-gray-200 rounded-[50px] overflow-hidden rotate-[5deg] z-20 border-4 border-white shadow-xl">
             <img src="https://picsum.photos/400/500?random=21" alt="Travel 2" className="w-full h-full object-cover" />
           </div>
           
           {/* Decorative dots */}
           <div className="absolute top-20 left-20 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
             {[...Array(16)].map((_,i) => <div key={i} className="w-1 h-1 bg-primary rounded-full"></div>)}
           </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6 leading-tight">
            Always Provide The Best <span className="text-primary">Service</span>
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            We have been established for more than 10 years to provide a best trip holiday. We focus on providing the best experience for every customer.
          </p>

          <div className="grid grid-cols-2 gap-y-10 gap-x-8">
             <div>
               <h3 className="text-3xl font-bold text-primary mb-1">25K+</h3>
               <p className="text-gray-800 font-semibold mb-1">Happy Customers</p>
               <p className="text-gray-400 text-xs">Thousands of satisfied guests</p>
             </div>
             <div>
               <h3 className="text-3xl font-bold text-primary mb-1">100+</h3>
               <p className="text-gray-800 font-semibold mb-1">Partnerships</p>
               <p className="text-gray-400 text-xs">Companies who work with us</p>
             </div>
             <div>
               <h3 className="text-3xl font-bold text-primary mb-1">500+</h3>
               <p className="text-gray-800 font-semibold mb-1">Destinations</p>
               <p className="text-gray-400 text-xs">The best places you can visit</p>
             </div>
             <div>
               <h3 className="text-3xl font-bold text-primary mb-1">30+</h3>
               <p className="text-gray-800 font-semibold mb-1">Types of Trip</p>
               <p className="text-gray-400 text-xs">Various types of trips for you</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
