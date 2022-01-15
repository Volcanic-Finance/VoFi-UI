import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'VolcanicFinance',
  description:
    'The First Incentivise Burning and Yield Farming Protocol on DeFi Ecosystem ! Stake Your Rugged tokens and Earn VoFi token or other projects tokens, Build your portfolio by Earn VoFi token through yield farming or win it on Team Battles, then stake it in VoFiVaults to earn more tokens! Fixed Burns and Community Burns(new incentivise token Burn 🔥 Model Brought to you by VolcanicFinance Protocol), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('VolcanicFinance')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('VolcanicFinance')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('VolcanicFinance')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('VolcanicFinance')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('VolcanicFinance')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('VolcanicFinance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('VolcanicFinance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('VolcanicFinance')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('VolcsnicFinance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('VolcanicFinance')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('VolcanicFinance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('VolcanicFinance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('VolcanicFinance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('VolcanicFinance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('VolcanicFinance')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('VolcanicFinance')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('VolcanicFinance')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('VolcsnicFinance')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('VolcanicFinance')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('VolcanicFinance')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('VolcanicFinance')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('VolcanicFinance')}`,
      }
    default:
      return null
  }
}
