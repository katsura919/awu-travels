import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="w-full bg-primary text-primary-foreground py-28 px-6 relative overflow-hidden">
            {/* Background decorative pattern - subtle circles to make it feel premium */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <span className="text-white/80 font-semibold tracking-wider uppercase mb-3 block text-sm">
                    Testimonials
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
                    What Our Clients Say
                </h2>

                <div className="bg-card text-card-foreground rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative mx-4 md:mx-0 border border-white/10">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-accent-foreground fill-current" />
                    </div>

                    <p className="text-xl md:text-3xl font-medium leading-relaxed mb-10 italic text-foreground mt-2">
                        &quot;Super smooth ng process! First time namin mag-travel abroad and AWU Travels helped us every step of the way.&quot;
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                            HC
                        </div>
                        <div className="text-left">
                            <h4 className="font-bold text-xl text-foreground">— Happy Client</h4>
                            <div className="flex text-accent mt-1 gap-1">
                                {/* 5 stars */}
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
