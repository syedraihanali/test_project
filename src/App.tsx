import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Dashboard } from './pages/Dashboard';
import { ClassRoutine } from './pages/ClassRoutine';
import { HomeWork } from './pages/HomeWork';
import { HomeWorkDetails } from './pages/HomeWorkDetails';
import { Practical } from './pages/Practical';
import { Attendance } from './pages/Attendance';
import { Results } from './pages/Results';
import { Teachers } from './pages/Teachers';
import { Events } from './pages/Events';
import { EventRegistration } from './pages/EventRegistration';
import { JobNews } from './pages/JobNews';
import { ELibrary } from './pages/ELibrary';
import { FeePayment } from './pages/FeePayment';
import { PaymentOnline } from './pages/PaymentOnline';
import { PaymentBank } from './pages/PaymentBank';
import { PaymentCash } from './pages/PaymentCash';
import { Emergency } from './pages/Emergency';
import { Notifications } from './pages/Notifications';
import { Profile } from './pages/Profile';
import { BottomNav } from './components/BottomNav';
export function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'class-routine':
        return <ClassRoutine onNavigate={setCurrentPage} />;
      case 'homework':
        return <HomeWork onNavigate={setCurrentPage} />;
      case 'homework-details':
        return <HomeWorkDetails onNavigate={setCurrentPage} />;
      case 'practical':
        return <Practical onNavigate={setCurrentPage} />;
      case 'attendance':
        return <Attendance onNavigate={setCurrentPage} />;
      case 'results':
        return <Results onNavigate={setCurrentPage} />;
      case 'teachers':
        return <Teachers onNavigate={setCurrentPage} />;
      case 'events':
        return <Events onNavigate={setCurrentPage} />;
      case 'event-registration':
        return <EventRegistration onNavigate={setCurrentPage} />;
      case 'job-news':
        return <JobNews onNavigate={setCurrentPage} />;
      case 'e-library':
        return <ELibrary onNavigate={setCurrentPage} />;
      case 'fee-payment':
        return <FeePayment onNavigate={setCurrentPage} />;
      case 'payment-online':
        return <PaymentOnline onNavigate={setCurrentPage} />;
      case 'payment-bank':
        return <PaymentBank onNavigate={setCurrentPage} />;
      case 'payment-cash':
        return <PaymentCash onNavigate={setCurrentPage} />;
      case 'emergency':
        return <Emergency onNavigate={setCurrentPage} />;
      case 'notifications':
        return <Notifications onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };
  const activeTab = ['dashboard', 'notifications', 'profile'].includes(currentPage) ? currentPage as 'dashboard' | 'notifications' | 'profile' : 'dashboard';
  // Dynamic background based on route
  const getBackground = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100';
      case 'class-routine':
        return 'bg-gradient-to-br from-blue-100 to-cyan-100';
      case 'homework':
        return 'bg-gradient-to-br from-green-100 to-emerald-100';
      case 'practical':
        return 'bg-gradient-to-br from-purple-100 to-fuchsia-100';
      case 'attendance':
        return 'bg-gradient-to-br from-orange-100 to-amber-100';
      case 'results':
        return 'bg-gradient-to-br from-pink-100 to-rose-100';
      case 'emergency':
        return 'bg-gradient-to-br from-red-100 to-orange-100';
      default:
        return 'bg-[#e0e5ec]';
    }
  };
  return <div className={`min-h-screen font-sans text-gray-700 flex justify-center transition-colors duration-500 ${getBackground()}`}>
      <div className="w-full max-w-md min-h-screen relative shadow-2xl overflow-hidden bg-white/30 backdrop-blur-xl">
        <AnimatePresence mode="wait">
          <motion.div key={currentPage} initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} exit={{
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }} className="h-full">
            {renderPage()}
          </motion.div>
        </AnimatePresence>
        <BottomNav activeTab={activeTab} onNavigate={setCurrentPage} />
      </div>
    </div>;
}