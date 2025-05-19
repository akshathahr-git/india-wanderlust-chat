
import React, { useState, useEffect, useRef } from 'react';
import { Send, MapPin, Calendar, Compass, World } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import ChatbotAvatar from './ChatbotAvatar';
import ChatMessage from './ChatMessage';
import QuickReplyButton from './QuickReplyButton';
import { 
  welcomeMessage, 
  quickReplies, 
  chatbotResponses,
  getFallbackResponse
} from '@/data/chatbotData';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

const TravelChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Function to get current time for message timestamp
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  // Function to add a new message
  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: getCurrentTime()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // Function to handle bot response
  const handleBotResponse = (userQuery: string) => {
    setIsTyping(true);
    
    // Simulate processing time
    setTimeout(() => {
      // Check if the user query matches any predefined responses
      const lowerQuery = userQuery.toLowerCase();
      let responseFound = false;
      
      for (const key of Object.keys(chatbotResponses)) {
        if (lowerQuery.includes(key)) {
          addMessage(chatbotResponses[key].message, false);
          responseFound = true;
          break;
        }
      }
      
      // If no specific response found, use fallback
      if (!responseFound) {
        addMessage(getFallbackResponse(), false);
      }
      
      setIsTyping(false);
    }, 1500);
  };

  // Handle user sending a message
  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    addMessage(inputText, true);
    handleBotResponse(inputText);
    setInputText('');
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle quick reply clicks
  const handleQuickReplyClick = (replyId: string) => {
    const reply = quickReplies.find(r => r.id === replyId);
    if (reply) {
      addMessage(reply.text, true);
      
      // Find matching response
      const response = chatbotResponses[replyId];
      if (response) {
        setIsTyping(true);
        setTimeout(() => {
          addMessage(response.message, false);
          setIsTyping(false);
        }, 1000);
      } else {
        handleBotResponse(reply.text);
      }
    }
  };

  // Add welcome message when component mounts
  useEffect(() => {
    setTimeout(() => {
      addMessage(welcomeMessage, false);
      setShowWelcomeAnimation(false);
    }, 1000);
  }, []);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col bg-gray-50 h-[600px] max-w-md w-full mx-auto rounded-xl shadow-lg overflow-hidden border border-gray-100 animate-map-unfold">
      {/* Header */}
      <div className="travel-gradient p-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-3 animate-fly-in">
          <div className="relative">
            <ChatbotAvatar 
              showWave={showWelcomeAnimation} 
              className="h-12 w-12" 
            />
          </div>
          <div>
            <h2 className="font-bold text-lg">Incredible India Guide</h2>
            <p className="text-xs opacity-80">Your virtual travel companion</p>
          </div>
        </div>
        <World className="h-6 w-6 text-white/80 animate-spin-slow" />
      </div>
      
      {/* Background pattern */}
      <div className="flex-1 overflow-y-auto india-pattern-bg p-4">
        {/* Messages container */}
        <div className="flex flex-col">
          {messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg.text}
              isUser={msg.isUser}
              timestamp={msg.timestamp}
              showAvatar={!msg.isUser ? 
                <ChatbotAvatar className="h-10 w-10" /> : 
                undefined
              }
            />
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <ChatMessage
              message=""
              isUser={false}
              isTyping={true}
              showAvatar={<ChatbotAvatar isThinking={true} className="h-10 w-10" />}
            />
          )}
          
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Quick reply buttons */}
      {messages.length > 0 && !isTyping && (
        <div className="bg-gray-50 px-4 py-2 overflow-x-auto">
          <div className="flex gap-2 pb-1 overflow-x-auto no-scrollbar">
            {quickReplies.map((reply) => (
              <QuickReplyButton
                key={reply.id}
                text={reply.text}
                onClick={() => handleQuickReplyClick(reply.id)}
                icon={
                  reply.id === 'rajasthan' ? <MapPin className="w-3 h-3" /> :
                  reply.id === 'season' ? <Calendar className="w-3 h-3" /> :
                  reply.id === 'transport' ? <Compass className="w-3 h-3" /> : 
                  undefined
                }
                className="flex-shrink-0"
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Input area */}
      <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
        <Input
          ref={inputRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask about traveling in India..."
          className="flex-1 bg-gray-50 border-gray-200"
        />
        <Button 
          onClick={handleSendMessage} 
          size="icon"
          className="bg-india-teal hover:bg-india-teal/80 text-white"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TravelChatbot;
