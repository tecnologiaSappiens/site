"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_URL =
  "https://wa.me/5511935031749?text=Quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20Sappie";

export const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    segment: "",
    size: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Radix Select isn't a native form control, so `required` doesn't block submit
    if (!formData.segment) {
      toast({
        title: "Selecione o segmento",
        description: "Informe se você representa uma empresa ou instituição de ensino.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formDataToSend = new FormData(form);

      const response = await fetch("https://formspree.io/f/xgvorwrz", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Pedido de demonstração enviado!",
          description: "Nossa equipe entrará em contato em breve para agendar.",
        });
      } else {
        throw new Error("Erro ao enviar pedido");
      }
    } catch {
      toast({
        title: "Erro ao enviar pedido",
        description: "Por favor, tente novamente ou fale conosco pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="p-10 bg-card/50 backdrop-blur-sm border-primary/20 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="font-heading text-2xl mb-3">Pedido enviado com sucesso!</h2>
        <p className="text-muted-foreground mb-8">
          Obrigado pelo interesse. Nossa equipe entrará em contato em breve para agendar sua
          demonstração. Se preferir agilizar, chame a gente no WhatsApp.
        </p>
        <Button variant="outline" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="formType" value="demo" />
        <input
          type="hidden"
          name="_subject"
          value="Novo pedido de demonstração — Sappie"
        />

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="demo-name">Nome*</Label>
            <Input
              id="demo-name"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo-email">E-mail corporativo*</Label>
            <Input
              id="demo-email"
              name="email"
              type="email"
              placeholder="voce@suaempresa.com.br"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="demo-organization">Empresa ou instituição*</Label>
          <Input
            id="demo-organization"
            name="organization"
            placeholder="Nome da sua organização"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="demo-segment">Segmento*</Label>
            <Select
              value={formData.segment}
              onValueChange={(value) => setFormData({ ...formData, segment: value })}
              disabled={isSubmitting}
            >
              <SelectTrigger id="demo-segment">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="empresa">Empresa</SelectItem>
                <SelectItem value="ensino">Instituição de Ensino</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="segment" value={formData.segment} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="demo-size">Porte</Label>
            <Select
              value={formData.size}
              onValueChange={(value) => setFormData({ ...formData, size: value })}
              disabled={isSubmitting}
            >
              <SelectTrigger id="demo-size">
                <SelectValue placeholder="Colaboradores ou alunos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ate-50">Até 50</SelectItem>
                <SelectItem value="51-200">51 a 200</SelectItem>
                <SelectItem value="201-1000">201 a 1.000</SelectItem>
                <SelectItem value="1000+">Mais de 1.000</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="size" value={formData.size} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="demo-phone">Telefone / WhatsApp</Label>
          <Input
            id="demo-phone"
            name="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="demo-message">O que você quer resolver?</Label>
          <Textarea
            id="demo-message"
            name="message"
            placeholder="Conte um pouco sobre seu desafio de treinamento ou ensino"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            disabled={isSubmitting}
          />
        </div>

        {/* Honeypot field for spam protection */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Agendar demonstração"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Prefere conversar agora?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Chame a gente no WhatsApp
          </a>
        </p>
      </form>
    </Card>
  );
};
