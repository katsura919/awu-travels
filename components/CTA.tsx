import React from 'react';
import { Play } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-orange-50 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
           {/* Decorative Background Elements */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-[10px] border-orange-100 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 blur-xl"></div>
           </div>

           <div className="relative z-10">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-6">
               Let's Enjoy Your Holiday
             </h2>
             <p className="text-gray-500 mb-10 max-w-xl mx-auto">
                Now let's make the holiday agenda more exciting and different from the others with us.
             </p>

             <div className="flex flex-col md:flex-row justify-center items-center gap-6">
               <button className="bg-primary hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-medium shadow-lg shadow-orange-500/30 transition-all">
                 Get Started
               </button>
               
               <button className="flex items-center gap-3 bg-white px-8 py-4 rounded-xl font-medium text-gray-700 hover:shadow-lg transition-all border border-gray-100">
                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Play size={14} className="fill-primary text-primary ml-1" />
                 </div>
                 Our Vlog
               </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
