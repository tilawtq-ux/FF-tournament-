
import React from 'react';
import { Tournament, MatchType } from '../types';
import { Users, Map, Clock, Target, ShieldCheck } from 'lucide-react';

interface TournamentCardProps {
  tournament: Tournament;
  onJoin: (id: string) => void;
  isJoined?: boolean;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament, onJoin, isJoined = false }) => {
  const progress = (tournament.joinedPlayers / tournament.maxPlayers) * 100;
  
  return (
    <div className="gaming-card rounded-xl overflow-hidden mb-4 border-l-4 border-l-cyan-500 shadow-lg group">
      <div className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="bg-slate-800 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">
              {tournament.matchType} • {tournament.version}
            </span>
            <h3 className="text-lg font-bold mt-1 text-slate-50">{tournament.title}</h3>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 uppercase font-bold">Prize Pool</div>
            <div className="text-xl font-orbitron font-bold text-cyan-400">₹{tournament.prizePool}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-slate-300 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>{new Date(tournament.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Map className="w-4 h-4 text-cyan-500" />
            <span>{tournament.map}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-cyan-500" />
            <span>₹{tournament.perKill}/Kill</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>Entry: ₹{tournament.entryFee}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-slate-400 mb-1 font-bold">
            <span>Progress</span>
            <span>{tournament.joinedPlayers}/{tournament.maxPlayers} Spots</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-600 to-cyan-400 h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => !isJoined && onJoin(tournament.id)}
          disabled={isJoined || tournament.joinedPlayers >= tournament.maxPlayers}
          className={`w-full py-3 rounded-lg font-orbitron font-bold text-sm tracking-widest transition-all ${
            isJoined 
            ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed'
            : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 active:scale-[0.98]'
          }`}
        >
          {isJoined ? 'JOINED' : 'JOIN NOW'}
        </button>
      </div>
    </div>
  );
};

export default TournamentCard;
