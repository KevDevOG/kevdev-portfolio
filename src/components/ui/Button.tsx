import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
};

export const Button = ({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
  className = ''
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none';
  
  const variantStyles = {
    primary: 'bg-white text-black hover:bg-zinc-200 border border-transparent',
    secondary: 'bg-zinc-900 text-zinc-200 hover:bg-zinc-800 border border-zinc-800',
    tertiary: 'bg-transparent text-zinc-400 hover:text-zinc-200 border border-transparent'
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
export default Button;
