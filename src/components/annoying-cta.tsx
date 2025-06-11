import React from "react";
import { Button, Modal, ModalContent, ModalBody, ModalFooter } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

export const AnnoyingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [buttons, setButtons] = React.useState<{id: number, x: number, y: number}[]>([]);
  const [showModal, setShowModal] = React.useState(false);
  const [buttonCount, setButtonCount] = React.useState(0);
  const maxButtons = 10; // Maximum number of buttons to show

  // Show the CTA when user scrolls to the pricing section
  React.useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById("pricing");
      if (!pricingSection) return;
      
      const pricingRect = pricingSection.getBoundingClientRect();
      const isPricingSectionVisible = pricingRect.top < window.innerHeight && pricingRect.bottom > 0;
      
      if (isPricingSectionVisible) {
        if (!isVisible) {
          setIsVisible(true);
          // Add the first button
          addButton();
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const addButton = () => {
    if (buttons.length >= maxButtons) {
      // If we've reached max buttons, show the modal
      setShowModal(true);
      return;
    }

    // Get viewport dimensions
    const viewportWidth = window.innerWidth - 300; // Button width buffer
    const viewportHeight = window.innerHeight - 100; // Button height buffer
    
    // Generate random position
    const x = Math.random() * viewportWidth;
    const y = Math.random() * viewportHeight * 0.7; // Keep in top 70% of screen
    
    setButtons(prev => [...prev, { 
      id: Date.now(), 
      x, 
      y 
    }]);
    
    setButtonCount(prev => prev + 1);
  };

  const handleClose = (id: number) => {
    // Remove the button
    setButtons(prev => prev.filter(button => button.id !== id));
    
    // Add 2 new buttons in random positions
    setTimeout(() => {
      addButton();
      setTimeout(() => addButton(), 200);
    }, 100);
  };

  const handleButtonClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // Hide all buttons
    setButtons([]);
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && buttons.map(button => (
          <motion.div
            key={button.id}
            className="fixed z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              left: button.x,
              top: button.y,
            }}
          >
            <div className="relative">
              <Button
                color="primary"
                size="lg"
                variant="shadow"
                className="px-8 py-6 text-lg font-bold"
                startContent={<Icon icon="lucide:calendar" width={24} height={24} />}
                onPress={handleButtonClick}
              >
                Réserver un call
              </Button>
              
              <Button
                isIconOnly
                size="sm"
                variant="light"
                radius="full"
                className="absolute -top-2 -right-2 bg-white"
                onPress={() => handleClose(button.id)}
              >
                <Icon icon="lucide:x" />
              </Button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      
      <Modal isOpen={showModal} onOpenChange={setShowModal}>
        <ModalContent>
          <ModalBody className="py-6">
            <div className="text-center">
              <div className="mx-auto bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Icon icon="lucide:smile" className="text-primary-500" width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Vous êtes persévérant !</h3>
              <p className="text-foreground-600">
                Vous avez fermé {buttonCount} boutons. Nous apprécions votre détermination !
              </p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={() => {
              setShowModal(false);
              handleButtonClick();
            }}>
              Réserver un call
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};