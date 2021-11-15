import { Trans } from '@lingui/macro'

import { ReactComponent as CMCIcon } from '../../assets/svgs/cmc.svg'
import { ReactComponent as CoinGeckoIcon } from '../../assets/svgs/coingecko.svg'
import { FRAX_CMC_LINK, FRAX_COINGECKO_LINK, FRAX_DOCUMENTATION, FRAX_GITHUB } from '../../constants/links'
import { FooterFrame, IconLinkWrapper, Link, LinkWrapper } from './styles'

export default function Footer() {
  return (
    <FooterFrame>
      <div>Frax Pro</div>
      <IconLinkWrapper href={FRAX_COINGECKO_LINK} target="_blank">
        <CoinGeckoIcon width="20px" height="20px" />
      </IconLinkWrapper>
      <IconLinkWrapper href={FRAX_CMC_LINK} target="_blank">
        <CMCIcon width="20px" height="20px" />
      </IconLinkWrapper>
      <LinkWrapper>
        <Link href={FRAX_DOCUMENTATION} target="_blank">
          <Trans>Documentation</Trans>
        </Link>
        <div style={{ margin: '0 10px' }}>&#xb7;</div>
        <Link href={FRAX_GITHUB} target="_blank">
          Github
        </Link>
      </LinkWrapper>
    </FooterFrame>
  )
}
