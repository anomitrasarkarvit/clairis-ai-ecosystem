import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Mail, Lock, Rocket, Users, Sparkles, CheckCircle } from "lucide-react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: "Successfully registered!",
      description: "Welcome to CLAIRIS early access. We'll notify you when we launch.",
    })

    setEmail("")
    setPassword("")
    setIsLoading(false)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aurora-glow/10 border border-aurora-glow/20 backdrop-blur-sm mb-6">
              <Rocket className="w-4 h-4 text-aurora-glow" />
              <span className="text-sm font-medium text-aurora-glow">Early Access</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-rajdhani mb-6 bg-gradient-to-r from-foreground to-aurora-glow bg-clip-text text-transparent">
              Join the Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be among the first to experience CLAIRIS when we launch. 
              Get exclusive early access to our AI ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Early Bird Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-rajdhani mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-aurora-primary" />
                  Early Bird Benefits
                </h3>
                <div className="space-y-4">
                  {[
                    "Priority access to all AI solutions",
                    "Exclusive beta testing opportunities", 
                    "Direct feedback channel with our team",
                    "Special launch pricing and discounts",
                    "Early access to new features and updates"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-aurora-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-xl bg-aurora-primary/5 border border-aurora-primary/20">
                <Users className="w-8 h-8 text-aurora-primary" />
                <div>
                  <div className="font-semibold text-foreground">Join 10,000+ Innovators</div>
                  <div className="text-sm text-muted-foreground">Already signed up for early access</div>
                </div>
              </div>
            </div>

            {/* Sign Up Form */}
            <Card className="bg-card/50 backdrop-blur-md border-border/30">
              <CardHeader>
                <CardTitle className="text-2xl font-rajdhani flex items-center gap-2">
                  <Mail className="w-6 h-6 text-aurora-primary" />
                  Secure Your Spot
                </CardTitle>
                <CardDescription>
                  Create your early access account to get notified when CLAIRIS launches.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-input/50 border-border/50 focus:border-aurora-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Create Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-input/50 border-border/50 focus:border-aurora-primary"
                    />
                    <p className="text-xs text-muted-foreground">
                      Minimum 8 characters with at least one uppercase letter and number
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-aurora-primary hover:bg-aurora-primary/90 text-primary-foreground shadow-aurora" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Securing Your Spot...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 mr-2" />
                        Join Early Access
                      </>
                    )}
                  </Button>

                  <div className="text-center">
                    <Badge variant="outline" className="bg-aurora-glow/10 text-aurora-glow border-aurora-glow/30">
                      100% Free • No Spam • Unsubscribe Anytime
                    </Badge>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}