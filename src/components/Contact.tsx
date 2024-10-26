import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mensage, setMensage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, mensage };

    try {
      const response = await fetch('http://localhost:3000/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Mensagem enviada com sucesso');
        setName('');
        setEmail('');
        setMensage('');
      } else {
        console.error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };


  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contato
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span>evertonapk09@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span>+55 (85) 992665875</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Aquiraz, CE - Brasil</span>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4"  >
              <div>
                <Input placeholder="Seu Nome" value={name} onChange={(e)=> setName(e.target.value)} />
              </div>
              <div>
                <Input type="email" placeholder="Seu Email"  value={email} onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <div>
                <Textarea placeholder="Sua Mensagem" className="min-h-[120px]"   value={mensage} onChange={(e)=> setMensage(e.target.value)}/>
              </div>
              <Button type="submit" className="w-full">
            Enviar Mensagem
          </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;