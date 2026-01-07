
import React from 'react';
import { MatchStatus, MyMatch } from '../types';
import { MOCK_TOURNAMENTS } from '../constants';
import { Copy, Eye, Lock, Zap, ChevronRight } from 'lucide-react';

interface MyMatchesProps {
  joinedMatchIds: string[];
}

const MyMatches: React.FC<MyMatchesProps> = ({ joinedMatchIds }) => {
  // Map joined IDs to MyMatch objects using Mock data
  const myMatches: MyMatch[] = joinedMatchIds.map(id => {
    const tournament = MOCK_TOURNAMENTS.find(t => t.id === id);
    return {
      tournamentId: id,
      tournamentTitle: tournament?.title || 'Unknown Match',
      status: tournament?.status || MatchStatus.UPCOMING,
      roomId: id === 't1' ? '9283741' : undefined,
      password: id === 't1' ? 'FFPRO' : undefined
    };
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="p-4">
      <h2 className="font-orbitron font-bold text-xl mb-6 text-slate-100 uppercase tracking-wider">My Plays</h2>

      {myMatches.length === 0 ? (
        <div className="gaming-card p-12 rounded-3xl text-center border-dashed">
          <Zap className="w-16 h-16 text-slate-800 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-400 mb-2">No Matches Joined</h3>
          <p className="text-slate-500 text-sm mb-6">You haven't registered for any tournaments yet. Join one to see it here!</p>
          <a href="/tournaments" className="inline-block bg-cyan-600 px-6 py-2 rounded-full text-white font-bold text-xs uppercase">Find Matches</a>
        </div>
      ) : (
        <div className="space-y-4">
          {myMatches.map((match, idx) => (
            <div key={idx} className="gaming-card rounded-2xl p-5 border border-slate-800 hover:border-cyan-900 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                  match.status === MatchStatus.UPCOMING ? 'bg-blue-900/50 text-blue-300 border border-blue-800' :
                  match.status === MatchStatus.ONGOING ? 'bg-green-900/50 text-green-300 border border-green-800' :
                  'bg-slate-800 text-slate-400 border border-slate-700'
                }`}>
                  {match.status}
                </span>
                <span className="text-[10px] text-slate-500 font-bold uppercase">ID: {match.tournamentId}</span>
              </div>
              
              <h3 className="font-bold text-lg text-slate-100 mb-4">{match.tournamentTitle}</h3>

              {match.status === MatchStatus.UPCOMING ? (
                <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800">
                  {match.roomId ? (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs text-slate-400 uppercase font-bold">Room ID</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-orbitron font-bold text-slate-100">{match.roomId}</span>
                          <button onClick={() => copyToClipboard(match.roomId!)} className="p-1 hover:text-cyan-400 transition-colors">
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs text-slate-400 uppercase font-bold">Password</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-orbitron font-bold text-slate-100">{match.password}</span>
                          <button onClick={() => copyToClipboard(match.password!)} className="p-1 hover:text-cyan-400 transition-colors">
                            <Copy className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-orange-400 font-medium italic mt-2">* Room ID/Password will be visible 15 mins before start.</p>
                    </div>
                  ) : (
                    <div className="text-center py-2">
                      <p className="text-sm text-slate-400">Room details will appear here shortly before the match starts.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-between items-center text-sm text-slate-400">
                  <span>Match details unavailable</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Rules Section */}
      <div className="mt-8">
        <h4 className="font-orbitron font-bold text-xs text-slate-500 mb-4 uppercase tracking-widest">General Rules</h4>
        <div className="gaming-card rounded-xl p-4 text-xs text-slate-400 space-y-2">
          <p>• Team up is strictly prohibited. You will be disqualified.</p>
          <p>• Use of hacks, scripts, or emulators results in permanent ban.</p>
          <p>• Ensure you have the latest game version updated.</p>
          <p>• Winnings are credited within 24 hours of match completion.</p>
        </div>
      </div>
    </div>
  );
};

export default MyMatches;
