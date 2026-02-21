import React from 'react';

const HelpCTA: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#4A5D63] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Anda Butuh Bantuan?</h2>
             <p className="text-gray-300 text-xs mb-1">Hubungi kami untuk bantuan atau informasi lebih lanjut melalui telepon</p>
             <p className="text-white font-bold text-sm">62-21 422 3838 <span className="font-normal text-gray-300 mx-1">atau</span> 62-21 422 3898 <span className="font-normal text-gray-300 mx-1">Atau online form yang kami sediakan pada tombol Contact Us</span></p>
          </div>
          <button className="bg-white text-[#4A5D63] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
             Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HelpCTA;