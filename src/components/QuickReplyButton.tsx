
import React from 'react';
import { cn } from '@/lib/utils';

type QuickReplyButtonProps = {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
};

const QuickReplyButton: React.FC<QuickReplyButtonProps> = ({
  text,
  onClick,
  icon,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm px-4 py-2 rounded-full border border-purple-200 bg-white",
        "hover:bg-purple-50 hover:border-purple-300 transition-colors duration-200",
        "flex items-center gap-2 shadow-sm",
        className
      )}
    >
      {icon && <span className="text-purple-600">{icon}</span>}
      <span className="text-gray-700">{text}</span>
    </button>
  );
};

export default QuickReplyButton;
