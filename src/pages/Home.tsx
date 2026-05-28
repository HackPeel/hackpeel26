import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Code, Award, ChevronRight, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { MagneticButton } from "@/components/MagneticButton";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Home = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const statsReveal = useScrollReveal();
  const highlightsReveal = useScrollReveal();

  // Countdown to a sample event date (adjust this!)
  useEffect(() => {
    const eventDate = new Date("2026-12-12T09:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const organisers = [
    {
      name: "Team #4308: Absolute Robotics",
      logo: "/4308.png",
      website: "https://www.team4308.ca"
    },
  ];

  const stats = [
    { value: "200+", label: "Participants" },
    { value: "34", label: "Hours" },
    { value: "50+", label: "Projects" },
    { value: "5+", label: "Workshops" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Beginner Friendly",
      description: "Never coded before? No problem! We have workshops for all skill levels.",
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Find teammates, collaborate, and build something amazing together.",
    },
    {
      icon: Sparkles,
      title: "Free Swag & Food",
      description: "T-shirts, stickers, meals, and snacks provided throughout the event.",
    },
    {
      icon: Award,
      title: "Win Prizes",
      description: "Compete for prizes across multiple categories and showcase your work.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <ParallaxSection speed={0.1}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-6 animate-fade-in">
                <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-none mb-4">
                  hack<span className="text-primary animate-text-glow">::</span>peel
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl font-sans font-semibold text-foreground mb-3 tracking-tight animate-slide-up" style={{ animationDelay: "0.2s" }}>
                Build the Future in 34 Hours
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-sans animate-slide-up" style={{ animationDelay: "0.3s" }}>
                Join Peel Region's best high school hackathon. Code, design, and innovate alongside 100+ students.
              </p>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                {[
                  { value: countdown.days, label: "DAYS" },
                  { value: countdown.hours, label: "HOURS" },
                  { value: countdown.minutes, label: "MINUTES" },
                  { value: countdown.seconds, label: "SECONDS" },
                ].map((item, idx) => (
                  <TiltCard
                    key={item.label}
                    className="bg-card/70 backdrop-blur-md rounded-lg border border-primary/20 p-5"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary tabular-nums">{String(item.value).padStart(2, '0')}</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-2 font-medium tracking-wider uppercase">{item.label}</div>
                  </TiltCard>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-slide-up" style={{ animationDelay: "0.5s" }}>
                <MagneticButton asChild size="lg" className="relative bg-primary hover:bg-primary/90 text-background font-semibold text-base px-10 py-7 shadow-[0_0_40px_rgba(0,217,255,0.5)] hover:shadow-[0_0_60px_rgba(0,217,255,0.7)] transition-all group overflow-hidden">
                  <Link to="/register" className="flex items-center gap-2 relative z-10">
                    Register Now
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </Link>
                </MagneticButton>
                <MagneticButton asChild size="lg" variant="outline" className="border-2 border-primary/40 bg-card/30 backdrop-blur-sm text-foreground hover:bg-primary/10 hover:border-primary font-semibold text-base px-10 py-7 transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.3)]">
                  <Link to="/schedule">View Schedule</Link>
                </MagneticButton>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* Stats Bar */}
      <section className="py-20 border-y border-border/20 relative overflow-hidden bg-card/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-transparent to-primary/8" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div 
          ref={statsReveal.ref}
          className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
            statsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-default"
                style={{
                  animation: statsReveal.isVisible ? `fade-in 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                  opacity: 0,
                }}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-all duration-300 tabular-nums group-hover:animate-text-glow">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              Organised <span className="text-primary">By</span>:
            </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {organisers.map((org, index) => (
              <TiltCard key={index}>
                <a 
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-10 hover:scale-110 transition-transform"
                >
                  <img 
                    src={org.logo} 
                    alt={org.name}
                    className="w-40 h-40 object-contain filter brightness-0 invert"
                  />
                  <p className="text-2xl font-semibold">{org.name}</p>
                  <span className="text-m text-muted-foreground hover:text-primary transition-colors">
                    Visit Our Website →
                  </span>
                </a>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <ParallaxSection speed={.1}>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
              Why <span className="text-primary">hack::peel</span>?
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-slide-up">
              Experience the ultimate high school hackathon with top-tier mentorship, workshops, and prizes.
            </p>
            <div 
              ref={highlightsReveal.ref}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto transition-all duration-1000 ${
                highlightsReveal.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {highlights.map((highlight, index) => (
                <TiltCard
                  key={index}
                  className="relative p-8 border border-border/40 hover:border-primary/70 bg-card/50 backdrop-blur-md group overflow-hidden"
                  glowColor="hsl(var(--primary))"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-all group-hover:scale-110 group-hover:rotate-6 border border-primary/30">
                      <highlight.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </TiltCard>
              ))}
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden border-y border-border/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full filter blur-[120px] animate-float" />
        </div>
        <ParallaxSection speed={0.1}>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ready to Build Something <span className="text-primary">Extraordinary?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Join 300+ students from across Peel Region for 34 hours of innovation, learning, and unforgettable experiences.
            </p>
            <MagneticButton asChild size="lg" className="relative bg-primary hover:bg-primary/90 text-background font-bold text-lg px-12 py-8 shadow-[0_0_50px_rgba(0,217,255,0.6)] hover:shadow-[0_0_80px_rgba(0,217,255,0.8)] transition-all group overflow-hidden animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/register" className="flex items-center gap-3 relative z-10">
                Get Started Today
                <ChevronRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </MagneticButton>
          </div>
        </ParallaxSection>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
