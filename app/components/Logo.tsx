import type React from "react"

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <span className="sr-only">QuantumUI</span>
      <div className="relative h-8 w-8 mr-3">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md transform rotate-45"></div>
        <div className="absolute inset-0 bg-black rounded-md transform rotate-45 scale-[0.6]"></div>
        <div className="absolute inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm transform -rotate-45"></div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        QuantumUI
      </span>
    </div>
  )
}

export default Logo

