import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Paperclip, Upload, Download, CheckCircle, FileText } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface HomeWorkDetailsProps {
  onNavigate: (page: string) => void;
}
export function HomeWorkDetails({
  onNavigate
}: HomeWorkDetailsProps) {
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <NeuButton variant="icon" onClick={() => onNavigate('homework')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Assignment Details</h1>
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="space-y-6">
        {/* Header Info */}
        <NeuCard className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200">
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-bold text-green-700 bg-green-200/50 px-3 py-1 rounded-full border border-green-200">
              Database Systems
            </span>
            <div className="flex items-center gap-1 text-red-500 text-xs font-bold bg-red-50 px-2 py-1 rounded-md animate-pulse">
              <Clock size={14} />
              <span>2 days left</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            SQL Queries Practice
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed font-medium">
            Write SQL queries for the provided schema. Include joins,
            subqueries, and aggregate functions. Submit the .sql file.
          </p>
        </NeuCard>

        {/* Attachments */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }}>
          <h3 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider ml-1">
            Resources
          </h3>
          <NeuCard className="flex items-center justify-between py-3 bg-white/80 border border-green-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-500 shadow-sm">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Schema_Diagram.pdf
                </p>
                <p className="text-xs text-gray-500 font-medium">2.4 MB</p>
              </div>
            </div>
            <NeuButton variant="icon" className="w-10 h-10 bg-gray-50 hover:bg-gray-100">
              <Download size={18} className="text-gray-600" />
            </NeuButton>
          </NeuCard>
        </motion.div>

        {/* Submission */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.3
      }}>
          <h3 className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wider ml-1">
            Your Submission
          </h3>
          <NeuCard className="border-2 border-dashed border-green-300 bg-green-50/30 hover:bg-green-50/50 transition-colors cursor-pointer group">
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-green-500 mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Upload size={28} />
              </div>
              <p className="font-bold text-gray-700 text-lg">
                Upload your work
              </p>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                Supported: PDF, DOCX, SQL
              </p>
              <NeuButton className="mt-5 px-6 bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-200">
                Choose File
              </NeuButton>
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
        delay: 0.4
      }}>
          <NeuButton className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-green-200">
            Submit Assignment
          </NeuButton>
        </motion.div>
      </motion.div>
    </div>;
}