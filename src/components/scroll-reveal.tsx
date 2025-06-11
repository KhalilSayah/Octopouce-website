import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children }) => {
  return (
    <div className="reveal-section">
      {children}
    </div>
  );
};