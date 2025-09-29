import DashboardNav from "@/components/DashboardNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function InvestmentPlan() {
  const investmentPlans = [
    {
      id: 1,
      name: "Starter Plan",
      minAmount: 100,
      maxAmount: 1000,
      duration: "30 days",
      dailyReturn: 2.5,
      totalReturn: 75,
      features: [
        "Daily returns",
        "24/7 support",
        "Risk management",
        "Flexible withdrawal"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Premium Plan",
      minAmount: 1000,
      maxAmount: 5000,
      duration: "60 days",
      dailyReturn: 3.5,
      totalReturn: 210,
      features: [
        "Higher daily returns",
        "Priority support",
        "Advanced analytics",
        "Early withdrawal option"
      ],
      popular: true
    },
    {
      id: 3,
      name: "VIP Plan",
      minAmount: 5000,
      maxAmount: 50000,
      duration: "90 days",
      dailyReturn: 4.5,
      totalReturn: 405,
      features: [
        "Maximum returns",
        "Dedicated manager",
        "Custom strategies",
        "Exclusive benefits"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment Plans</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed investment plans to maximize your returns while managing risk effectively.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {investmentPlans.map((plan) => (
            <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-500 text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">
                  Perfect for {plan.name === "Starter Plan" ? "beginners" : plan.name === "Premium Plan" ? "experienced investors" : "high-net-worth individuals"}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Investment Range */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${plan.minAmount.toLocaleString()} - ${plan.maxAmount.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-500">Investment Range</p>
                </div>

                {/* Returns */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{plan.dailyReturn}%</div>
                    <p className="text-sm text-green-700">Daily Return</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{plan.totalReturn}%</div>
                    <p className="text-sm text-blue-700">Total Return</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Duration: {plan.duration}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Features:</h4>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Invest Button */}
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Invest Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Why Choose Our Plans?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Proven Track Record</h4>
                  <p className="text-sm text-gray-600">Consistent returns with transparent reporting</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Risk Management</h4>
                  <p className="text-sm text-gray-600">Diversified portfolios to minimize risk</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Round-the-clock customer assistance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Investment Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">$1,000</div>
                    <p className="text-sm text-gray-600">Investment Amount</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-green-600">$35</div>
                    <p className="text-sm text-gray-600">Daily Return</p>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-blue-600">$2,100</div>
                    <p className="text-sm text-gray-600">Total Return</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Calculate Your Returns
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
