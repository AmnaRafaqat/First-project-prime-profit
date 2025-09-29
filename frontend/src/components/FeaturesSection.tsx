import FeatureCard from "./FeatureCard";
import { DollarSign, Clock, TrendingUp, Shield } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <DollarSign className="w-10 h-10 text-green-400" />,
      title: "Small Investment",
      description:
        "Start your journey with a minimal upfront cost, making it accessible to all investors.",
    },
    {
      icon: <Clock className="w-10 h-10 text-green-400" />,
      title: "Short Periods",
      description:
        "Enjoy quick returns with short-term investment opportunities.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-green-400" />,
      title: "Higher Yield",
      description:
        "Maximize your earnings with competitive returns on investment.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-400" />,
      title: "Secure System",
      description:
        "Invest with confidence in a secure and reliable platform.",
    },
  ];

  return (
    <section className="py-20 px-4 relative bg-black">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Why Choose <span className="text-green-400">Profit Prime?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Choose Profit Prime for expert guidance, secure investments, and
            consistent growth in the dynamic world of forex trading.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
