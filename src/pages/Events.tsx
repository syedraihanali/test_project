import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface EventsProps {
  onNavigate: (page: string) => void;
}
export function Events({
  onNavigate
}: EventsProps) {
  const events = [{
    id: 1,
    title: 'Tech Fest 2024',
    date: '25 Oct',
    time: '10:00 AM',
    location: 'Main Auditorium',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80'
  }, {
    id: 2,
    title: 'Inter-Dept Cricket',
    date: '02 Nov',
    time: '09:00 AM',
    location: 'College Ground',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&q=80'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Campus Events</h1>
      </div>

      <div className="space-y-6">
        {events.map((event, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        y: 50
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: idx * 0.2,
        type: 'spring'
      }}>
            <NeuCard className="p-0 overflow-hidden bg-white/90 border-none shadow-xl">
              <div className="h-40 w-full relative group">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm">
                  {event.category}
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="flex items-center gap-1 text-xs font-medium opacity-90">
                    <MapPin size={14} /> {event.location}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col items-center justify-center bg-orange-500 text-white rounded-xl px-3 py-1 h-16 w-16 shadow-lg shadow-orange-200">
                    <span className="text-xs font-bold uppercase opacity-80">
                      {event.date.split(' ')[1]}
                    </span>
                    <span className="text-2xl font-bold">
                      {event.date.split(' ')[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-xl leading-tight mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 font-medium">
                      <Clock size={14} /> {event.time}
                    </div>
                  </div>
                </div>

                <NeuButton onClick={() => onNavigate('event-registration')} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-lg hover:shadow-orange-200 transition-all">
                  Register Now
                </NeuButton>
              </div>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}