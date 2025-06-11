import React from "react";
import { Image, Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Gallery: React.FC = () => {
  const galleryItems = [
    {
      type: "image",
      src: "https://img.heroui.chat/image/ai?w=600&h=400&u=hackathon-event-1",
      title: "Hackathon IA Paris 2023"
    },
    {
      type: "image",
      src: "https://img.heroui.chat/image/ai?w=600&h=400&u=ctf-event-1",
      title: "CTF Cybersécurité Lyon"
    },
    {
      type: "video",
      thumbnail: "https://img.heroui.chat/image/ai?w=600&h=400&u=datathon-video-thumbnail",
      title: "Datathon Toulouse 2023"
    },
    {
      type: "image",
      src: "https://img.heroui.chat/image/ai?w=600&h=400&u=workshop-event-1",
      title: "Workshop Blockchain"
    },
    {
      type: "image",
      src: "https://img.heroui.chat/image/ai?w=600&h=400&u=hackathon-event-2",
      title: "Hackathon Santé Bordeaux"
    },
    {
      type: "video",
      thumbnail: "https://img.heroui.chat/image/ai?w=600&h=400&u=hackathon-video-thumbnail",
      title: "Résumé Hackathon Fintech"
    }
  ];

  return (
    <section id="gallery" className="py-20 px-4 gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galerie d'événements</h2>
          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Découvrez nos événements précédents et laissez-vous inspirer pour votre prochain challenge tech.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="card-hover"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg overflow-hidden">
                <CardBody className="p-0 relative group">
                  <Image
                    alt={item.title}
                    className="w-full object-cover h-64 transition-transform duration-300 group-hover:scale-105"
                    src={item.type === "image" ? item.src : item.thumbnail}
                    radius="none"
                    removeWrapper
                  />
                  
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary-500 bg-opacity-80 rounded-full p-4 shadow-lg">
                        <Icon icon="lucide:play" className="text-white" width={24} height={24} />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <Button 
                        size="sm" 
                        color="primary" 
                        variant="flat" 
                        className="mt-2"
                        startContent={item.type === "video" ? <Icon icon="lucide:play" /> : <Icon icon="lucide:zoom-in" />}
                      >
                        {item.type === "video" ? "Voir la vidéo" : "Agrandir"}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            color="primary" 
            variant="flat" 
            size="lg"
            endContent={<Icon icon="lucide:external-link" />}
          >
            Voir plus d'événements
          </Button>
        </div>
      </div>
    </section>
  );
};