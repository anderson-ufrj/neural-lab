'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Bot, ExternalLink, Calendar, Mail, Briefcase, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useAnalytics } from '@/hooks/use-analytics';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  actions?: ActionButton[];
}

interface ActionButton {
  id: string;
  text: string;
  icon: React.ReactNode;
  action: 'whatsapp' | 'schedule' | 'email' | 'portfolio' | 'pricing';
  url?: string;
}

interface LeadData {
  company?: string;
  role?: string;
  challenge?: string;
  timeline?: string;
  budget?: string;
  score: number;
}

export function AIChatButton() {
  const t = useTranslations('chat');
  const tCommon = useTranslations('common');
  const { trackChatInteraction } = useAnalytics();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('welcome'),
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({ score: 0 });
  const [conversationStage, setConversationStage] = useState<'initial' | 'qualifying' | 'converting'>('initial');

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Track chat interaction
    trackChatInteraction('message_sent', inputValue);

    // Update lead scoring
    updateLeadScore(inputValue);
    
    // Analyze intent and get smart response
    setTimeout(() => {
      const intent = analyzeUserIntent(inputValue);
      const smartResponse = getSmartResponse(intent);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: smartResponse.text,
        isBot: true,
        timestamp: new Date(),
        actions: smartResponse.actions
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const analyzeUserIntent = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Intent keywords mapping
    const intents = {
      pricing: ['preço', 'custo', 'valor', 'orçamento', 'price', 'cost', 'budget', 'quanto'],
      urgency: ['urgente', 'rápido', 'agora', 'hoje', 'urgent', 'asap', 'quick', 'fast'],
      services: ['serviço', 'chatbot', 'automação', 'ia', 'service', 'automation', 'ai', 'artificial'],
      experience: ['experiência', 'case', 'exemplo', 'portfolio', 'experience', 'examples'],
      roi: ['roi', 'retorno', 'resultado', 'benefit', 'return', 'results'],
      competition: ['concorrente', 'diferencial', 'porque', 'why', 'competitor', 'difference'],
      team: ['equipe', 'time', 'quem', 'team', 'who'],
      process: ['processo', 'como', 'metodologia', 'process', 'how', 'methodology'],
      contact: ['contato', 'falar', 'conversar', 'contact', 'talk', 'call']
    };

    // Find matching intent
    for (const [intent, keywords] of Object.entries(intents)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        return intent;
      }
    }

    // Default responses based on conversation stage
    if (conversationStage === 'initial') {
      return ['services', 'capabilities', 'experience'][Math.floor(Math.random() * 3)];
    } else if (conversationStage === 'qualifying') {
      return ['interest', 'contact'][Math.floor(Math.random() * 2)];
    } else {
      return 'contact';
    }
  };

  const updateLeadScore = (message: string) => {
    let newScore = leadData.score;
    const lowerMessage = message.toLowerCase();

    // Score based on message content - mais agressivo
    if (lowerMessage.includes('empresa') || lowerMessage.includes('company')) newScore += 15;
    if (lowerMessage.includes('projeto') || lowerMessage.includes('project')) newScore += 20;
    if (lowerMessage.includes('orçamento') || lowerMessage.includes('budget')) newScore += 25;
    if (lowerMessage.includes('urgente') || lowerMessage.includes('urgent')) newScore += 30;
    if (lowerMessage.includes('quando') || lowerMessage.includes('when')) newScore += 10;
    if (lowerMessage.includes('preço') || lowerMessage.includes('price')) newScore += 20;
    if (lowerMessage.includes('contrato') || lowerMessage.includes('contract')) newScore += 25;
    if (lowerMessage.includes('equipe') || lowerMessage.includes('team')) newScore += 15;
    if (lowerMessage.includes('integrar') || lowerMessage.includes('integrate')) newScore += 15;
    if (lowerMessage.length > 50) newScore += 8; // Detailed messages
    if (lowerMessage.length > 100) newScore += 5; // Very detailed
    
    // Boost score for business indicators
    if (lowerMessage.match(/\b(cnpj|ceo|diretor|gerente|coordenador)\b/)) newScore += 20;
    if (lowerMessage.match(/\b(mil|milhões|budget|investir|investimento)\b/)) newScore += 25;
    
    setLeadData(prev => ({ ...prev, score: Math.min(100, newScore) }));
    
    // Update conversation stage based on score - mais rápido
    if (newScore >= 25 && conversationStage === 'initial') {
      setConversationStage('qualifying');
    } else if (newScore >= 50 && conversationStage === 'qualifying') {
      setConversationStage('converting');
    }
    
    // Auto-trigger contact suggestion for hot leads
    if (newScore >= 70) {
      setTimeout(() => {
        const hotLeadMessage: Message = {
          id: (Date.now() + 2).toString(),
          text: t('leadCapture.hotLead'),
          isBot: true,
          timestamp: new Date(),
          actions: [
            {
              id: 'whatsapp-urgent',
              text: '⚡ WhatsApp AGORA',
              icon: <ExternalLink className="w-4 h-4" />,
              action: 'whatsapp',
              url: `https://wa.me/${tCommon('whatsapp').replace('+', '')}?text=${encodeURIComponent(tCommon('whatsappMessage'))}`
            }
          ]
        };
        setMessages(prev => [...prev, hotLeadMessage]);
      }, 3000);
    }
  };

  const getSmartResponse = (intent: string): { text: string; actions?: ActionButton[] } => {
    let baseResponse = t(`responses.${intent}`);
    let actions: ActionButton[] = [];
    
    // Special messages for qualified leads
    if (leadData.score >= 70 && conversationStage === 'converting') {
      baseResponse = t('leadCapture.hotLead');
    } else if (leadData.score >= 50 && conversationStage === 'qualifying') {
      baseResponse = t('leadCapture.qualifiedLead');
    }

    // Add contextual action buttons based on intent and lead score - mais proativo
    if (intent === 'contact' || intent === 'pricing' || intent === 'urgency' || leadData.score >= 35) {
      actions = [
        {
          id: 'whatsapp',
          text: t('actions.whatsapp'),
          icon: <ExternalLink className="w-4 h-4" />,
          action: 'whatsapp',
          url: `https://wa.me/${tCommon('whatsapp').replace('+', '')}?text=${encodeURIComponent(tCommon('whatsappMessage'))}`
        },
        {
          id: 'schedule',
          text: t('actions.schedule'),
          icon: <Calendar className="w-4 h-4" />,
          action: 'schedule',
          url: 'https://calendly.com/anderson-henrique-neural-lab/30min'
        },
        {
          id: 'email',
          text: t('actions.email'),
          icon: <Mail className="w-4 h-4" />,
          action: 'email',
          url: `mailto:${tCommon('email')}?subject=Interesse em soluções de IA - Indicado pelo Dédalo&body=Olá Anderson! O Dédalo me indicou você. Gostaria de conversar sobre soluções de IA para minha empresa.`
        }
      ];
    } else if (intent === 'services' || intent === 'capabilities') {
      actions = [
        {
          id: 'portfolio',
          text: t('actions.portfolio'),
          icon: <Briefcase className="w-4 h-4" />,
          action: 'portfolio'
        },
        {
          id: 'pricing',
          text: t('actions.pricing'),
          icon: <DollarSign className="w-4 h-4" />,
          action: 'pricing'
        }
      ];
    }

    return { text: baseResponse, actions };
  };

  const handleActionClick = (action: ActionButton) => {
    trackChatInteraction('action_click', action.action);
    
    if (action.url) {
      window.open(action.url, '_blank');
    } else if (action.action === 'portfolio') {
      // Scroll to portfolio section
      const element = document.getElementById('portfolio');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else if (action.action === 'pricing') {
      // Send pricing message
      const pricingResponse = getSmartResponse('pricing');
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: pricingResponse.text,
        isBot: true,
        timestamp: new Date(),
        actions: pricingResponse.actions
      };
      setMessages(prev => [...prev, botMessage]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => {
          setIsOpen(true);
          trackChatInteraction('chat_opened');
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          boxShadow: ['0 4px 20px rgba(34, 197, 94, 0.3)', '0 8px 30px rgba(34, 197, 94, 0.5)', '0 4px 20px rgba(34, 197, 94, 0.3)']
        }}
        transition={{ 
          boxShadow: { duration: 2, repeat: Infinity },
          scale: { duration: 0.2 }
        }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Notification dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-end p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Chat Window */}
            <motion.div
              className="relative w-full max-w-md h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('title')}</h3>
                    <div className="flex items-center gap-2">
                      <p className="text-sm opacity-90">{t('online')}</p>
                      {/* Lead score indicator (development only) */}
                      {process.env.NODE_ENV === 'development' && leadData.score > 0 && (
                        <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          Score: {leadData.score}% • {conversationStage}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`max-w-[85%] space-y-2`}>
                      {/* Message bubble */}
                      <div className={`p-3 rounded-2xl ${
                        message.isBot 
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' 
                          : 'bg-green-600 text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      </div>
                      
                      {/* Action buttons */}
                      {message.isBot && message.actions && message.actions.length > 0 && (
                        <motion.div 
                          className="flex flex-wrap gap-2 mt-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {message.actions.map((action) => (
                            <motion.button
                              key={action.id}
                              onClick={() => handleActionClick(action)}
                              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-500 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors shadow-sm"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {action.icon}
                              <span>{action.text}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={t('placeholder')}
                    className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!inputValue.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}