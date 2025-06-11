import React from "react";
import { Card, CardBody, CardFooter, Button, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { AnimatePresence } from "framer-motion";

export const Pricing: React.FC = () => {
  const [showRealPrices, setShowRealPrices] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  
  const pricingPlans = [
    {
      name: "Pack Découverte",
      fakePrice: "GRATUIT !",
      price: "À partir de 3 500€",
      description: "Idéal pour une première expérience ou un événement de petite envergure",
      features: [
        "1 journée d'événement",
        "Jusqu'à 30 participants",
        "1 format au choix",
        "Plateforme dédiée",
        "1 animateur expert",
        "Support technique",
        "Rapport post-événement"
      ],
      popular: false,
      color: "default"
    },
    {
      name: "Pack Ambition",
      fakePrice: "GRATUIT !",
      price: "À partir de 6 900€",
      description: "Notre offre la plus populaire pour des événements impactants",
      features: [
        "2 jours d'événement",
        "Jusqu'à 80 participants",
        "Format personnalisé",
        "Plateforme dédiée premium",
        "2 animateurs experts",
        "Mentorat technique",
        "Jury professionnel",
        "Goodies participants",
        "Analyse détaillée post-événement"
      ],
      popular: true,
      color: "primary"
    },
    {
      name: "Pack Signature",
      fakePrice: "GRATUIT !",
      price: "Sur devis",
      description: "L'expérience ultime pour un événement tech mémorable",
      features: [
        "Durée sur mesure",
        "Participants illimités",
        "Multi-formats possibles",
        "Plateforme personnalisée",
        "Équipe d'experts dédiée",
        "Mentorat VIP",
        "Jury de haut niveau",
        "Kit participant premium",
        "Couverture média",
        "Analyse d'impact complète"
      ],
      popular: false,
      color: "secondary"
    }
  ];

  // Intersection observer to trigger price animation with faster timing
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !showRealPrices && !showMessage) {
        // First show the message - reduced from 1500ms to 500ms
        setTimeout(() => {
          setShowMessage(true);
          
          // Then show real prices after message - reduced from 3000ms to 1000ms
          setTimeout(() => {
            setShowRealPrices(true);
          }, 1000);
        }, 500);
      }
    }, { threshold: 0.5 });
    
    const section = document.getElementById("pricing");
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [showRealPrices, showMessage]);

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos offres</h2>
          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Des formules adaptées à tous les besoins et tous les budgets pour créer votre événement tech idéal.
          </p>
          
          {/* Price change message */}
          <AnimatePresence>
            {showMessage && !showRealPrices && (
              <motion.div 
                className="mt-6 bg-primary-100 p-4 rounded-lg inline-block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-primary-700 font-medium">
                  On aurait aimé, mais il faut bien payer les gens ! 😉
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className={`border-none h-full ${plan.popular ? 'shadow-xl' : 'shadow-lg'}`}
                isHoverable
              >
                <CardBody className="p-6">
                  {plan.popular && (
                    <Chip 
                      color="primary" 
                      variant="shadow"
                      className="absolute -top-3 right-8"
                    >
                      Le plus populaire
                    </Chip>
                  )}
                  
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-primary-500' : ''}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4 h-10">
                    <AnimatePresence mode="wait">
                      {!showRealPrices ? (
                        <motion.span 
                          key="fake" 
                          className="text-3xl font-bold text-success-500"
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }} // Reduced from 0.5s to 0.3s
                        >
                          {plan.fakePrice}
                        </motion.span>
                      ) : (
                        <motion.span 
                          key="real" 
                          className="text-3xl font-bold"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }} // Reduced from 0.5s to 0.3s
                        >
                          {plan.price}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="text-foreground-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon 
                          icon="lucide:check-circle" 
                          className={`text-${plan.color}-500 mr-2 mt-1 flex-shrink-0`} 
                          width={18}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button 
                    color={plan.popular ? "primary" : "default"}
                    variant={plan.popular ? "shadow" : "flat"}
                    fullWidth
                    href="#contact"
                    size="lg"
                  >
                    {plan.popular ? "Choisir cette offre" : "En savoir plus"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-4">
            Besoin d'une solution encore plus personnalisée ?
          </p>
          <Button 
            color="primary" 
            variant="flat" 
            size="lg"
            href="#contact"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Contactez-nous pour un devis sur mesure
          </Button>
        </div>
      </div>
    </section>
  );
};