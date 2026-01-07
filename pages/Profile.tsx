
import React, { useState } from 'react';
import { UserProfile } from '../types';
import { User, Phone, IdCard, Mail, Edit3, Save, Sparkles, Loader2 } from 'lucide-react';
import { editAvatar } from '../geminiService';

interface ProfileProps {
  userProfile: UserProfile;
  onUpdate: (data: Partial<UserProfile>) => void;
}

const Profile: React.FC<ProfileProps> = ({ userProfile, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userProfile);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');

  const handleSave = () => {
    onUpdate(formData);
    setIsEditing(false);
  };

  const handleAiEdit = async () => {
    if (!aiPrompt) return;
    setIsAiLoading(true);
    try {
      // Mock converting the current avatar to base64 for demo purposes
      // In a real app, you'd fetch the actual image data
      const response = await fetch(userProfile.avatarUrl!);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result as string;
        const newAvatar = await editAvatar(base64, aiPrompt);
        if (newAvatar) {
          onUpdate({ avatarUrl: newAvatar });
          setAiPrompt('');
          alert('AI Avatar updated successfully!');
        } else {
          alert('Failed to generate AI edit. Try again!');
        }
        setIsAiLoading(false);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      console.error(e);
      setIsAiLoading(false);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-orbitron font-bold text-xl text-slate-100 uppercase tracking-wider">Profile Settings</h2>
        <button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="p-2 gaming-card rounded-xl text-cyan-400 border-cyan-900/50"
        >
          {isEditing ? <Save className="w-5 h-5" /> : <Edit3 className="w-5 h-5" />}
        </button>
      </div>

      {/* Avatar Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full border-2 border-cyan-500 p-1 shadow-[0_0_15px_rgba(6,182,212,0.5)] overflow-hidden bg-slate-800">
            <img 
              src={userProfile.avatarUrl} 
              alt="Avatar" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-cyan-600 p-1.5 rounded-full border border-slate-900">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <div className="mt-6 w-full max-w-xs">
          <p className="text-[10px] font-bold text-slate-500 uppercase text-center mb-2 tracking-widest">AI Avatar Studio</p>
          <div className="flex gap-2">
            <input 
              type="text"
              placeholder="e.g. Add neon cyberpunk fire"
              className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              disabled={isAiLoading}
            />
            <button 
              onClick={handleAiEdit}
              disabled={isAiLoading || !aiPrompt}
              className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg disabled:opacity-50"
            >
              {isAiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div className="gaming-card rounded-2xl p-4 border-slate-800">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Full Name</label>
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-cyan-500" />
            <input 
              type="text" 
              disabled={!isEditing}
              className="bg-transparent text-slate-100 font-bold focus:outline-none disabled:text-slate-400 w-full"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
        </div>

        <div className="gaming-card rounded-2xl p-4 border-slate-800">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">FF Character ID (UID)</label>
          <div className="flex items-center gap-3">
            <IdCard className="w-4 h-4 text-cyan-500" />
            <input 
              type="text" 
              disabled={!isEditing}
              className="bg-transparent text-slate-100 font-bold focus:outline-none disabled:text-slate-400 w-full font-orbitron"
              value={formData.ffUid}
              onChange={(e) => setFormData({...formData, ffUid: e.target.value})}
            />
          </div>
        </div>

        <div className="gaming-card rounded-2xl p-4 border-slate-800">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Phone Number</label>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-cyan-500" />
            <input 
              type="text" 
              disabled={!isEditing}
              className="bg-transparent text-slate-100 font-bold focus:outline-none disabled:text-slate-400 w-full"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
        </div>

        <div className="gaming-card rounded-2xl p-4 border-slate-800">
          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Email Address</label>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-cyan-500" />
            <input 
              type="email" 
              disabled={true}
              className="bg-transparent text-slate-500 font-bold focus:outline-none w-full"
              value={formData.email}
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full py-4 rounded-2xl bg-red-900/20 text-red-500 border border-red-900/30 font-bold text-xs uppercase tracking-widest">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
