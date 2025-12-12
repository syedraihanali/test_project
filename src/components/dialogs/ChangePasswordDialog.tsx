import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, EyeOff } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';
import { NeuCard } from '../ui/NeuCard';
interface ChangePasswordDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export function ChangePasswordDialog({
  isOpen,
  onClose
}: ChangePasswordDialogProps) {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  return <AnimatePresence>
      {isOpen && <>
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" onClick={onClose} />
          <motion.div initial={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.9,
        y: 20
      }} className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
            <div className="w-full max-w-sm pointer-events-auto">
              <NeuCard className="bg-[#e0e5ec] shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    Change Password
                  </h2>
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">
                      Old Password
                    </label>
                    <div className="relative">
                      <input type={showOld ? 'text' : 'password'} className="w-full p-3 rounded-xl bg-[#e0e5ec] neu-pressed outline-none text-gray-700 pr-10" />
                      <button onClick={() => setShowOld(!showOld)} className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                        {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">
                      New Password
                    </label>
                    <div className="relative">
                      <input type={showNew ? 'text' : 'password'} className="w-full p-3 rounded-xl bg-[#e0e5ec] neu-pressed outline-none text-gray-700 pr-10" />
                      <button onClick={() => setShowNew(!showNew)} className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600">
                        {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">
                      Confirm Password
                    </label>
                    <input type="password" className="w-full p-3 rounded-xl bg-[#e0e5ec] neu-pressed outline-none text-gray-700" />
                  </div>

                  <div className="pt-4">
                    <NeuButton onClick={onClose} className="w-full bg-blue-500 text-white hover:text-blue-100">
                      Update Password
                    </NeuButton>
                  </div>
                </div>
              </NeuCard>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}