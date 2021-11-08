export const TRADING_APP_URL = 'https://app.frax.finance/'

export const FRAX_DUNE_ANALYTICS = 'https://dune.xyz/wd021/FRAX'
export const FXS_DUNE_ANALYTICS = 'https://dune.xyz/wd021/FXS-(FRAX-Shares)'

export const TELEGRAM_URL = 'https://t.me/fraxfinance'
export const DISCORD_URL = 'https://discord.com/invite/MTZu6Hf57d'
export const TWITTER_URL = 'https://twitter.com/fraxfinance'

export const API_MAIN = 'https://api.frax.finance/combineddata/'
export const API_PROTOCOL_REVENUE = 'https://api.frax.finance/amodata_v2/6-months'

export const FRAX_DOCUMENTATION = 'https://docs.frax.finance/'
export const FRAX_GITHUB = 'https://github.com/FraxFinance/'

export const FRAX_BUY_LINK = 'https://app.1inch.io/#/137/classic/swap/ETH/FRAX'
export const FXS_BUY_LINK = 'https://app.1inch.io/#/137/classic/swap/ETH/FXS'

interface ResourceList {
  [lang: string]: string
}

export const RESOURCES_LIST: ResourceList = {
  'en-US': 'https://s3.amazonaws.com/frax.files/resources_en-US.json',
  'zh-CN': 'https://s3.amazonaws.com/frax.files/resources_zh-CN.json',
}
