
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tournaments from './pages/Tournaments';
import MyMatches from './pages/MyMatches';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import { UserProfile, Tournament } from './types';
import { MOCK_TOURNAMENTS } from './constants';

const App = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    uid: 'user123',
    name: 'GamingLegend',
    ffUid: '123456789',
    phone: '+91 9876543210',
    email: 'legend@ignite.com',
    balance: 750,
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky'
  });

  const [joinedMatches, setJoinedMatches] = useState<string[]>(['t1']);

  const handleJoinTournament = (id: string) => {
    const tournament = MOCK_TOURNAMENTS.find(t => t.id === id);
    if (!tournament) return;

    if (userProfile.balance < tournament.entryFee) {
      alert("Insufficient Balance! Please top up your wallet.");
      return;
    }

    if (confirm(`Do you want to join "${tournament.title}" for ₹${tournament.entryFee}?`)) {
      setUserProfile(prev => ({
        ...prev,
        balance: prev.balance - tournament.entryFee
      }));
      setJoinedMatches(prev => [...prev, id]);
      alert("Successfully joined tournament!");
    }
  };

  const updateProfile = (data: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...data }));
  };

  return (
    <BrowserRouter>
      <Layout userBalance={userProfile.balance}>
        <Routes>
          <Route path="/" element={<Dashboard onJoin={handleJoinTournament} />} />
          <Route path="/tournaments" element={<Tournaments onJoin={handleJoinTournament} joinedMatches={joinedMatches} />} />
          <Route path="/my-matches" element={<MyMatches joinedMatchIds={joinedMatches} />} />
          <Route path="/wallet" element={<Wallet userProfile={userProfile} />} />
          <Route path="/profile" element={<Profile userProfile={userProfile} onUpdate={updateProfile} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
