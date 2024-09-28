import { Button } from "@/components/ui/button";
import MemoBitcoin from "@/icons/Bitcoin";
import MemoHero1 from "@/icons/Hero1";
import MemoHero2 from "@/icons/Hero2";

export default function Hero() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center p-8">
      <div className="sm:max-w-6xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="sm:text-6xl text-4xl font-extrabold leading-tight tracking-wide">
              Revolutionize Your Solar Experience
            </h1>
            <p className="text-lg text-gray-300">
              Join DenLink today to connect, share, and buy solar energy in a
              decentralized marketplace that empowers you. Experience a seamless
              journey towards sustainable energy usage and community
              collaboration.
            </p>
          </div>

          {/* Hero Images */}
          <div className="flex justify-center items-center space-x-8">
            <MemoHero1 className="w-80 h-80 md:w-96 md:h-96 transform hover:scale-105 transition-transform duration-300" />
            <MemoHero2 className="w-80 h-80 md:w-96 md:h-96 transform hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* Feature Sections */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-start  text-center md:text-left">
            <Button className="bg-white mx-4 text-black px-8 py-5 rounded font-semibold shadow-lg hover:bg-gray-200 transition duration-300">
              Get Started Now
            </Button>
            <MemoBitcoin className="w-full h-[19rem] max-w-lg mx-auto transform hover:rotate-6 transition-transform duration-300" />
          </div>

          <div className="space-y-16 text-gray-300">
            {[
              {
                title: "01",
                description:
                  "List your surplus solar energy effortlessly and earn cryptocurrency rewards.",
              },
              {
                title: "02",
                description:
                  "Browse local energy listings and purchase clean energy at competitive rates.",
              },
              {
                title: "03",
                description:
                  "Enjoy secure transactions powered by blockchain technology for peace of mind.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <h2 className="sm:text-4xl text-2xl font-bold text-white">
                  {item.title}
                </h2>
                <p className="sm:text-lg text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
