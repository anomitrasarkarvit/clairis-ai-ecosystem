export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Aurora Lines */}
      <div className="absolute inset-0">
        {/* Horizontal flowing lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-aurora-primary/60 to-transparent aurora-line-flow"></div>
        <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-aurora-secondary/40 to-transparent aurora-line-flow-reverse"></div>
        <div className="absolute top-64 left-0 w-full h-px bg-gradient-to-r from-transparent via-aurora-accent/50 to-transparent aurora-line-flow"></div>
        <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-aurora-glow/45 to-transparent aurora-line-flow-reverse"></div>
        
        {/* Vertical flowing lines */}
        <div className="absolute top-0 left-20 w-px h-full bg-gradient-to-b from-transparent via-aurora-primary/30 to-transparent aurora-line-vertical"></div>
        <div className="absolute top-0 right-32 w-px h-full bg-gradient-to-b from-transparent via-aurora-secondary/25 to-transparent aurora-line-vertical-reverse"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-aurora-accent/35 to-transparent aurora-line-vertical"></div>
        
        {/* Diagonal flowing lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-96 h-px bg-gradient-to-r from-transparent via-aurora-primary/40 to-transparent rotate-45 aurora-line-diagonal"></div>
          <div className="absolute bottom-20 right-20 w-80 h-px bg-gradient-to-r from-transparent via-aurora-secondary/35 to-transparent -rotate-45 aurora-line-diagonal-reverse"></div>
        </div>
      </div>
      
      {/* Aurora Glow Points */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-aurora-primary/60 blur-lg animate-pulse"></div>
      <div className="absolute top-3/4 right-1/3 w-3 h-3 rounded-full bg-aurora-secondary/50 blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-5 h-5 rounded-full bg-aurora-accent/40 blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/30"></div>
    </div>
  )
}