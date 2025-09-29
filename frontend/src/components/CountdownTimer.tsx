import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 14,
    mins: 12,
    secs: 28,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) {
          return { ...prev, secs: prev.secs - 1 };
        } else if (prev.mins > 0) {
          return { ...prev, mins: prev.mins - 1, secs: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black/90 border border-green-500 rounded-2xl p-6 sm:p-8 shadow-lg backdrop-blur-sm w-full max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8 text-white">
        Token Sale Ends In
      </h3>

      {/* Timer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.mins, label: "Mins" },
          { value: timeLeft.secs, label: "Secs" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-green-400 mb-2">
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-white">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Raised & Target */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-white">
          <span>Raised</span>
          <span className="text-green-400 font-semibold">1,450 Tokens</span>
        </div>
        <div className="flex justify-between text-sm text-white">
          <span>Target</span>
          <span className="text-green-400 font-semibold">150,000 Tokens</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-1000 ease-out rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>

        <div className="flex justify-between text-xs text-white">
          <span>Soft cap</span>
          <span className="text-green-400 font-medium">60,490</span>
          <span>Hard cap</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
