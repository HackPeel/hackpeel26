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
    { time: "9:00 AM", title: "Registration & Check-in", location: "Front Foyer", type: "main" },
    { time: "9:30 AM", title: "Opening Ceremony", location: "Cafeteria", type: "main" },
    { time: "10:00 AM", title: "Hacking Begins", location: "All Areas", type: "main" },
    //{ time: "12:00 PM", title: "Intro to Web Development", location: "Lecture Hall", type: "workshop" },
    { time: "1:00 PM", title: "Lunch", location: "Cafeteria", type: "main" },
    //{ time: "2:00 PM", title: "APIs & Backend Basics", location: "Lecture Hall", type: "workshop" },
    //{ time: "3:30 PM", title: "UI/UX Design Workshop", location: "Lecture Hall", type: "workshop" },
    { time: "5:45 PM", title: "Dinner", location: "Cafeteria", type: "main" },
    { time: "6:30 PM", title: "Closing Ceremony", location: "Cafeteria", type: "main" },
    { time: "7:00 PM", title: "Day One Concludes", location: "All Areas", type: "main" },
  ];

  const scheduleDay2 = [
    { time: "9:00 AM", title: "Check-in", location: "Front Foyer", type: "main" },
    { time: "9:30 AM", title: "Opening Ceremony", location: "Cafeteria", type: "main" },
    { time: "12:00 PM", title: "Lunch", location: "Cafeteria", type: "main" },
    { time: "2:00 PM", title: "Submission Deadline", location: "Online", type: "deadline" },
    { time: "3:00 PM", title: "Judging Begins", location: "All Areas", type: "main" },
    { time: "3:00 PM", title: "Project Fair Begins", location: "Gym A/B", type: "main" },
    { time: "5:00 PM", title: "Judging Concludes", location: "All Areas", type: "main" },
    { time: "5:00 PM", title: "Project Fair Concludes", location: "Gym A/B", type: "main" },
    { time: "5:15 PM", title: "Dinner", location: "Cafeteria", type: "main" },
    { time: "6:00 PM", title: "Closing Ceremony & Awards", location: "Cafeteria", type: "main" },
    { time: "7:00 PM", title: "Event Concludes", location: "All Areas", type: "main" },
  ];
  const generateICS = () => {
  const events = [
    // Day 1
    { title: "hack::peel – Registration & Check-in", start: "20261212T090000", end: "20261212T093000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Front Foyer", category: "EVENT" },
    { title: "hack::peel – Opening Ceremony", start: "20261212T093000", end: "20261212T100000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
    { title: "hack::peel – Hacking Begins", start: "20261212T100000", end: "20261212T170000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: All Areas", category: "EVENT" },
    { title: "hack::peel – Intro to Web Development", start: "20261212T120000", end: "20261212T130000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Lecture Hall | Type: Workshop", category: "WORKSHOP" },
    { title: "hack::peel – Lunch", start: "20261212T130000", end: "20261212T140000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
    { title: "hack::peel – APIs & Backend Basics", start: "20261212T140000", end: "20261212T153000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Lecture Hall | Type: Workshop", category: "WORKSHOP" },
    { title: "hack::peel – UI/UX Design Workshop", start: "20261212T153000", end: "20261212T174500", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Lecture Hall | Type: Workshop", category: "WORKSHOP" },
    { title: "hack::peel – Dinner", start: "20261212T174500", end: "20261212T183000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
    { title: "hack::peel – Closing Ceremony (Day 1)", start: "20261212T183000", end: "20261212T190000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
    // Day 2
    { title: "hack::peel – Check-in", start: "20261213T090000", end: "20261213T093000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Front Foyer", category: "EVENT" },
    { title: "hack::peel – Opening Ceremony (Day 2)", start: "20261213T093000", end: "20261213T100000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
    { title: "hack::peel – Hacking Continues", start: "20261213T100000", end: "20261213T140000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: All Areas", category: "EVENT" },
    { title: "hack::peel – Lunch", start: "20261213T120000", end: "20261213T130000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
    { title: "hack::peel – Submission Deadline", start: "20261213T140000", end: "20261213T141500", location: "Online", description: "Submit your project online by 2:00 PM | Type: Deadline", category: "DEADLINE" },
    { title: "hack::peel – Judging", start: "20261213T150000", end: "20261213T170000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: All Areas", category: "EVENT" },
    { title: "hack::peel – Project Fair", start: "20261213T150000", end: "20261213T170000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Gym A/B", category: "EVENT" },
    { title: "hack::peel – Dinner", start: "20261213T171500", end: "20261213T180000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
    { title: "hack::peel – Closing Ceremony & Awards", start: "20261213T180000", end: "20261213T190000", location: "3225 Erindale Station Rd, Mississauga, ON L5C 1Y5", description: "Location: Cafeteria", category: "EVENT" },
  ];

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//hack::peel//Schedule//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:hack::peel 2026",
    "X-WR-TIMEZONE:America/Toronto",
    ...events.map((e, i) => [
      "BEGIN:VEVENT",
      `UID:hackpeel-${i}@hackpeel2026`,
      `DTSTART;TZID=America/Toronto:${e.start}`,
      `DTEND;TZID=America/Toronto:${e.end}`,
      `SUMMARY:${e.title}`,
      `LOCATION:${e.location}`,
      `DESCRIPTION:${e.description}`,
      `CATEGORIES:${e.category}`,
      "END:VEVENT",
    ].join("\r\n")),
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hackpeel2026.ics";
  a.click();
  URL.revokeObjectURL(url);
};

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
                  hack::peel <span className="text-primary animate-text-glow">schedule</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  34 hours of workshops, hacking, food, and fun!
                </p>
                <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <a href="/The Woodlands School - Map.pdf" download target="_blank" rel="noopener noreferrer">
                    <MagneticButton variant="outline" className="gap-2">
                         <Download className="h-4 w-4" />
                          Download Map
                    </MagneticButton> </a>
                    {/*<MagneticButton variant="outline" className="gap-2" onClick={generateICS}>
                    <Calendar className="h-4 w-4" />
                    Add to Calendar
                    </MagneticButton> */}
                </div>
              </div>
            </div>
          </section>
        </ParallaxSection>

        {/* Schedule */}
        <section className="py-16">
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
                    Day 1 - Saturday, December 12th, 2026
                  </TabsTrigger>
                  <TabsTrigger value="day2" className="font-display font-semibold">
                    Day 2 - Sunday, December 13th, 2026
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
              </Tabs>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Schedule;