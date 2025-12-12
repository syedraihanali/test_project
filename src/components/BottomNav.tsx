import React from 'react';
import { motion } from 'framer-motion';
import { Home, Bell, User } from 'lucide-react';
interface BottomNavProps {
  activeTab: 'dashboard' | 'notifications' | 'profile';
  onNavigate: (page: string) => void;
}
export function BottomNav({
  activeTab,
  onNavigate
}: BottomNavProps) {
  const navItems = [{
    id: 'dashboard',
    icon: Home,
    label: 'Dashboard'
  }, {
    id: 'notifications',
    icon: Bell,
    label: 'Notification'
  }, {
    id: 'profile',
    icon: User,
    label: 'Profile'
  }];
  return <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-lg border-t border-white/50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]" />

      <div className="relative flex justify-around items-center h-20 pb-2 px-6">
        {navItems.map(item => {
        const isActive = activeTab === item.id;
        return <button key={item.id} onClick={() => onNavigate(item.id)} className="relative flex flex-col items-center justify-center w-16 h-full">
              {isActive && <motion.div layoutId="nav-indicator" className="absolute top-0 w-12 h-1 bg-blue-500 rounded-b-lg shadow-[0_0_10px_rgba(59,130,246,0.5)]" transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }} />}

              <motion.div animate={isActive ? {
            y: -2,
            scale: 1.1
          } : {
            y: 0,
            scale: 1
          }} className={`
                  p-2 rounded-xl transition-colors duration-300
                  ${isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}
                `}>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </motion.div>

              <motion.span animate={isActive ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0.5,
            y: 2
          }} className={`text-[10px] font-bold mt-1 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                {item.label}
              </motion.span>
            </button>;
      })}
      </div>
    </div>;
}