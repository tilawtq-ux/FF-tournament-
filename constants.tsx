
import { Tournament, MatchStatus, MatchType, Transaction } from './types';

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    title: 'Weekend Warriors - Bermuda',
    prizePool: 5000,
    entryFee: 50,
    matchType: MatchType.SOLO,
    map: 'Bermuda',
    startTime: '2024-06-25T18:00:00Z',
    status: MatchStatus.UPCOMING,
    maxPlayers: 48,
    joinedPlayers: 32,
    perKill: 10,
    version: 'Mobile'
  },
  {
    id: 't2',
    title: 'Squad Showdown Pro',
    prizePool: 20000,
    entryFee: 200,
    matchType: MatchType.SQUAD,
    map: 'Purgatory',
    startTime: '2024-06-26T20:00:00Z',
    status: MatchStatus.UPCOMING,
    maxPlayers: 12,
    joinedPlayers: 8,
    perKill: 50,
    version: 'Mobile'
  },
  {
    id: 't3',
    title: 'Kalahari Blitz',
    prizePool: 1500,
    entryFee: 20,
    matchType: MatchType.DUO,
    map: 'Kalahari',
    startTime: '2024-06-25T14:00:00Z',
    status: MatchStatus.ONGOING,
    maxPlayers: 24,
    joinedPlayers: 24,
    perKill: 5,
    version: 'Mobile'
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: 'tx1',
    type: 'DEPOSIT',
    amount: 500,
    date: '2024-06-20T10:30:00Z',
    status: 'SUCCESS',
    description: 'Wallet Topup via UPI'
  },
  {
    id: 'tx2',
    type: 'ENTRY_FEE',
    amount: -50,
    date: '2024-06-21T15:20:00Z',
    status: 'SUCCESS',
    description: 'Joined Weekend Warriors'
  },
  {
    id: 'tx3',
    type: 'WINNING',
    amount: 250,
    date: '2024-06-22T19:00:00Z',
    status: 'SUCCESS',
    description: 'Winnings from Solo Rush'
  }
];
