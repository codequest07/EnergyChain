import Image from "next/image";
import { Button } from "./ui/button";

const LearnMore = () => {
  return (
    <section className="container mx-auto px-4 py-12 sm:py-20">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Image
              src="/energy1.jpg"
              alt="Energy Trading Platform Interface"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 sm:p-8 md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">
              Experience the Future of Energy Trading
            </h3>
            <p className="text-green-700 mb-6">
              Our intuitive platform makes it easy for anyone to participate in
              the decentralized energy market. Whether you're a homeowner with
              solar panels or a business looking to optimize energy costs,
              EnergyChain has you covered.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
