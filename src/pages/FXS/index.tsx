import { Trans } from '@lingui/macro'
import { useActiveLocale } from 'hooks/useActiveLocale'
import { ExternalLink } from 'react-feather'

import { PageDesc, PageTitle } from '../../theme'
import { ExternalLinkText, HelpfulLinkWrap, StandardPageWrapper } from '../styles'

const FXS_LINKS = {
  'en-US': {
    seigniorage: 'https://docs.frax.finance/seigniorage',
    vefxs: 'https://docs.frax.finance/vefxs/vefxs',
  },
  'zh-CN': {
    seigniorage: 'https://docs.frax.finance/v/zh/seigniorage',
    vefxs: 'https://docs.frax.finance/v/zh/vefxs',
  },
}

export default function FXS() {
  const locale = useActiveLocale()

  return (
    <StandardPageWrapper>
      <PageTitle>
        <Trans>FXS Token</Trans>
      </PageTitle>
      <PageDesc style={{ maxWidth: '700px', margin: '25px auto' }}>
        <Trans>
          The Frax Share token (FXS) is the non-stable, utility token in the protocol. It is meant to be volatile and
          rights to governance and all utility of the system. It is important to note that we take a highly
          governance-minimized approach to designing trustless money in the same ethos as Bitcoin.
        </Trans>
      </PageDesc>
      <div style={{ margin: '50px auto 25px auto', padding: '0 20px' }}>
        <Trans>This page is being worked on. In the meantime, here are some helpful links:</Trans>
      </div>
      <HelpfulLinkWrap>
        <ExternalLinkText href={FXS_LINKS[locale].seigniorage} target="_blank">
          <Trans>FXS Overview</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
        <ExternalLinkText href={FXS_LINKS[locale].vefxs} target="_blank">
          <Trans>veFXS (FXS Staking)</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
      </HelpfulLinkWrap>
    </StandardPageWrapper>
  )
}
