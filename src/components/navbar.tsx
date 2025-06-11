import React from "react";
import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Add background when scrolled
      setIsScrolled(currentScrollY > 20);
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <HeroNavbar 
      className={`transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      maxWidth="xl"
    >
      <NavbarBrand>
        <RouterLink to="/" className="flex items-center gap-2">
          <div className="bg-primary-500 text-white p-2 rounded-lg">
            <Icon icon="lucide:octagon" width={24} height={24} />
          </div>
          <p className="font-bold text-2xl">Octopouce</p>
        </RouterLink>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link as={RouterLink} color="foreground" to="/about" className="font-medium">
            À propos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={RouterLink} color="foreground" to="/formats" className="font-medium">
            Formats
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#pricing" className="font-medium">
            Offres
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            color="primary" 
            href="#contact" 
            variant="shadow"
            className="font-medium"
            startContent={<Icon icon="lucide:calendar" />}
          >
            Réserver un call
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  );
};