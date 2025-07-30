import { Github, Linkedin, Mail,Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import image from "../../public/Imagem2.jpg";


const Hero = ({ scrollToProjects, scrollToContato }) => {
  
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Imagem de capa com overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Capa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90"></div>
      </div>

      <div className="container px-4 py-16 animate-fade-up relative z-10">
        <div className="text-center space-y-8">
          {/* Avatar/Imagem de perfil */}
          <div className="flex justify-center mb-8">
            <Avatar className="w-52 h-48 border-4 border-primary">
              <AvatarImage
                src={image}
                alt="Foto de perfil"
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-secondary">
            Olá, eu sou <span className="text-primary">Everton Silva</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar experiências web incríveis e soluções inovadoras
          </p>
          <div className="flex gap-4 justify-center">
          <Button onClick={scrollToProjects} className="btn-scroll">Ver projetos</Button>
          <Button onClick={scrollToContato} className="btn-scroll">Contato</Button>
            
          </div>
          <div className="flex gap-4 justify-center pt-8">
            <a href="https://github.com/everton365" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/everton-silva-68aa14281" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
            <a href="https://www.instagram.com/ewernoute_informatica/" target="blank">
              <Instagram className="w-6 h-6 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;