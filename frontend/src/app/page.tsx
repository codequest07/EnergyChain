import FAQsection from "@/components/Landing-Page/Faq-section";
import Footer from "@/components/Footer";
import Hero from "@/components/Landing-Page/Hero";
import HowItWorksSection from "@/components/Landing-Page/How-it-works-section";
import WhatWeOfferSection from "@/components/Landing-Page/What-we-offer-section";

import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-12">
        <Hero />
        <HowItWorksSection />
        <WhatWeOfferSection />

        <FAQsection />
        <Footer />
      </div>
    </div>
  );
};

export default page;
