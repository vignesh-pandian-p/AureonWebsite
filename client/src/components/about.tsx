import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in cutting-edge technologies and industry best practices."
  },
  {
    title: "Agile Delivery",
    description: "Lightning-fast project delivery with agile methodologies and continuous integration practices."
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-roboto text-4xl font-bold text-gray-900 mb-6">Why Choose Aureon Tech?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We combine technical expertise with business understanding to deliver solutions that drive real results for our clients.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-aureon-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-roboto font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/src/assets/images/about-team.svg" 
              alt="Professional development team with 24/7 support infrastructure and collaborative workspace" 
              className="rounded-2xl shadow-xl w-full"
            />
            
            {/* Stats overlay */}
            <motion.div 
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="font-roboto font-bold text-2xl text-aureon-primary">100+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="font-roboto font-bold text-2xl text-aureon-primary">50+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
