type TradingChain = {
  name: string
  link: string
}

type TradingLink = {
  type: string
  name: string
  icon: string
  link: string
  chains?: TradingChain[]
}

export const FRAX_EXCHANGE: Array<TradingLink> = [
  {
    type: 'defi',
    name: 'Uniswap V3',
    icon: 'uni.svg',
    link: 'https://info.uniswap.org/#/tokens/0x853d955acef822db058eb8505911ed77f175b99e',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://info.uniswap.org/#/tokens/0x853d955acef822db058eb8505911ed77f175b99e',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Uniswap V2',
    icon: 'uni.svg',
    link: 'https://v2.info.uniswap.org/token/0x853d955acef822db058eb8505911ed77f175b99e',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://v2.info.uniswap.org/token/0x853d955acef822db058eb8505911ed77f175b99e',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap',
    icon: 'sushi.svg',
    link: 'https://analytics.sushi.com/tokens/0x853d955acef822db058eb8505911ed77f175b99e',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://analytics.sushi.com/tokens/0x853d955acef822db058eb8505911ed77f175b99e',
      },
      {
        name: 'Arbitrum',
        link: 'https://analytics-arbitrum.sushi.com/tokens/0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
      },
      {
        name: 'Harmony',
        link: 'https://analytics-harmony.sushi.com/tokens/0xeb6c08ccb4421b6088e581ce04fcfbed15893ac3',
      },
      {
        name: 'Moonriver',
        link: 'https://analytics-moonriver.sushi.com/tokens/0x1a93b23281cc1cde4c4741353f3064709a16197d',
      },
      {
        name: 'Polygon',
        link: 'https://analytics-polygon.sushi.com/tokens/0x45c32fa6df82ead1e2ef74d17b76547eddfaff89',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Curve',
    icon: 'curve.svg',
    link: 'https://curve.fi/frax',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://curve.fi/frax',
      },
      {
        name: 'Fantom',
        link: 'https://ftm.curve.fi/factory/16',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Matcha',
    icon: 'matcha.svg',
    link: 'https://matcha.xyz/markets/1/0x853d955acef822db058eb8505911ed77f175b99e',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://matcha.xyz/markets/1/0x853d955acef822db058eb8505911ed77f175b99e',
      },
      {
        name: 'Avalanche',
        link: 'https://matcha.xyz/markets/43114/0xdc42728b0ea910349ed3c6e1c9dc06b5fb591f98',
      },
      {
        name: 'Fantom',
        link: 'https://matcha.xyz/markets/250/0xaf319e5789945197e365e7f7fbfc56b130523b33',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Pangolin',
    icon: 'pangolin.svg',
    link: 'https://info.pangolin.exchange/#/token/0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://info.pangolin.exchange/#/token/0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Axial',
    icon: 'axial.svg',
    link: 'https://app.axial.exchange/#/',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://app.axial.exchange/#/',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Trader Joe',
    icon: 'traderjoe.png',
    link: 'https://traderjoexyz.com/#/trade',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://traderjoexyz.com/#/trade',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Snowball',
    icon: 'snowball.svg',
    link: 'https://app.snowball.network/s4d-vault',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://app.snowball.network/s4d-vault',
      },
    ],
  },
  {
    type: 'defi',
    name: 'ApeSwap',
    icon: 'apeswap.svg',
    link: 'https://info.apeswap.finance/token/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
    chains: [
      {
        name: 'Binance Smart Chain',
        link: 'https://info.apeswap.finance/token/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
      },
    ],
  },
  {
    type: 'defi',
    name: 'SpiritSwap',
    icon: 'spiritswap.svg',
    link: 'https://info.spiritswap.finance/token/0xdc301622e621166bd8e82f2ca0a26c13ad0be355',
    chains: [
      {
        name: 'Fantom',
        link: 'https://info.spiritswap.finance/token/0xdc301622e621166bd8e82f2ca0a26c13ad0be355',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Solarbeam',
    icon: 'solarbeam.png',
    link: 'https://analytics.solarbeam.io/tokens/0x965f84d915a9efa2dd81b653e3ae736555d945f4',
    chains: [
      {
        name: 'Moonriver',
        link: 'https://analytics.solarbeam.io/tokens/0x965f84d915a9efa2dd81b653e3ae736555d945f4',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Saber Labs',
    icon: 'saber.png',
    link: 'https://saber.markets/#/pools/KZMu9QBEdL97EFgamLbN5DE1AoKBG4HdrKKJo4Vuon3',
    chains: [
      {
        name: 'Solana',
        link: 'https://saber.markets/#/pools/KZMu9QBEdL97EFgamLbN5DE1AoKBG4HdrKKJo4Vuon3',
      },
    ],
  },
]

export const FRAX_FARM: Array<TradingLink> = [
  {
    type: 'defi',
    name: 'Convex',
    icon: 'convex.svg',
    link: 'https://www.convexfinance.com/stake',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://www.convexfinance.com/stake',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Curve',
    icon: 'curve.svg',
    link: 'https://www.convexfinance.com/stake',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://www.convexfinance.com/stake',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Uniswap V3 (FRAX/DAI)',
    icon: 'uni.svg',
    link: 'https://info.uniswap.org/#/pools/0x97e7d56a0408570ba1a7852de36350f7713906ec',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://info.uniswap.org/#/pools/0x97e7d56a0408570ba1a7852de36350f7713906ec',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Uniswap V3 (FRAX/USDC)',
    icon: 'uni.svg',
    link: 'https://info.uniswap.org/#/pools/0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://info.uniswap.org/#/pools/0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Uniswap V2 (FRAX/FXS)',
    icon: 'uni.svg',
    link: 'https://v2.info.uniswap.org/pair/0xe1573b9d29e2183b1af0e743dc2754979a40d237',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://v2.info.uniswap.org/pair/0xe1573b9d29e2183b1af0e743dc2754979a40d237',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Uniswap V2 (FRAX/IQ)',
    icon: 'uni.svg',
    link: 'https://v2.info.uniswap.org/pair/0xd6c783b257e662ca949b441a4fcb08a53fc49914',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://v2.info.uniswap.org/pair/0xd6c783b257e662ca949b441a4fcb08a53fc49914',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap (FRAX/SUSHI)',
    icon: 'sushi.svg',
    link: 'https://analytics.sushi.com/pairs/0xe06f8d30ac334c857fc8c380c85969c150f38a6a',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://analytics.sushi.com/pairs/0xe06f8d30ac334c857fc8c380c85969c150f38a6a',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap (FRAX/ETH)',
    icon: 'sushi.svg',
    link: 'https://analytics.sushi.com/pairs/0xec8c342bc3e07f05b9a782bc34e7f04fb9b44502',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://analytics.sushi.com/pairs/0xec8c342bc3e07f05b9a782bc34e7f04fb9b44502',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Olympus DAO (FRAX-WETH)',
    icon: 'olympus.png',
    link: 'https://pro.olympusdao.finance/#/bond/frax_eth_sushi',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://pro.olympusdao.finance/#/bond/frax_eth_sushi',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Yearn',
    icon: 'yearn.svg',
    link: 'https://yearn.finance/vaults/0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://yearn.finance/vaults/0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Saddle',
    icon: 'saddle.svg',
    link: 'https://saddle.exchange/#/pools',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://saddle.exchange/#/pools',
      },
    ],
  },
  {
    type: 'defi',
    name: 'StakeDAO',
    icon: 'stakedao.svg',
    link: 'https://stakedao.org/0x0000000000000000000000000000000000000000/strategies',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://stakedao.org/0x0000000000000000000000000000000000000000/strategies',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Orion Money',
    icon: 'orion.svg',
    link: 'https://app.orion.money/',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://app.orion.money/',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Axial (TSD/MIM/FRAX/DAI.e)',
    icon: 'axial.svg',
    link: 'https://app.axial.exchange/#/rewards/ac4d/deposit',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://app.axial.exchange/#/rewards/ac4d/deposit',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Beefy Finance (FRAX/AVAX)',
    icon: 'beefyfinance.svg',
    link: 'https://app.beefy.finance/#/avax/vault/joe-frax-wavax',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://app.beefy.finance/#/avax/vault/joe-frax-wavax',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Pangolin (FRAX/AVAX)',
    icon: 'pangolin.svg',
    link: 'https://app.pangolin.exchange/#/png/AVAX/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64/1',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://app.pangolin.exchange/#/png/AVAX/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64/1',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Trader Joe (FRAX/AVAX)',
    icon: 'traderjoe.png',
    link: 'https://traderjoexyz.com/#/farm/0x0d84595e8638dbc631076c51000b2d31120d8aa1',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://traderjoexyz.com/#/farm/0x0d84595e8638dbc631076c51000b2d31120d8aa1',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Beefy Finance',
    icon: 'beefyfinance.svg',
    link: 'https://app.beefy.finance/#/fantom/vault/scream-frax',
    chains: [
      {
        name: 'Fantom',
        link: 'https://app.beefy.finance/#/fantom/vault/scream-frax',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Beefy Finance (FRAX/ETH)',
    icon: 'beefyfinance.svg',
    link: 'https://app.beefy.finance/#/harmony/vault/sushi-one-1eth-1frax',
    chains: [
      {
        name: 'Harmony',
        link: 'https://app.beefy.finance/#/harmony/vault/sushi-one-1eth-1frax',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap (FRAX/ETH)',
    icon: 'sushi.svg',
    link: 'https://analytics-harmony.sushi.com/pairs/0xa46bba980512e328e344ce12bb969563f3429f05',
    chains: [
      {
        name: 'Harmony',
        link: 'https://analytics-harmony.sushi.com/pairs/0xa46bba980512e328e344ce12bb969563f3429f05',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Beefy Finance (FRAX/MOVR)',
    icon: 'beefyfinance.svg',
    link: 'https://app.beefy.finance/#/moonriver/vault/solarbeam-frax-wmovr',
    chains: [
      {
        name: 'Moonriver',
        link: 'https://app.beefy.finance/#/moonriver/vault/solarbeam-frax-wmovr',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Solarbeam (anyFRAX/MOVR)',
    icon: 'solarbeam.png',
    link: 'https://app.solarbeam.io/farm',
    chains: [
      {
        name: 'Moonriver',
        link: 'https://app.solarbeam.io/farm',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap (FRAX/MOVR)',
    icon: 'sushi.svg',
    link: 'https://analytics-moonriver.sushi.com/pairs/0x756057872d1ad41c703b68e12701d27874fbe533',
    chains: [
      {
        name: 'Moonriver',
        link: 'https://analytics-moonriver.sushi.com/pairs/0x756057872d1ad41c703b68e12701d27874fbe533',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap (FRAX/USDC)',
    icon: 'sushi.svg',
    link: 'https://analytics-moonriver.sushi.com/pairs/0x310c4d18640af4878567c4a31cb9cbde7cd234a3',
    chains: [
      {
        name: 'Moonriver',
        link: 'https://analytics-moonriver.sushi.com/pairs/0x310c4d18640af4878567c4a31cb9cbde7cd234a3',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap (FRAX/FXS)',
    icon: 'sushi.svg',
    link: 'https://analytics-polygon.sushi.com/pairs/0xdf45b5b68d9dc84173dd963c763aea8cad3e24a6',
    chains: [
      {
        name: 'Polygon',
        link: 'https://analytics-polygon.sushi.com/pairs/0xdf45b5b68d9dc84173dd963c763aea8cad3e24a6',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap (FRAX/USDC)',
    icon: 'sushi.svg',
    link: 'https://analytics-polygon.sushi.com/pairs/0x82d5bcc22856a3316f993340662d6253b3bc3f76',
    chains: [
      {
        name: 'Polygon',
        link: 'https://analytics-polygon.sushi.com/pairs/0x82d5bcc22856a3316f993340662d6253b3bc3f76',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Beefy Finance (FRAX/FXS)',
    icon: 'beefyfinance.svg',
    link: 'https://app.beefy.finance/#/polygon/vault/sushi-frax-fxs',
    chains: [
      {
        name: 'Polygon',
        link: 'https://app.beefy.finance/#/polygon/vault/sushi-frax-fxs',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Beefy Finance (FRAX/UDSC)',
    icon: 'beefyfinance.svg',
    link: 'https://app.beefy.finance/#/polygon/vault/sushi-frax-usdc',
    chains: [
      {
        name: 'Polygon',
        link: 'https://app.beefy.finance/#/polygon/vault/sushi-frax-usdc',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Saber (FRAX/USDC)',
    icon: 'saber.png',
    link: 'https://app.saber.so/#/farms/frax/stake',
    chains: [
      {
        name: 'Solana',
        link: 'https://app.saber.so/#/farms/frax/stake',
      },
    ],
  },
]

export const FRAX_LEND: Array<TradingLink> = [
  {
    type: 'defi',
    name: 'Aave',
    icon: 'aave.svg',
    link: 'https://app.aave.com/#/reserve-overview/FRAX-0x853d955acef822db058eb8505911ed77f175b99e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://app.aave.com/#/reserve-overview/FRAX-0x853d955acef822db058eb8505911ed77f175b99e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Rari Capital',
    icon: 'rari.png',
    link: 'https://app.rari.capital/fuse?filter=frax',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://app.rari.capital/fuse?filter=frax',
      },
    ],
  },
  {
    type: 'defi',
    name: 'OlympusDAO (Bonds)',
    icon: 'olympus.png',
    link: 'https://app.olympusdao.finance/#/bonds',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://app.olympusdao.finance/#/bonds',
      },
    ],
  },
  {
    type: 'defi',
    name: 'MANTRA DAO',
    icon: 'mantradao.svg',
    link: 'https://app.mantradao.com/zenterest',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://app.mantradao.com/zenterest',
      },
    ],
  },
  {
    type: 'defi',
    name: 'SpiritSwap',
    icon: 'spiritswap.svg',
    link: 'https://app.ola.finance/networks/0x892701d128d63c9856A9Eb5d967982F78FD3F2AE/markets',
    chains: [
      {
        name: 'Fantom',
        link: 'https://app.ola.finance/networks/0x892701d128d63c9856A9Eb5d967982F78FD3F2AE/markets',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Scream',
    icon: 'scream.png',
    link: 'https://scream.sh/lend',
    chains: [
      {
        name: 'Fantom',
        link: 'https://scream.sh/lend',
      },
    ],
  },
]

export const FXS_EXCHANGE: Array<TradingLink> = [
  {
    type: 'cefi',
    name: 'Binance',
    icon: 'binance.svg',
    link: 'https://www.binance.com/en/trade/FXS_BUSD?layout=pro',
  },
  {
    type: 'cefi',
    name: 'Crypto.com',
    icon: 'cryptocom.svg',
    link: 'https://crypto.com/exchange/trade/spot/FXS_USDC',
  },
  {
    type: 'cefi',
    name: 'KuCoin',
    icon: 'kucoin.svg',
    link: 'https://trade.kucoin.com/FXS-BTC',
  },
  {
    type: 'cefi',
    name: 'Bittrex Global',
    icon: 'bittrex.svg',
    link: 'https://global.bittrex.com/Market/Index?MarketName=USDT-FXS',
  },
  {
    type: 'cefi',
    name: 'Coinex',
    icon: 'coinex.svg',
    link: 'https://www.coinex.com/info/FXS',
  },
  {
    type: 'cefi',
    name: 'CoinBene',
    icon: 'coinbene.svg',
    link: 'https://www.coinbene.com/spot/exchange/FXS_USDT',
  },
  {
    type: 'cefi',
    name: 'Gate.io',
    icon: 'gateio.svg',
    link: 'https://www.gate.io/trade/FXS_USDT',
  },
  {
    type: 'defi',
    name: 'Uniswap V3',
    icon: 'uni.svg',
    link: 'https://info.uniswap.org/#/tokens/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://info.uniswap.org/#/tokens/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Uniswap V2',
    icon: 'uni.svg',
    link: 'https://v2.info.uniswap.org/token/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://v2.info.uniswap.org/token/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Sushiswap',
    icon: 'sushi.svg',
    link: 'https://analytics.sushi.com/tokens/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://analytics.sushi.com/tokens/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      },
      {
        name: 'Arbitrum',
        link: 'https://analytics-arbitrum.sushi.com/tokens/0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7',
      },
      {
        name: 'Harmony',
        link: 'https://analytics-harmony.sushi.com/tokens/0x0767d8e1b05efa8d6a301a65b324b6b66a1cc14c',
      },
      {
        name: 'Polygon',
        link: 'https://analytics-polygon.sushi.com/tokens/0x1a3acf6d19267e2d3e7f898f42803e90c9219062',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Matcha',
    icon: 'matcha.svg',
    link: 'https://matcha.xyz/markets/1/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://matcha.xyz/markets/1/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      },
      {
        name: 'Avalanche',
        link: 'https://matcha.xyz/markets/43114/0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454',
      },
      {
        name: 'Fantom',
        link: 'https://matcha.xyz/markets/250/0x82f8cb20c14f134fe6ebf7ac3b903b2117aafa62',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Pangolin',
    icon: 'pangolin.svg',
    link: 'https://info.pangolin.exchange/#/token/0x214db107654ff987ad859f34125307783fc8e387',
    chains: [
      {
        name: 'Avalanche',
        link: 'https://info.pangolin.exchange/#/token/0x214db107654ff987ad859f34125307783fc8e387',
      },
    ],
  },
  {
    type: 'defi',
    name: 'ApeSwap',
    icon: 'apeswap.svg',
    link: 'https://info.apeswap.finance/token/0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee',
    chains: [
      {
        name: 'Binance Smart Chain',
        link: 'https://info.apeswap.finance/token/0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee',
      },
    ],
  },
  {
    type: 'defi',
    name: 'SpiritSwap',
    icon: 'spiritswap.svg',
    link: 'https://info.spiritswap.finance/token/0x7d016eec9c25232b01f23ef992d98ca97fc2af5a',
    chains: [
      {
        name: 'Fantom',
        link: 'https://info.spiritswap.finance/token/0x7d016eec9c25232b01f23ef992d98ca97fc2af5a',
      },
    ],
  },
]

export const FXS_FARM: Array<TradingLink> = [
  {
    type: 'defi',
    name: 'veFXS Staking',
    icon: 'frax.svg',
    link: 'https://app.frax.finance/vefxs',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://app.frax.finance/vefxs',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Tokemak',
    icon: 'tokemak.svg',
    link: 'https://www.tokemak.xyz/',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://www.tokemak.xyz/',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Uniswap V2 (FXS/FRAX)',
    icon: 'uni.svg',
    link: 'https://app.uniswap.org/#/add/v2/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0/0x853d955acef822db058eb8505911ed77f175b99e',
    chains: [
      {
        name: 'Ethereum',
        link: 'https://app.uniswap.org/#/add/v2/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0/0x853d955acef822db058eb8505911ed77f175b99e',
      },
    ],
  },
  {
    type: 'defi',
    name: 'SpiritSwap (FXS/FRAX)',
    icon: 'spiritswap.svg',
    link: 'https://swap.spiritswap.finance/#/add/0x82f8cb20c14f134fe6ebf7ac3b903b2117aafa62/0xaf319e5789945197e365e7f7fbfc56b130523b33',
    chains: [
      {
        name: 'Fantom',
        link: 'https://swap.spiritswap.finance/#/add/0x82f8cb20c14f134fe6ebf7ac3b903b2117aafa62/0xaf319e5789945197e365e7f7fbfc56b130523b33',
      },
    ],
  },
  {
    type: 'defi',
    name: 'Impossible Finance (FXS/FRAX)',
    icon: 'if.png',
    link: 'https://swap.impossible.finance/#/add/0x29cED01C447166958605519F10DcF8b0255fB379/0xDE2F075f6F14EB9D96755b24E416A53E736Ca363',
    chains: [
      {
        name: 'Binance Smart Chain',
        link: 'https://swap.impossible.finance/#/add/0x29cED01C447166958605519F10DcF8b0255fB379/0xDE2F075f6F14EB9D96755b24E416A53E736Ca363',
      },
    ],
  },
]
