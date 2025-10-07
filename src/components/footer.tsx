import { Separator } from "@/components/ui/separator";
import { Brain, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card/20 backdrop-blur-md border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-aurora-primary" />
              <span className="text-xl font-bold font-rajdhani">CLAIRIS</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Next-generation AI ecosystem transforming industries with
              intelligent solutions.
            </p>
          </div>

          {/* AI Solutions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">AI Solutions</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>3D Engineering</div>
              <div>Medical Assistant</div>
              <div>Language Tutorials</div>
              <div>Processor Orchestration</div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>About Us</div>
              <div>Careers</div>
              <div>Research</div>
              <div>Blog</div>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-4">
              <Github className="w-5 h-5 text-muted-foreground hover:text-aurora-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-aurora-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-aurora-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <Separator className="bg-border/30" />

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-muted-foreground">
          <div>CLARIS by DEZORS © 2025 DEZORS. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-foreground cursor-pointer transition-colors">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
