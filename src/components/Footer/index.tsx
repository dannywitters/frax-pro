import { Trans } from '@lingui/macro'

import { FRAX_DOCUMENTATION, FRAX_GITHUB } from '../../constants/links'
import { FooterFrame, Link, LinkWrapper } from './styles'

export default function Footer() {
  return (
    <FooterFrame>
      <div>Frax Pro</div>
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
