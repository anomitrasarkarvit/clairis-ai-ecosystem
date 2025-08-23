export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main Aurora Background */}
      <div className="absolute inset-0 aurora-bg opacity-30"></div>
      
      {/* Floating Aurora Particles */}
      <div className="absolute top-20 left-10 w-32 h-32 aurora-particle"></div>
      <div className="absolute top-40 right-20 w-24 h-24 aurora-particle"></div>
      <div className="absolute bottom-40 left-1/4 w-28 h-28 aurora-particle"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 aurora-particle"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 aurora-particle"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
    </div>
  )
}