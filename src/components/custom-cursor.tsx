import React from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    // Add tentacle-cursor class to body
    document.body.classList.add('tentacle-cursor');
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.body.classList.remove('tentacle-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);
  
  // Tentacle segments positions
  const getTentaclePoints = () => {
    const points = [];
    const segments = 8;
    
    for (let i = 0; i < segments; i++) {
      const delay = i * 0.02;
      points.push({
        x: mousePosition.x,
        y: mousePosition.y,
        delay,
        length: 5 + i * 2,
        angle: (i * 45) % 360
      });
    }
    
    return points;
  };
  
  const tentacles = getTentaclePoints();
  
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }}>
      {/* Main cursor (octopus head) */}
      <motion.div
        style={{
          position: 'absolute',
          width: 20,
          height: 20,
          borderRadius: '50%',
          backgroundColor: '#0203f7',
          opacity: isVisible ? 1 : 0,
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {/* Eye */}
        <div style={{
          position: 'absolute',
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'white',
          top: 5,
          left: 7,
        }} />
      </motion.div>
      
      {/* Tentacles */}
      {tentacles.map((tentacle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: 3,
            height: tentacle.length,
            backgroundColor: '#0203f7',
            borderRadius: '50%',
            opacity: isVisible ? 0.8 - (index * 0.05) : 0,
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            rotate: tentacle.angle,
          }}
          transition={{
            type: 'spring',
            stiffness: 300 - (index * 20),
            damping: 20,
            mass: 0.5,
            delay: tentacle.delay
          }}
        />
      ))}
    </div>
  );
};