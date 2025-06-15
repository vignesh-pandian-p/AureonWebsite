import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavItems = () => (
    <>
      <button 
        onClick={() => scrollToSection("home")}
        className="text-gray-700 hover:text-aureon-primary transition-colors duration-300 font-medium"
      >
        Home
      </button>
      <button 
        onClick={() => scrollToSection("services")}
        className="text-gray-700 hover:text-aureon-primary transition-colors duration-300 font-medium"
      >
        Services
      </button>
      <button 
        onClick={() => scrollToSection("products")}
        className="text-gray-700 hover:text-aureon-primary transition-colors duration-300 font-medium"
      >
        Products
      </button>
      <button 
        onClick={() => scrollToSection("about")}
        className="text-gray-700 hover:text-aureon-primary transition-colors duration-300 font-medium"
      >
        About
      </button>
      <Button 
        onClick={() => scrollToSection("contact")}
        className="bg-aureon-primary text-white hover:bg-blue-800 transition-colors duration-300"
      >
        Contact Us
      </Button>
    </>
  );

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/98 backdrop-blur-sm border-b border-gray-100" : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-aureon-primary to-aureon-secondary rounded-lg flex items-center justify-center">
              <Zap className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="font-roboto font-bold text-2xl text-aureon-primary">Aureon Tech</h1>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItems />
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <NavItems />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
