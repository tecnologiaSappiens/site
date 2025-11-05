"use client";

import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";

interface FooterContactProps {
  label: string;
}

export const FooterContact = ({ label }: FooterContactProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsContactModalOpen(true)}
        className="text-muted-foreground hover:text-primary transition-colors text-sm text-left cursor-pointer"
        aria-label="Abrir formulário de contato"
      >
        {label}
      </button>
      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />
    </>
  );
};
