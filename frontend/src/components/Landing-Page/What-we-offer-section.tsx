import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MemoProfile from "@/icons/Profile";
import MemoShieldSecurity from "@/icons/ShieldSecurity";
import MemoSearchStatus from "@/icons/SearchStatus";
import MemoPeople from "@/icons/people";

const features = [
  {
    title: "User-friendly platform",
    description:
      "Experience an intuitive interface designed for seamless energy transactions, making energy sharing easy for everyone.",
    icon: MemoProfile,
    color: "bg-[#EBEBDB]",
  },
  {
    title: "Secure transactions",
    description:
      "Rest assured with blockchain technology that guarantees secure, transparent, and quick energy purchases every time.",
    icon: MemoShieldSecurity,
    color: "bg-[#E0F3F6]",
  },
  {
    title: "Real-time listings",
    description:
      "Browse current energy offers and find the best deals from solar panel owners in your area without any delays.",
    icon: MemoSearchStatus,
    color: "bg-[#FDEBDB]",
  },
  {
    title: "Community driven",
    description:
      "Join a vibrant community committed to sustainable energy practices and support local energy sharing.",
    icon: MemoPeople,
    color: "bg-[#F1E4DC]",
  },
];

export default function WhatWeOfferSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <p className="text-sm text-gray-500 mb-4">what we offer</p>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3">
          <h2 className="text-3xl sm:text-4xl  font-[500] text-[#21250F] mb-8">
            Our commitment is to leverage the strong community of the blockchain
            towards the restoration of our planet
          </h2>
        </div>
        <div className="relative h-64 lg:h-full rounded-lg lg:col-span-2">
          <Image
            src="/sunset.svg"
            alt="Sunset over solar panels"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {features.map((feature, index) => (
          <Card
            key={index}
            className={`${feature.color} border-none  shadow-none`}>
            <CardHeader>
              <p className="text-[#575757]">{feature.description}</p>
            </CardHeader>
            <CardContent>
              <CardTitle className="flex items-center justify-between text-[#21250F]">
                {feature.title}
                <feature.icon className="mr-2 h-6 w-6" />
              </CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
