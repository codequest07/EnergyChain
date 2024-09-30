import CTASection from "@/components/CTA";
import FAQsection from "@/components/Faq-section";
import Footer from "@/components/Footer";
import Hero2 from "@/components/Hero2";
import NavBar from "@/components/NavBar";
import SocialProofSection from "@/components/SocialProofSection";
import SolarEnergy from "@/components/Solar-energy-features";
// import SolarEnergy from "@/components/solar-energy-features";
import TestimonialsSection from "@/components/Testimonials";

const page = () => {
  return (
  <div>
      <NavBar />
      <div className="mt-7">
        <Hero />
        <SocialProofSection />
        <CTASection />
        <SolarEnergy />
        <TestimonialsSection />
        <FAQsection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
