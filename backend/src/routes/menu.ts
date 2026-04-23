import { Router } from 'express';
import menuItems from '../data/menu';

const router = Router();

router.get('/', (req, res) => {
  const { category } = req.query;
  
  if (category && category !== 'all') {
    const filtered = menuItems.filter(item => item.category === category);
    return res.json(filtered);
  }
  
  res.json(menuItems);
});

router.get('/popular', (req, res) => {
  const popularItems = menuItems.filter(item => item.popular);
  res.json(popularItems);
});

router.get('/categories', (req, res) => {
  const categories = ['appetizers', 'mains', 'desserts', 'beverages'];
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const item = menuItems.find(i => i.id === req.params.id);
  
  if (!item) {
    return res.status(404).json({ error: 'Item no encontrado' });
  }
  
  res.json(item);
});

export default router;
