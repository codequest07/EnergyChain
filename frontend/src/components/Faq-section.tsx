import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does DenLink ensure the security of transactions?",
    answer:
      "DenLink uses advanced blockchain technology to secure all transactions. This ensures transparency, immutability, and protection against fraud. Each transaction is encrypted and verified across multiple nodes in the network.",
  },
  {
    question: "Can I list my energy anytime?",
    answer:
      "Yes, DenLink allows you to list your surplus energy whenever you want. Simply log into your dashboard, enter your available energy, and your listing will be live instantly.",
  },
  {
    question: "What cryptocurrencies can I use for transactions?",
    answer:
      "DenLink supports various major cryptocurrencies, including Bitcoin, Ethereum, and others. You can choose the currency that suits you best when listing your energy or making a purchase.",
  },
  {
    question: "Is there a limit on how much energy I can sell?",
    answer:
      "There is no cap on the amount of energy you can sell through DenLink. You can list as much surplus energy as you have available, allowing you to maximize your earnings.",
  },
  {
    question: "How do I track my energy sales?",
    answer:
      "Sellers can use their personal dashboard to monitor sales, track earnings, and view market trends, providing insights that help optimize listings for better visibility and sales.",
  },
  {
    question: "What happens if a transaction fails?",
    answer:
      "In the rare event of a transaction failure, DenLink's blockchain technology ensures that your funds remain secure. You will be notified, and the system will automatically refund any transactions that do not complete as expected.",
  },
];

export default function FAQsection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2">
        Your Questions Answered
      </h2>
      <p className="text-center text-gray-600 mb-8">Explore Common Inquiries</p>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-600">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
