import { FRAX_PRO_ASSETS_BASE_URL } from '../../../constants/links'
import { FXS_EXCHANGE } from '../../../constants/trading'
import { navigateToExternalUrl } from '../../../utils/navigateToURL'
import { BodyWrap, ChainInfo, IconWrapper, Row, RowChainInfo, RowInfo } from '../styles'

export default function Exchanges() {
  return (
    <BodyWrap>
      {FXS_EXCHANGE.map((item, index) => (
        <Row
          key={index}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            navigateToExternalUrl(item.link, true)
          }}
        >
          <IconWrapper size={26}>
            <img src={FRAX_PRO_ASSETS_BASE_URL + item.icon} />
          </IconWrapper>
          <RowInfo>
            <div style={{ fontSize: '0.95rem' }}>{item.name}</div>
            {item.chains && (
              <RowChainInfo>
                {item.chains.map((itemB, index) => (
                  <ChainInfo
                    key={index}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      navigateToExternalUrl(itemB.link, true)
                    }}
                  >
                    {itemB.name}
                    {index + 1 !== item.chains?.length && ','}
                  </ChainInfo>
                ))}
              </RowChainInfo>
            )}
          </RowInfo>
        </Row>
      ))}
    </BodyWrap>
  )
}
