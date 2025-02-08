"use client"

import { useState } from "react"
import { Sparkles, Box, Palette, Zap, Shield, Cloud, Maximize, Minimize } from "lucide-react"

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Tailwind CSS Integration",
    description: "Seamlessly integrated with Tailwind CSS for rapid UI development",
    color: "text-blue-400",
    gradient: "from-blue-500",
    details:
      "Leverage the power of Tailwind CSS utility classes while enjoying the structure and reusability of our components. This integration allows for quick customization and consistent design across your project.",
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: "Extensive Component Library",
    description: "Over 100 customizable components and templates",
    color: "text-purple-400",
    gradient: "from-purple-500",
    details:
      "From basic elements to complex UI patterns, our library provides a wide range of components. Each component is designed to be flexible, allowing you to easily adapt it to your specific needs.",
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Advanced Animations",
    description: "Smooth, performant animations powered by Framer Motion",
    color: "text-pink-400",
    gradient: "from-pink-500",
    details:
      "Add life to your UI with our pre-built animations. Using Framer Motion, we provide smooth, physics-based animations that can be easily customized to fit your project's needs.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Optimized Performance",
    description: "Lightweight and fast, ensuring optimal application speed",
    color: "text-yellow-400",
    gradient: "from-yellow-500",
    details:
      "Our components are built with performance in mind. We use efficient rendering techniques and optimize for bundle size to ensure your application remains fast and responsive, even as it grows.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Built-in Security",
    description: "Secure by design, with built-in protection against common vulnerabilities",
    color: "text-green-400",
    gradient: "from-green-500",
    details:
      "Security is not an afterthought. Our components come with built-in protections against XSS attacks, CSRF, and other common web vulnerabilities, helping you build safer applications from the ground up.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud-Ready Components",
    description: "Designed for modern, cloud-native applications",
    color: "text-cyan-400",
    gradient: "from-cyan-500",
    details:
      "Whether you're building for serverless, containers, or traditional hosting, our components are designed to work seamlessly in any cloud environment. This includes considerations for SSR, static generation, and client-side rendering.",
  },
]

const FeaturesGrid = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Powerful{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Features</span>
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`group relative p-6 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 ${
              expandedFeature === index ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} to-transparent opacity-0 group-hover:opacity-10 blur-xl transition-opacity rounded-xl`}
            />
            <div className={`relative ${feature.color} mb-4`}>{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 mb-4">{feature.description}</p>
            {expandedFeature === index ? (
              <>
                <p className="text-gray-300 mt-4">{feature.details}</p>
                <button
                  onClick={() => setExpandedFeature(null)}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                >
                  <Minimize className="h-4 w-4 mr-2" />
                  Collapse
                </button>
              </>
            ) : (
              <button
                onClick={() => setExpandedFeature(index)}
                className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
              >
                <Maximize className="h-4 w-4 mr-2" />
                Learn More
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesGrid

