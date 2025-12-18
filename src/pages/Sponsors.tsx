import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";
import { Check, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useNavigate } from "react-router-dom";

const Sponsors = () => {
  const tiersReveal = useScrollReveal();
  const sponsorsReveal = useScrollReveal();
  const navigate = useNavigate();

  const tiers = [
    {
      name: "Platinum",
      price: "$2000",
      color: "from-gray-300 to-gray-500",
      benefits: [
        "Custom workshop hosting",
        "In-person sponsor stall",
        "Keynote at opening/closing ceremonies",
        "Judge panel participation",
        "Reserved sponsor Discord channel",
        "Create a category-specific prize",
        "Logo on merchandise",
        "Promoted on Social Media",
        "Distribute branded merchandise",
      ],
    },
    {
      name: "Gold",
      price: "$1000",
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "Keynote at opening/closing ceremonies",
        "Judge panel participation",
        "Reserved sponsor Discord channel",
        "Create a category-specific prize",
        "Logo on merchandise",
        "Promoted on Social Media",
        "Distribute branded merchandise",
      ],
    },
    {
      name: "Silver",
      price: "$500",
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Keynote at opening/closing ceremonies",
        "Reserved sponsor Discord channel",
        "Create a category-specific prize",
        "Logo on merchandise",
        "Promoted on Social Media",
      ],
    },
    {
      name: "Bronze",
      price: "$250",
      color: "from-orange-400 to-orange-600",
      benefits: [
        "Reserved sponsor Discord channel",
        "Logo on merchandise",
        "Promoted on Social Media",
      ],
    },
  ];

  const handleDownloadProspectus = () => {
    const link = document.createElement('a');
    link.href = '/sponsorship-prospectus.pdf';
    link.download = 'hack-peel-sponsorship-prospectus.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      <div className="md:pt-24">
  <ParallaxSection speed={0.1}>
    <section className="py-4 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
            sponsor <span className="text-primary animate-text-glow">hack::peel</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up">
            Support local student talent and help provide mentors, meals, swag, and prizes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <MagneticButton>
                Become a Sponsor
              </MagneticButton>
            </Link>
           {/* <Button 
              variant="outline"
              onClick={handleDownloadProspectus}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Prospectus
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  </ParallaxSection>

        <section className="py-4 border-b border-border">
          <div className="container mx-auto px-4">
            <div 
              ref={sponsorsReveal.ref}
              className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center transition-all duration-1000 ${
                sponsorsReveal.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            > 
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-in">
                Sponsorship <span className="text-primary">Tiers</span>
              </h2>
              <p className="text-muted-foreground animate-slide-up">
                Choose the sponsorship tier that best fits your organization's goals
              </p>
            </div>

            <div 
              ref={tiersReveal.ref}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
                tiersReveal.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {tiers.map((tier, index) => (
                <TiltCard
                  key={index}
                  className="p-6 hover:shadow-2xl transition-all"
                >
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${tier.color} mb-6`} />
                  <h3 className="font-display font-bold text-2xl mb-2">{tier.name}</h3>
                  <p className="text-3xl font-display font-bold text-primary mb-6">{tier.price}</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center">
              <TiltCard className="p-8 bg-gradient-to-br from-card to-primary/5 border-2">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Why <span className="text-primary">Sponsor</span>?
                </h3>
                <p className="text-muted-foreground mb-6">
                  hack::peel brings together 100+ talented high school students from across Peel Region. 
                  By sponsoring, you'll gain access to diverse talent, build brand awareness among the next 
                  generation of tech leaders, and support STEM education in the community.
                </p>
                <Link to="/contact">
                  <MagneticButton>
                    Get in Touch
                  </MagneticButton>
                </Link>
              </TiltCard>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;