import { Check } from "lucide-react";

export default function WhyChooseUs() {
    const reasons = [
        "Filipino-friendly service",
        "Clear pricing, no hidden fees",
        "Patient guidance for first-time travelers",
        "Reliable support before & during travel",
        "Trusted travel advisors",
    ];

    return (
        <section className="w-full bg-background py-24 px-6 relative overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
                <span className="text-secondary font-semibold tracking-wider uppercase mb-3 text-sm">
                    Our Promise
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
                    Why Filipinos Choose AWU Travels
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-start bg-card p-6 rounded-2xl shadow-sm border border-border hover:border-primary/50 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                <Check className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-lg text-foreground font-medium pt-1.5">{reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
