import { TrendingUp, Target, Shield } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "Low-Cost Investment Opportunities",
      description:
        "Start investing with minimal capital and grow your wealth over time with affordable entry options.",
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Short-Term Earning Cycles",
      description:
        "Experience fast returns with short investment periods designed for quick profits.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Maximize Returns with Higher ROI",
      description:
        "Benefit from competitive returns, ensuring that your investments work harder for you.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Graphic */}
          <div className="relative">
            <div className="bg-black border border-green-500/30 rounded-3xl p-8 shadow-lg">
              <div className="aspect-square rounded-2xl bg-green-500/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-green-500 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-green-500/40">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Profit Prime</h3>
                  <p className="text-white/70">
                    Professional Investment Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Floating green orbs */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                What is Profit Prime?
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Profit Prime is an investment platform focused on foreign
                exchange (forex) trading, designed to provide users with
                opportunities for quick returns and higher ROI. It offers a
                secure system with low minimum investment requirements, allowing
                investors to participate in short-term earning cycles while
                benefiting from expert guidance in the forex market.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
