import Image from "next/image";

export default function FeaturedDestinations() {
    const destinations = [
        {
            name: "Japan",
            flag: "🇯🇵",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "South Korea",
            flag: "🇰🇷",
            image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "Europe",
            flag: "🇪🇺",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "Hong Kong",
            flag: "🇭🇰",
            image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
        },
        {
            name: "Thailand",
            flag: "🇹🇭",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
        },
    ];

    return (
        <section className="w-full bg-muted/20 py-24 px-6 relative border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div>
                        <span className="text-secondary font-semibold tracking-wider uppercase mb-3 block text-sm">
                            Explore the World
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                            Featured Destinations
                        </h2>
                    </div>
                    <p className="text-muted-foreground mt-4 md:mt-0 max-w-md text-base leading-relaxed">
                        Discover our top picks for your next unforgettable adventure. We handle the visas so you can focus on the views.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {destinations.map((dest, index) => (
                        <div key={index} className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-border">
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-between">
                                    {dest.name} <span className="text-3xl" aria-hidden="true">{dest.flag}</span>
                                </h3>
                                <div className="mt-auto">
                                    <button className="w-full py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-yellow-400 transition-colors shadow-sm text-lg">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
