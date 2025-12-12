import React, { Component } from 'react';
import { BookOpen, Clock, Trophy, Target, Bell, Search, Menu, MoreVertical, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { NeuCard } from './ui/NeuCard';
import { NeuButton } from './ui/NeuButton';
export function Dashboard() {
  return <div className="min-h-screen bg-[#e0e5ec] p-4 md:p-8 font-sans text-gray-700">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <NeuButton variant="icon" className="md:hidden">
              <Menu size={20} />
            </NeuButton>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 neu-text-shadow">
                Welcome back, Alex!
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Ready to learn something new today?
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <div className="hidden md:flex items-center neu-pressed rounded-full px-4 py-2 w-64">
              <Search size={18} className="text-gray-400 mr-2" />
              <input type="text" placeholder="Search courses..." className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-700" />
            </div>
            <NeuButton variant="icon" aria-label="Notifications">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full shadow-sm translate-x-[-8px] translate-y-[8px]"></span>
            </NeuButton>
            <div className="flex items-center gap-3 pl-2">
              <div className="w-10 h-10 rounded-full neu-flat overflow-hidden border-2 border-[#e0e5ec]">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<BookOpen size={24} className="text-blue-500" />} label="Courses in Progress" value="4" trend="+1 this week" />
          <StatCard icon={<Clock size={24} className="text-orange-500" />} label="Hours Spent" value="32.5" trend="12% increase" />
          <StatCard icon={<Trophy size={24} className="text-yellow-600" />} label="Average Grade" value="A-" trend="Top 10%" />
          <StatCard icon={<Target size={24} className="text-emerald-500" />} label="Goals Completed" value="8/10" trend="Almost there!" />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Schedule Section */}
          <section className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 neu-text-shadow">
                Today's Schedule
              </h2>
              <NeuButton className="text-sm px-4 py-2">View Calendar</NeuButton>
            </div>

            <div className="space-y-4">
              <ScheduleItem time="09:00 AM" subject="Advanced Mathematics" room="Room 302" instructor="Dr. Sarah Wilson" active />
              <ScheduleItem time="11:30 AM" subject="History of Art" room="Studio B" instructor="Prof. James Miller" />
              <ScheduleItem time="02:00 PM" subject="Computer Science Lab" room="Lab 4" instructor="Ms. Emily Chen" />
            </div>
          </section>

          {/* Assignments Section */}
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800 neu-text-shadow">
                Assignments
              </h2>
              <NeuButton variant="icon" className="w-8 h-8">
                <MoreVertical size={16} />
              </NeuButton>
            </div>

            <div className="space-y-4">
              <AssignmentCard subject="Physics" title="Thermodynamics Report" dueDate="Tomorrow" priority="high" />
              <AssignmentCard subject="Literature" title="Shakespeare Essay" dueDate="Oct 24" priority="medium" />
              <AssignmentCard subject="Chemistry" title="Lab Results Analysis" dueDate="Oct 28" priority="low" />
            </div>

            <NeuCard className="mt-6 flex items-center justify-between !py-4 cursor-pointer hover:scale-[1.02] transition-transform">
              <span className="font-medium text-gray-600">View all tasks</span>
              <div className="w-8 h-8 rounded-full neu-pressed flex items-center justify-center">
                <span className="text-gray-500">→</span>
              </div>
            </NeuCard>
          </section>
        </div>
      </div>
    </div>;
}
// Helper Components
function StatCard({
  icon,
  label,
  value,
  trend
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}) {
  return <NeuCard className="flex flex-col items-start gap-4 transition-transform hover:-translate-y-1 duration-300">
      <div className="w-12 h-12 rounded-full neu-icon-pressed flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-1">{value}</h3>
        <p className="text-gray-500 font-medium text-sm">{label}</p>
        <p className="text-xs text-gray-400 mt-2">{trend}</p>
      </div>
    </NeuCard>;
}
function ScheduleItem({
  time,
  subject,
  room,
  instructor,
  active
}: {
  time: string;
  subject: string;
  room: string;
  instructor: string;
  active?: boolean;
}) {
  return <NeuCard className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all hover:scale-[1.01] ${active ? 'border-l-4 border-l-blue-400' : ''}`}>
      <div className="flex flex-col items-center justify-center min-w-[80px] p-2 rounded-lg neu-pressed">
        <span className="text-sm font-bold text-gray-700">
          {time.split(' ')[0]}
        </span>
        <span className="text-xs text-gray-500">{time.split(' ')[1]}</span>
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-800 text-lg">{subject}</h3>
        <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> {instructor}
          </span>
          <span>•</span>
          <span>{room}</span>
        </div>
      </div>

      <NeuButton className="text-sm px-4 py-2 w-full sm:w-auto">
        {active ? 'Join Now' : 'Details'}
      </NeuButton>
    </NeuCard>;
}
function AssignmentCard({
  subject,
  title,
  dueDate,
  priority
}: {
  subject: string;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}) {
  const priorityColors = {
    high: 'text-red-500',
    medium: 'text-orange-500',
    low: 'text-green-500'
  };
  return <NeuCard className="group hover:scale-[1.02] transition-transform duration-200">
      <div className="flex justify-between items-start mb-2">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
          {subject}
        </span>
        <AlertCircle size={16} className={priorityColors[priority]} />
      </div>
      <h4 className="font-bold text-gray-800 mb-3">{title}</h4>
      <div className="flex justify-between items-center">
        <div className="px-3 py-1 rounded-full neu-pressed text-xs font-medium text-gray-500">
          Due: {dueDate}
        </div>
        <button className="w-8 h-8 rounded-full neu-flat group-hover:neu-pressed flex items-center justify-center text-gray-400 hover:text-green-500 transition-all">
          <CheckCircle2 size={16} />
        </button>
      </div>
    </NeuCard>;
}