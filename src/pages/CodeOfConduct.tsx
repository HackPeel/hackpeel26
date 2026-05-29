import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { Shield, Users, Heart, AlertTriangle } from "lucide-react";

const CodeOfConduct = () => {
  const sections = [
    {
      icon: Heart,
      title: "Be Respectful",
      description: "Treat everyone with respect. Harassment, discrimination, or hateful conduct of any kind will not be tolerated."
    },
    {
      icon: Users,
      title: "Be Inclusive",
      description: "Welcome participants of all backgrounds, skill levels, and experiences. Help create a supportive environment."
    },
    {
      icon: Shield,
      title: "Be Professional",
      description: "Maintain professional conduct in all interactions. Respect personal boundaries and communicate appropriately."
    },
    {
      icon: AlertTriangle,
      title: "Report Issues",
      description: "If you witness or experience any violations, please report them to an organizer immediately."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-60">
        <ParallaxSection speed={0.1}>
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center animate-fade-in">
                  code of <span className="text-primary animate-text-glow">conduct</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 animate-slide-up">
                  hack::peel is committed to providing a safe, inclusive, and welcoming environment for all participants
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {sections.map((section, index) => (
                    <TiltCard key={index} className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-xl mb-2">{section.title}</h3>
                      <p className="text-muted-foreground">{section.description}</p>
                    </TiltCard>
                  ))}
                </div>

                <TiltCard className="p-8 bg-gradient-to-br from-card to-primary/5 border-2">
                  <h2 className="text-2xl font-display font-bold mb-6">Expected Behavior</h2>
                  <ul className="space-y-3 text-muted-foreground mb-8">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Be kind, patient, and welcoming to all participants regardless of skill level or background</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Respect different viewpoints, experiences, and perspectives</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Give and accept constructive criticism gracefully</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Focus on what's best for the community and fellow participants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Show empathy and respect towards other community members</span>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-display font-bold mb-6">Unacceptable Behavior</h2>
                  <ul className="space-y-3 text-muted-foreground mb-8">
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">•</span>
                      <span>Harassment, intimidation, or discrimination in any form</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">•</span>
                      <span>Offensive comments related to gender, gender identity, sexual orientation, disability, physical appearance, race, or religion</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">•</span>
                      <span>Inappropriate physical contact or unwelcome attention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">•</span>
                      <span>Deliberate intimidation, stalking, or following</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-2">•</span>
                      <span>Sustained disruption of talks, workshops, or other events</span>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-display font-bold mb-6">Enforcement</h2>
                  <p className="text-muted-foreground mb-4">
                    Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in unacceptable behavior, the organizers may take any action they deem appropriate, including warning the offender or expulsion from the event without refund.
                  </p>
                  <p className="text-muted-foreground">
                    If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of event staff immediately. Staff can be identified by their hack::peel organizer badges.
                  </p>
                </TiltCard>

                <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-display font-semibold text-lg mb-2">Questions or Concerns?</h3>
                  <p className="text-muted-foreground">
                    If you have questions about this Code of Conduct or need to report a violation, please contact us at{" "}
                    <a href="mailto:support@hackpeel.ca" className="text-primary hover:underline">
                      support@hackpeel.ca
                    </a>
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </div>

      <Footer />
    </div>
  );
};

export default CodeOfConduct;
