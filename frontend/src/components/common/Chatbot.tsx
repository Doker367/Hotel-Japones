import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock, MapPin, Phone, Utensils, Star } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

const quickActions = [
  { icon: Clock, label: 'Horarios', message: '¿Cuáles son sus horarios de atención?' },
  { icon: Utensils, label: 'Menú', message: '¿Me pueden mostrar el menú?' },
  { icon: MapPin, label: 'Ubicación', message: '¿Dónde están ubicados?' },
  { icon: Phone, label: 'Contactar', message: '¿Cómo puedo contactarlos?' },
  { icon: Star, label: 'Reseñas', message: '¿Tienen reseñas de clientes?' },
];

const botResponses: Record<string, string> = {
  default: 'Gracias por contactarnos. ¿Hay algo más en lo que pueda ayudarte?',
  horarios: '🕐 Nuestro horario es:\n• Lunes - Domingo: 11:00 - 23:00\n• Última orden: 22:30\n\nEstamos listos para atenderte!',
  menu: '📜 tenemos un menú extenso con:\n• 5 Entrantes\n• 11 Platos Fuertes\n• 5 Postres\n• 5 Bebidas\n\nVisita nuestra sección de Menú para ver todos los platillos con sus precios.',
  ubicacion: '📍 Estamos en:\nCalle de la Seda 123\nCiudad China, CP 12345\n\n¡Te esperamos!',
  contactar: '📞 Puedes contactarnos:\n• Tel: +1 234 567 890\n• Email: info@dragondorado.com\n• O usa el formulario de contacto',
  reseñas: '⭐ Nuestras reseñas:\n\n"Mejor comida china de la ciudad"\n- María G. ⭐⭐⭐⭐⭐\n\n"Sabores auténticos y ambiente increíble"\n- Carlos R. ⭐⭐⭐⭐⭐\n\n¡Visítanos y sé tu propio judge!',
  reservacion: 'Para hacer una reservación, puedes:\n1. Llamar al +1 234 567 890\n2. Usar nuestro formulario de contacto\n3. Venir directamente (sujeto a disponibilidad)',
  gracias: '¡De nada! 😊 Fue un placer ayudarte. ¡Que tengas un excelente día!',
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: '¡Hola! 🐉 Soy el asistente de Dragon Dorado. ¿En qué puedo ayudarte hoy?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');

  const getResponse = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('horario')) return botResponses.horarios;
    if (lowerText.includes('menú') || lowerText.includes('menu') || lowerText.includes('comida')) return botResponses.menu;
    if (lowerText.includes('ubicación') || lowerText.includes('dirección') || lowerText.includes('dónde')) return botResponses.ubicacion;
    if (lowerText.includes('contact') || lowerText.includes('teléfono') || lowerText.includes('llamar')) return botResponses.contactar;
    if (lowerText.includes('reseña') || lowerText.includes('opinión') || lowerText.includes('review')) return botResponses.reseñas;
    if (lowerText.includes('reserv') || lowerText.includes('reserva')) return botResponses.reservacion;
    if (lowerText.includes('gracias')) return botResponses.gracias;
    return botResponses.default;
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputText),
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);

    setInputText('');
  };

  const handleQuickAction = (message: string) => {
    setInputText(message);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-dragon-red to-gold rounded-full flex items-center justify-center shadow-lg shadow-dragon-red/30"
      >
        <MessageCircle className="text-white" size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-charcoal rounded-2xl shadow-2xl border border-gold/20 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-dragon-red to-dragon-red-dark p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐉</span>
                <div>
                  <h3 className="text-white font-bold">Dragon Dorado</h3>
                  <p className="text-white/70 text-xs">En línea ahora</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-dragon-red text-white'
                        : 'bg-black/50 text-cream'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-3 border-t border-gold/10">
              <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickAction(action.message)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-gold/10 hover:bg-gold/20 text-gold text-xs rounded-full whitespace-nowrap transition-colors"
                  >
                    <action.icon size={12} />
                    {action.label}
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 bg-black/50 border border-gold/20 rounded-full px-4 py-2 text-sm text-cream placeholder-gold/30 focus:border-gold focus:outline-none"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black"
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
