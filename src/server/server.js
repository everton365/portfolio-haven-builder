// server.js
import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Validação de variáveis de ambiente
if (!process.env.TWILIO_SID || !process.env.TWILIO_AUTH_TOKEN) {
  console.error('ERRO: Variáveis TWILIO_SID e TWILIO_AUTH_TOKEN são obrigatórias');
  process.exit(1);
}

// Rate limiting - máximo 5 mensagens por IP a cada 15 minutos
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5,
  message: { error: 'Muitas tentativas. Tente novamente em 15 minutos.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS configurado para origens específicas
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:5173'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
  credentials: false
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use('/send-whatsapp', limiter);

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Função de validação de entrada
const validateContactData = (data) => {
  const { name, email, mensage } = data;
  
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return { valid: false, error: 'Nome deve ter pelo menos 2 caracteres' };
  }
  
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, error: 'Email inválido' };
  }
  
  if (!mensage || typeof mensage !== 'string' || mensage.trim().length < 10) {
    return { valid: false, error: 'Mensagem deve ter pelo menos 10 caracteres' };
  }
  
  // Sanitização básica
  const sanitizedData = {
    name: name.trim().substring(0, 100),
    email: email.trim().toLowerCase().substring(0, 100),
    mensage: mensage.trim().substring(0, 500)
  };
  
  return { valid: true, data: sanitizedData };
};

app.post("/send-whatsapp", async (req, res) => {
  try {
    // Validação dos dados de entrada
    const validation = validateContactData(req.body);
    if (!validation.valid) {
      return res.status(400).json({ success: false, error: validation.error });
    }

    const { name, email, mensage } = validation.data;
    
    // Log seguro (sem dados sensíveis)
    console.log(`Nova mensagem recebida de: ${email.substring(0, 3)}***`);
    
    const formattedMensage = `Nome: ${name}\nEmail: ${email}\nMensagem: ${mensage}`;

    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: process.env.WHATSAPP_TO_NUMBER || "whatsapp:+558592665875",
      body: formattedMensage,
    });

    console.log(`Mensagem enviada com sucesso: ${message.sid}`);
    res.json({ success: true, mensageSid: message.sid });
    
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Erro interno do servidor. Tente novamente mais tarde.' 
    });
  }
});

// Middleware de tratamento de erros global
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err.message);
  res.status(500).json({ 
    success: false, 
    error: 'Erro interno do servidor' 
  });
});

// Rota de health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Health check disponível em: http://localhost:${PORT}/health`);
});
