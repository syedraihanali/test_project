import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { NeuButton } from '../ui/NeuButton';
import { NeuCard } from '../ui/NeuCard';
interface LogoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
}
export function LogoutDialog({
  isOpen,
  onClose
}: LogoutDialogProps) {
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
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.9
      }} className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
            <div className="w-full max-w-xs pointer-events-auto">
              <NeuCard className="bg-[#e0e5ec] shadow-2xl text-center py-8">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 mx-auto mb-4">
                  <LogOut size={32} />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Logout?
                </h2>
                <p className="text-gray-500 mb-6">
                  Are you sure you want to logout from your account?
                </p>

                <div className="flex gap-3 px-4">
                  <NeuButton onClick={onClose} className="flex-1 bg-gray-200 hover:text-gray-600">
                    Cancel
                  </NeuButton>
                  <NeuButton onClick={onClose} className="flex-1 bg-red-500 text-white hover:text-red-100">
                    Logout
                  </NeuButton>
                </div>
              </NeuCard>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
}