import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/aurora-background"
import { ChevronDown, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-primary/10 border border-aurora-primary/20 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-aurora-primary" />
            <span className="text-sm font-medium text-aurora-primary">Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold font-rajdhani mb-6 bg-gradient-to-r from-foreground via-aurora-primary to-aurora-secondary bg-clip-text text-transparent">
            CLAIRIS
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-medium font-rajdhani mb-6 text-foreground/90">
            Next-Generation AI Ecosystem
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing industries with advanced AI solutions spanning 3D engineering, 
            medical assistance, language tutorials, processor orchestration, and beyond.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="px-8 py-4 text-lg font-medium bg-aurora-primary hover:bg-aurora-primary/90 text-primary-foreground shadow-aurora group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Join Early Access
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-medium bg-card/10 backdrop-blur-md border-border/30 hover:bg-card/20"
              onClick={() => document.getElementById('ai-showcase')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore AI Universe
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}