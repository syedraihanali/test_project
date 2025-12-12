import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Check, Smartphone } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface PaymentOnlineProps {
  onNavigate: (page: string) => void;
}
export function PaymentOnline({
  onNavigate
}: PaymentOnlineProps) {
  const [method, setMethod] = useState<'card' | 'bkash' | 'nagad'>('card');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };
  if (success) {
    return <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-emerald-50 to-teal-100">
        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} className="text-center w-full">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-emerald-300 animate-bounce">
            <Check size={48} strokeWidth={3} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-8 font-medium">
            Transaction ID: TXN892310
          </p>
          <NeuButton onClick={() => onNavigate('dashboard')} className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
            Back to Dashboard
          </NeuButton>
        </motion.div>
      </div>;
  }
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('fee-payment')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Online Payment</h1>
      </div>

      <div className="space-y-6">
        {/* Method Selection */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          <button onClick={() => setMethod('card')} className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold transition-all shadow-sm border ${method === 'card' ? 'bg-blue-600 text-white border-blue-600 shadow-blue-200' : 'bg-white text-gray-500 border-gray-200'}`}>
            Card
          </button>
          <button onClick={() => setMethod('bkash')} className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold transition-all shadow-sm border ${method === 'bkash' ? 'bg-pink-600 text-white border-pink-600 shadow-pink-200' : 'bg-white text-gray-500 border-gray-200'}`}>
            bKash
          </button>
          <button onClick={() => setMethod('nagad')} className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold transition-all shadow-sm border ${method === 'nagad' ? 'bg-orange-600 text-white border-orange-600 shadow-orange-200' : 'bg-white text-gray-500 border-gray-200'}`}>
            Nagad
          </button>
        </div>

        {/* Payment Form */}
        <motion.div key={method} initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.3
      }}>
          <NeuCard className="space-y-4 bg-white/90 border border-white/50 shadow-xl">
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
              <span className="text-gray-500 font-medium">Amount to Pay</span>
              <span className="text-3xl font-bold text-gray-800">৳ 12,500</span>
            </div>

            {method === 'card' ? <>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-3 pl-10 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-700 font-mono focus:ring-2 focus:ring-blue-400/50 transition-all" />
                    <CreditCard size={18} className="absolute left-3 top-3.5 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                      Expiry
                    </label>
                    <input type="text" placeholder="MM/YY" className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-700 font-mono text-center focus:ring-2 focus:ring-blue-400/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                      CVC
                    </label>
                    <input type="text" placeholder="123" className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 outline-none text-gray-700 font-mono text-center focus:ring-2 focus:ring-blue-400/50 transition-all" />
                  </div>
                </div>
              </> : <div className="text-center py-8">
                <p className="text-gray-600 mb-6 font-medium">
                  You will be redirected to{' '}
                  {method === 'bkash' ? 'bKash' : 'Nagad'} payment gateway.
                </p>
                <motion.div animate={{
              scale: [1, 1.1, 1]
            }} transition={{
              repeat: Infinity,
              duration: 2
            }} className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg ${method === 'bkash' ? 'bg-pink-500 shadow-pink-200' : 'bg-orange-500 shadow-orange-200'}`}>
                  {method === 'bkash' ? 'b' : 'N'}
                </motion.div>
              </div>}
          </NeuCard>
        </motion.div>

        <NeuButton onClick={handlePay} className={`w-full py-4 text-white font-bold text-lg shadow-lg transition-all hover:scale-[1.02] ${processing ? 'opacity-70 cursor-not-allowed' : ''} ${method === 'bkash' ? 'bg-pink-600 hover:bg-pink-700 shadow-pink-200' : method === 'nagad' ? 'bg-orange-600 hover:bg-orange-700 shadow-orange-200' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-200'}`}>
          {processing ? 'Processing...' : `Pay ৳ 12,500`}
        </NeuButton>
      </div>
    </div>;
}