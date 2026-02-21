import React from 'react';
import { Send, Map, UserCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Send className="text-blue-500" size={32} />,
      title: "Exclusive Trip",
      desc: "We pay attention to every quality in the service we provide to you."
    },
    {
      icon: <Map className="text-yellow-500" size={32} />,
      title: "Lots of choices",
      desc: "There are many choices of trips and interesting events in it."
    },
    {
      icon: <UserCheck className="text-primary" size={32} />,
      title: "Professional Guide",
      desc: "While on vacation you will be guided by our professional guide."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-secondary mb-4">We Present Best <span className="text-primary">Benefits</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-16">Holidays become more fun with the following 3 benefits that we present to you.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-gray-100 flex flex-col items-center">
               <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                 {benefit.icon}
               </div>
               <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
