import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";

const Privacy = () => {
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
                  privacy <span className="text-primary animate-text-glow">policy</span>
                </h1>
                <p className="text-lg text-muted-foreground text-center mb-12 animate-slide-up">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <TiltCard className="p-8 mb-8 bg-gradient-to-br from-card to-primary/5 border-2">
                  <h2 className="text-2xl font-display font-bold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    When you register for hack::peel, we collect personal information including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Name, email address, and school information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Emergency contact details</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Dietary restrictions and accessibility needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Technical skill level and project interests</span>
                    </li>
                  </ul>
                </TiltCard>

                <TiltCard className="p-8 mb-8 bg-gradient-to-br from-card to-primary/5 border-2">
                  <h2 className="text-2xl font-display font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Process your registration and manage event logistics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Communicate event updates and important information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Provide appropriate meals and accommodations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Share anonymized resume books with sponsors (with your consent)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Improve future events through feedback and analytics</span>
                    </li>
                  </ul>
                </TiltCard>

                <TiltCard className="p-8 mb-8 bg-gradient-to-br from-card to-primary/5 border-2">
                  <h2 className="text-2xl font-display font-bold mb-4">Data Sharing</h2>
                  <p className="text-muted-foreground mb-4">
                    We respect your privacy and only share your information when necessary:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>With sponsors only if you opt-in to the resume book</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>With MLH (Major League Hacking) as per their{" "}
                        <a href="https://mlh.io/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                          privacy policy
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>When required by law or to protect our rights</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    We never sell your personal information to third parties.
                  </p>
                </TiltCard>

                <TiltCard className="p-8 mb-8 bg-gradient-to-br from-card to-primary/5 border-2">
                  <h2 className="text-2xl font-display font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </TiltCard>

                <TiltCard className="p-8 mb-8 bg-gradient-to-br from-card to-primary/5 border-2">
                  <h2 className="text-2xl font-display font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Access the personal information we hold about you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Request correction of inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Request deletion of your information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Opt-out of promotional communications</span>
                    </li>
                  </ul>
                </TiltCard>

                <TiltCard className="p-8 bg-gradient-to-br from-card to-primary/5 border-2">
                  <h2 className="text-2xl font-display font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have questions about this Privacy Policy or want to exercise your rights, please contact us at{" "}
                    <a href="mailto:privacy@hackpeel.com" className="text-primary hover:underline">
                      privacy@hackpeel.com
                    </a>
                  </p>
                </TiltCard>
              </div>
            </div>
          </section>
        </ParallaxSection>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
