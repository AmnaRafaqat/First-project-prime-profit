"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";
import { authAPI, setAuthToken } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

type AuthType = "login" | "register" | "forgot";

interface AuthDialogProps {
  type: AuthType;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ type, open, onOpenChange }: AuthDialogProps) {
  const [authType, setAuthType] = useState<AuthType>(type);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { toast } = useToast();

  const switchTo = (t: AuthType) => setAuthType(t);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (authType === "register") {
        const response = await authAPI.register({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        });
        
        // Generate a simple token (in real app, this would come from backend)
        const token = btoa(JSON.stringify(response.user));
        setAuthToken(token, true);
        
        toast({
          title: "Account Created!",
          description: "Welcome to Profit Prime. You can now start investing.",
        });
        
        // Dispatch auth change event
        window.dispatchEvent(new CustomEvent('auth-changed'));
        onOpenChange(false);
        
      } else if (authType === "login") {
        const response = await authAPI.login({
          email: formData.email,
          password: formData.password,
        });
        
        // Generate a simple token (in real app, this would come from backend)
        const token = btoa(JSON.stringify(response.user));
        setAuthToken(token, true);
        
        toast({
          title: "Welcome Back!",
          description: "You have successfully logged in.",
        });
        
        // Dispatch auth change event
        window.dispatchEvent(new CustomEvent('auth-changed'));
        onOpenChange(false);
        
      } else {
        // Forgot password - not implemented in backend yet
        toast({
          title: "Feature Coming Soon",
          description: "Password reset functionality will be available soon.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Content */}
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[95%] sm:w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-black text-white shadow-2xl px-6 py-8 sm:px-8 sm:py-10">
          {/* Close Button */}
          <Dialog.Close className="absolute right-4 top-4 text-gray-400 hover:text-green-400">
            <X className="w-5 h-5" />
          </Dialog.Close>

          {/* Title */}
          <Dialog.Title className="text-2xl font-bold text-center text-green-400">
            {authType === "login"
              ? "Welcome Back"
              : authType === "register"
              ? "Create Account"
              : "Forgot Password"}
          </Dialog.Title>

          {/* Subtitle */}
          <p className="mt-2 text-center text-gray-400">
            {authType === "login"
              ? "Sign in to continue to your account."
              : authType === "register"
              ? "Fill the details to get started."
              : "Enter your email to reset your password."}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Full Name (Register Only) */}
            {authType === "register" && (
              <div>
                <label className="block text-sm font-medium mb-1 text-white">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-white focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-white">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 text-white focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Password (Login + Register) */}
            {(authType === "login" || authType === "register") && (
              <div>
                <label className="block text-sm font-medium mb-1 text-white">
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    required
                    className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 pr-10 text-white focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-green-400"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Confirm Password (Register Only) */}
            {authType === "register" && (
              <div>
                <label className="block text-sm font-medium mb-1 text-white">
                  Confirm Password<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                    required
                    className="w-full rounded-lg border border-gray-600 bg-transparent px-3 py-2 pr-10 text-white focus:border-green-400 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-green-400"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Forgot Password Link */}
            {authType === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => switchTo("forgot")}
                  className="text-sm text-green-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-green-500 py-2 font-semibold text-black hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {authType === "login"
                ? "Login"
                : authType === "register"
                ? "Register"
                : "Send Reset Link"}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center text-sm text-gray-400">
            {authType === "login" && (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchTo("register")}
                  className="text-green-400 hover:underline"
                >
                  Register
                </button>
              </>
            )}
            {authType === "register" && (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchTo("login")}
                  className="text-green-400 hover:underline"
                >
                  Login
                </button>
              </>
            )}
            {authType === "forgot" && (
              <>
                Remembered your password?{" "}
                <button
                  type="button"
                  onClick={() => switchTo("login")}
                  className="text-green-400 hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
