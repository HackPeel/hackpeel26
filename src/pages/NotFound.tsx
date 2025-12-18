import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-16">
        <section className="py-16 min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-8xl md:text-9xl font-display font-bold mb-6 text-primary animate-fade-in">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-slide-up">
                page not <span className="text-primary animate-text-glow">found</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <Link to="/">
                  <Button>
                    <Home />
                    Return Home
                  </Button>
                </Link>

                <Button 
                  variant="outline" 
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft/>
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;