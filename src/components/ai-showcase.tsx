import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Wrench, 
  Heart, 
  Languages, 
  Cpu, 
  Bot, 
  Zap,
  Sparkles 
} from "lucide-react"

const aiSolutions = [
  {
    id: "engineering",
    title: "3D Engineering AI",
    description: "Advanced CAD modeling, structural analysis, and automated design optimization with machine learning.",
    icon: Wrench,
    gradient: "ai-gradient-engineering",
    status: "In Development"
  },
  {
    id: "medical",
    title: "Medical Assistant AI",
    description: "Diagnostic support, treatment recommendations, and patient care optimization with medical precision.",
    icon: Heart,
    gradient: "ai-gradient-medical",
    status: "Beta Testing"
  },
  {
    id: "language",
    title: "Language Tutorials AI",
    description: "Personalized language learning with adaptive curricula and real-time conversation practice.",
    icon: Languages,
    gradient: "ai-gradient-language",
    status: "Alpha"
  },
  {
    id: "processor",
    title: "Processor Orchestration",
    description: "Intelligent resource management and distributed computing optimization across cloud infrastructure.",
    icon: Cpu,
    gradient: "ai-gradient-processor",
    status: "Research"
  },
  {
    id: "general",
    title: "General AI Solutions",
    description: "Custom AI implementations for business automation, data analysis, and decision support systems.",
    icon: Brain,
    gradient: "ai-gradient-engineering",
    status: "Coming Soon"
  },
  {
    id: "neural",
    title: "Neural Networks",
    description: "Deep learning models for pattern recognition, predictive analytics, and intelligent automation.",
    icon: Bot,
    gradient: "ai-gradient-medical",
    status: "In Development"
  }
]

export function AIShowcase() {
  return (
    <section id="ai-showcase" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-secondary/10 border border-aurora-secondary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-aurora-secondary" />
            <span className="text-sm font-medium text-aurora-secondary">AI Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-rajdhani mb-6 bg-gradient-to-r from-foreground to-aurora-secondary bg-clip-text text-transparent">
            Intelligent Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered solutions designed to transform 
            industries and accelerate innovation across multiple domains.
          </p>
        </div>

        {/* AI Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution) => {
            const Icon = solution.icon
            return (
              <Card 
                key={solution.id}
                className="relative group border-border/30 hover:border-border/50 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 ${solution.gradient} opacity-60 group-hover:opacity-80 transition-all duration-500`}></div>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm"></div>
                
                <CardContent className="relative p-8">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-aurora-primary/10 group-hover:bg-aurora-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-aurora-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground">
                      {solution.status}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-rajdhani mb-4 group-hover:text-aurora-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Coming Soon Indicator */}
                  <div className="flex items-center gap-2 text-sm text-aurora-primary opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Zap className="w-4 h-4" />
                    <span>Learn more soon</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of innovators shaping the future with AI
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-aurora-primary/20 to-aurora-secondary/20 border border-aurora-primary/30">
            <span className="text-sm font-medium">More AI solutions coming soon</span>
            <Sparkles className="w-4 h-4 text-aurora-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}