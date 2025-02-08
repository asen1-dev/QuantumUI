import type React from "react"
import Hero from "../components/Hero"
import FeaturesGrid from "../components/FeaturesGrid"
import CodeShowcase from "../components/CodeShowcase"
import Testimonials from "../components/Testimonials"
import Pricing from "../components/Pricing"
import AnimatedBackground from "../components/AnimatedBackground"

const HomePage: React.FC = () => {
  return (
    <>
      <AnimatedBackground />
      <Hero />
      <FeaturesGrid />
      <CodeShowcase />
      <Testimonials />
      <Pricing />
    </>
  )
}

export default HomePage

