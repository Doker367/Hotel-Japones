import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import sanitizeHtml from 'sanitize-html';
import dotenv from 'dotenv';
import menuRoutes from './routes/menu';
import reservationRoutes from './routes/reservations';
import galleryRoutes from './routes/gallery';
import contactRoutes from './routes/contact';

dotenv.config();

const app = express();
app.set('trust proxy', 1);
const PORT = process.env.PORT || 3001;

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
      scriptSrc: ["'self'"],
    },
  },
}));

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:80',
  credentials: true,
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: { error: 'Demasiadas solicitudes, por favor intenta más tarde.' },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', limiter);

app.use((req, res, next) => {
  if (req.body) {
    if (Buffer.isBuffer(req.body)) {
      req.body = sanitizeHtml(req.body.toString('utf8'), {
        allowedTags: [],
        allowedAttributes: {},
      });
    } else if (typeof req.body === 'string') {
      req.body = sanitizeHtml(req.body, {
        allowedTags: [],
        allowedAttributes: {},
      });
    } else if (typeof req.body === 'object') {
      for (const key in req.body) {
        if (typeof req.body[key] === 'string') {
          req.body[key] = sanitizeHtml(req.body[key], {
            allowedTags: [],
            allowedAttributes: {},
          });
        }
      }
    }
  }
  next();
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contact', contactRoutes);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`🐉 Server running on port ${PORT}`);
  console.log(`🍜 Dragon Dorado API ready`);
});

export default app;
