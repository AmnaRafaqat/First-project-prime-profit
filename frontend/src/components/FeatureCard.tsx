import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-black border border-green-500/30 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300 group">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-green-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
