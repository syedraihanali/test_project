import React from 'react';
import { motion } from 'framer-motion';
interface NeuCardProps {
  children: React.ReactNode;
  className?: string;
  pressed?: boolean;
  onClick?: () => void;
}
export function NeuCard({
  children,
  className = '',
  pressed = false,
  onClick
}: NeuCardProps) {
  return <motion.div whileHover={onClick ? {
    scale: 1.02,
    translateY: -2
  } : {}} whileTap={onClick ? {
    scale: 0.98
  } : {}} onClick={onClick} className={`
        relative overflow-hidden
        ${pressed ? 'bg-black/5 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-3px_-3px_7px_rgba(255,255,255,0.8)]' : 'bg-white/60 shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_rgba(255,255,255,0.8)] border border-white/40'} 
        backdrop-blur-md rounded-2xl p-5
        transition-all duration-300
        ${className}
      `}>
      {children}
    </motion.div>;
}