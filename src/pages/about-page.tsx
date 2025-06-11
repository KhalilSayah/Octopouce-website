import React from "react";
import { AboutUs } from "../components/about-us";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const AboutPage: React.FC = () => {
  return (
    <main className="pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            as={Link}
            to="/"
            variant="light"
            startContent={<Icon icon="lucide:arrow-left" />}
            className="mb-6"
          >
            Retour à l'accueil
          </Button>
          
          <h1 className="text-4xl font-bold mb-4">À propos de Playground</h1>
          <p className="text-xl text-foreground-600 max-w-2xl">
            Découvrez notre équipe de passionnés tech et notre mission.
          </p>
        </motion.div>
        
        <AboutUs />
      </div>
    </main>
  );
};