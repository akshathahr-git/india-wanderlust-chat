
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
  const [blinking, setBlinking] = useState(false);
  
  // Random blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 200);
    }, Math.random() * 5000 + 2000);
    
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={cn("relative h-24 w-24 flex items-center justify-center avatar-float", className)}>
      <div className="absolute inset-0 bg-india-orange/20 rounded-full"></div>
      <div className="relative z-10 w-20 h-20 bg-white rounded-full overflow-hidden shadow-lg flex flex-col items-center justify-center">
        {/* Avatar face */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          {/* Turban/Hat */}
          <div className="absolute top-0 w-20 h-7 bg-india-orange rounded-t-full"></div>
          
          {/* Face */}
          <div className="w-14 h-14 bg-amber-100 rounded-full mt-3 flex flex-col items-center justify-center">
            {/* Eyes */}
            <div className="flex justify-center w-full mt-1 space-x-3">
              <div className="relative w-2 h-2.5">
                <div className={cn("w-2 h-2.5 bg-india-blue rounded-full", 
                  blinking && "blink-animation"
                )}></div>
              </div>
              <div className="relative w-2 h-2.5">
                <div className={cn("w-2 h-2.5 bg-india-blue rounded-full", 
                  blinking && "blink-animation"
                )}></div>
              </div>
            </div>
            
            {/* Mouth */}
            {isThinking ? (
              <div className="w-4 h-1 bg-india-blue rounded-full mt-2"></div>
            ) : (
              <div className="w-5 h-2 bg-india-red rounded-full mt-2 flex items-center justify-center">
                <div className="w-4 h-1 bg-india-pink rounded-full"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Hand for waving */}
      {showWave && (
        <div className="absolute -right-1 top-12 z-20">
          <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center wave-animation">
            <div className="w-4 h-1 bg-amber-200 rounded-full"></div>
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
