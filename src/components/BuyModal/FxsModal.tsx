import { Trans } from '@lingui/macro'
import { useState } from 'react'

import ExchangesIcon from '../../assets/svgs/exchange.svg'
import FarmingIcon from '../../assets/svgs/farming.svg'
import Modal from '../Modal'
import FxsExchanges from './Fxs/Exchanges'
import FxsFarming from './Fxs/Farming'
import { IconWrapper, TabHeader, TabSelect, Wrapper } from './styles'

interface FxsModalProps {
  isOpen: boolean
  onDismiss: () => void
}

const tabs: { name: string }[] = [{ name: 'Exchange' }, { name: 'Farm' }]

const DEFAULT_TAB = tabs[0].name

export default function FxsModal({ isOpen, onDismiss }: FxsModalProps) {
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
              <IconWrapper size={24}>
                {item.name === 'Exchange' && <img src={ExchangesIcon} />}
                {item.name === 'Farm' && <img src={FarmingIcon} />}
              </IconWrapper>
              {item.name === 'Exchange' && <Trans>Exchange</Trans>}
              {item.name === 'Farm' && <Trans>Farm</Trans>}
            </TabSelect>
          ))}
        </TabHeader>
        {category === 'Exchange' && <FxsExchanges />}
        {category === 'Farm' && <FxsFarming />}
      </Wrapper>
    </Modal>
  )
}
