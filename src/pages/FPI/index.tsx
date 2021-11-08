import { Trans } from '@lingui/macro'

import { PageDesc, PageTitle } from '../../theme'
import { StandardPageWrapper } from '../styles'

export default function FPI() {
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
      <div style={{ lineHeight: 2, marginBottom: '100px' }}>
        <Trans>FPI will be launching Nov/Dec 2021.</Trans>
        <br />
        <Trans>More info coming soon...</Trans>
      </div>
    </StandardPageWrapper>
  )
}
