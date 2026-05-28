import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { MagneticButton } from "@/components/MagneticButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQ = () => {
  const faqReveal = useScrollReveal();

  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is hack::peel?",
          a: "hack::peel is a 34-hour hackathon in Peel Region run for students, by students. It's a chance to learn, build projects, make friends, and win prizes!",
        },
        {
          q: "Who can attend?",
          a: "Any high school student (grades 9-12) in Peel Region can attend. All skill levels are welcome, from complete beginners to experienced coders.",
        },
        {
          q: "How much does it cost?",
          a: "hack::peel is completely free! We provide meals, snacks, swag, workshops, and more at no cost to participants.",
        },
        {
          q: "Do I need a team?",
          a: "No! You can come solo and find a team at the event, or you can register with an existing team of up to 4 people.",
        },
      ],
    },
    {
      category: "Logistics",
      questions: [
        {
          q: "What should I bring?",
          a: "Bring your laptop, charger, student ID, and any hardware you want to hack with. We'll provide meals, snacks, and WiFi.",
        },
        {
          q: "Where is the venue?",
          a: "The event will be held at The Woodlands Secondary School (3225 Erindale Station Rd). Check the Contact page for full details and directions.",
        },
        {
          q: "Can I leave and come back?",
          a: "Yes! While we encourage participants to stay for the full experience, you're welcome to leave and return as needed.",
        },
        {
          q: "What about parking?",
          a: "Free parking is available at the venue. Detailed parking information will be sent in your confirmation email.",
        },
      ],
    },
    {
      category: "Hacking",
      questions: [
        {
          q: "I've never coded before. Can I still participate?",
          a: "Absolutely! We have beginner-friendly workshops and mentors who can help you get started. Many first-time hackers have built amazing projects!",
        },
        {
          q: "What can I build?",
          a: "Anything! Software, hardware, design projects - as long as you create it during the 34 hours, it's fair game.",
        },
        {
          q: "Can I work on an existing project?",
          a: "No. All projects must be started from scratch at hack::peel. However, you can use existing libraries, APIs, and frameworks.",
        },
        {
          q: "What prizes can I win?",
          a: "We have prizes across multiple categories that may include Best Overall, Best Beginner, Best Hardware, Best Design, and more. Specific prizes TBA!",
        },
      ],
    },
    {
      category: "Code of Conduct",
      questions: [
        {
          q: "What are the rules?",
          a: "All participants must follow our Code of Conduct, which promotes a safe, inclusive, and respectful environment for everyone.",
        },
        {
          q: "What if I witness harassment?",
          a: "Please report any incidents immediately to an organizer or mentor. We have zero tolerance for harassment of any kind.",
        },
        {
          q: "Are there quiet spaces available?",
          a: "Yes! We provide designated quiet spaces for participants who need a break from the main hacking area. There is also a public library on the premises.",
        },
      ],
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
                  frequently asked <span className="text-primary animate-text-glow">questions</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Everything you need to know about hack::peel
                </p>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* FAQ Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div 
              ref={faqReveal.ref}
              className={`max-w-4xl mx-auto space-y-16 transition-all duration-1000 ${
                faqReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {faqs.map((section, sectionIndex) => (
                <ParallaxSection key={section.category} speed={0.1}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-primary">
                      {section.category}
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${section.category}-${index}`}>
                          <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </ParallaxSection>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5 relative">
          <ParallaxSection speed={0.1}>
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-display font-bold mb-4 animate-fade-in">
                  Still Have <span className="text-primary">Questions?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Can't find what you're looking for? Reach out to our team and we'll get back to you ASAP!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <MagneticButton asChild>
                    <Link to="/contact">Contact Us</Link>
                  </MagneticButton>
                  <MagneticButton asChild variant="outline">
                    <a href="/discord" target="_blank" rel="noopener noreferrer">Join Discord</a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ParallaxSection>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
