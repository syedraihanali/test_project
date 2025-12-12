import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, FileText, Info } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface PaymentCashProps {
  onNavigate: (page: string) => void;
}
export function PaymentCash({
  onNavigate
}: PaymentCashProps) {
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('fee-payment')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Cash Payment</h1>
      </div>

      <div className="space-y-6">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.1
      }}>
          <NeuCard className="bg-white/90 border border-orange-100 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0 shadow-sm">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  Accounts Office
                </h3>
                <p className="text-gray-600 text-sm mt-1 font-medium">
                  Admin Building, Ground Floor, Room 102
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md">
                  <Info size={12} /> Campus Main Building
                </div>
              </div>
            </div>
          </NeuCard>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.2
      }}>
          <NeuCard className="bg-white/90 border border-blue-100 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  Office Hours
                </h3>
                <p className="text-gray-600 text-sm mt-1 font-medium">
                  Sunday - Thursday
                </p>
                <p className="text-blue-600 font-bold mt-1 text-lg">
                  9:00 AM - 2:00 PM
                </p>
              </div>
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
      }} className="px-2">
          <h3 className="font-bold text-gray-600 uppercase text-sm mb-4 ml-1 tracking-wider">
            Instructions
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-4 text-sm text-gray-700 bg-white/60 p-3 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-md">
                1
              </span>
              <span className="font-medium pt-0.5">
                Collect the payment slip from the counter or download it below.
              </span>
            </li>
            <li className="flex gap-4 text-sm text-gray-700 bg-white/60 p-3 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-md">
                2
              </span>
              <span className="font-medium pt-0.5">
                Fill up your Roll, Department, and Semester details carefully.
              </span>
            </li>
            <li className="flex gap-4 text-sm text-gray-700 bg-white/60 p-3 rounded-xl">
              <span className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-md">
                3
              </span>
              <span className="font-medium pt-0.5">
                Submit the slip with exact cash amount at the counter.
              </span>
            </li>
          </ul>
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
          <NeuButton className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white hover:bg-gray-900 shadow-lg">
            <FileText size={18} /> Download Payment Slip
          </NeuButton>
        </motion.div>
      </div>
    </div>;
}