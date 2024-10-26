import { useRef } from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from '@/components/ui/footer';

const Index = () => {
  const projectsRef = useRef(null);
  const contatoRef = useRef(null);


  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const scrollToContato = () => {
    contatoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-background">
    
      <Hero scrollToProjects={scrollToProjects} scrollToContato={scrollToContato} />
      <About />
      <Skills />
     
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contatoRef}>
      <Contact />
      </div>
        <Footer/>
    </main>
  
    
  );
};

export default Index;
