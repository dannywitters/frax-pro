import { Trans } from '@lingui/macro'
import numeral from 'numeral'
import { useEffect, useState } from 'react'
import { useDarkModeManager } from 'state/user/hooks'

import { getApiMainResults } from '../../apiCalls'
import { ReactComponent as FraxIcon } from '../../assets/svgs/frax.svg'
import { ReactComponent as FxsIcon } from '../../assets/svgs/fxs.svg'
import { FRAX_BUY_LINK, FXS_BUY_LINK } from '../../constants/links'
import {
  FPINotice,
  SectionTitle,
  SectionWrapper,
  TokenBuyButton,
  TokenCard,
  TokenCardWrapper,
  TokenDescription,
  TokenIconWrap,
  TokenLearnLink,
  TokenNumberDesc,
  TokenNumberFormat,
} from './styles'

export const Tokens = () => {
  const [darkMode] = useDarkModeManager()
  const [fraxSupply, setFraxSupply] = useState('')
  const [fxsPrice, setFxsPrice] = useState('')

  useEffect(() => {
    ;(async () => {
      const response = await getApiMainResults()
      const fraxSupply = response.core.frax.supply
      const fxsPrice = response.core.fxs.price
      setFraxSupply(fraxSupply)
      setFxsPrice(fxsPrice)
    })()
  }, [])

  return (
    <SectionWrapper>
      <SectionTitle>
        <Trans>The 3 Tokens</Trans>
      </SectionTitle>
      <TokenCardWrapper>
        <TokenCard>
          <TokenIconWrap>
            <FraxIcon className={darkMode ? 'logoLight' : 'logoDark'} width="40px" height="40px" />
          </TokenIconWrap>
          <TokenDescription>
            <Trans>
              FRAX tokens are dollar pegged stablecoins (1 ≈ 1 USD). The peg is maintained with a partial collateral,
              partial algorithmic design.
            </Trans>{' '}
            <TokenLearnLink to="/frax">
              <Trans>Learn More</Trans>
            </TokenLearnLink>
          </TokenDescription>
          {fraxSupply && <TokenNumberFormat>{`${numeral(fraxSupply).format('($0.0a)')}`}</TokenNumberFormat>}
          <TokenNumberDesc>
            <Trans>Total Supply</Trans>
          </TokenNumberDesc>
          <TokenBuyButton href={FRAX_BUY_LINK} target="_blank">
            <Trans>Buy FRAX</Trans>
          </TokenBuyButton>
        </TokenCard>
        <TokenCard>
          <TokenIconWrap>
            <FxsIcon className={darkMode ? 'logoLight' : 'logoDark'} width="40px" height="40px" />
          </TokenIconWrap>
          <TokenDescription>
            <Trans>
              FXS tokens are the value accrual and governance tokens of the entire Frax ecosystem. All utility is
              concentrated into FXS.
            </Trans>{' '}
            <TokenLearnLink to="/fxs">
              <Trans>Learn More</Trans>
            </TokenLearnLink>
          </TokenDescription>
          {fxsPrice && <TokenNumberFormat>{`${numeral(fxsPrice).format('$0,0.00')}`}</TokenNumberFormat>}
          <TokenNumberDesc>
            <Trans>Price</Trans>
          </TokenNumberDesc>
          <TokenBuyButton href={FXS_BUY_LINK} target="_blank">
            <Trans>Buy FXS</Trans>
          </TokenBuyButton>
        </TokenCard>
        <TokenCard>
          <FPINotice>
            <Trans>
              FPI tokens are a new type of stablecoin pegged to a crypto native price index. Launching soon, stay
              tuned...
            </Trans>
          </FPINotice>
        </TokenCard>
      </TokenCardWrapper>
    </SectionWrapper>
  )
}
