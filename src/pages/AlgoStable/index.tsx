import { Trans } from '@lingui/macro'
import { useActiveLocale } from 'hooks/useActiveLocale'
import { ExternalLink } from 'react-feather'

import { PageDesc, PageTitle } from '../../theme'
import { ExternalLinkText, HelpfulLinkWrap, StandardPageWrapper } from '../styles'

const ALGO_LINKS = {
  'en-US': {
    whitepaper: 'https://docs.frax.finance/overview',
    stability: 'https://docs.frax.finance/price-stability',
  },
  'zh-CN': {
    whitepaper: 'https://docs.frax.finance/v/zh/overview',
    stability: 'https://docs.frax.finance/v/zh/price-stability',
  },
}

export default function AlgoStable() {
  const locale = useActiveLocale()

  return (
    <StandardPageWrapper>
      <PageTitle>
        <Trans>Algorithmic Design</Trans>
      </PageTitle>
      <PageDesc style={{ maxWidth: '700px', margin: '25px auto' }}>
        <Trans>
          Frax is the first and only stablecoin with parts of its supply backed by collateral and parts of the supply
          algorithmic. This means FRAX is the first stablecoin to have part of its supply floating/unbacked. The
          stablecoin (FRAX) is named after the &quot;fractional-algorithmic&quot; stability mechanism.
        </Trans>
      </PageDesc>
      <div style={{ margin: '50px auto 25px auto', padding: '0 20px' }}>
        <Trans>This page is being worked on. In the meantime, here are some helpful links:</Trans>
      </div>
      <HelpfulLinkWrap>
        <ExternalLinkText href={ALGO_LINKS[locale].whitepaper} target="_blank">
          <Trans>Whitepaper</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
        <ExternalLinkText href={ALGO_LINKS[locale].stability} target="_blank">
          <Trans>How FRAX Maintains Price Stability</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
      </HelpfulLinkWrap>
    </StandardPageWrapper>
  )
}
