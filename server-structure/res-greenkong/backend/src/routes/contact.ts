import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}

const messages: ContactMessage[] = [];

router.post('/', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  const newMessage: ContactMessage = {
    id: uuidv4(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
    read: false,
  };

  messages.push(newMessage);

  res.status(201).json({
    message: 'Mensaje enviado exitosamente',
    id: newMessage.id,
  });
});

router.get('/', (req, res) => {
  res.json(messages);
});

router.put('/:id/read', (req, res) => {
  const message = messages.find(m => m.id === req.params.id);
  
  if (!message) {
    return res.status(404).json({ error: 'Mensaje no encontrado' });
  }
  
  message.read = true;
  res.json(message);
});

router.delete('/:id', (req, res) => {
  const index = messages.findIndex(m => m.id === req.params.id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Mensaje no encontrado' });
  }
  
  messages.splice(index, 1);
  res.json({ message: 'Mensaje eliminado' });
});

export default router;
