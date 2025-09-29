
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";
import ReferralCommission from "./pages/ReferralCommission";
import Team from "./pages/Team";
import WithdrawHistory from "./pages/WithdrawHistory";
import WithdrawActive from "./pages/WithdrawActive";
import Transactions from "./pages/Transactions";
import ActivePlan from "./pages/ActivePlan";
import DepositHistory from "./pages/DepositHistory";
import InvestmentPlan from "./pages/InvestmentPlan";
import DepositNow from "./pages/DepositNow";
import Dashboard from "./pages/Dashboard";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Index />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          
          {/* Dashboard Routes - Protected */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/deposit" element={<ProtectedRoute><DepositNow /></ProtectedRoute>} />
          <Route path="/investment-plan" element={<ProtectedRoute><InvestmentPlan /></ProtectedRoute>} />
          <Route path="/deposit-history" element={<ProtectedRoute><DepositHistory /></ProtectedRoute>} />
          <Route path="/active-plan" element={<ProtectedRoute><ActivePlan /></ProtectedRoute>} />
          <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
          <Route path="/withdraw-active" element={<ProtectedRoute><WithdrawActive /></ProtectedRoute>} />
          <Route path="/withdraw-history" element={<ProtectedRoute><WithdrawHistory /></ProtectedRoute>} />
          <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
          <Route path="/referral" element={<ProtectedRoute><ReferralCommission /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
