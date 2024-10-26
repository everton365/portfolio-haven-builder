// server.js
import express from "express";
import twilio from "twilio";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 3000;

// Middleware para parse do JSON
app.use(cors());
app.use(express.json());

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.post("/send-whatsapp", (req, res) => {
  const { name, email, mensage } = req.body;
  console.log(name, email, mensage);
  const formattedMensage = `Nome: ${name}\nEmail: ${email}\nMensagem: ${mensage}`;

  client.messages
    .create({
      from: "whatsapp:+14155238886", // Número do Twilio WhatsApp
      to: "whatsapp:+558592665875", // Seu número no formato internacional, e.g., +5511999998888
      body: formattedMensage,
    })
    .then((mensage) => res.json({ success: true, mensageSid: mensage.sid }))
    .catch((error) =>
      res.status(500).json({ success: false, error: error.mensage })
    );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
