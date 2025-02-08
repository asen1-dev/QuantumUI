const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient" />
      <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
    </div>
  )
}

export default AnimatedBackground

