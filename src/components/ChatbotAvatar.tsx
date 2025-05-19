
import React from 'react';
import { cn } from '@/lib/utils';
import { Compass, Globe, Mountain } from 'lucide-react';

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
  return (
    <div className={cn("relative h-16 w-16 flex items-center justify-center", className)}>
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full"></div>
      
      {/* Main avatar container */}
      <div className="relative z-10 w-14 h-14 bg-white rounded-full overflow-hidden shadow-lg flex items-center justify-center">
        {/* Travel-themed avatar content */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100 to-pink-100 rounded-full"></div>
        
        <div className="relative flex items-center justify-center">
          {/* Main icon */}
          <Globe className="h-8 w-8 text-purple-600 stroke-[1.5]" />
          
          {/* Decorative element - orbit ring */}
          <div className="absolute w-full h-full rounded-full border-2 border-dashed border-purple-300/40"></div>
        </div>
      </div>
      
      {/* Thinking animation */}
      {isThinking && (
        <div className="absolute -right-2 top-2 z-20 flex space-x-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAvatar;
