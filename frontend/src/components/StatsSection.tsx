import { Users, DollarSign, TrendingUp, Award } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      value: "15,000+",
      label: "Active Investors",
      description: "Trust our platform"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      value: "$50M+",
      label: "Total Invested",
      description: "Across all plans"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      value: "98.5%",
      label: "Success Rate",
      description: "Profitable investments"
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      value: "2+",
      label: "Years Experience",
      description: "In forex markets"
    }
  ];

  return (
    <section className="py-20 px-4 relative bg-black">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Numbers that speak for our commitment to investor success and platform reliability
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-lg border border-green-700/30 hover:scale-105 transition-transform duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(34,197,94,0.7)] transition">
                {stat.icon}
              </div>

              {/* Values */}
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-green-500">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
