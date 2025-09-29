import DashboardNav from "@/components/DashboardNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Clock, DollarSign, Calendar } from "lucide-react";

export default function ActivePlan() {
  const activePlans = [
    {
      id: "PLAN001",
      name: "Premium Plan",
      amount: 1000,
      dailyReturn: 35,
      totalEarned: 700,
      daysRemaining: 20,
      startDate: "2024-01-01",
      endDate: "2024-03-01",
      progress: 66
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Active Plans</h1>
          <p className="text-gray-600 mt-2">Monitor your current investments and earnings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activePlans.map((plan) => (
            <Card key={plan.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{plan.name}</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </CardTitle>
                <CardDescription>Investment ID: {plan.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <DollarSign className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">${plan.amount.toLocaleString()}</p>
                    <p className="text-sm text-blue-700">Invested Amount</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">${plan.totalEarned.toLocaleString()}</p>
                    <p className="text-sm text-green-700">Total Earned</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{plan.progress}%</span>
                  </div>
                  <Progress value={plan.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-900">${plan.dailyReturn}</p>
                    <p className="text-sm text-gray-600">Daily Return</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{plan.daysRemaining}</p>
                    <p className="text-sm text-gray-600">Days Remaining</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Started: {plan.startDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Ends: {plan.endDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
