import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary to-primary/90">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4 pt-28 md:pt-28 lg:pt-24">
              <h1 className="hero-heading">
                Dayvisson da Silva
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-brand-red">
                Job Search Strategist | The Tech Sales Hacker | Tech Talent Expert
              </p>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                I help professionals and organizations unlock opportunity, land top tech roles, 
                and future-proof their careers in the AI-powered job market.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary cta-gradient"
                onClick={() => {
                  const element = document.querySelector("#booking");
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                Book Dayvisson to Speak
              </Button>
              <Button className="btn-secondary group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch My Speaking Reel
              </Button>
            </div>
          </div>
          
          {/* Hero Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden card-elevated">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 text-red-400" />
                  <p className="text-lg font-medium">Speaking Highlight Reel</p>
                  <p className="text-gray-400">2-3 min showcase</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;