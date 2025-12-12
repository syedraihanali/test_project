import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Bell, AlertTriangle, Info, Calendar } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface NotificationsProps {
  onNavigate: (page: string) => void;
}
export function Notifications({
  onNavigate
}: NotificationsProps) {
  const notifications = [{
    id: 1,
    title: 'ফাইনাল পরীক্ষার তারিখ ঘোষণা',
    desc: 'আগামী ১৫ নভেম্বর থেকে ফাইনাল পরীক্ষা শুরু হবে।',
    type: 'important',
    date: 'Today, 10:30 AM'
  }, {
    id: 2,
    title: 'Campus Closed Tomorrow',
    desc: 'Due to heavy rainfall, campus will remain closed.',
    type: 'emergency',
    date: 'Yesterday'
  }, {
    id: 3,
    title: 'New Library Books Arrival',
    desc: 'Check out the new collection of programming books.',
    type: 'normal',
    date: '20 Oct'
  }];
  const getIcon = (type: string) => {
    switch (type) {
      case 'emergency':
        return <AlertTriangle size={24} className="text-red-600" />;
      case 'important':
        return <Info size={24} className="text-yellow-600" />;
      default:
        return <Bell size={24} className="text-green-600" />;
    }
  };
  const getColors = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-red-50 border-red-200';
      case 'important':
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-green-50 border-green-200';
    }
  };
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
      </div>

      <div className="space-y-4">
        {notifications.map((notif, idx) => <motion.div key={notif.id} initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: idx * 0.1,
        type: 'spring'
      }}>
            <NeuCard className={`border ${getColors(notif.type)} bg-white/90`}>
              <div className="flex gap-4">
                <div className="mt-1 p-2 bg-white rounded-full shadow-sm h-fit">
                  {getIcon(notif.type)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800 text-base">
                      {notif.title}
                    </h3>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2 font-medium bg-gray-100 px-2 py-1 rounded-md">
                      {notif.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed font-medium">
                    {notif.desc}
                  </p>
                </div>
              </div>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}