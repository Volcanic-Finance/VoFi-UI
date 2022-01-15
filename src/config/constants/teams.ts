import { IPFS_GATEWAY } from '../index'
import { Team } from './types'

const teams: Team[] = [
  {
    id: 1,
    name: 'Rugg Detectors',
    description: "Greedy Developers Here we come.We Earn while Keeping DeFi clean.!",
    images: {
      lg: 'syrup-storm-lg.png',
      md: 'syrup-storm-md.png',
      sm: 'syrup-storm-sm.png',
      alt: 'syrup-storm-alt.png',
      ipfs: `${IPFS_GATEWAY}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/syrup-storm.png`,
    },
    background: 'syrup-storm-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
  {
    id: 2,
    name: 'Rugg Chaser's',
    description: "The squid Games is over, no more rugg pulls too!",
    images: {
      lg: 'fearsome-flippers-lg.png',
      md: 'fearsome-flippers-md.png',
      sm: 'fearsome-flippers-sm.png',
      alt: 'fearsome-flippers-alt.png',
      ipfs: `${IPFS_GATEWAY}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/fearsome-flippers.png`,
    },
    background: 'fearsome-flippers-bg.svg',
    textColor: '#FFFFFF',
    users: 0,
    points: 0,
  },
  {
    id: 3,
    name: 'Meme Burners',
    description: 'Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!',
    images: {
      lg: 'chaotic-cakers-lg.png',
      md: 'chaotic-cakers-md.png',
      sm: 'chaotic-cakers-sm.png',
      alt: 'chaotic-cakers-alt.png',
      ipfs: `${IPFS_GATEWAY}/QmXKzSojwzYjtDCVgR6mVx7w7DbyYpS7zip4ovJB9fQdMG/chaotic-cakers.png`,
    },
    background: 'chaotic-cakers-bg.svg',
    textColor: '#191326',
    users: 0,
    points: 0,
  },
]

export default teams
