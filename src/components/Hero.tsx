"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Pin the background image wrapper so it stays in place while scrolling
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                pin: bgRef.current,
                pinSpacing: false, // Prevents adding extra space at the bottom
            });

            // Optional: Add a subtle parallax or fade to the content text
            gsap.to(contentRef.current, {
                y: -100,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[100vh] overflow-hidden bg-background"
        >
            {/* Pinned Background Image */}
            <div
                ref={bgRef}
                className="absolute inset-0 w-full h-[100vh] will-change-transform"
            >
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                <Image
                    src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop"
                    alt="Beautiful beach resort at AWU Travels"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Hero Content (Scrolls normally over the pinned background) */}
            <div
                ref={contentRef}
                className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl mx-auto px-6 text-center text-white"
            >
                {/* Logo/Icon placeholder for top */}
                <div className="mb-8 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                    </div>
                    <span className="text-sm tracking-widest uppercase font-semibold text-white/90">AWU Travels</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Travel Made Easy for <br className="hidden md:block" /> Every Filipino
                </h1>

                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    From planning to booking to visas, AWU Travels handles everything so you can enjoy the journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-accent/20">
                        Plan My Trip
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold rounded-full hover:bg-white/20 transition-colors duration-300">
                        Free Travel Consultation
                    </button>
                </div>
            </div>

            {/* Torn Paper bottom edge (SVG Mask) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
                <svg
                    className="relative block w-full h-[40px] md:h-[80px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M1200,45.85C1131.8,25.42,1063.1,10.64,992,10.3c-74.8-.35-148,16-222.9,23.32-68,6.65-135-2-200.7-18C512.2,2,453.6-2,393.7,1.83c-64.8,4.14-131,18-195.9,20.57-60.8,2.44-122.9-8.34-197.8-22.4L0,120H1200V45.85Z"
                        className="fill-background"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
