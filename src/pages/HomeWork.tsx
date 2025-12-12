import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface HomeWorkProps {
  onNavigate: (page: string) => void;
}
export function HomeWork({
  onNavigate
}: HomeWorkProps) {
  const assignments = [{
    id: 1,
    subject: 'Database Systems',
    title: 'SQL Queries Practice',
    due: 'Tomorrow, 10:00 AM',
    status: 'pending',
    color: 'green'
  }, {
    id: 2,
    subject: 'Web Development',
    title: 'React Component Design',
    due: '25 Oct, 11:59 PM',
    status: 'pending',
    color: 'blue'
  }, {
    id: 3,
    subject: 'English',
    title: 'Technical Report',
    due: 'Submitted',
    status: 'completed',
    color: 'gray'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Assignments</h1>
      </div>

      <div className="space-y-4">
        {assignments.map((item, idx) => <motion.div key={item.id} initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: idx * 0.1,
        type: 'spring'
      }} onClick={() => onNavigate('homework-details')}>
            <NeuCard className={`
              cursor-pointer group
              ${item.status === 'completed' ? 'bg-gray-100/80 grayscale opacity-80' : 'bg-gradient-to-br from-white/80 to-white/40 border-white/60'}
            `}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`
                      text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider
                      ${item.color === 'green' ? 'bg-green-100 text-green-700' : item.color === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'}
                    `}>
                      {item.subject}
                    </span>
                    {item.status === 'completed' && <CheckCircle2 size={14} className="text-green-600" />}
                  </div>

                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 mt-3">
                    <div className={`
                      flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-md
                      ${item.status === 'pending' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-600'}
                    `}>
                      <Clock size={14} />
                      <span>Due: {item.due}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center h-full pt-4 pl-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}