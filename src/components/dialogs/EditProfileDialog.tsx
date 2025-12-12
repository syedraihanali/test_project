import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';
import { NeuCard } from '../ui/NeuCard';
interface EditProfileDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export function EditProfileDialog({
  isOpen,
  onClose
}: EditProfileDialogProps) {
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
                    Edit Profile
                  </h2>
                  <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">
                      Full Name
                    </label>
                    <input type="text" defaultValue="Rahim Ahmed" className="w-full p-3 rounded-xl bg-[#e0e5ec] neu-pressed outline-none text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">
                      Email
                    </label>
                    <input type="email" defaultValue="rahim@example.com" className="w-full p-3 rounded-xl bg-[#e0e5ec] neu-pressed outline-none text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">
                      Phone
                    </label>
                    <input type="tel" defaultValue="+880 1700 000000" className="w-full p-3 rounded-xl bg-[#e0e5ec] neu-pressed outline-none text-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 ml-1">
                      Address
                    </label>
                    <input type="text" defaultValue="Dhaka, Bangladesh" className="w-full p-3 rounded-xl bg-[#e0e5ec] neu-pressed outline-none text-gray-700" />
                  </div>

                  <div className="pt-4 flex gap-3">
                    <NeuButton onClick={onClose} className="flex-1 bg-gray-200 hover:text-gray-600">
                      Cancel
                    </NeuButton>
                    <NeuButton onClick={onClose} className="flex-1 bg-blue-500 text-white hover:text-blue-100">
                      Save Changes
                    </NeuButton>
                  </div>
                </div>
              </NeuCard>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}