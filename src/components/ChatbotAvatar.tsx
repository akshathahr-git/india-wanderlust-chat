
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { World, Suitcase, Map } from 'lucide-react';

type ChatbotAvatarProps = {
  isThinking?: boolean;
  showWave?: boolean;
  className?: string;
};

const ChatbotAvatar: React.FC<ChatbotAvatarProps> = ({ 
  isThinking = false, 
  showWave = false,
  className 
}) => {
  const [animationState, setAnimationState] = useState(0);
  
  // Advanced animation cycle
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationState((prev) => (prev + 1) % 3);
    }, Math.random() * 3000 + 2000);
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className={cn("relative h-24 w-24 flex items-center justify-center travel-float", className)}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-india-orange/30 to-india-blue/30 rounded-full"></div>
      
      {/* Main avatar container */}
      <div className="relative z-10 w-20 h-20 bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center">
        {/* Travel-themed avatar content */}
        <div className="absolute inset-0 bg-gradient-to-b from-india-blue/10 to-india-orange/10 rounded-full"></div>
        
        <div className="relative flex items-center justify-center">
          {/* Cycling between travel icons */}
          <div className={cn(
            "absolute transition-all duration-500",
            animationState === 0 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          )}>
            <World className="h-10 w-10 text-india-blue stroke-[1.5]" />
          </div>
          
          <div className={cn(
            "absolute transition-all duration-500",
            animationState === 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          )}>
            <Suitcase className="h-10 w-10 text-india-orange stroke-[1.5]" />
          </div>
          
          <div className={cn(
            "absolute transition-all duration-500",
            animationState === 2 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          )}>
            <Map className="h-10 w-10 text-india-teal stroke-[1.5]" />
          </div>
          
          {/* Decorative element - orbit effect */}
          <div className="absolute w-full h-full rounded-full border-2 border-dashed border-india-orange/20 animate-spin-slow"></div>
        </div>
      </div>
      
      {/* Hand for waving */}
      {showWave && (
        <div className="absolute -right-1 top-12 z-20">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center wave-animation shadow-sm border border-india-orange/20">
            <Map className="h-4 w-4 text-india-orange" />
          </div>
        </div>
      )}
      
      {/* Thinking animation */}
      {isThinking && (
        <div className="absolute -right-2 top-3 z-20 flex space-x-1">
          <div className="w-2 h-2 bg-india-blue rounded-full typing-dot"></div>
          <div className="w-2 h-2 bg-india-blue rounded-full typing-dot"></div>
          <div className="w-2 h-2 bg-india-blue rounded-full typing-dot"></div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAvatar;
