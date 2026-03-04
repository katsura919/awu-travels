import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      {/* Dummy section to demonstrate the pinned scroll effect sliding over the hero */}
      <section className="relative z-30 w-full min-h-[100vh] bg-background pt-24 pb-32 px-6 rounded-t-[3rem] -mt-8 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="text-secondary font-semibold tracking-wider uppercase mb-3">Take yourself</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Adventure Ideas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-muted relative">
                  <img
                    src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=500&auto=format&fit=crop&sig=${i}`}
                    alt="Activity"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Activity {i}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Add some adrenaline to your travel senses by this amazing experience {i}.
                </p>
                <button className="px-6 py-2 bg-foreground text-background font-medium text-sm rounded hover:bg-foreground/90 transition-colors">
                  Enquire
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
