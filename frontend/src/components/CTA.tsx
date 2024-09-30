import Image from "next/image";
import CTABg from "../../public/CTABg.png";

export default function CTASection() {
  return (
    <div className="hsection bg-white p-3 sm:p-0 py-16">
      <div className="sm:max-w-[74rem] mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={CTABg}
            alt="CTA Image"
            className="rounded-lg shadow-lg"
            width={600}
            height={400}
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 space-y-6">
          <h2 className="sm:text-4xl font-bold text-gray-900">
            Join the Solar Energy Revolution Today!
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the future of renewable energy with EnergyChain, where solar
            panel owners can effortlessly share their surplus energy with
            consumers seeking clean power.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-3 border border-gray-500 text-gray-900 rounded-[12px] font-semibold hover:bg-gray-100 transition duration-200">
              Discover More
            </button>
            <button className="px-6 py-3 bg-green-500 text-white rounded-[12px] font-semibold hover:bg-green-600 transition duration-200">
              Get Started Now
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row justify-center sm:max-w-[30rem] sm:space-x-12 space-y-4 sm:space-y-0 mt-8">
            <div className="sm:w-1/2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                2.5k+
              </h3>
              <p className="text-gray-500">
                Join over 10,000 solar users today!
              </p>
            </div>
            <div className="sm:w-1/2 text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                5.0 <span className="text-yellow-500">★</span>
              </h3>
              <p className="text-gray-500">Rated 4.9/5 by users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
