import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/MagneticButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Award } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const projectsReveal = useScrollReveal();

  const projects = [
    {
      id: 1,
      name: "EcoTrack",
      team: "Green Coders",
      year: "2024",
      category: "software",
      description: "Mobile app to track personal carbon footprint and suggest eco-friendly alternatives.",
      tags: ["React Native", "Firebase", "API"],
      award: "Best Environmental Impact",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "StudyBuddy AI",
      team: "Mind Hackers",
      year: "2024",
      category: "software",
      description: "AI-powered study assistant that creates personalized study plans and quizzes.",
      tags: ["Python", "TensorFlow", "React"],
      award: "Best Use of AI",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "SmartGarden",
      team: "Tech Farmers",
      year: "2024",
      category: "hardware",
      description: "IoT system for automated plant care with moisture sensors and watering mechanism.",
      tags: ["Arduino", "IoT", "Sensors"],
      award: "Best Hardware Hack",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "MentalHealth Hub",
      team: "Wellness Warriors",
      year: "2023",
      category: "design",
      description: "Platform connecting students with mental health resources and peer support.",
      tags: ["Figma", "UX Research", "Accessibility"],
      award: "Best Design",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "CodeLearn",
      team: "EdTech Innovators",
      year: "2023",
      category: "software",
      description: "Interactive platform for teaching programming fundamentals through games.",
      tags: ["JavaScript", "Vue.js", "Gamification"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "FoodShare",
      team: "Community Connect",
      year: "2023",
      category: "software",
      description: "App connecting food donors with local shelters and food banks.",
      tags: ["React", "Node.js", "MongoDB"],
      award: "People's Choice",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
    },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

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
                {/*<p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up">
                  Explore amazing projects built by high school students at hack::peel
                </p>
                <MagneticButton>
                  Submit Your Project
                </MagneticButton>*/}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/*<section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="all" className="mb-12">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                  <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
                    All
                  </TabsTrigger>
                  <TabsTrigger value="software" onClick={() => setSelectedCategory("software")}>
                    Software
                  </TabsTrigger>
                  <TabsTrigger value="hardware" onClick={() => setSelectedCategory("hardware")}>
                    Hardware
                  </TabsTrigger>
                  <TabsTrigger value="design" onClick={() => setSelectedCategory("design")}>
                    Design
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div 
                ref={projectsReveal.ref}
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
                  projectsReveal.isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {filteredProjects.map((project) => (
                  <TiltCard key={project.id} className="overflow-hidden hover:shadow-2xl transition-all">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-display font-bold text-xl">{project.name}</h3>
                        {project.award && (
                          <Award className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                        )}
                      </div>

                      {project.award && (
                        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                          {project.award}
                        </Badge>
                      )}

                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-semibold text-foreground">{project.team}</span> • {project.year}
                      </p>

                      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-primary/5">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-3 border-t border-border">
                        <a href="#" className="text-sm text-primary hover:underline flex items-center">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                        <a href="#" className="text-sm text-primary hover:underline flex items-center">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </div>
        </section>*/}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;