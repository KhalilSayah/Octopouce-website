import React from "react";
import { Card, CardBody, Avatar, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Directrice de l'Innovation, École IA Paris",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=10",
      content: "L'équipe de Playground a organisé un hackathon exceptionnel pour nos étudiants. Leur expertise technique et leur énergie ont fait toute la différence. Nos étudiants ont adoré l'expérience et ont développé des compétences précieuses.",
      logo: "logos:google"
    },
    {
      name: "Thomas Bernard",
      role: "Responsable Formation, CyberSchool",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=11",
      content: "Le CTF organisé par Playground a été un véritable succès. Les challenges étaient parfaitement calibrés pour nos étudiants, avec une progression pédagogique idéale. Nous avons déjà réservé pour l'année prochaine !",
      logo: "logos:microsoft"
    },
    {
      name: "Sophie Martin",
      role: "Étudiante en Master Data Science",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=12",
      content: "Participer au datathon Playground a été une expérience incroyable. L'organisation était impeccable, les datasets intéressants et le mentorat de grande qualité. J'ai beaucoup appris et j'ai même trouvé un stage grâce aux contacts noués pendant l'événement.",
      logo: "logos:ibm"
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce qu'ils disent de nous</h2>
          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Découvrez les retours de nos clients et participants sur nos événements tech.
          </p>
        </div>
        
        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card className="border-none shadow-lg">
              <CardBody className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <Avatar
                      src={testimonials[activeIndex].image}
                      className="w-24 h-24 mb-4"
                    />
                    <h3 className="font-bold text-xl">{testimonials[activeIndex].name}</h3>
                    <p className="text-foreground-500 mb-2">{testimonials[activeIndex].role}</p>
                    <Icon icon={testimonials[activeIndex].logo} width={80} height={30} />
                  </div>
                  <div className="md:w-2/3">
                    <div className="text-4xl text-primary-300 mb-4">"</div>
                    <p className="text-lg italic mb-4">
                      {testimonials[activeIndex].content}
                    </p>
                    <div className="text-4xl text-primary-300 text-right">"</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
          
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary-500 w-6" : "bg-primary-200"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-content1 p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ils nous font confiance</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "logos:google",
              "logos:microsoft",
              "logos:ibm",
              "logos:amazon",
              "logos:airbnb"
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Icon icon={logo} width={100} height={40} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};