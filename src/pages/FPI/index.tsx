import { Trans } from '@lingui/macro'
import { useActiveLocale } from 'hooks/useActiveLocale'
import { ExternalLink } from 'react-feather'

import { PageDesc, PageTitle } from '../../theme'
import { ExternalLinkText, HelpfulLinkWrap, StandardPageWrapper } from '../styles'

const FPI_LINKS = {
  'en-US': {
    inflation: 'https://docs.frax.finance/frax-price-index/inflation-hedge',
  },
  'zh-CN': {
    inflation: 'https://docs.frax.finance/v/zh/frax-jia-ge-zhi-shu-fpi/tong-zhang-dui-chong',
  },
}

export default function FPI() {
  const locale = useActiveLocale()

  return (
    <StandardPageWrapper>
      <PageTitle>
        <Trans>FPI Token</Trans>
      </PageTitle>
      <PageDesc style={{ maxWidth: '700px', margin: '25px auto' }}>
        Frax&apos;s end vision is to build the first crypto native version of the CPI called the Frax Price Index (FPI)
        governed by FXS holders (and other protocol tokens). FRAX is currently pegged to USD but aspires to become the
        first decentralized, permissionless native unit of account which holds standard of living stable.
      </PageDesc>
      <HelpfulLinkWrap>
        <ExternalLinkText href={FPI_LINKS[locale].inflation} target="_blank">
          <Trans>FPI Inflation Hedge</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
      </HelpfulLinkWrap>
    </StandardPageWrapper>
  )
}
