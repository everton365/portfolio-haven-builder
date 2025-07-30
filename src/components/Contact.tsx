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

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Validação básica no frontend
    if (!name.trim() || !email.trim() || !mensage.trim()) {
      setMessage('Todos os campos são obrigatórios');
      setIsLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Por favor, insira um email válido');
      setIsLoading(false);
      return;
    }

    const formData = { name, email, mensage };

    try {
      const response = await fetch('/api/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setMessage('Mensagem enviada com sucesso!');
        setName('');
        setEmail('');
        setMensage('');
      } else {
        setMessage(result.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      setMessage('Erro de conexão. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
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
                <span>Fortaleza, CE - Brasil</span>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {message && (
                <div className={`p-3 rounded ${message.includes('sucesso') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {message}
                </div>
              )}
              <div>
                <Input 
                  placeholder="Seu Nome" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                  maxLength={100}
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Seu Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  maxLength={100}
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Sua Mensagem" 
                  className="min-h-[120px]" 
                  value={mensage} 
                  onChange={(e) => setMensage(e.target.value)}
                  disabled={isLoading}
                  maxLength={500}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;