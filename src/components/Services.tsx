import { Plane, FileBadge, Building2, Map } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Travel Packages",
            icon: <Plane className="w-10 h-10 text-primary" />,
            features: [
                "International & domestic tours",
                "Family, couple & group travel",
                "Customized itineraries",
            ],
        },
        {
            title: "Visa Assistance",
            icon: <FileBadge className="w-10 h-10 text-primary" />,
            features: [
                "Tourist visas",
                "Step-by-step guidance",
                "Document support & consultation",
            ],
        },
        {
            title: "Flights & Accommodations",
            icon: <Building2 className="w-10 h-10 text-primary" />,
            features: [
                "Best-value flight options",
                "Hotel bookings",
                "Flexible travel solutions",
            ],
        },
        {
            title: "Customized Travel Planning",
            icon: <Map className="w-10 h-10 text-primary" />,
            features: [
                "Personalized recommendations",
                "Budget-friendly planning",
                "End-to-end coordination",
            ],
        },
    ];

    return (
        <section className="w-full bg-muted/30 py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase mb-3 block text-sm">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        What We Offer
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {service.title}
                            </h3>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-muted-foreground text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 mr-2 flex-shrink-0"></span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
