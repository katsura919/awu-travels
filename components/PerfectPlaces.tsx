import React from 'react';

const PerfectPlaces: React.FC = () => {
  const places = [
    {
      title: "Hawaii Beach",
      spots: "123 Spots",
      image: "https://images.unsplash.com/photo-1542259659-57594d29513a?auto=format&fit=crop&q=80",
      desc: "Hawaii boasts some of the world's most breathtaking beaches. With their powdery white sands, crystal-clear turquoise waters."
    },
    {
      title: "Bali Beach",
      spots: "123 Spots",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80",
      desc: "Bali boasts some of the world's most breathtaking beaches. With their powdery white sands, crystal-clear turquoise waters."
    },
    {
      title: "Maldives Beach",
      spots: "123 Spots",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80",
      desc: "Maldives boasts some of the world's most breathtaking beaches. With their powdery white sands, crystal-clear turquoise waters."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Discover Your <br/> Perfect Place</h2>
          </div>
          <div className="flex flex-col items-end gap-4 max-w-sm text-right">
            <p className="text-gray-500 text-sm">Are you on the quest to find the ideal spot to spend your time, work, or even call home?</p>
            <button className="bg-primary text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">
              See Detail
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {places.map((place, idx) => (
            <div key={idx} className="group">
              <div className="h-64 overflow-hidden rounded-lg mb-4">
                <img src={place.image} alt={place.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-serif font-bold text-xl text-primary">{place.title}</h3>
                <span className="text-sm text-gray-500">{place.spots}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{place.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfectPlaces;