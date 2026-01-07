
import React from 'react';
import { MOCK_TRANSACTIONS } from '../constants';
import { UserProfile } from '../types';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Plus, History } from 'lucide-react';

interface WalletProps {
  userProfile: UserProfile;
}

const Wallet: React.FC<WalletProps> = ({ userProfile }) => {
  return (
    <div className="p-4">
      <h2 className="font-orbitron font-bold text-xl mb-6 text-slate-100 uppercase tracking-wider">My Wallet</h2>

      {/* Balance Card */}
      <div className="gaming-card rounded-3xl p-6 mb-6 border-cyan-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Available Balance</p>
              <h3 className="text-4xl font-orbitron font-bold text-white">₹{userProfile.balance}</h3>
            </div>
            <div className="p-3 bg-cyan-500/20 rounded-2xl border border-cyan-500/30">
              <WalletIcon className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors">
              <Plus className="w-4 h-4" /> Add Money
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors border border-slate-700">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-orbitron font-bold text-xs text-slate-100 uppercase tracking-widest flex items-center gap-2">
          <History className="w-4 h-4 text-cyan-500" /> Transaction History
        </h4>
        <button className="text-[10px] text-cyan-400 font-bold uppercase">View All</button>
      </div>

      <div className="space-y-3">
        {MOCK_TRANSACTIONS.map(tx => (
          <div key={tx.id} className="gaming-card rounded-2xl p-4 flex justify-between items-center border-slate-800">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${tx.amount > 0 ? 'bg-green-900/30 text-green-500' : 'bg-red-900/30 text-red-500'}`}>
                {tx.amount > 0 ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-100">{tx.description}</p>
                <p className="text-[10px] text-slate-500">{new Date(tx.date).toLocaleDateString()} • {tx.status}</p>
              </div>
            </div>
            <div className={`font-orbitron font-bold text-sm ${tx.amount > 0 ? 'text-green-500' : 'text-slate-100'}`}>
              {tx.amount > 0 ? '+' : ''}₹{Math.abs(tx.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
