
import React, { useState } from 'react';
import { MOCK_TOURNAMENTS } from '../constants';
import TournamentCard from '../components/TournamentCard';
import { Search, Filter } from 'lucide-react';

interface TournamentsProps {
  onJoin: (id: string) => void;
  joinedMatches: string[];
}

const Tournaments: React.FC<TournamentsProps> = ({ onJoin, joinedMatches }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTournaments = MOCK_TOURNAMENTS.filter(t => 
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.map.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-orbitron font-bold text-xl text-slate-100">ALL MATCHES</h2>
        <div className="flex gap-2">
           <button className="p-2 gaming-card rounded-lg text-slate-400">
             <Filter className="w-5 h-5" />
           </button>
        </div>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
        <input 
          type="text"
          placeholder="Search by map or title..."
          className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-slate-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredTournaments.map(tournament => (
          <TournamentCard 
            key={tournament.id} 
            tournament={tournament} 
            onJoin={onJoin}
            isJoined={joinedMatches.includes(tournament.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
