
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Trophy, Wallet, User, Swords } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  userBalance: number;
}

const Layout: React.FC<LayoutProps> = ({ children, userBalance }) => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 gaming-card border-b border-slate-800 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
            <Swords className="text-white w-5 h-5" />
          </div>
          <h1 className="font-orbitron font-bold text-lg tracking-wider bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            IGNITE
          </h1>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
          <Wallet className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-sm text-cyan-50 text-slate-100">₹{userBalance}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 gaming-card border-t border-slate-800 flex justify-around items-center h-16 px-2">
        <NavLink
          to="/"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500'}`
          }
        >
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-semibold uppercase">Home</span>
        </NavLink>
        <NavLink
          to="/tournaments"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500'}`
          }
        >
          <Trophy className="w-6 h-6" />
          <span className="text-[10px] font-semibold uppercase">Matches</span>
        </NavLink>
        <NavLink
          to="/my-matches"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500'}`
          }
        >
          <Swords className="w-6 h-6" />
          <span className="text-[10px] font-semibold uppercase">My Plays</span>
        </NavLink>
        <NavLink
          to="/wallet"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500'}`
          }
        >
          <Wallet className="w-6 h-6" />
          <span className="text-[10px] font-semibold uppercase">Wallet</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => 
            `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500'}`
          }
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-semibold uppercase">Profile</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Layout;
