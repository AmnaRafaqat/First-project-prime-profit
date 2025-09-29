import DashboardNav from "@/components/DashboardNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Calendar } from "lucide-react";

export default function WithdrawHistory() {
  const withdrawals = [
    { id: "WD001", amount: 200, date: "2024-01-13", method: "Bank Transfer", status: "pending" },
    { id: "WD002", amount: 500, date: "2024-01-05", method: "Crypto", status: "completed" },
    { id: "WD003", amount: 100, date: "2023-12-28", method: "E-Wallet", status: "completed" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Withdrawal History</h1>
          <p className="text-gray-600 mt-2">Track all your withdrawal requests</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowUpRight className="h-5 w-5" />
              <span>Withdrawal Records</span>
            </CardTitle>
            <CardDescription>Complete history of your withdrawals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {withdrawals.map((withdrawal) => (
                <div key={withdrawal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <ArrowUpRight className="h-5 w-5 text-red-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{withdrawal.id}</p>
                      <p className="text-sm text-gray-600">{withdrawal.method}</p>
                      <p className="text-xs text-gray-500">{withdrawal.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-red-600">-${withdrawal.amount.toLocaleString()}</p>
                    <Badge className={withdrawal.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                      {withdrawal.status}
                    </Badge>
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
