import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const benefits = [
    "Stress-free",
    "Transparent",
    "Sulit",
    "Enjoyable from start to finish",
  ];

  return (
    <section className="w-full bg-background py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col">
          <span className="text-secondary font-semibold tracking-wider uppercase mb-3 text-sm block">
            About AWU Travels
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your Trusted Filipino Travel Partner
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            AWU Travels is a Filipino-focused travel agency offering end-to-end travel solutions, from trip planning and bookings to visa assistance and travel support.
          </p>
          
          <div className="mb-10 lg:mb-0">
            <p className="text-foreground font-semibold text-xl mb-6">
              We believe travel should be:
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
           <Image
              src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2670&auto=format&fit=crop"
              alt="Travelers enjoying a scenic view"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
    </section>
  );
}
