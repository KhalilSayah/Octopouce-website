import React from "react";
import { EventFormats } from "../components/event-formats";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const FormatsPage: React.FC = () => {
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
          
          <h1 className="text-4xl font-bold mb-4">Nos formats d'événements</h1>
          <p className="text-xl text-foreground-600 max-w-2xl">
            Découvrez les différents types d'événements que nous organisons pour répondre à vos besoins.
          </p>
        </motion.div>
        
        <EventFormats />
      </div>
    </main>
  );
};