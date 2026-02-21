import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Edwardo Elric",
      role: "Freelancer",
      avatar: "https://picsum.photos/100/100?random=40",
      rating: 5,
      comment: "The experience on my vacation was really fun with the facilities and entertainment offered during the trip, it was never boring."
    },
    {
      id: 2,
      name: "Alberto Graham",
      role: "Photographer",
      avatar: "https://picsum.photos/100/100?random=41",
      rating: 5,
      comment: "Has always been the best platform choice for me when traveling to take a break from work routines that can fill my vacation time."
    },
    {
      id: 3,
      name: "Nakamura S.",
      role: "Influencer",
      avatar: "https://picsum.photos/100/100?random=42",
      rating: 5,
      comment: "As an influencer I like vacations to create content, this platform can accommodate all my wishes at once and it's real."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-serif font-bold text-secondary">Our Happy <span className="text-primary">Customer</span> Say</h2>
           <p className="text-gray-500 mt-2">Here are their responses regarding the travel services we offer.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {testimonials.map((item) => (
             <div key={item.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary p-1">
                   <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="font-bold text-secondary text-lg">{item.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{item.role}</p>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed italic">"{item.comment}"</p>
             </div>
           ))}
        </div>
        
        <div className="flex justify-center mt-10 gap-4">
           <button className="p-3 rounded-full border border-gray-200 text-gray-400 hover:bg-primary hover:text-white transition-colors">
              <ChevronLeft size={20} />
           </button>
           <button className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-orange-600 transition-colors">
              <ChevronRight size={20} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
