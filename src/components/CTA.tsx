import { MessageCircle, Calendar } from "lucide-react";

export default function CTA() {
    return (
        <section className="w-full bg-background py-24 px-6 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Ready to Book Your Next Trip?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Let AWU Travels take care of the planning, so you can focus on making memories.
                </p>

                <div className="flex flex-col sm:flex-row shadow-lg sm:bg-card sm:rounded-full overflow-hidden w-full max-w-2xl mx-auto border sm:border-border">
                    <button className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-accent text-accent-foreground sm:bg-transparent sm:hover:bg-accent/10 sm:text-foreground font-semibold text-lg transition-colors border-b sm:border-b-0 sm:border-r border-border rounded-t-2xl sm:rounded-none">
                        <span className="w-8 h-8 rounded-full bg-accent sm:bg-accent/20 flex flex-shrink-0 items-center justify-center text-accent-foreground">
                            <Calendar className="w-4 h-4" />
                        </span>
                        Book a Free Consultation
                    </button>

                    <button className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white sm:bg-transparent sm:hover:bg-[#25D366]/10 sm:text-foreground font-semibold text-lg transition-colors rounded-b-2xl sm:rounded-none">
                        <span className="w-8 h-8 rounded-full bg-[#25D366] flex flex-shrink-0 items-center justify-center text-white">
                            <MessageCircle className="w-4 h-4" />
                        </span>
                        Message Us
                    </button>
                </div>
            </div>
        </section>
    );
}
