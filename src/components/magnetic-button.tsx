import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const MagneticButton: React.FC = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Calculate distance from mouse to center
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      // Maximum distance to apply magnetic effect (in pixels)
      const maxDistance = 300;
      
      if (distance < maxDistance) {
        // Calculate magnetic pull strength based on distance
        const pull = 1 - distance / maxDistance;
        const pullStrength = 40; // Maximum pull in pixels
        
        // Apply magnetic effect
        setPosition({
          x: distanceX * pull * (pullStrength / maxDistance),
          y: distanceY * pull * (pullStrength / maxDistance)
        });
        
        // If very close, consider it hovered
        if (distance < 100) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      } else {
        // Reset position if mouse is too far
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
      }
    }
  };
  
  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <motion.div
      ref={buttonRef}
      className="fixed bottom-8 right-8 z-50"
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovered ? 1.1 : 1
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
    >
      <Button
        as="a"
        href="#contact"
        color="primary"
        size="lg"
        variant="shadow"
        className="rounded-full p-4 magnetic-button"
        isIconOnly
        aria-label="Contact us"
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Icon icon="lucide:message-circle" width={24} height={24} />
        </motion.div>
      </Button>
    </motion.div>
  );
};