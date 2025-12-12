import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, FlaskConical, CheckCircle2, AlertTriangle, Calendar, Briefcase, Library, CreditCard, Phone, Users, GraduationCap, Bell } from 'lucide-react';
import { NeuCard } from '../components/ui/NeuCard';
import { NeuButton } from '../components/ui/NeuButton';
interface DashboardProps {
  onNavigate: (page: string) => void;
}
export function Dashboard({
  onNavigate
}: DashboardProps) {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return <motion.div className="pb-24 px-4 pt-6 space-y-6" variants={containerVariants} initial="hidden" animate="visible">
      {/* Header */}
      <motion.div variants={itemVariants} className="flex justify-between items-start">
        <div>
          <motion.h1 initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Hi, Rahim! 👋
          </motion.h1>
          <p className="text-sm text-gray-600 font-medium mt-1">
            Computer 5th Semester • Morning Shift
          </p>
        </div>
        <motion.div whileHover={{
        scale: 1.1,
        rotate: 5
      }} className="w-12 h-12 rounded-full bg-white/50 border-2 border-white shadow-lg overflow-hidden">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      {/* Today's Summary */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Today's Summary
        </h2>

        {/* Classes Card */}
        <NeuCard onClick={() => onNavigate('class-routine')} className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-200">
              <BookOpen size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg">
                Today's Classes
              </h3>
              <p className="text-sm text-gray-600 mt-1 font-medium">
                3 Classes Today
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 bg-white/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  Next: CST-301 @ 10:30 AM
                </span>
                <motion.span animate={{
                x: [0, 5, 0]
              }} transition={{
                repeat: Infinity,
                duration: 1.5
              }} className="text-blue-500">
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </NeuCard>

        <div className="grid grid-cols-2 gap-4">
          {/* Homework Card */}
          <NeuCard onClick={() => onNavigate('homework')} className="bg-gradient-to-br from-green-50/80 to-emerald-100/80 border-green-200">
            <div className="p-2 bg-green-500 text-white rounded-lg w-fit shadow-md shadow-green-200 mb-3">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-gray-800">Home Work</h3>
            <p className="text-xs text-green-700 font-bold mt-1">
              2 Assignments Due
            </p>
          </NeuCard>

          {/* Practical Card */}
          <NeuCard onClick={() => onNavigate('practical')} className="bg-gradient-to-br from-purple-50/80 to-fuchsia-100/80 border-purple-200">
            <div className="p-2 bg-purple-500 text-white rounded-lg w-fit shadow-md shadow-purple-200 mb-3">
              <FlaskConical size={20} />
            </div>
            <h3 className="font-bold text-gray-800">Practical</h3>
            <p className="text-xs text-purple-700 font-bold mt-1">
              Lab 401 @ 2:00 PM
            </p>
          </NeuCard>
        </div>

        {/* Attendance Card */}
        <NeuCard onClick={() => onNavigate('attendance')} className="bg-gradient-to-br from-orange-50/80 to-amber-100/80 border-orange-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500 text-white rounded-lg shadow-md shadow-orange-200">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Attendance</h3>
                <p className="text-xs text-orange-700 font-bold">
                  Current Status
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-orange-600">85%</span>
            </div>
          </div>
          <div className="w-full bg-white/50 h-2 rounded-full mt-3 overflow-hidden">
            <motion.div initial={{
            width: 0
          }} animate={{
            width: '85%'
          }} transition={{
            duration: 1,
            delay: 0.5
          }} className="h-full bg-orange-500 rounded-full" />
          </div>
        </NeuCard>
      </motion.div>

      {/* Notification Section */}
      <motion.div variants={itemVariants}>
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1 mb-3 flex items-center gap-2">
          <Bell size={16} className="text-red-500" /> Notification
        </h2>
        <NeuCard onClick={() => onNavigate('notifications')} className="bg-gradient-to-r from-green-100 to-emerald-50 border-l-4 border-l-green-500">
          <div className="flex items-start gap-3">
            <div className="bg-green-500 text-white p-1.5 rounded-full mt-0.5 animate-bounce">
              <AlertTriangle size={16} />
            </div>
            <div>
              <h3 className="font-bold text-green-800">IMPORTANT</h3>
              <p className="text-green-900 font-medium mt-1">
                ফাইনাল পরীক্ষার তারিখ ঘোষণা
              </p>
              <p className="text-xs text-green-700 mt-2 font-bold flex items-center gap-1">
                Tap for details{' '}
                <motion.span animate={{
                x: [0, 3, 0]
              }} transition={{
                repeat: Infinity
              }}>
                  →
                </motion.span>
              </p>
            </div>
          </div>
        </NeuCard>
      </motion.div>

      {/* Academic Tools Grid */}
      <motion.div variants={itemVariants}>
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1 mb-3">
          📚 Academic Tools
        </h2>
        <div className="grid grid-cols-4 gap-3">
          <ToolButton icon={BookOpen} label="Routine" onClick={() => onNavigate('class-routine')} color="bg-blue-500" />
          <ToolButton icon={FileText} label="Home Work" onClick={() => onNavigate('homework')} color="bg-green-500" />
          <ToolButton icon={FlaskConical} label="Practical" onClick={() => onNavigate('practical')} color="bg-purple-500" />
          <ToolButton icon={GraduationCap} label="Results" onClick={() => onNavigate('results')} color="bg-pink-500" />

          <ToolButton icon={Users} label="Teachers" onClick={() => onNavigate('teachers')} color="bg-indigo-500" />
          <ToolButton icon={Calendar} label="Events" onClick={() => onNavigate('events')} color="bg-orange-500" />
          <ToolButton icon={Briefcase} label="Job News" onClick={() => onNavigate('job-news')} color="bg-cyan-500" />
          <ToolButton icon={Library} label="E-Library" onClick={() => onNavigate('e-library')} color="bg-teal-500" />
        </div>
      </motion.div>

      {/* Utilities */}
      <motion.div variants={itemVariants}>
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider ml-1 mb-3">
          🛠 Utilities
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <NeuButton onClick={() => onNavigate('fee-payment')} className="h-20 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100">
            <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
              <CreditCard size={24} />
            </div>
            <span className="text-xs font-bold text-gray-600">Fee Payment</span>
          </NeuButton>
          <NeuButton onClick={() => onNavigate('emergency')} className="h-20 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-red-50 to-orange-50 border-red-100">
            <div className="p-2 bg-red-100 rounded-full text-red-600 animate-pulse">
              <Phone size={24} />
            </div>
            <span className="text-xs font-bold text-red-600">Emergency</span>
          </NeuButton>
        </div>
      </motion.div>
    </motion.div>;
}
function ToolButton({
  icon: Icon,
  label,
  onClick,
  color
}: {
  icon: any;
  label: string;
  onClick: () => void;
  color: string;
}) {
  return <motion.button whileHover={{
    scale: 1.05,
    y: -2
  }} whileTap={{
    scale: 0.95
  }} onClick={onClick} className="flex flex-col items-center gap-2 group">
      <div className={`w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center text-white transition-all duration-300 ${color} shadow-${color.replace('bg-', '')}/30`}>
        <Icon size={24} />
      </div>
      <span className="text-[10px] font-bold text-gray-600 text-center leading-tight group-hover:text-gray-800">
        {label}
      </span>
    </motion.button>;
}