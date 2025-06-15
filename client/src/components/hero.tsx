import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="animate-slide-up"
          >
            {/* Company Branding */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-aureon-primary to-aureon-secondary rounded-xl flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Zap className="text-white h-8 w-8" />
                </motion.div>
                <div>
                  <h1 className="font-roboto font-bold text-5xl text-aureon-primary mb-2">Aureon Tech</h1>
                  <p className="font-roboto font-bold text-xl text-aureon-slate tracking-wider">TRUST. DELIVER. LEAD.</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-aureon-accent to-yellow-400 text-white px-6 py-3 rounded-lg inline-block">
                <span className="font-helvetica font-bold text-lg tracking-wide flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  LIGHTNING PROGRESS
                </span>
              </div>
            </div>
            
            <h2 className="font-roboto text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Innovative IT Solutions for the{" "}
              <span className="text-gradient">Digital Future</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We deliver cutting-edge technology solutions that transform businesses and drive digital innovation. 
              From web development to enterprise solutions, we're your trusted technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("services")}
                className="bg-aureon-primary text-white hover:bg-blue-800 transition-all duration-300 text-lg px-8 py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                size="lg"
              >
                Explore Services
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-aureon-primary text-aureon-primary hover:bg-aureon-primary hover:text-white transition-all duration-300 text-lg px-8 py-6"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600" 
              alt="Modern IT office space with collaborative workspace" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-700">24/7 Support Active</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-aureon-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-aureon-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
}
