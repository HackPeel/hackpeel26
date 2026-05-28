import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";


const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center animate-fade-in">
                  get in <span className="text-primary animate-text-glow">touch</span>
                </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Questions, sponsorship inquiries, or volunteer opportunities? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">Email Us</h3>
                      <a href="mailto:hello@hackpeel.com" className="text-primary hover:underline">
                        hello@hackpeel.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">Event Venue</h3>
                      <p className="text-muted-foreground">
                        The Woodlands Secondary School<br />
                        3225 Erindale Station Rd<br />
                        Mississauga, ON L5C 1Y5
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Parking available on-site
                      </p>
                    </div>
                  </div>
                </Card>

              {/*
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg mb-2">During Event</h3>
                      <p className="text-muted-foreground">
                        Emergency Contact:<br />
                        (905) XXX-XXXX
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Available during hack::peel event hours only
                      </p>
                    </div>
                  </div>
                </Card> */}

                {/* Map Placeholder */} {/*}
                <Card className="p-6 bg-muted/30">
                  <h3 className="font-display font-semibold text-lg mb-4">Find Us</h3>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Map Embed</p>
                  </div>
                </Card> */}
              </div>
            </div>
          </div>
        </section> 

        {/* Volunteer CTA */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Want to <span className="text-primary">Volunteer</span> or Mentor?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're always looking for passionate mentors and volunteers to help make hack::peel amazing!
              </p>
              <Link to="/register">
              <Button className="bg-primary hover:bg-primary/90 font-display font-semibold text-lg px-8">
                Apply to Volunteer
              </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
