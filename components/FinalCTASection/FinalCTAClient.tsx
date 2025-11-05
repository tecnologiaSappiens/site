"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { ContactModal } from "@/components/ContactModal";

export const FinalCTAClient = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  return (
    <>
      <Button 
        size="lg"
        variant="outline"
        className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
        onClick={() => setContactModalOpen(true)}
        aria-label="Abrir formulário de contato"
      >
        <MessageCircle 
          className="mr-2 h-5 w-5" 
          aria-hidden="true"
        />
        FALE CONOSCO
      </Button>
      
      <ContactModal 
        open={contactModalOpen} 
        onOpenChange={setContactModalOpen}
        aria-label="Modal de contato"
      />
    </>
  );
};
