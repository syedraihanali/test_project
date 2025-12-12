import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Phone, MapPin, Edit2, Lock, LogOut, ChevronRight } from 'lucide-react';
import { NeuButton } from '../components/ui/NeuButton';
import { NeuCard } from '../components/ui/NeuCard';
import { EditProfileDialog } from '../components/dialogs/EditProfileDialog';
import { ChangePasswordDialog } from '../components/dialogs/ChangePasswordDialog';
import { LogoutDialog } from '../components/dialogs/LogoutDialog';
interface ProfileProps {
  onNavigate: (page: string) => void;
}
export function Profile({
  onNavigate
}: ProfileProps) {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  return <div className="pb-24 pt-6 px-4 min-h-screen">
      <div className="flex items-center gap-4 mb-8">
        <NeuButton variant="icon" onClick={() => onNavigate('dashboard')} className="bg-white/50">
          <ArrowLeft size={20} />
        </NeuButton>
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <motion.div whileHover={{
          scale: 1.05
        }} className="w-32 h-32 rounded-full p-1.5 mb-4 relative bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80" alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-white" />
            <button onClick={() => setShowEditProfile(true)} className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors border-2 border-white">
              <Edit2 size={16} />
            </button>
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800">Rahim Ahmed</h2>
          <p className="text-indigo-600 font-medium">
            Computer Technology • 5th Semester
          </p>
          <p className="text-sm text-gray-500 mt-1 font-mono bg-white/50 px-3 py-1 rounded-full">
            Roll: 589231
          </p>
        </div>

        {/* Info Cards */}
        <NeuCard className="space-y-4 bg-white/80">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
              <p className="font-medium text-gray-800">rahim@example.com</p>
            </div>
          </div>
          <div className="h-px bg-gray-200" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
              <p className="font-medium text-gray-800">+880 1700 000000</p>
            </div>
          </div>
          <div className="h-px bg-gray-200" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">
                Address
              </p>
              <p className="font-medium text-gray-800">Dhaka, Bangladesh</p>
            </div>
          </div>
        </NeuCard>

        {/* Settings Actions */}
        <div className="space-y-3">
          <motion.button whileTap={{
          scale: 0.98
        }} onClick={() => setShowEditProfile(true)} className="w-full">
            <NeuCard className="flex items-center justify-between py-4 hover:bg-white transition-colors bg-white/60">
              <div className="flex items-center gap-3">
                <User size={20} className="text-gray-600" />
                <span className="font-bold text-gray-700">Edit Profile</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </NeuCard>
          </motion.button>

          <motion.button whileTap={{
          scale: 0.98
        }} onClick={() => setShowChangePassword(true)} className="w-full">
            <NeuCard className="flex items-center justify-between py-4 hover:bg-white transition-colors bg-white/60">
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-gray-600" />
                <span className="font-bold text-gray-700">Change Password</span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </NeuCard>
          </motion.button>

          <motion.button whileTap={{
          scale: 0.98
        }} onClick={() => setShowLogout(true)} className="w-full">
            <NeuCard className="flex items-center justify-between py-4 hover:bg-red-50 transition-colors !bg-red-50/50 !border-red-100">
              <div className="flex items-center gap-3">
                <LogOut size={20} className="text-red-600" />
                <span className="font-bold text-red-600">Logout</span>
              </div>
            </NeuCard>
          </motion.button>
        </div>
      </motion.div>

      {/* Dialogs */}
      <EditProfileDialog isOpen={showEditProfile} onClose={() => setShowEditProfile(false)} />
      <ChangePasswordDialog isOpen={showChangePassword} onClose={() => setShowChangePassword(false)} />
      <LogoutDialog isOpen={showLogout} onClose={() => setShowLogout(false)} />
    </div>;
}