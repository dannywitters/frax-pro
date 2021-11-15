import { Trans } from '@lingui/macro'
import { useEffect, useState } from 'react'

import { getApiRevenueResults } from '../../apiCalls'
import RevenuesChart from './RevenuesChart'
import { ChartContainer, SectionDesc, SectionTitle, TokenLearnLink } from './styles'

export const Revenues = () => {
  const [revenueData, setRevenueData] = useState<Array<any>>([])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getApiRevenueResults()

        const data: Array<any> = []

        response.full_items.map((item: { timestamp: any; combined: { accrued_profit: any } }) =>
          data.push({
            x: item.timestamp,
            y: item.combined.accrued_profit,
          })
        )

        setRevenueData(data)
      } catch (e) {}
    })()
  }, [])

  return (
    <>
      <ChartContainer>
        <SectionTitle>
          <Trans>Protocol Revenues</Trans>
        </SectionTitle>
        <SectionDesc>
          <Trans>
            Frax uses AMOs to perform open market operations algorithmicly. Profits from the operations accrew to the
            holders of FXS via buying and burning FXS tokens.
          </Trans>
          <TokenLearnLink to="/amos">
            <Trans>Learn More</Trans>
          </TokenLearnLink>
        </SectionDesc>
        <div>
          {revenueData.length > 0 && (
            <div style={{ width: '100%', position: 'relative', marginTop: 100 }}>
              <RevenuesChart
                height={500}
                data={revenueData}
                color="#126809"
                current={{ x: revenueData[revenueData.length - 1].x, y: revenueData[revenueData.length - 1].y }}
                showTooltips
              />
            </div>
          )}
        </div>
      </ChartContainer>
    </>
  )
}
