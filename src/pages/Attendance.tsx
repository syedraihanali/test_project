import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, AlertCircle } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface AttendanceProps {
  onNavigate: (page: string) => void;
}
export function Attendance({
  onNavigate
}: AttendanceProps) {
  const subjects = [{
    name: 'Computer Architecture',
    present: 24,
    total: 28,
    percent: 85
  }, {
    name: 'Database Systems',
    present: 20,
    total: 28,
    percent: 71
  }, {
    name: 'Mathematics III',
    present: 27,
    total: 28,
    percent: 96
  }, {
    name: 'Web Development',
    present: 22,
    total: 28,
    percent: 78
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Attendance</h1>
      </div>

      {/* Overall Stats */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.9
    }} animate={{
      opacity: 1,
      scale: 1
    }} className="mb-8">
        <NeuCard className="bg-gradient-to-br from-orange-100 to-amber-50 border-orange-200 flex flex-col items-center py-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-red-500" />

          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-orange-200" />
              <motion.circle initial={{
              strokeDashoffset: 440
            }} animate={{
              strokeDashoffset: 440 - 440 * 0.85
            }} transition={{
              duration: 1.5,
              ease: 'easeOut'
            }} cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="440" strokeLinecap="round" className="text-orange-500 drop-shadow-lg" />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-bold text-gray-800">85%</span>
              <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                Overall
              </span>
            </div>
          </div>

          <p className="mt-4 text-orange-700 font-bold bg-orange-100 px-4 py-1 rounded-full">
            You are doing great! 🌟
          </p>
        </NeuCard>
      </motion.div>

      {/* Subject List */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">
          Subject Breakdown
        </h2>
        {subjects.map((sub, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: idx * 0.1
      }}>
            <NeuCard className="bg-white/80">
              <div className="flex justify-between items-end mb-2">
                <h3 className="font-bold text-gray-700">{sub.name}</h3>
                <span className={`text-xl font-bold ${sub.percent < 75 ? 'text-red-500' : 'text-green-600'}`}>
                  {sub.percent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <motion.div initial={{
              width: 0
            }} animate={{
              width: `${sub.percent}%`
            }} transition={{
              duration: 1,
              delay: 0.5 + idx * 0.1
            }} className={`h-full rounded-full shadow-lg ${sub.percent < 75 ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-green-400 to-green-600'}`} />
              </div>

              <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
                <span>
                  Present: {sub.present}/{sub.total}
                </span>
                {sub.percent < 75 && <span className="flex items-center gap-1 text-red-500 font-bold animate-pulse">
                    <AlertCircle size={12} /> Low Attendance
                  </span>}
              </div>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}