import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Hero />

      {/* The content will slide over the Hero section because of the Hero's pin setup and structure */}
      <div className="relative z-30 w-full bg-background rounded-t-[3rem] -mt-8 shadow-2xl flex flex-col">
        <About />
        <Services />
        <WhyChooseUs />
        <FeaturedDestinations />
        <Testimonials />
        <CTA />
      </div>

      {/* Footer is placed at the very bottom of the page */}
      <div className="relative z-30 bg-card">
        <Footer />
      </div>
    </main>
  );
}
