import { Trans } from '@lingui/macro'
import { useState } from 'react'

import ExchangesIcon from '../../assets/svgs/exchange.svg'
import FarmingIcon from '../../assets/svgs/farming.svg'
import LendingIcon from '../../assets/svgs/lending.svg'
import Modal from '../Modal'
import FraxExchanges from './Frax/Exchanges'
import FraxFarming from './Frax/Farming'
import FraxLending from './Frax/Lending'
import { IconWrapper, TabHeader, TabSelect, Wrapper } from './styles'

interface FraxModalProps {
  isOpen: boolean
  onDismiss: () => void
}

const tabs: { name: string }[] = [{ name: 'Exchange' }, { name: 'Farm' }, { name: 'Lend' }]

const DEFAULT_TAB = tabs[0].name

export default function FraxModal({ isOpen, onDismiss }: FraxModalProps) {
  const [category, setCategory] = useState(DEFAULT_TAB)

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} maxHeight={80} minHeight={40}>
      <Wrapper>
        <TabHeader>
          {tabs.map((item, index) => (
            <TabSelect
              key={index}
              selected={category === item.name ? true : false}
              onClick={() => setCategory(item.name)}
            >
              <IconWrapper size={24} style={item.name === 'Lend' ? { marginRight: '8px' } : { marginRight: '2px' }}>
                {item.name === 'Exchange' && <img src={ExchangesIcon} />}
                {item.name === 'Farm' && <img src={FarmingIcon} />}
                {item.name === 'Lend' && <img src={LendingIcon} />}
              </IconWrapper>
              {item.name === 'Exchange' && <Trans>Exchange</Trans>}
              {item.name === 'Farm' && <Trans>Farm</Trans>}
              {item.name === 'Lend' && <Trans>Lend</Trans>}
            </TabSelect>
          ))}
        </TabHeader>
        {category === 'Exchange' && <FraxExchanges />}
        {category === 'Farm' && <FraxFarming />}
        {category === 'Lend' && <FraxLending />}
      </Wrapper>
    </Modal>
  )
}
