import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content2 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-500 text-white p-2 rounded-lg">
                <Icon icon="lucide:octagon" width={24} height={24} />
              </div>
              <p className="font-bold text-2xl">Octopouce</p>
            </div>
            <p className="text-foreground-600 mb-4 max-w-md">
              Nous créons des événements tech engageants et innovants pour les écoles et entreprises du numérique.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-foreground-500 hover:text-primary-500">
                <Icon icon="logos:twitter" width={24} height={24} />
              </Link>
              <Link href="#" className="text-foreground-500 hover:text-primary-500">
                <Icon icon="logos:linkedin-icon" width={24} height={24} />
              </Link>
              <Link href="#" className="text-foreground-500 hover:text-primary-500">
                <Icon icon="logos:instagram-icon" width={24} height={24} />
              </Link>
              <Link href="#" className="text-foreground-500 hover:text-primary-500">
                <Icon icon="logos:discord-icon" width={24} height={24} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-foreground-600 hover:text-primary-500">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#formats" className="text-foreground-600 hover:text-primary-500">
                  Nos formats
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-foreground-600 hover:text-primary-500">
                  Offres
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-foreground-600 hover:text-primary-500">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground-600 hover:text-primary-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary-500" />
                <span className="text-foreground-600">sayahkhalilpro@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary-500" />
                <span className="text-foreground-600">+33 780 60 4144</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" className="text-primary-500" />
                <span className="text-foreground-600">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-500 text-sm">
            © {new Date().getFullYear()} Octopouce. Tous droits réservés.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-foreground-500 text-sm hover:text-primary-500">
              Mentions légales
            </Link>
            <Link href="#" className="text-foreground-500 text-sm hover:text-primary-500">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-foreground-500 text-sm hover:text-primary-500">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};