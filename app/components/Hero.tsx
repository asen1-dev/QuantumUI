import { ArrowRight, Github, Blocks, Code, Zap } from "lucide-react"

const Hero = () => {
  return (
    <section className="pt-32 px-4 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="relative inline-block mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-50 animate-pulse" />
          <a
            href="https://github.com/asen1-dev/Quantum-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
          >
            <Github className="h-4 w-4" />
            Now Open Source
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Craft{" "}
          <span className="relative">
            <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 blur-2xl opacity-30 animate-pulse" />
            <span className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              extraordinary
            </span>
          </span>
          <br />
          web experiences
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Elevate your projects with QuantumUI's cutting-edge components. Seamlessly blend form and function for
          unparalleled user experiences.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200" />
            <div className="relative bg-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 group-hover:bg-black/50 transition-colors">
              Explore Components
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          <button className="px-8 py-3 rounded-full font-medium bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            View Documentation
            <Code className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center">
            <Blocks className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">100+ Components</h3>
            <p className="text-gray-400">A comprehensive library for all your UI needs</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center">
            <Zap className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Optimized for speed and performance</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 flex flex-col items-center">
            <Code className="h-10 w-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-400">Seamlessly integrate with your existing projects</p>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  )
}

export default Hero

