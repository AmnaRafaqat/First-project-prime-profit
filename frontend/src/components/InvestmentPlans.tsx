import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const InvestmentPlans = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "$100",
      duration: "7 Days",
      profit: "15%",
      features: [
        "Minimum Investment: $100",
        "Maximum Investment: $1,000",
        "Daily Profit: 2.1%",
        "Total Return: 15%",
        "24/7 Support",
        "Instant Withdrawal",
      ],
      popular: false,
    },
    {
      name: "Professional Plan",
      price: "$1,000",
      duration: "14 Days",
      profit: "35%",
      features: [
        "Minimum Investment: $1,000",
        "Maximum Investment: $5,000",
        "Daily Profit: 2.5%",
        "Total Return: 35%",
        "Priority Support",
        "Instant Withdrawal",
        "Personal Manager",
      ],
      popular: true,
    },
    {
      name: "Premium Plan",
      price: "$5,000",
      duration: "21 Days",
      profit: "60%",
      features: [
        "Minimum Investment: $5,000",
        "Maximum Investment: $25,000",
        "Daily Profit: 2.8%",
        "Total Return: 60%",
        "VIP Support",
        "Instant Withdrawal",
        "Dedicated Manager",
        "Risk Insurance",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 px-4 relative bg-black">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Investment Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect investment plan that suits your financial goals
            and risk appetite
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-lg border backdrop-blur-sm hover:scale-105 transition-transform duration-300 ${
                plan.popular
                  ? "border-green-500/60 shadow-[0_0_25px_rgba(34,197,94,0.4)]"
                  : "border-gray-700/50"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-white shadow-md">
                    <Star className="w-4 h-4 text-white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-500">
                    {plan.price}
                  </div>
                  <div className="text-gray-400">Minimum Investment</div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <span className="bg-green-600/20 px-3 py-1 rounded-full text-green-400">
                      {plan.duration}
                    </span>
                    <span className="bg-white/10 px-3 py-1 rounded-full text-white">
                      {plan.profit} Profit
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 text-left"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-600/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button
                size="lg"
                className={`w-full font-semibold ${
                  plan.popular
                    ? "bg-green-600 hover:bg-green-500 text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
