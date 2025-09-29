import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Profit Prime?",
      answer:
        "Profit Prime is a professional forex investment platform that allows users to invest in foreign exchange markets with guaranteed returns. We offer secure, short-term investment opportunities with competitive profit rates.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is simple! Just register for an account, choose your preferred investment plan, make your deposit, and start earning. Our minimum investment starts from just $100.",
    },
    {
      question: "What are the minimum and maximum investment amounts?",
      answer:
        "Our Starter Plan begins at $100 minimum investment, while our Premium Plan accepts up to $25,000. Each plan has different minimum and maximum limits to suit various investor profiles.",
    },
    {
      question: "How long does it take to receive profits?",
      answer:
        "Profits are calculated daily and credited to your account. You can withdraw your earnings instantly once the investment period is completed. Our plans range from 7 to 21 days.",
    },
    {
      question: "Is my investment secure?",
      answer:
        "Yes, we use advanced security measures including SSL encryption, secure payment gateways, and professional risk management strategies. Our Premium Plan also includes risk insurance coverage.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, credit/debit cards, cryptocurrency payments (Bitcoin, Ethereum), and popular e-wallets like PayPal and Skrill.",
    },
    {
      question: "Can I withdraw my funds anytime?",
      answer:
        "You can withdraw your profits and initial investment once the investment period is completed. We offer instant withdrawal processing for all verified accounts.",
    },
    {
      question: "Do you provide customer support?",
      answer:
        "Yes, we offer 24/7 customer support for all users. Professional and Premium plan members receive priority support with dedicated account managers.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 relative bg-black">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-500">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our platform and investment
            process
          </p>
        </div>

        {/* Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl p-8 shadow-lg border border-green-600/30 backdrop-blur-sm">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-green-600/30 rounded-2xl px-6 bg-white/5 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-white hover:text-green-500 transition-colors py-6 text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
