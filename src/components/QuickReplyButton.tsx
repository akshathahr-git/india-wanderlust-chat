
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
        "text-sm px-4 py-2 rounded-full border border-india-teal/30 bg-white",
        "hover:bg-india-teal/5 hover:border-india-teal/50 transition-colors duration-200",
        "flex items-center gap-2 shadow-sm",
        className
      )}
    >
      {icon && <span className="text-india-teal">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default QuickReplyButton;
