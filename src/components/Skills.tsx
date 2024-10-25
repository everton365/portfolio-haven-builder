import { Card } from "@/components/ui/card";
import Lottie from "lottie-react";
import reactAnimation from "../assets/animations/react.json";
import typescriptAnimation from "../assets/animations/typescript.json";
import nodeAnimation from "../assets/animations/nodejs.json";
import pythonAnimation from "../assets/animations/python.json";
import sqlAnimation from "../assets/animations/database.json";
import awsAnimation from "../assets/animations/cloud.json";

const Skills = () => {
  const skills = [
    { 
      name: "React", 
      level: "90%", 
      animation: reactAnimation,
      description: "Desenvolvimento de interfaces modernas e responsivas"
    },
    { 
      name: "TypeScript", 
      level: "85%", 
      animation: typescriptAnimation,
      description: "Código mais seguro e manutenível"
    },
    { 
      name: "Node.js", 
      level: "80%", 
      animation: nodeAnimation,
      description: "Construção de APIs e serviços backend"
    },
    { 
      name: "Python", 
      level: "75%", 
      animation: pythonAnimation,
      description: "Automação e processamento de dados"
    },
    { 
      name: "SQL", 
      level: "85%", 
      animation: sqlAnimation,
      description: "Gerenciamento e otimização de bancos de dados"
    },
    { 
      name: "AWS", 
      level: "70%", 
      animation: awsAnimation,
      description: "Deploy e infraestrutura em nuvem"
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-muted">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4">
                <Lottie animationData={skill.animation} loop={true} />
              </div>
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2.5 mb-2">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="text-sm text-muted-foreground block mb-2">
                {skill.level}
              </span>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;