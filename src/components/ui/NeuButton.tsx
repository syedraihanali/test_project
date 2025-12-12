import React from 'react';
interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'icon';
  className?: string;
}
export function NeuButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: NeuButtonProps) {
  const baseStyles = 'neu-btn flex items-center justify-center font-medium text-gray-700 active:text-gray-900 outline-none focus:ring-2 focus:ring-gray-400/50 focus:ring-offset-2 focus:ring-offset-[#e0e5ec]';
  const variants = {
    primary: 'px-6 py-3 rounded-xl',
    icon: 'p-3 rounded-full aspect-square'
  };
  return <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>;
}