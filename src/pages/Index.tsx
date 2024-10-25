import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialMedia from "@/components/SocialMedia";

const Index = () => {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SocialMedia />
      <Contact />
    </main>
  );
};

export default Index;