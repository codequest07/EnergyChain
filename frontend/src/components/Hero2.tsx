import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="bg-black">
      <section className="container hsection mx-auto px-4 py-12 sm:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Decentralized Energy Trading Platform
          </h1>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
            Empower your energy future with blockchain technology
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
            <Link href="/dashboard"> Get Started</Link>
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/energy.jpg"
            alt="Renewable Energy Illustration"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero2;
