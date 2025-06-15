import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Smartphone, Shield, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { ReactLogo, NodeLogo, DjangoLogo, AWSLogo, DockerLogo, KubernetesLogo, PythonLogo, TensorFlowLogo, ReactNativeLogo, FlutterLogo, SwiftLogo, JenkinsLogo, AIMLLogo } from "@/assets/images/tech-logos";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Modern web applications using React.js, Vue.js, Angular, and advanced backend frameworks like Node.js, Django, and Spring Boot.",
    technologies: ["React.js", "Node.js", "Django"],
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "bg-aureon-primary",
    badgeColor: "text-aureon-primary"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure using AWS, Azure, and Google Cloud with DevOps automation and containerization.",
    technologies: ["AWS", "Docker", "Kubernetes"],
    gradient: "from-green-50 to-emerald-50",
    iconColor: "bg-green-600",
    badgeColor: "text-green-600"
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Big data processing, machine learning solutions, and business intelligence using Python, R, and advanced analytics platforms.",
    technologies: ["Python", "TensorFlow", "Power BI"],
    gradient: "from-purple-50 to-violet-50",
    iconColor: "bg-purple-600",
    badgeColor: "text-purple-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native, Flutter, and native iOS/Android development.",
    technologies: ["React Native", "Flutter", "Swift"],
    gradient: "from-orange-50 to-red-50",
    iconColor: "bg-orange-600",
    badgeColor: "text-orange-600"
  },
  {
    icon: Shield,
    title: "DevOps & Security",
    description: "CI/CD pipelines, infrastructure automation, and comprehensive cybersecurity solutions to protect your digital assets.",
    technologies: ["Jenkins", "Terraform", "Security"],
    gradient: "from-red-50 to-pink-50",
    iconColor: "bg-red-600",
    badgeColor: "text-red-600"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation, predictive analytics, and custom AI solutions to drive business innovation and efficiency.",
    technologies: ["AI/ML", "PyTorch", "OpenAI"],
    gradient: "from-yellow-50 to-amber-50",
    iconColor: "bg-aureon-accent",
    badgeColor: "text-aureon-accent"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-roboto text-4xl font-bold text-gray-900 mb-4">Our Technology Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions powered by cutting-edge technology stacks and innovative approaches
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-gradient-to-br ${service.gradient} border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group h-full`}>
                <CardContent className="p-8">
                  <motion.div 
                    className={`w-16 h-16 ${service.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-white h-8 w-8" />
                  </motion.div>
                  <h3 className="font-roboto text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={`bg-white ${service.badgeColor} font-medium`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
