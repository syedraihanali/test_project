import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FlaskConical, Clock, MapPin } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface PracticalProps {
  onNavigate: (page: string) => void;
}
export function Practical({
  onNavigate
}: PracticalProps) {
  const labs = [{
    id: 1,
    subject: 'Database Management',
    code: 'CST-401',
    room: 'Lab 401',
    time: '2:00 PM - 4:00 PM',
    instructor: 'Mr. Kamal',
    status: 'today'
  }, {
    id: 2,
    subject: 'Web Development',
    code: 'CST-402',
    room: 'Lab 302',
    time: '11:00 AM - 1:00 PM',
    instructor: 'Ms. Fatema',
    status: 'upcoming'
  }, {
    id: 3,
    subject: 'Networking',
    code: 'CST-403',
    room: 'Lab 201',
    time: 'Completed',
    instructor: 'Dr. Rahman',
    status: 'completed'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Practical Labs</h1>
      </div>

      <div className="space-y-4">
        {labs.map((lab, idx) => <motion.div key={lab.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: idx * 0.1
      }}>
            <NeuCard className={`
              ${lab.status === 'today' ? 'bg-gradient-to-br from-purple-50/90 to-fuchsia-100/90 border-purple-300 shadow-purple-200/50' : 'bg-white/70'}
              ${lab.status === 'completed' ? 'opacity-60 grayscale' : ''}
            `}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl shadow-inner ${lab.status === 'today' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    <FlaskConical size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {lab.subject}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono font-medium">
                      {lab.code}
                    </p>
                  </div>
                </div>
                {lab.status === 'today' && <span className="px-3 py-1 bg-purple-500 text-white text-[10px] font-bold rounded-full uppercase shadow-md animate-pulse">
                    Today
                  </span>}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4 bg-white/40 p-3 rounded-xl">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Clock size={16} className="text-purple-600" />
                  <span className="font-medium">{lab.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <MapPin size={16} className="text-purple-600" />
                  <span className="font-medium">{lab.room}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200/50 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium">
                  Instructor:{' '}
                  <span className="text-gray-800">{lab.instructor}</span>
                </span>
                <button className="text-xs font-bold text-purple-600 hover:underline">
                  View Manual
                </button>
              </div>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}