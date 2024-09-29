import { BarChart2, Leaf, Shield, Sun, Users, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Features = () => {
  return (
    <section id="features" className="container mx-auto px-4 py-12 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-8 sm:mb-12 text-center">
        Key Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <FeatureCard
          icon={<Sun className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-500" />}
          title="Peer-to-Peer Energy Trading"
          description="Buy and sell energy directly with other users on the platform."
        />
        <FeatureCard
          icon={
            <BarChart2 className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />
          }
          title="Real-time Monitoring"
          description="Track your energy production and consumption in real-time."
        />
        <FeatureCard
          icon={<Shield className="h-10 w-10 sm:h-12 sm:w-12 text-red-500" />}
          title="Secure Blockchain Transactions"
          description="All trades are securely recorded on the blockchain."
        />
        <FeatureCard
          icon={<Users className="h-10 w-10 sm:h-12 sm:w-12 text-purple-500" />}
          title="Community Governance"
          description="Participate in platform decisions through voting."
        />
        <FeatureCard
          icon={<Leaf className="h-10 w-10 sm:h-12 sm:w-12 text-green-500" />}
          title="Incentives for Green Energy"
          description="Earn rewards for contributing renewable energy to the network."
        />
        <FeatureCard
          icon={<Zap className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500" />}
          title="Smart Grid Integration"
          description="Seamlessly connect with smart meters and IoT devices."
        />
      </div>
    </section>
  );
};

export default Features;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm sm:text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
