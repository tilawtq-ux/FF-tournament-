
export interface UserProfile {
  uid: string;
  name: string;
  ffUid: string;
  phone: string;
  email: string;
  balance: number;
  avatarUrl?: string;
}

export enum MatchStatus {
  UPCOMING = 'UPCOMING',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum MatchType {
  SOLO = 'SOLO',
  DUO = 'DUO',
  SQUAD = 'SQUAD'
}

export interface Tournament {
  id: string;
  title: string;
  prizePool: number;
  entryFee: number;
  matchType: MatchType;
  map: string;
  startTime: string;
  status: MatchStatus;
  maxPlayers: number;
  joinedPlayers: number;
  perKill: number;
  version: string;
}

export interface Transaction {
  id: string;
  type: 'DEPOSIT' | 'WITHDRAW' | 'ENTRY_FEE' | 'WINNING';
  amount: number;
  date: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  description: string;
}

export interface MyMatch {
  tournamentId: string;
  tournamentTitle: string;
  status: MatchStatus;
  roomId?: string;
  password?: string;
  results?: {
    rank: number;
    kills: number;
    winnings: number;
  };
}
