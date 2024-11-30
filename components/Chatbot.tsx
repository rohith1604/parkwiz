'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, X, MessageCircle, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'

type Message = {
  text: string
  isUser: boolean
  timestamp: Date
}

const parkingFAQ = [
  {
    keywords: ["services", "offer", "provide"],
    answer: "ParkWiz offers smart parking solutions, RFID vehicle access, FASTag integration, toll plaza management, parking guidance systems, and stack parking solutions. Would you like to know more about any specific service?"
  },
  {
    keywords: ["smart parking", "how", "work"],
    answer: "Our smart parking system uses sensors and real-time monitoring to guide drivers to available spots, reduce congestion, and provide automated payment options. Would you like a demonstration?"
  },
  {
    keywords: ["contact", "reach", "support"],
    answer: "You can reach us at 09693704790 or email us at info@parkwiz.in. Our main office is located in HSR Layout, Bangalore. Would you like me to connect you with our support team?"
  },
  {
    keywords: ["price", "cost", "rates"],
    answer: "Our pricing varies based on the specific solution and scale of implementation. Would you like to schedule a consultation for a detailed quote?"
  },
  {
    keywords: ["location", "where", "office"],
    answer: "Our corporate office is located at #1207/343/1, 9th Main, 7th Sector, HSR Layout, Bangalore, India, 560102. We also have presence in Kolkata. Would you like directions?"
  },
  {
    keywords: ["thankyou", "ok bye"],
    answer: "Your Welcome Thank You for visting PARKWIZ."
  }
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hello! I'm your ParkWiz Assistant. How can I help you today?", 
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  const findBestMatch = (input: string) => {
    const lowercaseInput = input.toLowerCase()
    for (const faq of parkingFAQ) {
      if (faq.keywords.some(keyword => lowercaseInput.includes(keyword))) {
        return faq.answer
      }
    }
    return "I apologize, but I'm not sure about that. Would you like to speak with our customer service team? You can reach us at 09693704790 or email us at info@parkwiz.in."
  }

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = {
        text: input,
        isUser: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
      setInput('')
      setIsTyping(true)

      // Simulate AI processing time
      setTimeout(() => {
        const botResponse = {
          text: findBestMatch(input),
          isUser: false,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, botResponse])
        setIsTyping(false)
      }, 1000)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <Button
                className="rounded-full w-16 h-16 shadow-lg bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                onClick={() => setIsOpen(true)}
              >
                <MessageCircle className="h-8 w-8" />
              </Button>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
              >
                1
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-96 h-[500px] shadow-xl">
              <CardHeader className="border-b bg-yellow-400">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-gray-900" />
                    <CardTitle className="text-gray-900">ParkWiz Assistant</CardTitle>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900 hover:text-gray-900 hover:bg-yellow-500"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 h-[calc(500px-60px)] flex flex-col">
                <div className="flex-grow overflow-auto p-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`mb-4 flex ${
                        message.isUser ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] ${
                          message.isUser 
                            ? 'bg-yellow-400 text-gray-900' 
                            : 'bg-gray-100 text-gray-900'
                        } rounded-lg p-3`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs mt-1 opacity-50">
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Assistant is typing...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      className="flex-grow"
                      ref={inputRef}
                    />
                    <Button 
                      onClick={handleSend}
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

 