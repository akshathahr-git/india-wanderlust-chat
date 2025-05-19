
import React from 'react';
import { cn } from '@/lib/utils';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
  timestamp?: string;
  isTyping?: boolean;
  showAvatar?: React.ReactNode;
};

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
  timestamp,
  isTyping = false,
  showAvatar
}) => {
  return (
    <div 
      className={cn(
        "flex items-start gap-3 mb-4 chat-bubble-animation",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar or placeholder */}
      {showAvatar ? (
        <div className="flex-shrink-0">
          {showAvatar}
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-india-blue/10 flex items-center justify-center">
          <span className={cn(
            "text-lg font-bold",
            isUser ? "text-india-blue" : "text-india-orange"
          )}>
            {isUser ? "U" : "I"}
          </span>
        </div>
      )}

      {/* Message bubble */}
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
        isUser 
          ? "bg-india-blue text-white rounded-tr-none" 
          : "bg-white border border-gray-100 rounded-tl-none"
      )}>
        {isTyping ? (
          <div className="flex space-x-1 h-6 items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
          </div>
        ) : (
          <div>
            <p className={cn(
              "text-sm sm:text-base",
              !isUser && "text-gray-800"
            )}>
              {message}
            </p>
            {timestamp && (
              <p className={cn(
                "text-xs mt-1",
                isUser ? "text-blue-100" : "text-gray-400"
              )}>
                {timestamp}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
