import React from 'react';
import { Facebook, Instagram, Twitter, Trees } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-10 pb-6 border-t border-gray-100 text-xs">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Logo & Newsletter */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <Trees size={24} className="text-primary" />
             </div>
             <h4 className="font-bold text-primary mb-2">Newsletter Sign Up</h4>
             <p className="text-gray-400 mb-4 text-[10px]">Subscribe to receive upcoming promo.</p>
             <div className="space-y-2">
               <input type="text" placeholder="Your name" className="w-full border border-gray-200 rounded p-2 text-[10px] focus:outline-none focus:border-primary" />
               <input type="email" placeholder="Your email" className="w-full border border-gray-200 rounded p-2 text-[10px] focus:outline-none focus:border-primary" />
               <button className="w-full bg-primary text-white py-2 rounded text-[10px] uppercase font-bold hover:bg-gray-800">Subscribe</button>
             </div>
             <div className="flex gap-4 mt-6">
               <Facebook size={14} className="text-gray-400 hover:text-primary cursor-pointer" />
               <Instagram size={14} className="text-gray-400 hover:text-primary cursor-pointer" />
               <Twitter size={14} className="text-gray-400 hover:text-primary cursor-pointer" />
             </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-4 grid grid-cols-4 gap-4">
             <div>
               <h4 className="font-bold text-primary mb-4">Tour</h4>
               <ul className="space-y-2 text-gray-500">
                 <li>Australia Special</li>
                 <li>Africa</li>
                 <li>America</li>
                 <li>Asia</li>
                 <li>Australia & New Zealand</li>
                 <li>China</li>
                 <li>Consortium China</li>
                 <li>Europe</li>
                 <li>Middle East</li>
                 <li>West Europe</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-primary mb-4">Product</h4>
               <ul className="space-y-2 text-gray-500">
                 <li>Package</li>
                 <li>Cruise</li>
                 <li>Car Hire</li>
                 <li>Visa</li>
                 <li>Passport</li>
                 <li>Insurance</li>
                 <li>Avia Education</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-primary mb-4">Information</h4>
               <ul className="space-y-2 text-gray-500">
                 <li>About Us</li>
                 <li>Offers</li>
                 <li>Blog</li>
                 <li>Brochures</li>
                 <li>Term & Conditions</li>
                 <li>F.A.Q</li>
                 <li>Contact Us</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-primary mb-4">Contact Us</h4>
               <ul className="space-y-2 text-gray-500">
                 <li>Email</li>
                 <li>Phone</li>
                 <li>Whatsapp</li>
               </ul>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px]">
          <p>© 2024 - Team AWU TRAVELS - PT AWU Lestari International</p>
          <div className="flex gap-4 mt-2 md:mt-0">
             <span>Tour</span>
             <span>Package</span>
             <span>Visa</span>
             <span>Passport</span>
             <span>Insurance</span>
             <span>Offers</span>
             <span>Contact Us</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;