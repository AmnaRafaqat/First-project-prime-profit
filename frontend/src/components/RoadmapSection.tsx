import { Calendar, CheckCircle, Clock, Rocket } from "lucide-react";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      title: "Platform Launch",
      description:
        "Official launch of Prime Profit trading platform with basic investment packages",
      status: "completed",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      quarter: "Q2 2024",
      title: "Advanced Features",
      description:
        "Introduction of advanced trading tools, analytics, and mobile application",
      status: "completed",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      quarter: "Q3 2024",
      title: "Global Expansion",
      description:
        "Expansion to new markets and integration with multiple payment systems",
      status: "active",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      quarter: "Q4 2024",
      title: "AI Integration",
      description:
        "Implementation of AI-powered trading signals and automated investment strategies",
      status: "upcoming",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      quarter: "Q1 2025",
      title: "DeFi Integration",
      description:
        "Integration with decentralized finance protocols and cryptocurrency investments",
      status: "upcoming",
      icon: <Calendar className="w-6 h-6" />,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400 bg-green-500/20";
      case "active":
        return "text-white bg-green-600/40 animate-pulse";
      case "upcoming":
        return "text-gray-400 bg-gray-700/40";
      default:
        return "text-gray-300 bg-gray-600/30";
    }
  };

  return (
    <section className="py-20 px-4 relative bg-black">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our strategic development timeline for building the future of forex
            investment
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 via-green-400 to-transparent"></div>

            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.icon}
                        </div>
                        <div className="text-sm font-medium text-green-400">
                          {item.quarter}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Status Tag */}
                      <div className="mt-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 border-green-500 bg-black"></div>

                  {/* Empty space for symmetry */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
