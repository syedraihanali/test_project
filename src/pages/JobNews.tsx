import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, DollarSign, Building2 } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface JobNewsProps {
  onNavigate: (page: string) => void;
}
export function JobNews({
  onNavigate
}: JobNewsProps) {
  const jobs = [{
    title: 'Junior React Developer',
    company: 'TechSolutions BD',
    location: 'Dhaka',
    salary: '25k - 35k',
    type: 'Full Time'
  }, {
    title: 'IT Support Intern',
    company: 'Grameenphone',
    location: 'Chittagong',
    salary: '10k - 15k',
    type: 'Internship'
  }, {
    title: 'Graphic Designer',
    company: 'Creative Agency',
    location: 'Remote',
    salary: 'Negotiable',
    type: 'Part Time'
  }];
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Job News</h1>
      </div>

      <div className="space-y-4">
        {jobs.map((job, idx) => <motion.div key={idx} initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: idx * 0.15
      }}>
            <NeuCard className="bg-white/80 border border-cyan-100 hover:border-cyan-300 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg leading-tight">
                      {job.title}
                    </h3>
                    <p className="text-cyan-600 font-medium text-sm">
                      {job.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-[10px] font-bold bg-cyan-50 text-cyan-700 px-2 py-1 rounded-md uppercase border border-cyan-100">
                  {job.type}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded-md">
                  <MapPin size={12} /> {job.location}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500 font-medium bg-gray-50 px-2 py-1 rounded-md">
                  <DollarSign size={12} /> {job.salary}
                </div>
              </div>

              <NeuButton className="w-full text-sm py-2.5 bg-cyan-500 text-white hover:bg-cyan-600">
                Apply Now
              </NeuButton>
            </NeuCard>
          </motion.div>)}
      </div>
    </div>;
}