import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

interface FloatingOctopusProps {
  id: number;
  position: { x: number; y: number };
  onClose: (id: number) => void;
}

export const FloatingOctopus: React.FC<FloatingOctopusProps> = ({ id, position, onClose }) => {
  return (
    <motion.div
      className="floating-octopus"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      style={{ left: position.x - 40, top: position.y - 40 }}
    >
      <div className="floating-octopus-container">
        <div 
          className="floating-octopus-close"
          onClick={() => onClose(id)}
        >
          <Icon icon="lucide:x" width={16} height={16} />
        </div>
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 30C120 30 135 45 135 65C135 85 120 100 100 100C80 100 65 85 65 65C65 45 80 30 100 30Z" fill="#0203f7" />
            <circle cx="85" cy="60" r="8" fill="#000" />
            <path d="M60 90C40 110 30 150 20 190" stroke="#0203f7" strokeWidth="10" strokeLinecap="round" />
            <path d="M75 100C60 120 55 160 50 190" stroke="#0203f7" strokeWidth="10" strokeLinecap="round" />
            <path d="M100 110C100 140 100 160 100 190" stroke="#0203f7" strokeWidth="10" strokeLinecap="round" />
            <path d="M125 100C140 120 145 160 150 190" stroke="#0203f7" strokeWidth="10" strokeLinecap="round" />
            <path d="M140 90C160 110 170 150 180 190" stroke="#0203f7" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const FloatingOctopusManager: React.FC = () => {
  const [octopuses, setOctopuses] = React.useState<{ id: number; position: { x: number; y: number } }[]>([]);
  const nextId = React.useRef(1);
  
  // Add a new octopus randomly every 5-15 seconds
  React.useEffect(() => {
    const addRandomOctopus = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Random position within viewport
      const x = Math.random() * (windowWidth - 100) + 50;
      const y = Math.random() * (windowHeight - 100) + 50;
      
      setOctopuses(prev => [...prev, { id: nextId.current, position: { x, y } }]);
      nextId.current += 1;
      
      // Limit to 5 octopuses at a time
      if (octopuses.length >= 4) {
        setOctopuses(prev => prev.slice(1));
      }
    };
    
    // Random interval between 5-15 seconds
    const interval = setInterval(() => {
      addRandomOctopus();
    }, Math.random() * 10000 + 5000);
    
    return () => clearInterval(interval);
  }, [octopuses.length]);
  
  const handleClose = (id: number) => {
    setOctopuses(prev => prev.filter(octopus => octopus.id !== id));
  };
  
  return (
    <AnimatePresence>
      {octopuses.map(octopus => (
        <FloatingOctopus
          key={octopus.id}
          id={octopus.id}
          position={octopus.position}
          onClose={handleClose}
        />
      ))}
    </AnimatePresence>
  );
};