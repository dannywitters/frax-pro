import { Trans } from '@lingui/macro'
import { useActiveLocale } from 'hooks/useActiveLocale'
import { ExternalLink } from 'react-feather'

import { PageDesc, PageTitle } from '../../theme'
import { ExternalLinkText, HelpfulLinkWrap, StandardPageWrapper } from '../styles'

const FRAX_LINKS = {
  'en-US': {
    stability: 'https://docs.frax.finance/price-stability',
    minting: 'https://docs.frax.finance/minting-and-redeeming',
  },
  'zh-CN': {
    stability: 'https://docs.frax.finance/v/zh/price-stability',
    minting: 'https://docs.frax.finance/v/zh/minting-and-redeeming',
  },
}

export default function FRAX() {
  const locale = useActiveLocale()

  return (
    <StandardPageWrapper>
      <PageTitle>
        <Trans>FRAX Token</Trans>
      </PageTitle>
      <PageDesc style={{ maxWidth: '700px', margin: '25px auto' }}>
        <Trans>
          FRAX is the dollar pegged stablecoin. It can always be minted and redeemed from the system for $1 of value.
          This allows arbitragers to balance the demand and supply of FRAX in the open market.
        </Trans>
      </PageDesc>
      <div style={{ margin: '50px auto 25px auto', padding: '0 20px' }}>
        <Trans>This page is being worked on. In the meantime, here are some helpful links:</Trans>
      </div>
      <HelpfulLinkWrap>
        <ExternalLinkText href={FRAX_LINKS[locale].stability} target="_blank">
          <Trans>FRAX Price Stability Mechanism</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
        <ExternalLinkText href={FRAX_LINKS[locale].minting} target="_blank">
          <Trans>FRAX Minting and Redeeming</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
      </HelpfulLinkWrap>
    </StandardPageWrapper>
  )
}
