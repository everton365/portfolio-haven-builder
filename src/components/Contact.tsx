import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
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
                <span>contato@exemplo.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <Input placeholder="Seu Nome" />
              </div>
              <div>
                <Input type="email" placeholder="Seu Email" />
              </div>
              <div>
                <Textarea placeholder="Sua Mensagem" className="min-h-[120px]" />
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