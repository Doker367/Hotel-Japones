import { Router } from 'express';

const router = Router();

const galleryImages = [
  {
    id: '1',
    title: 'Sala Principal',
    description: 'Ambiente tradicional chino',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
    category: 'ambiente',
  },
  {
    id: '2',
    title: 'Chef Preparando Dim Sum',
    description: 'Maestría culinaria',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600',
    category: 'cocina',
  },
  {
    id: '3',
    title: 'Pato Pekinés',
    description: 'Nuestra especialidad',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
    category: 'comida',
  },
  {
    id: '4',
    title: 'Jardín Interior',
    description: 'Zen oriental',
    image: 'https://images.unsplash.com/photo-1545562083-c583d0894def?w=600',
    category: 'ambiente',
  },
  {
    id: '5',
    title: 'Bowl de Fideos',
    description: 'Arte culinario',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600',
    category: 'comida',
  },
  {
    id: '6',
    title: 'Bar y Lounge',
    description: 'Área de entretenimiento',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600',
    category: 'ambiente',
  },
  {
    id: '7',
    title: 'Té de Jasmine',
    description: 'Tradición milenaria',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600',
    category: 'comida',
  },
  {
    id: '8',
    title: 'Sala VIP',
    description: 'Exclusividad',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    category: 'ambiente',
  },
];

router.get('/', (req, res) => {
  const { category } = req.query;
  
  if (category && category !== 'all') {
    const filtered = galleryImages.filter(img => img.category === category);
    return res.json(filtered);
  }
  
  res.json(galleryImages);
});

router.get('/categories', (req, res) => {
  const categories = ['ambiente', 'cocina', 'comida'];
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const image = galleryImages.find(img => img.id === req.params.id);
  
  if (!image) {
    return res.status(404).json({ error: 'Imagen no encontrada' });
  }
  
  res.json(image);
});

export default router;
