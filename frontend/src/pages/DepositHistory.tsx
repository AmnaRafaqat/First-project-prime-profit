import DashboardNav from "@/components/DashboardNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownLeft, Calendar, DollarSign } from "lucide-react";

export default function DepositHistory() {
  const deposits = [
    { id: "DEP001", amount: 1000, date: "2024-01-15", method: "Bank Transfer", status: "completed" },
    { id: "DEP002", amount: 500, date: "2024-01-10", method: "Credit Card", status: "completed" },
    { id: "DEP003", amount: 2500, date: "2024-01-05", method: "Bank Transfer", status: "completed" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Deposit History</h1>
          <p className="text-gray-600 mt-2">Track all your deposit transactions</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowDownLeft className="h-5 w-5" />
              <span>Deposit Records</span>
            </CardTitle>
            <CardDescription>Complete history of your deposits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deposits.map((deposit) => (
                <div key={deposit.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <ArrowDownLeft className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{deposit.id}</p>
                      <p className="text-sm text-gray-600">{deposit.method}</p>
                      <p className="text-xs text-gray-500">{deposit.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-green-600">+${deposit.amount.toLocaleString()}</p>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
