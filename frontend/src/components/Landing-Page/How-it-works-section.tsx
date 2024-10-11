import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your clean energy source",
    description:
      "Link your solar panels or other renewable setups to the network",
    color: "bg-[#FFEFEB]",
  },
  {
    number: "02",
    title: "Share what you don't use",
    description:
      "Provide your excess energy to neighbors through a secure, decentralized system",
    color: "bg-[#E6F6E4]",
  },
  {
    number: "03",
    title: "Track your impact",
    description:
      "See how much energy you've shared and emissions you've helped reduce, verified on the network",
    color: "bg-[#EBE7F5]",
  },
];
export default function HowItWorksSection() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <p className="text-sm text-[#575757] mb-4">how it works</p>
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-[500] text-[#21250F] mb-8 max-w-4xl mx-auto">
        By using a decentralized network, we ensure everyone benefits in a fair,
        transparent way
      </h2>
      <Button
        variant="outline"
        size="lg"
        className="bg-[#EFF1ED] rounded-lg text-[#C84C09] hover:bg-[#E5E5C0] hover:text-[#FF4500] border-none  mb-16">
        Start sharing
        <ArrowUpRight className="ml-2 h-6 w-6" />
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className={`${step.color} h-80 border-none`}>
            <div className="mt-[10rem]">
              <CardHeader>
                <CardTitle className="flex items-start text-[#4A5D23]">
                  <span className="mr-2 font-[500] text-[#C84C09]">
                    {step.number}
                  </span>
                  <p className="text-[#21250F] font-[500]">{step.title}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-start text-[14px] text-[#575757]">
                  {step.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
