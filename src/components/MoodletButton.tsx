import React from 'react';

type MoodletButtonType = 'letter' | 'word' | 'icon' | 'ellipsis' | 'iconL' | 'iconR';
export type MoodletButtonVariant = 'primary' | 'inactive' | 'secondary' | 'blue' | 'green' | 'red' | 'yellow';

interface MoodletButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  displayMode?: MoodletButtonType;
  icon?: React.ReactNode;
  variant?: MoodletButtonVariant;
  isReadOnly?: boolean;
  className?: string;
}

export const MoodletButton: React.FC<MoodletButtonProps> = ({
  displayMode = 'letter',
  content = '',
  icon = null,
  variant = 'primary',
  className = '',
  isReadOnly = false,
  ...props
}) => {

  const baseStyles = `
    inline-flex 
    duration-200 
    select-none
    rounded-full 
    border-[2px]
    items-center 
    justify-center 
    cursor-pointer
    font-bold 
    rounded 
    transition-colors
    text-[20px]
    leading-[28px]
    `;


  const variantClasses = {
    primary: isReadOnly ? 'bg-violet-light border-violet text-violet cursor-text' : 'bg-violet border-violet text-white hover:bg-violet-dark hover:border-violet-dark',
    inactive: isReadOnly ? 'bg-purple-light border-grey text-grey cursor-text' : 'bg-purple border-purple text-white hover:bg-purple-dark hover:border-purple-dark',
    secondary: isReadOnly ? 'bg-teal-light border-teal text-teal cursor-text' : 'bg-teal border-teal text-white hover:bg-teal-dark hover:border-teal-dark',
    blue: isReadOnly ? 'bg-blue-light border-blue text-blue cursor-text' : 'bg-blue border-blue text-white hover:bg-blue-dark hover:border-blue-dark',
    green: isReadOnly ? 'bg-green-light border-green text-green cursor-text' : 'bg-green border-green text-white hover:bg-green-dark hover:border-green-dark',
    red: isReadOnly ? 'bg-red-light border-red text-red cursor-text' : 'bg-red border-red text-white hover:bg-red-dark hover:border-red-dark',
    yellow: isReadOnly ? 'bg-yellow-light border-yellow text-yellow cursor-text' : 'bg-yellow border-yellow text-black hover:bg-yellow-dark hover:border-yellow-dark',
  };

  const displayModeClasses = {
    letter: ' h-[28px] w-[28px]',
    icon: ' h-[28px] w-[28px]',
    ellipsis: ' h-[28px] w-[28px]',
    word: 'px-[8px] h-[28px]',
    iconL: 'px-[8px] h-[28px]',
    iconR: 'px-[8px] h-[28px]',
  };

  const renderContent = () => {
    switch (displayMode) {
      case 'letter':
        return <span>{content}</span>;
      case 'icon':
        return <span className="flex items-center justify-center">{icon || content}</span>;
      case 'ellipsis':
        return <span className="flex items-center justify-center">...</span>;
      case 'iconL':
        return (
          <>
            <span className="mr-1 flex items-center justify-center">{icon}</span>
            <span>{content}</span>
          </>
        );
      case 'iconR':
        return (
          <>
            <span>{content}</span>
            <span className="ml-1 flex items-center justify-center">{icon}</span>
          </>
        );
      default:
        return content;
    }
  };

  return (
    <button
      className={`
        ${variantClasses[variant]}
        ${baseStyles}
        ${displayModeClasses[displayMode]}
        ${className}
        disabled:bg-purple-light disabled:border-purple disabled:text-purple disabled:cursor-not-allowed
      `}
      role={isReadOnly ? "button" : undefined}
      tabIndex={isReadOnly ? 0 : undefined}
      aria-readonly={isReadOnly}
      {...props}
    >
      {renderContent()}
    </button>
  );
};