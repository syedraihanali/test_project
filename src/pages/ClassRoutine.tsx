import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, MapPin, User, Calendar } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface ClassRoutineProps {
  onNavigate: (page: string) => void;
}
export function ClassRoutine({
  onNavigate
}: ClassRoutineProps) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const [activeDay, setActiveDay] = useState('Mon');
  const schedule = [{
    time: '09:00 AM',
    subject: 'Computer Architecture',
    room: '302',
    teacher: 'Dr. Rahman',
    type: 'Theory'
  }, {
    time: '10:30 AM',
    subject: 'Data Structures',
    room: 'Lab 2',
    teacher: 'Ms. Fatema',
    type: 'Lab'
  }, {
    time: '02:00 PM',
    subject: 'Mathematics III',
    room: '405',
    teacher: 'Mr. Kamal',
    type: 'Theory'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Class Routine</h1>
      </div>

      {/* Day Selector */}
      <div className="flex justify-between mb-8 overflow-x-auto pb-4 no-scrollbar">
        {days.map((day, idx) => <motion.button key={day} initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: idx * 0.05
      }} onClick={() => setActiveDay(day)} className={`
              w-14 h-16 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300
              ${activeDay === day ? 'bg-blue-600 text-white shadow-lg shadow-blue-300 scale-110' : 'bg-white/40 text-gray-600 hover:bg-white/60'}
            `}>
            <span className="text-xs font-bold">{day}</span>
            <div className={`w-1.5 h-1.5 rounded-full ${activeDay === day ? 'bg-white' : 'bg-transparent'}`} />
          </motion.button>)}
      </div>

      {/* Timeline */}
      <div className="space-y-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[85px] top-4 bottom-0 w-0.5 bg-blue-200/50 rounded-full" />

        {schedule.map((cls, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: idx * 0.15,
        type: 'spring'
      }} className="relative z-10">
            <div className="flex gap-4 items-stretch">
              {/* Time Column */}
              <div className="flex flex-col items-end min-w-[70px] pt-4">
                <span className="text-sm font-bold text-gray-800">
                  {cls.time.split(' ')[0]}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {cls.time.split(' ')[1]}
                </span>
              </div>

              {/* Timeline Dot */}
              <div className="relative flex items-center justify-center pt-5">
                <div className={`w-3 h-3 rounded-full border-2 border-white shadow-sm ${cls.type === 'Lab' ? 'bg-purple-500' : 'bg-blue-500'}`} />
              </div>

              {/* Card */}
              <div className="flex-1">
                <NeuCard className={`
                  ${cls.type === 'Lab' ? 'bg-gradient-to-br from-purple-50/90 to-purple-100/90 border-purple-200' : 'bg-gradient-to-br from-blue-50/90 to-blue-100/90 border-blue-200'}
                `}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">
                      {cls.subject}
                    </h3>
                    <span className={`
                      text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide shadow-sm
                      ${cls.type === 'Lab' ? 'bg-purple-200 text-purple-700' : 'bg-blue-200 text-blue-700'}
                    `}>
                      {cls.type}
                    </span>
                  </div>

                  <div className="space-y-2 mt-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/40 p-1.5 rounded-lg w-fit">
                      <MapPin size={14} className="text-gray-500" />
                      <span className="font-medium">Room: {cls.room}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/40 p-1.5 rounded-lg w-fit">
                      <User size={14} className="text-gray-500" />
                      <span className="font-medium">{cls.teacher}</span>
                    </div>
                  </div>
                </NeuCard>
              </div>
            </div>
          </motion.div>)}
      </div>
    </div>;
}