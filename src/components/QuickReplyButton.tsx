
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
        "text-sm px-4 py-2 rounded-full border border-india-orange/30 bg-white",
        "hover:bg-india-orange/10 transition-colors duration-200",
        "flex items-center gap-2 shadow-sm hover:shadow",
        className
      )}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default QuickReplyButton;
