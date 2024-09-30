import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MemoMicheal from "@/icons/Micheal";
import MemoSarah from "@/icons/Sarah";
import MemoDavid from "@/icons/David";
import MemoEmily from "@/icons/Emily";
import MemoTwitterIcon from "@/icons/TwitterIcon";

const testimonials = [
  {
    name: "Michael Thompson",
    role: "Solar Panel Owner",
    avatar: MemoMicheal,
    content:
      "EnergyChain has completely transformed how I share my unused solar energy. The process is seamless, and I've started earning rewards effortlessly. It's great to know my excess energy is going to good use!",
  },
  {
    name: "Sarah Johnson",
    role: "Clean Energy Advocate",
    avatar: MemoSarah,
    content:
      "Purchasing energy through EnergyChain is a breeze! I love the competitive prices and the fact that I'm supporting local solar panel owners. It's a win-win for everyone involved.",
  },
  {
    name: "David Chen",
    role: "Eco-Friendly Consumer",
    avatar: MemoDavid,
    content:
      "The user-friendly interface of EnergyChain made it easy for me to find and buy clean energy. The transparency in transactions gives me confidence in my purchases. Highly recommend!",
  },
  {
    name: "Emily Davis",
    role: "Renewable Energy Enthusiast",
    avatar: MemoEmily,
    content:
      "EnergyChain is not just a marketplace, it's a community. I appreciate how it allows us to collaborate for a greener future while making sustainable choices easier.",
  },
];

export default function TestimonialsSection() {
  return (
    <div className="hsection px-4 py-8">
      <h2 className="sm:text-3xl text-xl font-bold text-center mb-8">
        What Our Users Are Saying
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <testimonial.avatar className="h-10 w-10" />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <MemoTwitterIcon className="ml-auto h-5 w-5 text-blue-400" />
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline">Read More Feedback</Button>
      </div>
    </div>
  );
}
