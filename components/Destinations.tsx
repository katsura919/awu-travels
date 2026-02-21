import React, { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

const Destinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All experiences');
  
  const filters = [
    'All experiences', 'Photography', 'Adventure', 'Celebration', 
    'Culinary', 'Family', 'Speciality', 'Ultraluxe', 'Voyages'
  ];

  const cards = [
    {
      id: 1,
      title: "A Kenyan Conservation Crusade",
      location: "Africa",
      tag: "Adventure",
      image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&q=80",
      size: "large"
    },
    {
      id: 2,
      title: "African Wildlife through the Lens",
      location: "Africa",
      tag: "Adventure",
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80",
      size: "small"
    },
    {
      id: 3,
      title: "African Honeymoon Immersed in Nature",
      location: "Africa",
      tag: "Adventure",
      image: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&q=80",
      size: "small"
    },
    {
      id: 4,
      title: "Best of South Africa Golfing Safari",
      location: "Africa",
      tag: "Adventure",
      image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80",
      size: "small"
    },
    {
      id: 5,
      title: "Botswana's Best Kept Secrets",
      location: "Africa",
      tag: "Adventure",
      image: "https://images.unsplash.com/photo-1518709414768-a8c554069681?auto=format&fit=crop&q=80",
      size: "small"
    },
    {
      id: 6,
      title: "A Week of Wild Adventure in Kenya",
      location: "Africa",
      tag: "Adventure",
      image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&q=80",
      size: "small"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Info */}
          <div className="lg:w-1/4">
             <h2 className="text-4xl font-serif font-bold text-primary mb-6">Africa</h2>
             <p className="text-gray-600 text-sm leading-relaxed mb-8">
               AWU Travels crafts bespoke luxury safaris to Africa. Our safari experts will design your perfect itinerary, combining the best accommodation and exclusive tours with expert local guides.
             </p>
             <p className="text-gray-600 text-sm leading-relaxed mb-8">
               In Africa... you can truly travel and enjoy its many cultures, spend a night in the bush under the stars with a tribe in Kenya.
             </p>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:w-3/4">
            {/* Header with Filters */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="flex items-center gap-2 md:hidden">
                 <span className="font-serif text-lg">Select experience type</span>
                 <ChevronDown size={16} />
              </div>
              
              <div className="w-full">
                <div className="flex justify-between items-center mb-4 md:mb-0">
                  <span className="hidden md:block font-serif text-lg text-primary">Select experience type</span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Africa</span>
                    <ChevronDown size={14} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {filters.map(filter => (
                    <button 
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                        activeFilter === filter 
                          ? 'bg-primary text-white border-primary' 
                          : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <p className="text-right text-[10px] text-gray-400 mt-2">*You can select multiple</p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Featured Large Item (First item spans 2 rows visually in a masonry, but simple grid here) */}
               {cards.map((card, idx) => (
                 <div key={card.id} className={`group relative rounded-2xl overflow-hidden cursor-pointer ${idx === 0 ? 'md:row-span-2 h-[500px]' : 'h-[240px]'}`}>
                   <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                   {/* Tags */}
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                     <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{card.tag}</span>
                   </div>
                   <button className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors">
                     <Heart size={20} />
                   </button>

                   {/* Content */}
                   <div className="absolute bottom-6 left-6 right-6">
                     <h3 className={`font-serif text-white font-medium mb-1 ${idx === 0 ? 'text-2xl' : 'text-lg'}`}>{card.title}</h3>
                     <p className="text-white/80 text-xs uppercase tracking-wide">{card.location}</p>
                   </div>
                 </div>
               ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-primary hover:text-white transition-colors">
                View more
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;