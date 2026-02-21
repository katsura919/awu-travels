import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-20">Why AWU Travels</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>

          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center mb-20 relative">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
             
             <div className="md:w-1/2 md:pr-12 lg:pr-20 mb-8 md:mb-0">
               <div className="rounded-3xl overflow-hidden shadow-xl h-[300px]">
                 <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80" alt="Travel" className="w-full h-full object-cover" />
               </div>
             </div>
             <div className="md:w-1/2 md:pl-12 lg:pl-20 text-center md:text-left">
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Best Travel Provider</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Your travel memories and stories are our top priority. We ensure that the entire process of your holiday goes well and is unforgettable.
               </p>
             </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-20 relative">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
             
             <div className="md:w-1/2 md:pl-12 lg:pl-20 mb-8 md:mb-0">
               <div className="rounded-3xl overflow-hidden shadow-xl h-[300px]">
                 <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80" alt="Agent" className="w-full h-full object-cover" />
               </div>
             </div>
             <div className="md:w-1/2 md:pr-12 lg:pr-20 text-center md:text-right">
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Experienced Agent</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Our experience and flying hours have proven that the satisfaction of customers who keep coming back is our basis for providing the best.
               </p>
             </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center mb-20 relative">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
             
             <div className="md:w-1/2 md:pr-12 lg:pr-20 mb-8 md:mb-0">
               <div className="rounded-3xl overflow-hidden shadow-xl h-[300px]">
                 <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80" alt="Service" className="w-full h-full object-cover" />
               </div>
             </div>
             <div className="md:w-1/2 md:pl-12 lg:pl-20 text-center md:text-left">
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Best and Personal Service</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 We know that your interests are more important than any program we can offer. Providing the best service for each individual is our principle.
               </p>
             </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center relative">
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow"></div>
             
             <div className="md:w-1/2 md:pl-12 lg:pl-20 mb-8 md:mb-0">
               <div className="rounded-3xl overflow-hidden shadow-xl h-[300px]">
                 <img src="https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80" alt="Problems" className="w-full h-full object-cover" />
               </div>
             </div>
             <div className="md:w-1/2 md:pr-12 lg:pr-20 text-center md:text-right">
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Free From Problems</h3>
               <p className="text-gray-500 leading-relaxed text-sm">
                 Through comprehensive service in all aspects, you don't need to take care of many things and make your holiday like work.
               </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;