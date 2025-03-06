import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Artwork from "./pages/Artwork"
import ArtistProfile from "./pages/ArtistProfile"
import Artists from "./pages/Artists"
import UploadArtwork from "./pages/UploadArtwork"
import NotFound from "./pages/NotFound"
import UserProfile from "./pages/UserProfile"

const App = () => {
  return (
      <ThemeProvider defaultTheme="system">
        <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-gray-200 transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artwork/:id" element={<Artwork />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
          <Route path="/artist" element={<Artists />} />
          <Route path="/upload" element={<UploadArtwork />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        </div>
      </ThemeProvider>
  )
}

export default App