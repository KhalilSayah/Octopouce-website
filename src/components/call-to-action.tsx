import React from "react";
import { Card, CardBody, Input, Button, Textarea } from "@heroui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export const CallToAction: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    isSubmitting: false,
    isSubmitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        isSubmitted: true,
        name: "",
        email: "",
        organization: "",
        message: ""
      }));
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-primary-100 -z-10"
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        style={{ top: '10%', right: '-10%' }}
      />
      
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-secondary-100 -z-10"
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        style={{ bottom: '10%', left: '-5%' }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à organiser votre événement tech ?</h2>
          <p className="text-xl text-foreground-600 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <Icon icon="lucide:calendar" className="text-primary-500" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Réservez un call</h4>
                  <p className="text-foreground-600">
                    30 minutes pour discuter de vos besoins et explorer les possibilités.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <Icon icon="lucide:mail" className="text-primary-500" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-foreground-600">
                    contact@playground-events.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <Icon icon="lucide:phone" className="text-primary-500" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Téléphone</h4>
                  <p className="text-foreground-600">
                    +33 (0)6 12 34 56 78
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-xl">
                  <Icon icon="lucide:map-pin" className="text-primary-500" width={24} height={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Adresse</h4>
                  <p className="text-foreground-600">
                    55 Rue du Faubourg Saint-Honoré, 75008 Paris
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-lg">
              <CardBody className="p-6">
                {formState.isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                      <Icon icon="lucide:check" className="text-primary-500" width={32} height={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                    <p className="text-foreground-600">
                      Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Nom"
                      placeholder="Votre nom"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      variant="bordered"
                      radius="lg"
                      isRequired
                    />
                    
                    <Input
                      label="Email"
                      placeholder="votre.email@exemple.com"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      variant="bordered"
                      radius="lg"
                      isRequired
                      type="email"
                    />
                    
                    <Input
                      label="Organisation"
                      placeholder="Nom de votre entreprise ou école"
                      name="organization"
                      value={formState.organization}
                      onChange={handleChange}
                      variant="bordered"
                      radius="lg"
                      isRequired
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Décrivez votre projet d'événement..."
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      variant="bordered"
                      radius="lg"
                      minRows={4}
                      isRequired
                    />
                    
                    <Button 
                      type="submit" 
                      color="primary" 
                      size="lg" 
                      className="w-full"
                      isLoading={formState.isSubmitting}
                      startContent={!formState.isSubmitting && <Icon icon="lucide:send" />}
                    >
                      {formState.isSubmitting ? "Envoi en cours..." : "Envoyer"}
                    </Button>
                  </form>
                )}
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};