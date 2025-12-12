import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface TeachersProps {
  onNavigate: (page: string) => void;
}
export function Teachers({
  onNavigate
}: TeachersProps) {
  const teachers = [{
    name: 'Dr. Sarah Wilson',
    role: 'Head of Department',
    subject: 'Computer Science',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  }, {
    name: 'Prof. James Miller',
    role: 'Senior Lecturer',
    subject: 'Mathematics',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'
  }, {
    name: 'Ms. Emily Chen',
    role: 'Lab Instructor',
    subject: 'Programming',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Teachers</h1>
      </div>

      <div className="space-y-6">
        {teachers.map((teacher, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: idx * 0.15
      }}>
            <NeuCard className="bg-white/80 border border-indigo-100 overflow-visible">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full p-1 bg-white shadow-lg">
                    <img src={teacher.img} alt={teacher.name} className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-xl">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-indigo-600 font-bold">
                    {teacher.role}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {teacher.subject}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <NeuButton className="flex-1 flex items-center justify-center gap-2 text-sm !py-3 bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                  <Phone size={18} /> Call
                </NeuButton>
                <NeuButton className="flex-1 flex items-center justify-center gap-2 text-sm !py-3 bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                  <Mail size={18} /> Email
                </NeuButton>
              </div>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}