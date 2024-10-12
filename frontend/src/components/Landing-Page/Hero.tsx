import Image from "next/image";
import { Button } from "@/components/ui/button";
import MemoBase from "@/icons/Base";
import MemoArrowUpRight from "@/icons/arrowUpRight";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-[#4A5D23] mb-8">
        Clean energy for all, starting with your neighbourhood
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <Image
            src="/energy.svg"
            alt="Solar panels on a residential roof"
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="lg:w-1/3 flex flex-col  justify-between">
          <div className="bg-[#F5F5DC] p-6 h-full rounded-lg mb-4">
            <p className="text-lg mb-4">
              Share energy easily and securely, helping lower emissions and
              empower your community through a transparent, decentralized
              system.
            </p>
            <div className="flex flex-col justify-end items-start space-y-2  mt-7 sm:mt-[18rem]">
              <span className="text-sm mr-2">powered by:</span>
              <div className="flex items-center space-x-2">
                <MemoBase className="h-8 w-8" />
                <p className="text-xl font-[500]">Base blockchain</p>
              </div>
            </div>
          </div>
          <Button className="bg-[#373D20] hover:bg-[#3A4D13] text-white w-full py-6 text-lg">
            Join the energy wave
            <MemoArrowUpRight className="ml-2 h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
