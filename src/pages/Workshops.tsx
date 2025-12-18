import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/MagneticButton";
import { Calendar, Clock, Users } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Workshops = () => {
  const workshopsReveal = useScrollReveal();

  const workshops = [
    {
      title: "Intro to Web Development",
      presenter: "Sarah Chen",
      organization: "Google",
      time: "Saturday, 12:00 PM",
      duration: "60 min",
      level: "Beginner",
      capacity: "30 students",
      description: "Learn HTML, CSS, and JavaScript basics to build your first website.",
      topics: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      title: "APIs & Backend Development",
      presenter: "Marcus Johnson",
      organization: "Shopify",
      time: "Saturday, 2:00 PM",
      duration: "90 min",
      level: "Intermediate",
      capacity: "25 students",
      description: "Understand REST APIs, databases, and how to build backend services.",
      topics: ["REST APIs", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "UI/UX Design Fundamentals",
      presenter: "Emily Rodriguez",
      organization: "Figma",
      time: "Saturday, 3:30 PM",
      duration: "75 min",
      level: "Beginner",
      capacity: "40 students",
      description: "Master design principles and create beautiful user interfaces in Figma.",
      topics: ["Design Thinking", "Figma", "Prototyping", "User Research"],
    },
    {
      title: "Machine Learning Basics",
      presenter: "Dr. Amir Patel",
      organization: "University of Toronto",
      time: "Saturday, 5:30 PM",
      duration: "120 min",
      level: "Advanced",
      capacity: "20 students",
      description: "Introduction to ML concepts, neural networks, and building your first model.",
      topics: ["Python", "TensorFlow", "Neural Networks", "Data Science"],
    },
    {
      title: "Hardware Hacking with Arduino",
      presenter: "Alex Kim",
      organization: "MakerSpace Peel",
      time: "Saturday, 7:00 PM",
      duration: "90 min",
      level: "Beginner",
      capacity: "15 students",
      description: "Build IoT projects with Arduino, sensors, and actuators.",
      topics: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
    },
    {
      title: "Mobile App Development",
      presenter: "Jordan Lee",
      organization: "Microsoft",
      time: "Sunday, 9:00 AM",
      duration: "90 min",
      level: "Intermediate",
      capacity: "30 students",
      description: "Create cross-platform mobile apps using React Native.",
      topics: ["React Native", "Mobile UI", "APIs", "App Deployment"],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-16">
        <ParallaxSection speed={0.1}>
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-fade-in">
                  coming <span className="text-primary animate-text-glow">soon</span>
                </h1>
                {/*<p className="text-lg md:text-xl text-muted-foreground animate-slide-up">
                  Learn from industry professionals and university mentors across various tech domains
                </p>*/}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/*<section className="py-16">
          <div className="container mx-auto px-4">
            <div 
              ref={workshopsReveal.ref}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
                workshopsReveal.isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {workshops.map((workshop, index) => (
                <TiltCard key={index} className="p-6 hover:shadow-2xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display font-bold text-xl">{workshop.title}</h3>
                    <Badge className={`${getLevelColor(workshop.level)} border`}>
                      {workshop.level}
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-semibold text-foreground">{workshop.presenter}</span>
                      <span className="mx-2">•</span>
                      <span>{workshop.organization}</span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{workshop.time}</span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{workshop.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{workshop.capacity}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{workshop.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="outline" className="bg-primary/5">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </TiltCard>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Want to host a workshop or share your expertise?
              </p>
              <MagneticButton>
                Submit Workshop Proposal
              </MagneticButton>
            </div>
          </div>
        </section>*/}
      </div>

      <Footer />
    </div>
  );
};

export default Workshops;
