import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-muted">
      <div className="container px-4 py-16 animate-fade-up">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary">
            Olá, eu sou <span className="text-primary">João Silva</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar experiências web incríveis e soluções inovadoras
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" size="lg">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg">
              Contato
            </Button>
          </div>
          <div className="flex gap-4 justify-center pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a href="mailto:contato@exemplo.com">
              <Mail className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;