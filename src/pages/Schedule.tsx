import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Download } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Schedule = () => {
  const scheduleReveal = useScrollReveal();

  const scheduleDay1 = [
    { time: "9:00 AM", title: "Registration & Check-in", location: "Main Hall", type: "main" },
    { time: "10:00 AM", title: "Opening Ceremony", location: "Auditorium", type: "main" },
    { time: "11:00 AM", title: "Hacking Begins!", location: "All Areas", type: "main" },
    { time: "12:00 PM", title: "Intro to Web Development", location: "Room 101", type: "workshop" },
    { time: "1:00 PM", title: "Lunch", location: "Cafeteria", type: "main" },
    { time: "2:00 PM", title: "APIs & Backend Basics", location: "Room 102", type: "workshop" },
    { time: "3:30 PM", title: "UI/UX Design Workshop", location: "Room 103", type: "workshop" },
    { time: "5:00 PM", title: "Dinner", location: "Cafeteria", type: "main" },
    { time: "7:00 PM", title: "Hardware Hacking Session", location: "Maker Space", type: "workshop" },
    { time: "9:00 PM", title: "Midnight Snacks", location: "Cafeteria", type: "main" },
  ];

  const scheduleDay2 = [
    { time: "8:00 AM", title: "Breakfast", location: "Cafeteria", type: "main" },
    { time: "9:00 AM", title: "Submission Deadline", location: "Online", type: "deadline" },
    { time: "10:00 AM", title: "Project Demos Begin", location: "Main Hall", type: "main" },
    { time: "12:00 PM", title: "Lunch & Judging", location: "Cafeteria", type: "main" },
    { time: "2:00 PM", title: "Closing Ceremony & Awards", location: "Auditorium", type: "main" },
    { time: "3:30 PM", title: "Event Ends", location: "Main Hall", type: "main" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "workshop":
        return "border-l-secondary";
      case "deadline":
        return "border-l-destructive";
      default:
        return "border-l-primary";
    }
  };

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
                  coming <span className="text-primary animate-text-glow">soon</span>
                </h1>
                {/*<p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  24 hours of workshops, hacking, food, and fun!
                </p>
                <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <MagneticButton variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </MagneticButton>
                  <MagneticButton variant="outline" className="gap-2">
                    <Calendar className="h-4 w-4" />
                    Add to Calendar
                  </MagneticButton>
                </div>*/}
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Schedule */}
        {/*<section className="py-16">
          <div className="container mx-auto px-4">
            <div 
              ref={scheduleReveal.ref}
              className={`transition-all duration-1000 ${
                scheduleReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="day1" className="font-display font-semibold">
                    Day 1 - Saturday
                  </TabsTrigger>
                  <TabsTrigger value="day2" className="font-display font-semibold">
                    Day 2 - Sunday
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="day1" className="space-y-4">
                  {scheduleDay1.map((item, index) => (
                    <TiltCard
                      key={index}
                      className={`p-6 border-l-4 ${getTypeColor(item.type)}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-2 text-primary font-display font-semibold min-w-[100px]">
                          <Clock className="h-4 w-4" />
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </div>
                        </div>
                        {item.type === "workshop" && (
                          <MagneticButton variant="outline" size="sm">RSVP</MagneticButton>
                        )}
                      </div>
                    </TiltCard>
                  ))}
                </TabsContent>

                <TabsContent value="day2" className="space-y-4">
                  {scheduleDay2.map((item, index) => (
                    <TiltCard
                      key={index}
                      className={`p-6 border-l-4 ${getTypeColor(item.type)}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-2 text-primary font-display font-semibold min-w-[100px]">
                          <Clock className="h-4 w-4" />
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-lg mb-1">{item.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  ))}
                </TabsContent>
              </Tabs>*/}

              {/* Legend */}
              {/*<ParallaxSection speed={0}>
                <div className="max-w-4xl mx-auto mt-8 p-6 bg-muted/30 rounded-lg backdrop-blur-sm">
                  <h3 className="font-display font-semibold mb-4">Schedule Key</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-primary rounded" />
                      <span className="text-sm">Main Stage Events</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-secondary rounded" />
                      <span className="text-sm">Workshops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-destructive rounded" />
                      <span className="text-sm">Important Deadlines</span>
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </div>
          </div>
        </section>*/}
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;
