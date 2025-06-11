import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Durand",
      role: "Fondateur & Tech Lead",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=1",
      achievements: "Vainqueur Hackathon NASA 2022",
      icon: "lucide:code"
    },
    {
      name: "Emma Martin",
      role: "Directrice des événements",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=2",
      achievements: "Ex-organisatrice VivaTech",
      icon: "lucide:calendar"
    },
    {
      name: "Thomas Leroy",
      role: "Expert Cybersécurité",
      image: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
      achievements: "Champion CTF Européen 2023",
      icon: "lucide:shield"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qui sommes-nous ?</h2>
          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Une équipe de passionnés tech qui a remporté plus de 20 hackathons et compétitions avant de décider d'en organiser pour les autres.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="card-hover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-lg overflow-visible">
                <CardBody className="overflow-visible p-0">
                  <div className="relative">
                    <Image
                      alt={member.name}
                      className="w-full object-cover h-64"
                      src={member.image}
                      radius="lg"
                      removeWrapper
                    />
                    <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-4 rounded-2xl shadow-lg">
                      <Icon icon={member.icon} width={28} height={28} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-foreground-500">{member.role}</p>
                    <div className="mt-4 flex items-center">
                      <Icon icon="lucide:award" className="text-primary-500 mr-2" />
                      <span className="text-sm">{member.achievements}</span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 gradient-bg p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Notre mission</h3>
              <p className="mb-4">
                Créer des événements tech qui inspirent, challengent et connectent la prochaine génération de talents numériques.
              </p>
              <ul className="space-y-2">
                {[
                  "Plus de 30 événements organisés",
                  "12 écoles partenaires",
                  "3000+ participants satisfaits",
                  "Expertise en IA, Cybersécurité et Data"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <Icon icon="lucide:check-circle" className="text-primary-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                alt="Équipe Playground en action"
                className="w-full rounded-xl shadow-lg"
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=playground-team"
                radius="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};