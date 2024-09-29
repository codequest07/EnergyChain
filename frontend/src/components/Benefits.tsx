import Image from "next/image";

const Benefits = () => {
  return (
    <section id="benefits" className="bg-green-800 text-white py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <BenefitCard
              title="Reduce Energy Costs"
              description="Save money by buying energy at competitive prices."
            />
            <BenefitCard
              title="Increase Energy Independence"
              description="Rely less on traditional energy providers."
            />
            <BenefitCard
              title="Support Green Energy"
              description="Contribute to a more sustainable energy ecosystem."
            />
          </div>
          <div className="order-first md:order-last mb-8 md:mb-0">
            <Image
              src="/energy2.jpg"
              alt="Green Energy Benefits"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;



interface BenefitCardProps {
    title: string;
    description: string;
  }
  
  function BenefitCard({ title, description }: BenefitCardProps) {
    return (
      <div className="bg-green-700 p-4 sm:p-6 rounded-lg">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    );
  }