import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link as RouterLink } from "react-router-dom";

export const Hero: React.FC = () => {
  const [currentText, setCurrentText] = React.useState(0);
  const dynamicTexts = [
    "inspire vos talents",
    "booste votre innovation",
    "révèle vos champions",
    "transforme votre école"
  ];
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Animated shapes */}
      <motion.div 
        className="absolute w-64 h-64 rounded-full bg-primary-200 -z-10"
        animate={{ 
          x: [0, 100, 50, 0], 
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        style={{ top: '10%', right: '15%' }}
      />
      
      <motion.div 
        className="absolute w-48 h-48 rounded-full bg-secondary-200 -z-10"
        animate={{ 
          x: [0, -80, -40, 0], 
          y: [0, 60, -80, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        style={{ bottom: '15%', left: '10%' }}
      />
      
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Organisez l'événement tech qui{" "}
            <span className="relative inline-block">
              <motion.span
                key={currentText}
                className="gradient-text absolute"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {dynamicTexts[currentText]}
              </motion.span>
              <span className="opacity-0">{dynamicTexts[0]}</span>
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 text-foreground-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hackathons, CTF, Datathons... Nous créons des expériences tech inoubliables pour les écoles et entreprises du numérique.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            color="primary" 
            size="lg" 
            variant="shadow"
            className="font-medium text-lg"
            startContent={<Icon icon="lucide:calendar" />}
            href="#contact"
          >
            Réserver un call
          </Button>
          <Button 
            as={RouterLink}
            to="/formats"
            variant="flat" 
            size="lg" 
            className="font-medium text-lg"
            startContent={<Icon icon="lucide:info" />}
          >
            Découvrir nos formats
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 1.5 }
        }}
      >
        <a href="#about" className="text-foreground-500 flex flex-col items-center">
          <span className="mb-2">Découvrir</span>
          <Icon icon="lucide:chevron-down" width={24} height={24} />
        </a>
      </motion.div>
    </section>
  );
};