import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const reservations: Reservation[] = [];

router.post('/', (req, res) => {
  const { name, email, phone, date, time, guests, specialRequests } = req.body;

  if (!name || !email || !phone || !date || !time || !guests) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  const reservation: Reservation = {
    id: uuidv4(),
    name,
    email,
    phone,
    date,
    time,
    guests: parseInt(guests),
    specialRequests,
    createdAt: new Date().toISOString(),
    status: 'pending',
  };

  reservations.push(reservation);

  res.status(201).json({
    message: 'Reservación creada exitosamente',
    reservation,
  });
});

router.get('/', (req, res) => {
  res.json(reservations);
});

router.get('/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === req.params.id);
  
  if (!reservation) {
    return res.status(404).json({ error: 'Reservación no encontrada' });
  }
  
  res.json(reservation);
});

router.put('/:id', (req, res) => {
  const { status } = req.body;
  const reservation = reservations.find(r => r.id === req.params.id);
  
  if (!reservation) {
    return res.status(404).json({ error: 'Reservación no encontrada' });
  }
  
  if (status && ['pending', 'confirmed', 'cancelled'].includes(status)) {
    reservation.status = status;
  }
  
  res.json(reservation);
});

router.delete('/:id', (req, res) => {
  const index = reservations.findIndex(r => r.id === req.params.id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Reservación no encontrada' });
  }
  
  reservations.splice(index, 1);
  res.json({ message: 'Reservación cancelada' });
});

export default router;
