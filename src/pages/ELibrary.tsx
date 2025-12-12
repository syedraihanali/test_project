import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Book, Download, Star } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface ELibraryProps {
  onNavigate: (page: string) => void;
}
export function ELibrary({
  onNavigate
}: ELibraryProps) {
  const books = [{
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    category: 'Computer Science',
    rating: 4.8
  }, {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Programming',
    rating: 4.9
  }, {
    title: 'Database System Concepts',
    author: 'Abraham Silberschatz',
    category: 'Database',
    rating: 4.5
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">E-Library</h1>
      </div>

      {/* Search Bar */}
      <motion.div initial={{
      y: -20,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} className="mb-8 relative">
        <input type="text" placeholder="Search books, authors..." className="w-full h-14 pl-12 pr-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-teal-400/50 transition-all" />
        <Search className="absolute left-4 top-4 text-gray-400" size={24} />
      </motion.div>

      <div className="space-y-4">
        {books.map((book, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: idx * 0.1
      }}>
            <NeuCard className="flex items-center gap-4 bg-white/80 border border-teal-100 hover:shadow-teal-200/50 hover:border-teal-300 transition-all">
              <div className="w-16 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center text-white shadow-md transform -rotate-3">
                <Book size={28} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 leading-tight text-lg">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 font-medium">
                  {book.author}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full font-bold">
                    {book.category}
                  </span>
                  <div className="flex items-center gap-0.5 text-[10px] font-bold text-orange-500">
                    <Star size={10} fill="currentColor" /> {book.rating}
                  </div>
                </div>
              </div>
              <NeuButton variant="icon" className="w-10 h-10 bg-teal-50 text-teal-600 hover:bg-teal-100">
                <Download size={18} />
              </NeuButton>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}