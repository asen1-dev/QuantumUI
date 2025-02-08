import type React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default RootLayout

