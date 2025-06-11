import React from "react";
import { Card, CardBody, CardFooter, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const EventFormats: React.FC = () => {
  const formats = [
    {
      title: "Hackathon",
      description: "48h de création intensive pour résoudre des défis tech et business en équipe",
      icon: "lucide:code",
      color: "primary",
      features: ["Projets concrets", "Mentorat expert", "Jury professionnel", "Pitchs finaux"],
      image: "https://img.heroui.chat/image/ai?w=400&h=300&u=hackathon-event"
    },
    {
      title: "CTF (Capture The Flag)",
      description: "Compétition de cybersécurité où les participants doivent trouver des vulnérabilités",
      icon: "lucide:flag",
      color: "secondary",
      features: ["Challenges réalistes", "Différents niveaux", "Scoreboard live", "Debriefing technique"],
      image: "https://img.heroui.chat/image/ai?w=400&h=300&u=ctf-event"
    },
    {
      title: "Datathon",
      description: "Compétition d'analyse de données et de création de modèles prédictifs",
      icon: "lucide:bar-chart",
      color: "success",
      features: ["Datasets exclusifs", "Problématiques réelles", "Accompagnement IA", "Visualisations"],
      image: "https://img.heroui.chat/image/ai?w=400&h=300&u=datathon-event"
    },
    {
      title: "Workshop Tech",
      description: "Sessions pratiques d'apprentissage sur des technologies spécifiques",
      icon: "lucide:laptop",
      color: "warning",
      features: ["Hands-on", "Petits groupes", "Experts du domaine", "Ressources exclusives"],
      image: "https://img.heroui.chat/image/ai?w=400&h=300&u=workshop-tech"
    }
  ];

  return (
    <section id="formats" className="py-20 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos formats d'événements</h2>
          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Des expériences tech sur mesure, adaptées à vos objectifs et à votre public cible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <motion.div
              key={format.title}
              className="card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg h-full">
                <CardBody className="p-0">
                  <div 
                    className="h-48 bg-cover bg-center relative" 
                    style={{ backgroundImage: `url(${format.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`bg-${format.color}-500 p-2 rounded-lg text-white`}>
                            <Icon icon={format.icon} width={24} height={24} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{format.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-foreground-600 mb-4">{format.description}</p>
                    <ul className="space-y-2">
                      {format.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Icon icon="lucide:check" className="text-primary-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button 
                    color="primary" 
                    variant="flat" 
                    fullWidth
                    href="#contact"
                  >
                    En savoir plus
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-content1 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Formats flexibles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Icon icon="lucide:users" className="text-primary-500" width={24} height={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">En présentiel</h4>
                <p className="text-foreground-600">
                  Événements immersifs dans vos locaux ou dans nos espaces partenaires pour une expérience collaborative intense.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Icon icon="lucide:globe" className="text-primary-500" width={24} height={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">En ligne</h4>
                <p className="text-foreground-600">
                  Plateformes interactives dédiées permettant une participation à distance tout en maintenant l'esprit d'équipe.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Icon icon="lucide:shuffle" className="text-primary-500" width={24} height={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Hybride</h4>
                <p className="text-foreground-600">
                  Combinaison du présentiel et du distanciel pour une flexibilité maximale et une portée étendue.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-100 p-3 rounded-xl">
                <Icon icon="lucide:settings" className="text-primary-500" width={24} height={24} />
              </div>
              <div>
                <h4 className="font-bold mb-2">Sur mesure</h4>
                <p className="text-foreground-600">
                  Événements entièrement personnalisés selon vos besoins spécifiques, votre culture et vos objectifs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};