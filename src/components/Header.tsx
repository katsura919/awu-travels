"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4 md:px-12",
                isScrolled
                    ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span
                        className={cn(
                            "font-bold text-2xl tracking-tight transition-colors duration-300",
                            isScrolled ? "text-foreground" : "text-white"
                        )}
                    >
                        AWU<span className="text-accent">Travels.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Services", href: "/services" },
                        { name: "Destinations", href: "/destinations" },
                        { name: "Blog", href: "/blog" },
                        { name: "Contact", href: "/contact" },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium tracking-wide transition-colors duration-200 hover:text-accent relative outline-none",
                                "after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full",
                                isScrolled ? "text-foreground/80" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-5">
                    <button
                        className={cn(
                            "transition-colors duration-200 hover:text-accent",
                            isScrolled ? "text-foreground" : "text-white"
                        )}
                        aria-label="Search"
                    >
                        <Search size={20} strokeWidth={2} />
                    </button>
                    <button
                        className={cn(
                            "transition-colors duration-200 hover:text-accent",
                            isScrolled ? "text-foreground" : "text-white"
                        )}
                        aria-label="Wishlist"
                    >
                        <Heart size={20} strokeWidth={2} />
                    </button>
                    <button
                        className={cn(
                            "relative transition-colors duration-200 hover:text-accent",
                            isScrolled ? "text-foreground" : "text-white"
                        )}
                        aria-label="Cart"
                    >
                        <ShoppingCart size={20} strokeWidth={2} />
                        <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}
