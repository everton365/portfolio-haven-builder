import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Sobre Mim
        </h2>
        <Card className="p-6 md:p-8 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com mais de 2 anos de experiência em desenvolvimento web, especializo-me
            em criar aplicações web modernas e responsivas. Minha paixão está em
            resolver problemas complexos e transformar ideias em realidade através
            do código.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">2+</h3>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">10+</h3>
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">10+</h3>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;