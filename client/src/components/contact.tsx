import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    submitContactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@aureontech.com",
      color: "bg-aureon-accent"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      color: "bg-aureon-accent"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Silicon Valley, CA",
      color: "bg-aureon-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-aureon-primary to-aureon-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-roboto text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Get in touch with our experts today.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-white text-sm font-semibold mb-2 block">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange("firstName")}
                        className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-aureon-accent"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white text-sm font-semibold mb-2 block">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange("lastName")}
                        className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-aureon-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white text-sm font-semibold mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-aureon-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white text-sm font-semibold mb-2 block">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange("company")}
                      className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-aureon-accent"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white text-sm font-semibold mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleInputChange("message")}
                      className="bg-white/20 border-white/30 text-white placeholder-blue-200 focus:ring-aureon-accent resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={submitContactMutation.isPending}
                    className="w-full bg-aureon-accent hover:bg-yellow-500 text-white font-bold py-4 px-6 transition-all duration-300 transform hover:scale-105"
                  >
                    {submitContactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <img 
              src="/src/assets/images/contact-network.svg" 
              alt="Global technology network hub with digital transformation connectivity" 
              className="rounded-xl w-full"
            />
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                    <info.icon className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-semibold text-lg">{info.title}</h3>
                    <p className="text-blue-100">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
