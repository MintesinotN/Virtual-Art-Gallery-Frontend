import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
      <ThemeProvider defaultTheme="system">
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-gray-200 transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
        </div>
      </ThemeProvider>
  )
}

export default App