import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React e Node.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com/everton365/DigitalStore",
      live: "https://everton365.github.io/DigitalStore/",
    },
    {
      title: "Análise de imagens",
      description: "Aplicativo com javascript",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "https://github.com/everton365/projeto-chamine",
      live: "",
    },
    {
      title: "Portfolio Website",
      description: "Site de portfólio com React.js",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      github: "https://github.com/everton365/LandingPage",
      live: "https://everton365.github.io/LandingPage/",
    },
    {
      title: "Jogo Bíblico",
      description: "Pagina de perguntas e respostas sobre a Bíblia",
      image: "https://th.bing.com/th/id/R.facdb130a9f2dbb1cd34cbf4f6b8e30d?rik=v2Z0ype%2fUvSKiw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-TZw6YmBl0A0%2fTntSQti9UPI%2fAAAAAAAAP0Q%2fJkq2FlQHHss%2fs1600%2fGotas-de-Agua-en-HD_18.jpg&ehk=WdFlpoASwA8oHpwhiRyuQim5YvRN6SRDRHwq1jZd%2bwk%3d&risl=&pid=ImgRaw&r=0",
      github: "https://github.com/everton365/quiz-quest-randomizer-gem.git",
      live: "https://pingandozelo.com.br"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;