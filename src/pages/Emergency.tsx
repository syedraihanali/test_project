import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, ShieldAlert, Ambulance, Flame } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface EmergencyProps {
  onNavigate: (page: string) => void;
}
export function Emergency({
  onNavigate
}: EmergencyProps) {
  const contacts = [{
    name: 'National Emergency',
    number: '999',
    icon: ShieldAlert,
    color: 'text-red-600',
    bg: 'bg-red-100',
    border: 'border-red-500'
  }, {
    name: 'Campus Ambulance',
    number: '01711-000000',
    icon: Ambulance,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
    border: 'border-blue-500'
  }, {
    name: 'Fire Station',
    number: '102',
    icon: Flame,
    color: 'text-orange-600',
    bg: 'bg-orange-100',
    border: 'border-orange-500'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Emergency Contacts</h1>
      </div>

      <div className="space-y-4">
        {contacts.map((contact, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: idx * 0.1,
        type: 'spring'
      }}>
            <NeuCard className={`flex items-center justify-between border-l-4 ${contact.border} bg-white/90`}>
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${contact.bg} flex items-center justify-center ${contact.color} shadow-sm animate-pulse`}>
                  <contact.icon size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {contact.name}
                  </h3>
                  <p className="text-lg font-mono font-bold text-gray-600">
                    {contact.number}
                  </p>
                </div>
              </div>
              <NeuButton variant="icon" className="w-12 h-12 !rounded-full bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-200">
                <Phone size={24} />
              </NeuButton>
            </NeuCard>
          </motion.div>)}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-red-500 font-bold uppercase tracking-widest opacity-70">
          Emergency Use Only
        </p>
      </div>
    </div>;
}