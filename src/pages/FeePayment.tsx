import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, Landmark, Banknote, ShieldCheck } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
interface FeePaymentProps {
  onNavigate: (page: string) => void;
}
export function FeePayment({
  onNavigate
}: FeePaymentProps) {
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">Fee Payment</h1>
      </div>

      <motion.div initial={{
      scale: 0.9,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} className="mb-8">
        <NeuCard className="bg-gradient-to-br from-emerald-500 to-teal-600 border-none text-center py-8 text-white shadow-xl shadow-emerald-300/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

          <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mb-1">
            Total Due Amount
          </p>
          <h2 className="text-5xl font-bold text-white mt-2 drop-shadow-sm">
            ৳ 12,500
          </h2>
          <div className="inline-flex items-center gap-1 bg-red-500/20 border border-red-200/30 px-3 py-1 rounded-full mt-4 backdrop-blur-sm">
            <span className="text-xs text-white font-bold">
              Due Date: 30 Oct 2024
            </span>
          </div>
        </NeuCard>
      </motion.div>

      <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider ml-1 mb-4">
        Select Payment Method
      </h3>

      <div className="space-y-4">
        <PaymentMethodCard icon={CreditCard} title="Online Payment" desc="Cards, bKash, Nagad, Rocket" color="blue" onClick={() => onNavigate('payment-online')} delay={0.1} />
        <PaymentMethodCard icon={Landmark} title="Bank Deposit" desc="Upload deposit slip" color="purple" onClick={() => onNavigate('payment-bank')} delay={0.2} />
        <PaymentMethodCard icon={Banknote} title="Cash Payment" desc="Pay at college counter" color="orange" onClick={() => onNavigate('payment-cash')} delay={0.3} />
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
        <ShieldCheck size={14} className="text-emerald-600" />
        Secure Payment Gateway
      </div>
    </div>;
}
function PaymentMethodCard({
  icon: Icon,
  title,
  desc,
  color,
  onClick,
  delay
}: any) {
  const colors = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };
  return <motion.div initial={{
    x: -20,
    opacity: 0
  }} animate={{
    x: 0,
    opacity: 1
  }} transition={{
    delay
  }} whileTap={{
    scale: 0.98
  }} onClick={onClick}>
      <NeuCard className="flex items-center gap-4 cursor-pointer hover:bg-white/90 transition-colors border border-white/50">
        <div className={`w-14 h-14 rounded-2xl ${colors[color as keyof typeof colors]} flex items-center justify-center shadow-sm`}>
          <Icon size={28} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 text-lg">{title}</h4>
          <p className="text-xs text-gray-500 font-medium">{desc}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
          →
        </div>
      </NeuCard>
    </motion.div>;
}