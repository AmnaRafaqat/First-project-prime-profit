import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 px-4 relative bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl p-12 shadow-lg border border-green-600/40 backdrop-blur-sm overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative space-y-8">
              {/* Trust Badge */}
              <div className="flex justify-center">
                <div className="flex items-center gap-1 bg-green-600/20 rounded-full px-4 py-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-green-500 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-sm text-green-400 font-medium">
                    Trusted by 15,000+ investors
                  </span>
                </div>
              </div>

              {/* Heading & Text */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Ready to Start Your{" "}
                  <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
                    Investment Journey?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of successful investors who trust Profit Prime
                  with their financial future. Start with as little as $100 and
                  watch your investment grow.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="default"
                  size="xl"
                  className="group bg-green-600 hover:bg-green-500 text-white border-none"
                >
                  Start Investing Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-green-500 text-green-400 hover:bg-green-600/20"
                >
                  View All Plans
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-green-600/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">98.5%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">Instant</div>
                  <div className="text-sm text-gray-400">Withdrawals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
