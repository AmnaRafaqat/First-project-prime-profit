"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CountdownTimer from "./CountdownTimer"
import { AuthDialog } from "./AuthDialog"

const HeroSection = () => {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-20 px-4 relative bg-black text-white"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-green-600/20 rounded-full px-4 py-2 text-sm backdrop-blur-sm border border-green-500/40">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Save Big
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Minimum Invest, Earn Big</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  "Invest Smart,
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Grow Secure"
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our platform helps investors make smart investments and earn money quickly, with
                security and trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group bg-green-500 text-black hover:bg-green-600 font-semibold"
                onClick={() => setAuthOpen(true)}
              >
                Register Your Account Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Countdown Timer */}
          <div className="lg:pl-8 flex justify-center lg:justify-end">
            <CountdownTimer />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-green-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-green-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Auth Dialog (Register by default) */}
      <AuthDialog type="register" open={authOpen} onOpenChange={setAuthOpen} />
    </section>
  )
}

export default HeroSection
