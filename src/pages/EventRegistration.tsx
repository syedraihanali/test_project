import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, Calendar, User, Users } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface EventRegistrationProps {
  onNavigate: (page: string) => void;
}
export function EventRegistration({
  onNavigate
}: EventRegistrationProps) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('events');
    }, 2000);
  };
  if (submitted) {
    return <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-green-50 to-emerald-100">
        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} className="text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-300 animate-bounce">
            <Check size={48} strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Registered!</h2>
          <p className="text-gray-600 font-medium">
            You have successfully registered for Tech Fest 2024.
          </p>
        </motion.div>
      </div>;
  }
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('events')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Registration</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }}>
          <NeuCard className="space-y-4 bg-white/80 border border-orange-100">
            <h3 className="font-bold text-gray-700 border-b border-gray-200 pb-2 mb-4 flex items-center gap-2">
              <User size={18} className="text-orange-500" /> Student Details
            </h3>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">
                Full Name
              </label>
              <input type="text" defaultValue="Rahim Ahmed" className="w-full p-3 rounded-xl bg-white/50 border border-gray-200 outline-none text-gray-700 focus:ring-2 focus:ring-orange-400/50 transition-all shadow-inner" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">
                Roll Number
              </label>
              <input type="text" defaultValue="589231" className="w-full p-3 rounded-xl bg-white/50 border border-gray-200 outline-none text-gray-700 focus:ring-2 focus:ring-orange-400/50 transition-all shadow-inner" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600 ml-1">
                Team Members (Optional)
              </label>
              <textarea rows={3} placeholder="Enter names separated by comma" className="w-full p-3 rounded-xl bg-white/50 border border-gray-200 outline-none text-gray-700 resize-none focus:ring-2 focus:ring-orange-400/50 transition-all shadow-inner" />
            </div>
          </NeuCard>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }}>
          <NeuCard className="bg-white/80 border border-orange-100">
            <h3 className="font-bold text-gray-700 border-b border-gray-200 pb-2 mb-4 flex items-center gap-2">
              <Calendar size={18} className="text-orange-500" /> Event
              Preferences
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors border border-transparent hover:border-orange-100">
                <input type="checkbox" className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500 border-gray-300" />
                <span className="text-gray-700 font-medium">
                  Participate in Coding Contest
                </span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 cursor-pointer transition-colors border border-transparent hover:border-orange-100">
                <input type="checkbox" className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500 border-gray-300" />
                <span className="text-gray-700 font-medium">
                  Need Transport
                </span>
              </label>
            </div>
          </NeuCard>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }}>
          <NeuButton className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-orange-200 mt-4">
            Confirm Registration
          </NeuButton>
        </motion.div>
      </form>
    </div>;
}