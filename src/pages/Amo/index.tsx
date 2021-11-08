import { Trans } from '@lingui/macro'
import { useActiveLocale } from 'hooks/useActiveLocale'
import { ExternalLink } from 'react-feather'

import { PageDesc, PageTitle } from '../../theme'
import { ExternalLinkText, HelpfulLinkWrap, StandardPageWrapper } from '../styles'

const AMO_LINKS = {
  'en-US': {
    amo: 'https://docs.frax.finance/amo/overview',
    blog: 'https://samkazemian.medium.com/frax-v2-algorithmic-market-operations-b84521ed7133',
  },
  'zh-CN': {
    amo: 'https://docs.frax.finance/v/zh/amo/overview',
    blog: 'https://samkazemian.medium.com/frax-v2-algorithmic-market-operations-b84521ed7133',
  },
}

export default function Amo() {
  const locale = useActiveLocale()

  return (
    <StandardPageWrapper>
      <PageTitle>
        <Trans>AMOs</Trans>
      </PageTitle>
      <PageDesc style={{ maxWidth: '700px', margin: '25px auto' }}>
        <Trans>
          AMO (Algorithmic Market Operations Controller) are modules that enact arbitrary monetary policy so long as
          they they don&apos;t change the FRAX price off its peg. This means that AMO controllers can perform open
          market operations algorithmically (as in the name), but they cannot arbitrarily mint FRAX out of thin air and
          the peg.
        </Trans>
      </PageDesc>
      <div style={{ margin: '50px auto 25px auto', padding: '0 20px' }}>
        <Trans>This page is being worked on. In the meantime, here are some helpful links:</Trans>
      </div>
      <HelpfulLinkWrap>
        <ExternalLinkText href={AMO_LINKS[locale].amo} target="_blank">
          <Trans>AMO Whitepaper</Trans> <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
        <ExternalLinkText href={AMO_LINKS[locale].blog} target="_blank">
          <Trans>AMO Original Announcement by Sam Kazemian</Trans>{' '}
          <ExternalLink style={{ marginLeft: '5px' }} size={16} />
        </ExternalLinkText>
      </HelpfulLinkWrap>
    </StandardPageWrapper>
  )
}
