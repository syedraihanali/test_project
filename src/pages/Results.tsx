import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Download, TrendingUp, Star } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface ResultsProps {
  onNavigate: (page: string) => void;
}
export function Results({
  onNavigate
}: ResultsProps) {
  const semesters = [{
    sem: '4th Semester',
    gpa: '3.85',
    status: 'Passed',
    date: 'Aug 2023',
    trend: 'up'
  }, {
    sem: '3rd Semester',
    gpa: '3.72',
    status: 'Passed',
    date: 'Feb 2023',
    trend: 'down'
  }, {
    sem: '2nd Semester',
    gpa: '3.90',
    status: 'Passed',
    date: 'Aug 2022',
    trend: 'up'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Academic Results</h1>
      </div>

      {/* Current GPA */}
      <motion.div initial={{
      scale: 0.9,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      type: 'spring',
      bounce: 0.5
    }} className="mb-8">
        <NeuCard className="bg-gradient-to-br from-pink-500 to-rose-600 border-none text-center py-8 text-white shadow-xl shadow-pink-300/50 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-10 -mb-10 blur-xl" />

          <motion.div initial={{
          scale: 0
        }} animate={{
          scale: 1
        }} transition={{
          delay: 0.2,
          type: 'spring'
        }} className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 shadow-inner border border-white/30">
            <Award size={48} />
          </motion.div>
          <h2 className="text-pink-100 font-bold uppercase tracking-widest text-sm">
            Cumulative GPA
          </h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="text-6xl font-bold mt-2 text-white drop-shadow-md">
            3.82
          </motion.p>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full mt-3 backdrop-blur-sm">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-bold">Excellent Performance!</span>
          </motion.div>
        </NeuCard>
      </motion.div>

      {/* Semester List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1">
          Semester History
        </h3>
        {semesters.map((sem, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: idx * 0.15
      }}>
            <NeuCard className="flex justify-between items-center bg-white/80 hover:bg-white transition-colors">
              <div>
                <h4 className="font-bold text-gray-800 text-lg">{sem.sem}</h4>
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  Published: {sem.date}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-2xl font-bold text-gray-700">
                    {sem.gpa}
                  </span>
                  {sem.trend === 'up' ? <TrendingUp size={16} className="text-green-500" /> : <TrendingUp size={16} className="text-red-400 rotate-180" />}
                </div>
                <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full inline-block mt-1">
                  {sem.status}
                </span>
              </div>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}