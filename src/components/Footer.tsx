import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-card border-t border-border pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                {/* Brand Column */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-foreground">AWU Travels</span>
                    </div>
                    <p className="text-muted-foreground text-lg mb-8 max-w-sm">
                        Your trusted travel partner for Filipinos worldwide.
                    </p>

                    <div className="flex items-center gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors group">
                            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors group">
                            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Contact Column */}
                <div className="col-span-1">
                    <h3 className="text-lg font-bold text-foreground mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-muted-foreground">
                            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Philippines</span>
                        </li>
                        <li className="flex items-start gap-3 text-muted-foreground">
                            <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Contact Number</span>
                        </li>
                        <li className="flex items-start gap-3 text-muted-foreground">
                            <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>Email Address</span>
                        </li>
                    </ul>
                </div>

                {/* Quick Links Column */}
                <div className="col-span-1">
                    <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-block py-1">About Us</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-block py-1">Services</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-block py-1">Destinations</Link></li>
                        <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors inline-block py-1">Privacy Policy</Link></li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-muted-foreground text-sm">
                <p>© {new Date().getFullYear()} AWU Travels. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Designed & Developed for Filipino Travelers</p>
            </div>
        </footer>
    );
}
