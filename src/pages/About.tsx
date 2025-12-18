import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Heart, Lightbulb, Target } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const timelineReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();

  const timeline = [
  {
    year: "2022",
    title: "Founded",
    description:
      "Launched by students at The Woodlands Secondary School. Successfully hosted the inaugural event with 200+ participants and over $14,000 in prizes, setting the foundation for the hack::peel community."
  },
  {
    year: "2023",
    title: "Hiatus",
    description:
      "Organizers attempted to relaunch the event during these years, but logistical constraints prevented hack::peel from officially running. The community and interest, however, continued to grow behind the scenes."
  },
  {
    year: "2025",
    title: "Revival",
    description:
      "hack::peel is returning stronger than ever, marking a full revival. Now, as a collaboration between Woodlands CS Club and Absolute Robotics #4308, hack::peel has the potential to reach new heights. Featuring our largest attendance, expanded tracks, polished organization, and new partnerships, 2025 will be the most ambitious and successful edition yet."
  }
];

  const values = [
    {
      icon: Users,
      title: "Inclusivity",
      description: "We welcome students of all skill levels, backgrounds, and experiences.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building lasting connections and friendships through shared passion for tech.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative problem-solving and out-of-the-box thinking.",
    },
    {
      icon: Target,
      title: "Learning",
      description: "Creating opportunities for students to learn new skills and grow.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-16">
        {/* Hero */}
        <ParallaxSection speed={0.1}>
          <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
                  about <span className="text-primary animate-text-glow">hack::peel</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  hack::peel gives Peel Region high schoolers a safe, supportive space to experiment with software and hardware, build teams, and ship projects — whether it's your first prototype or your fiftieth hack.
                </p>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ParallaxSection speed={0.1}>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 animate-fade-in">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <TiltCard className="p-8 md:p-12 bg-gradient-to-br from-card to-primary/5 border-2">
                  <p className="text-lg leading-relaxed text-center">
                    We believe every high school student deserves the opportunity to explore technology, create innovative solutions, and connect with like-minded peers. hack::peel is more than just a hackathon — it's a movement to inspire the next generation of creators, builders, and leaders in Peel Region.
                  </p>
                </TiltCard>
              </div>
            </ParallaxSection>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 animate-fade-in">
              Our <span className="text-primary">Values</span>
            </h2>
            <div 
              ref={valuesReveal.ref}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transition-all duration-1000 ${
                valuesReveal.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {values.map((value, index) => (
                <TiltCard key={index} className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
        {/* Timeline */}
        <section className="py-16 w-full">
          <ParallaxSection speed={0}>
            <div className="w-full px-4">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 animate-fade-in">
                A Nod to Our <span className="text-primary">History</span>
              </h2>

              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
                From humble beginnings to becoming Peel Region's premier high school hackathon
              </p>

              {/* Timeline Grid */}
              <div
                ref={timelineReveal.ref}
                className={`w-full transition-all duration-1000 ${
                  timelineReveal.isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
                  {timeline.map((item, index) => (
                    <TiltCard
                      key={index}
                      className="w-full p-8 border-l-4 border-l-primary flex flex-col"
                    >
                      <div className="flex items-start gap-4">
                        {/* Year Circle */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-display font-bold text-primary text-xl">
                              {item.year}
                            </span>
                          </div>
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-2xl mb-3">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>

            </div>
          </ParallaxSection>
        </section>

        {/* Accessibility Statement */}
        <section className="py-16 relative">
          <ParallaxSection speed={-0.1}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 animate-fade-in">
                  <span className="text-primary">Accessibility</span> & Inclusivity
                </h2>
                <TiltCard className="p-6 md:p-10 bg-gradient-to-br from-card to-primary/5 border-2">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-center">
                    hack::peel is committed to creating an inclusive environment for all participants. We provide accommodations for students with disabilities, dietary restrictions, and other needs. Our venue is wheelchair accessible, and we offer quiet spaces for those who need them. If you have any accessibility concerns or requirements, please don't hesitate to reach out to our team.
                  </p>
                </TiltCard>
              </div>
            </div>
          </ParallaxSection>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;