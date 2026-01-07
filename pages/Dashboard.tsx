
import React from 'react';
import { MOCK_TOURNAMENTS } from '../constants';
import TournamentCard from '../components/TournamentCard';
import { Trophy, Users, ShieldAlert, Award } from 'lucide-react';

const Dashboard: React.FC<{ onJoin: (id: string) => void }> = ({ onJoin }) => {
  return (
    <div className="p-4">
      {/* Banner */}
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6 gaming-card border-none">
        <img 
          src="https://picsum.photos/seed/gaming/800/400" 
          alt="Banner" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-5">
          <h2 className="font-orbitron text-2xl font-bold text-cyan-400">SUMMER RUSH</h2>
          <p className="text-slate-300 text-sm">₹50,000 Total Prize Pool • Seasonal Tournament</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="gaming-card p-3 rounded-xl border-l-2 border-l-purple-500">
          <Trophy className="w-5 h-5 text-purple-400 mb-1" />
          <div className="text-[10px] text-slate-400 uppercase font-bold">Winnings</div>
          <div className="text-lg font-orbitron font-bold">₹1,240</div>
        </div>
        <div className="gaming-card p-3 rounded-xl border-l-2 border-l-orange-500">
          <Users className="w-5 h-5 text-orange-400 mb-1" />
          <div className="text-[10px] text-slate-400 uppercase font-bold">Kills</div>
          <div className="text-lg font-orbitron font-bold">142</div>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar mb-4">
        <div className="min-w-[140px] gaming-card p-3 rounded-xl flex flex-col items-center text-center">
          <ShieldAlert className="w-6 h-6 text-cyan-400 mb-2" />
          <span className="text-[10px] font-bold text-slate-200">Anti-Cheat Enabled</span>
        </div>
        <div className="min-w-[140px] gaming-card p-3 rounded-xl flex flex-col items-center text-center">
          <Award className="w-6 h-6 text-yellow-500 mb-2" />
          <span className="text-[10px] font-bold text-slate-200">Daily Rewards</span>
        </div>
        <div className="min-w-[140px] gaming-card p-3 rounded-xl flex flex-col items-center text-center">
          <Users className="w-6 h-6 text-purple-400 mb-2" />
          <span className="text-[10px] font-bold text-slate-200">24/7 Support</span>
        </div>
      </div>

      {/* Featured Matches */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-orbitron font-bold text-slate-100 uppercase tracking-widest text-sm">Live & Upcoming</h3>
        <button className="text-xs text-cyan-400 font-bold uppercase hover:underline">View All</button>
      </div>

      <div className="space-y-4">
        {MOCK_TOURNAMENTS.slice(0, 3).map(tournament => (
          <TournamentCard 
            key={tournament.id} 
            tournament={tournament} 
            onJoin={onJoin} 
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
