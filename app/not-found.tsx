"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4 animate-fade-in">
        {/* 404 */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-primary/30 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
          </div>
        </div>

        {/* Mensagem */}
        <div className="space-y-3">
          <h2 className="text-3xl font-heading font-bold text-foreground">
            Oops! Página não encontrada
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>

        {/* Botão */}
        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="gap-2">
              <Home className="w-5 h-5" />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
