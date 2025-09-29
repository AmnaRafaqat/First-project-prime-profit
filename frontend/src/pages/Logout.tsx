import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Logout = () => {
	const navigate = useNavigate()

	useEffect(() => {
		// Clear all authentication data
		try {
			console.log("Logging out user...")
			localStorage.clear()
			sessionStorage.clear()
			
			// Dispatch auth change event
			window.dispatchEvent(new Event("auth-changed"))
			console.log("Auth data cleared, redirecting to login...")
			
			// Small delay to ensure state updates
			setTimeout(() => {
				navigate("/login", { replace: true })
			}, 100)
		} catch (error) {
			console.error("Logout error:", error)
			navigate("/login", { replace: true })
		}
	}, [navigate])

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="text-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
				<p className="text-gray-600">Logging out...</p>
			</div>
		</div>
	)
}


export default Logout
