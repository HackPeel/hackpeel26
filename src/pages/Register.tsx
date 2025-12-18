import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ref, push } from 'firebase/database';
import { database } from '@/lib/firebase';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ParallaxSection } from "@/components/ParallaxSection";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";

const registrationSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email address"),
  school: z.string().min(1, "School is required"),
  grade: z.string().min(1, "Grade is required"),
  role: z.string().min(1, "Role is required"),
  teamName: z.string().optional(),
  dietary: z.string().optional(),
  tshirtSize: z.string().min(1, "T-shirt size is required"),
  emergencyName: z.string().min(1, "Emergency contact name is required"),
  emergencyPhone: z.string().min(10, "Valid phone number required"),
  codeOfConduct: z.boolean().refine((val) => val === true, "You must accept the Code of Conduct"),
  photoRelease: z.boolean(),
});

type FormData = z.infer<typeof registrationSchema>;

const Register = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherDietary, setShowOtherDietary] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(registrationSchema),
  });

  const role = watch("role");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const registrationsRef = ref(database, 'registrations');
      const newRegistration = await push(registrationsRef, {
        ...data,
        timestamp: Date.now(),
        status: 'pending'
      });

      console.log("Registration saved with ID:", newRegistration.key);
      
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Check your email for confirmation details.",
      });
    } catch (error) {
      console.error("Error saving registration:", error);
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <FloatingParticles />
        <AnimatedBackground />
        <Navigation />
        <div className="pt-20 md:pt-24 pb-16">
          <ParallaxSection speed={0.1}>
            <div className="container mx-auto px-4">
              <TiltCard className="max-w-2xl mx-auto p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-fade-in">
                  You're <span className="text-primary animate-text-glow">Registered!</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Thanks for registering! Check your inbox for a confirmation email with event details and how to join our Discord.
                </p>
                <MagneticButton asChild>
                  <a href="/">Back to Home</a>
                </MagneticButton>
              </TiltCard>
            </div>
          </ParallaxSection>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <AnimatedBackground />
      <Navigation />
      
      <div className="pt-20 md:pt-24 pb-16">
        <ParallaxSection speed={0.1}>
          <section className="py-16 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center animate-fade-in">
                  register for <span className="text-primary animate-text-glow">hack::peel</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Join 100+ students for 24 hours of coding, workshops, and collaboration!
                </p>
                <p className="text-sm text-muted-foreground mt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  * Participants must be currently enrolled in grades 9-12
                </p>
              </div>
            </div>
          </section>
        </ParallaxSection>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <TiltCard className="max-w-3xl mx-auto p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display font-bold mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" {...register("firstName")} className="mt-2" />
                        {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" {...register("lastName")} className="mt-2" />
                        {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" {...register("email")} className="mt-2" />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <Label htmlFor="school">School *</Label>
                      <Input id="school" {...register("school")} className="mt-2" />
                      {errors.school && <p className="text-sm text-destructive mt-1">{errors.school.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="grade">Grade *</Label>
                        <Select onValueChange={(value) => setValue("grade", value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select grade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9">Grade 9</SelectItem>
                            <SelectItem value="10">Grade 10</SelectItem>
                            <SelectItem value="11">Grade 11</SelectItem>
                            <SelectItem value="12">Grade 12</SelectItem>
                            {(role === "mentor" || role === "volunteer") && (
                              <SelectItem value="other">Other</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        {errors.grade && <p className="text-sm text-destructive mt-1">{errors.grade.message}</p>}
                        {role === "participant" && (
                          <p className="text-xs text-muted-foreground mt-2">
                            * Participants must be in grades 9-12
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="role">Role *</Label>
                        <Select onValueChange={(value) => setValue("role", value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="participant">Participant</SelectItem>
                            <SelectItem value="mentor">Mentor</SelectItem>
                            <SelectItem value="volunteer">Volunteer</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.role && <p className="text-sm text-destructive mt-1">{errors.role.message}</p>}
                      </div>
                    </div>

                    <MagneticButton type="button" onClick={() => setStep(2)} className="w-full">
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </MagneticButton>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-display font-bold mb-6">Additional Details</h2>

                    {role === "participant" && (
                      <div>
                        <Label htmlFor="teamName">Team Name (Optional)</Label>
                        <Input id="teamName" {...register("teamName")} className="mt-2" placeholder="Leave blank if you don't have a team yet" />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="dietary">Dietary Restrictions (Optional)</Label>
                      <Select onValueChange={(value) => {
                        if (value === "other") {
                          setShowOtherDietary(true);
                          setValue("dietary", "");
                        } else {
                          setShowOtherDietary(false);
                          setValue("dietary", value);
                        }
                      }}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select dietary restrictions" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                          <SelectItem value="halal">Halal</SelectItem>
                          <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                          <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                          <SelectItem value="nut-allergy">Nut Allergy</SelectItem>
                          <SelectItem value="kosher">Kosher</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {showOtherDietary && (
                        <Input 
                          id="dietaryOther" 
                          {...register("dietary")} 
                          className="mt-2" 
                          placeholder="Please specify your dietary restrictions"
                        />
                      )}
                    </div>

                    <div>
                      <Label htmlFor="tshirtSize">T-Shirt Size *</Label>
                      <Select onValueChange={(value) => setValue("tshirtSize", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="xs">XS</SelectItem>
                          <SelectItem value="s">S</SelectItem>
                          <SelectItem value="m">M</SelectItem>
                          <SelectItem value="l">L</SelectItem>
                          <SelectItem value="xl">XL</SelectItem>
                          <SelectItem value="xxl">XXL</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.tshirtSize && <p className="text-sm text-destructive mt-1">{errors.tshirtSize.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="emergencyName">Emergency Contact Name *</Label>
                        <Input id="emergencyName" {...register("emergencyName")} className="mt-2" />
                        {errors.emergencyName && <p className="text-sm text-destructive mt-1">{errors.emergencyName.message}</p>}
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                        <Input id="emergencyPhone" {...register("emergencyPhone")} className="mt-2" />
                        {errors.emergencyPhone && <p className="text-sm text-destructive mt-1">{errors.emergencyPhone.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="codeOfConduct"
                          onCheckedChange={(checked) => setValue("codeOfConduct", checked as boolean)}
                        />
                        <label htmlFor="codeOfConduct" className="text-sm leading-relaxed">
                          I agree to follow the <a href="/code-of-conduct" className="text-primary hover:underline">Code of Conduct</a> *
                        </label>
                      </div>
                      {errors.codeOfConduct && <p className="text-sm text-destructive">{errors.codeOfConduct.message}</p>}

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="photoRelease"
                          onCheckedChange={(checked) => setValue("photoRelease", checked as boolean)}
                        />
                        <label htmlFor="photoRelease" className="text-sm leading-relaxed">
                          I consent to photos/videos being taken during the event for promotional purposes
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <MagneticButton 
                        type="button" 
                        onClick={() => !isSubmitting && setStep(1)} 
                        variant="outline" 
                        className={`flex-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        Back
                      </MagneticButton>
                      <MagneticButton 
                        type="submit" 
                        className={`flex-1 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Registration'
                        )}
                      </MagneticButton>
                    </div>
                  </div>
                )}
              </form>
            </TiltCard>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Register;