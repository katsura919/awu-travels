import React from 'react';
import { Play } from 'lucide-react'; // Using Lucide for Play store icon approximation

const AppDownload: React.FC = () => {
  return (
    <section className="py-20 bg-orange-50/30">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6 leading-tight">
            Easier Directly From The <span className="text-primary">Application</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-md">
            It is more practical and convenient to manage our services through applications that you can download on the following 2 platforms.
          </p>
          
          <div className="flex gap-4">
             {/* Play Store Button Mock */}
             <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 flex items-center justify-center">
                   <Play className="fill-white" size={24} />
                </div>
                <div className="text-left">
                   <p className="text-[10px] uppercase">Get it on</p>
                   <p className="text-sm font-bold leading-none">Google Play</p>
                </div>
             </button>

             {/* App Store Button Mock */}
             <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 flex items-center justify-center">
                   <svg viewBox="0 0 384 512" width="24" className="fill-white">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 96.3 78.6 142.5 27.5 40.1 50.1 35.1 76.6 23.3 32.1-13.9 69.4-13.9 96 0 33.7 17.5 53.6-1.5 81.5-41.6 20.2-28.9 40-75.1 40-75.1s-27.1-14.6-26.4-69.6zm-59.7-163.6c20.5-24.6 30-58.8 30-85.1 0-4.6-.2-9.1-.7-13.6-29.4 1.1-65.7 18.2-86.8 44.3-17.3 21.5-31.5 55.6-31.5 83.1 0 5.6.3 10.9.7 15 31.7 2.3 64.9-19.1 88.3-43.7z"/>
                   </svg>
                </div>
                <div className="text-left">
                   <p className="text-[10px] uppercase">Download on the</p>
                   <p className="text-sm font-bold leading-none">App Store</p>
                </div>
             </button>
          </div>
        </div>

        {/* Right Phone Mockups */}
        <div className="relative h-[400px] flex justify-center items-center">
           {/* Phone 1 */}
           <div className="absolute left-10 md:left-20 top-0 w-48 h-80 bg-gray-900 rounded-[30px] border-4 border-gray-800 shadow-2xl z-10 overflow-hidden transform -rotate-6">
              <img src="https://picsum.photos/300/600?random=30" alt="App Screen 1" className="w-full h-full object-cover opacity-80" />
           </div>
           
           {/* Phone 2 */}
           <div className="absolute right-10 md:right-32 top-10 w-48 h-80 bg-gray-900 rounded-[30px] border-4 border-gray-800 shadow-2xl z-20 overflow-hidden transform rotate-6">
              <img src="https://picsum.photos/300/600?random=31" alt="App Screen 2" className="w-full h-full object-cover opacity-80" />
              
              {/* Fake UI Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur p-2 rounded-lg">
                 <div className="h-2 w-12 bg-white/50 rounded mb-1"></div>
                 <div className="h-2 w-20 bg-white/30 rounded"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AppDownload;
