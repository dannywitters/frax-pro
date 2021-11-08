import { Trans } from '@lingui/macro'

import { PageDesc, PageTitle } from '../../theme'
import { BodyWrapper } from './styles'

export const Intro = () => {
  return (
    <BodyWrapper>
      <PageTitle>
        <Trans>The leading stable cryptocurrency</Trans>
      </PageTitle>
      <PageDesc>
        <Trans>Frax is the world&apos;s first fractional-algorithmic stablecoin.</Trans>
        <br />
        <Trans>A new paradigm in open-source, decentralized money.</Trans>
      </PageDesc>
    </BodyWrapper>
  )
}
