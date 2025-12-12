import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, Copy, Landmark } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface PaymentBankProps {
  onNavigate: (page: string) => void;
}
export function PaymentBank({
  onNavigate
}: PaymentBankProps) {
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('fee-payment')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Bank Deposit</h1>
      </div>

      <div className="space-y-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }}>
          <NeuCard className="bg-white/90 border border-purple-100 shadow-xl">
            <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Landmark size={20} />
              </div>
              <h3 className="font-bold text-gray-700">Bank Account Details</h3>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Bank Name
                  </p>
                  <p className="font-bold text-gray-800 text-lg">
                    Dutch Bangla Bank Ltd.
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Account Name
                  </p>
                  <p className="font-bold text-gray-800">
                    Dhaka Polytechnic Institute
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center bg-purple-50 p-4 rounded-xl border border-purple-100">
                <div>
                  <p className="text-xs text-purple-500 uppercase font-bold">
                    Account Number
                  </p>
                  <p className="font-mono font-bold text-gray-800 tracking-wider text-lg">
                    128.110.4589
                  </p>
                </div>
                <button className="text-purple-600 hover:text-purple-800 bg-white p-2 rounded-lg shadow-sm">
                  <Copy size={18} />
                </button>
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
        delay: 0.2
      }}>
          <NeuCard className="bg-white/80">
            <h3 className="font-bold text-gray-700 mb-4">
              Upload Deposit Slip
            </h3>
            <div className="border-2 border-dashed border-purple-300 bg-purple-50/30 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-purple-50/50 transition-colors cursor-pointer group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-purple-400 mb-3 shadow-md group-hover:scale-110 transition-transform">
                <Upload size={24} />
              </div>
              <p className="text-sm font-bold text-gray-600">
                Click to upload image
              </p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG (Max 5MB)</p>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                Transaction/Reference ID
              </label>
              <input type="text" placeholder="Enter ID from slip" className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-700 focus:ring-2 focus:ring-purple-400/50 transition-all" />
            </div>

            <NeuButton className="w-full mt-6 bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200">
              Submit Payment Proof
            </NeuButton>
          </NeuCard>
        </motion.div>
      </div>
    </div>;
}