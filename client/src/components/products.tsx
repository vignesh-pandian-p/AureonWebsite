import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, TrendingUp, Lock } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    icon: Building,
    title: "Enterprise Management Suite",
    description: "Comprehensive business management platform with CRM, ERP, and project management capabilities.",
    badges: ["SaaS", "Cloud-native"],
    iconColor: "bg-aureon-primary",
    badgeColor: "text-aureon-primary bg-blue-100"
  },
  {
    icon: TrendingUp,
    title: "Smart Analytics Platform",
    description: "AI-powered business intelligence platform for real-time data insights and predictive analytics.",
    badges: ["AI-Powered", "Real-time"],
    iconColor: "bg-green-600",
    badgeColor: "text-green-600 bg-green-100"
  },
  {
    icon: Lock,
    title: "CyberShield Security Suite",
    description: "Advanced cybersecurity platform with threat detection, monitoring, and automated response capabilities.",
    badges: ["Enterprise", "24/7 Monitor"],
    iconColor: "bg-red-600",
    badgeColor: "text-red-600 bg-red-100"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-roboto text-4xl font-bold text-gray-900 mb-4">Our Digital Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative software solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/src/assets/images/products-innovation.svg" 
              alt="Enterprise digital products dashboard with analytics and data visualization" 
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
          
          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`w-12 h-12 ${product.iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <product.icon className="text-white h-6 w-6" />
                      </motion.div>
                      <div>
                        <h3 className="font-roboto text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="flex space-x-2">
                          {product.badges.map((badge) => (
                            <Badge 
                              key={badge} 
                              className={`${product.badgeColor} font-medium`}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
