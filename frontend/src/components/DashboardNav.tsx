import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  CreditCard, 
  TrendingUp, 
  History, 
  Activity, 
  Receipt, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Users, 
  Gift, 
  Settings,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardNav = () => {
  const location = useLocation();

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      description: "Overview of your account"
    },
    {
      title: "Deposit Now",
      href: "/deposit",
      icon: CreditCard,
      description: "Make a new deposit"
    },
    {
      title: "Investment Plan",
      href: "/investment-plan",
      icon: TrendingUp,
      description: "View available plans"
    },
    {
      title: "Deposit History",
      href: "/deposit-history",
      icon: History,
      description: "View deposit records"
    },
    {
      title: "My Active Plan",
      href: "/active-plan",
      icon: Activity,
      description: "Current active investments"
    },
    {
      title: "All Transactions",
      href: "/transactions",
      icon: Receipt,
      description: "Complete transaction history"
    },
    {
      title: "Withdraw Active",
      href: "/withdraw-active",
      icon: ArrowUpRight,
      description: "Request withdrawal"
    },
    {
      title: "Withdraw History",
      href: "/withdraw-history",
      icon: ArrowDownLeft,
      description: "View withdrawal records"
    },
    {
      title: "Team",
      href: "/team",
      icon: Users,
      description: "Manage your team"
    },
    {
      title: "Referral Commission",
      href: "/referral",
      icon: Gift,
      description: "Track referral earnings"
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      description: "Account settings"
    }
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <Home className="h-6 w-6" />
            <span>EarningApp</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                  title={item.description}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors",
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <div>
                    <div>{item.title}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
