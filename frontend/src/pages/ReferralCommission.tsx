import DashboardNav from "@/components/DashboardNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, DollarSign, TrendingUp, Copy } from "lucide-react";

export default function ReferralCommission() {
  const referralStats = {
    totalReferrals: 24,
    totalCommission: 2450,
    thisMonth: 320,
    referralCode: "EARN2024ABC"
  };

  const commissionHistory = [
    { id: "COM001", amount: 50, date: "2024-01-15", referral: "John Doe", status: "paid" },
    { id: "COM002", amount: 75, date: "2024-01-12", referral: "Jane Smith", status: "paid" },
    { id: "COM003", amount: 100, date: "2024-01-10", referral: "Mike Johnson", status: "pending" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Referral Commission</h1>
          <p className="text-gray-600 mt-2">Track your referral earnings and manage your referral program</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{referralStats.totalReferrals}</p>
                  <p className="text-sm text-gray-600">Total Referrals</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <DollarSign className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">${referralStats.totalCommission.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Total Commission</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">${referralStats.thisMonth}</p>
                  <p className="text-sm text-gray-600">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Gift className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">10%</p>
                  <p className="text-sm text-gray-600">Commission Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Code</CardTitle>
              <CardDescription>Share this code to earn commissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg">
                <code className="flex-1 text-lg font-mono font-semibold">{referralStats.referralCode}</code>
                <button className="p-2 hover:bg-gray-200 rounded">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Earn 10% commission on every successful referral's first deposit
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Commission History</CardTitle>
              <CardDescription>Recent commission payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {commissionHistory.map((commission) => (
                  <div key={commission.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{commission.id}</p>
                      <p className="text-sm text-gray-600">{commission.referral}</p>
                      <p className="text-xs text-gray-500">{commission.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-green-600">${commission.amount}</p>
                      <Badge className={commission.status === "paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                        {commission.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
