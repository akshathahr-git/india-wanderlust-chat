
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
        "flex items-start gap-3 mb-4",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar or placeholder */}
      {showAvatar ? (
        <div className="flex-shrink-0">
          {showAvatar}
        </div>
      ) : (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center shadow-sm">
          <span className={cn(
            "text-lg font-bold",
            isUser ? "text-purple-600" : "text-pink-600"
          )}>
            {isUser ? "U" : "I"}
          </span>
        </div>
      )}

      {/* Message bubble */}
      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
        isUser 
          ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-tr-none" 
          : "bg-gradient-to-r from-white to-purple-50 border border-purple-100 rounded-tl-none"
      )}>
        {isTyping ? (
          <div className="flex space-x-1 h-6 items-center">
            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
                isUser ? "text-purple-200" : "text-purple-400"
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
