"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../images/prime-01-01.png"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeSection, setActiveSection] = useState("home") // track active section
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
	const location = useLocation()

	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Plans", href: "#plans" },
		{ name: "Roadmap", href: "#roadmap" },
		{ name: "FAQ", href: "#faq" },
	]

	const checkAuth = () => {
		const hasToken = !!localStorage.getItem("auth_token") || !!sessionStorage.getItem("auth_token")
		setIsLoggedIn(hasToken)
	}

	// Sync login state from storage and custom events
	useEffect(() => {
		checkAuth()
		const onStorage = () => checkAuth()
		const onAuthChanged = () => checkAuth()
		window.addEventListener("storage", onStorage)
		window.addEventListener("auth-changed", onAuthChanged as EventListener)
		return () => {
			window.removeEventListener("storage", onStorage)
			window.removeEventListener("auth-changed", onAuthChanged as EventListener)
		}
	}, [])

	// Scroll spy effect
	useEffect(() => {
		const sections = document.querySelectorAll("section[id]")

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id) // set active section
					}
				})
			},
			{ threshold: 0.5 } // 50% section visible -> active
		)

		sections.forEach((section) => observer.observe(section))

		return () => {
			sections.forEach((section) => observer.unobserve(section))
		}
	}, [])

	// Decide which auth buttons to show based on route and auth state
	const showOnlyLogin = !isLoggedIn && location.pathname === "/login"
	const showOnlyRegister = !isLoggedIn && location.pathname === "/register"
	const showLogoutOnly = isLoggedIn
	const showBothLoginRegister = !isLoggedIn && !showOnlyLogin && !showOnlyRegister

	return (
		<header className="w-full py-4 px-6 fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md text-white shadow-lg">
			<div className="container mx-auto flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<img className="w-[120px]" src={logo} alt="logo" />
				</div>

				{/* Desktop Nav */}
				<nav className="hidden lg:flex items-center gap-8">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={`transition-colors ${
								activeSection === item.href.slice(1)
									? "text-green-400 font-semibold"
									: "text-white hover:text-green-400"
							}`}
						>
							{item.name}
						</a>
					))}
				</nav>

				{/* Desktop Buttons */}
				<div className="hidden lg:flex items-center gap-4">
					{/* Dashboard Button - Only for authenticated users */}
					{isLoggedIn && (
						<Link to="/dashboard">
							<Button className="bg-blue-500 text-white hover:bg-blue-600">Dashboard</Button>
						</Link>
					)}

					{showLogoutOnly && (
						<Link to="/logout">
							<Button className="bg-red-500 text-white hover:bg-red-600">Logout</Button>
						</Link>
					)}

					{showOnlyLogin && (
						<Link to="/login">
							<Button className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black">Login</Button>
						</Link>
					)}

					{showOnlyRegister && (
						<Link to="/register">
							<Button className="bg-green-400 text-black hover:bg-green-500">Register</Button>
						</Link>
					)}

					{showBothLoginRegister && (
						<>
							<Link to="/login">
								<Button className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black">Login</Button>
							</Link>
							<Link to="/register">
								<Button className="bg-green-400 text-black hover:bg-green-500">Register</Button>
							</Link>
						</>
					)}
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="lg:hidden w-10 h-10 rounded-md bg-green-500 flex items-center justify-center text-black"
				>
					{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{/* Mobile Nav */}
			{isMenuOpen && (
				<div className="lg:hidden bg-black/90 backdrop-blur-md border-t border-green-400 mt-2">
					<nav className="flex flex-col items-center gap-4 py-4">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								onClick={() => setIsMenuOpen(false)}
								className={`transition-colors ${
									activeSection === item.href.slice(1)
										? "text-green-400 font-semibold"
										: "text-white hover:text-green-400"
								}`}
							>
								{item.name}
							</a>
						))}
						<div className="flex gap-3 mt-4">
							{/* Dashboard Button - Only for authenticated users */}
							{isLoggedIn && (
								<Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
									<Button className="bg-blue-500 text-white hover:bg-blue-600">Dashboard</Button>
								</Link>
							)}

							{showLogoutOnly && (
								<Link to="/logout" onClick={() => setIsMenuOpen(false)}>
									<Button className="bg-red-500 text-white hover:bg-red-600">Logout</Button>
								</Link>
							)}

							{showOnlyLogin && (
								<Link to="/login" onClick={() => setIsMenuOpen(false)}>
									<Button className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black">Login</Button>
								</Link>
							)}

							{showOnlyRegister && (
								<Link to="/register" onClick={() => setIsMenuOpen(false)}>
									<Button className="bg-green-400 text-black hover:bg-green-500">Register</Button>
								</Link>
							)}

							{showBothLoginRegister && (
								<>
									<Link to="/login" onClick={() => setIsMenuOpen(false)}>
										<Button className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black">Login</Button>
									</Link>
									<Link to="/register" onClick={() => setIsMenuOpen(false)}>
										<Button className="bg-green-400 text-black hover:bg-green-500">Register</Button>
									</Link>
								</>
							)}
						</div>
					</nav>
				</div>
			)}
		</header>
	)
}

export default Header
