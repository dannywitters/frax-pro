import { Trans } from '@lingui/macro'
import { useActiveLocale } from 'hooks/useActiveLocale'
import { useEffect, useState } from 'react'

import { getResourceList } from '../../apiCalls'
import { PageDesc, PageTitle } from '../../theme'
import { StandardPageWrapper } from '../styles'
import ResourceCard from './ResourceCard'
import { ResourceList } from './styles'

export default function Resources() {
  const [data, setData] = useState<Array<any>>([])
  const activeLocale = useActiveLocale()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getResourceList(activeLocale)
        setData(response)
      } catch (e) {}
    })()
  }, [activeLocale])

  return (
    <StandardPageWrapper>
      <PageTitle>
        <Trans>Resources</Trans>
      </PageTitle>
      <PageDesc>
        <Trans>A list of readings, blogs, and podcasts on all things FRAX.</Trans>
        <br />
        <Trans>Ordered by most recent.</Trans>
      </PageDesc>
      <ResourceList>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <ResourceCard
                key={index}
                link={item.link}
                type={item.type}
                title={item.title}
                desc={item.desc}
                date={item.date}
              />
            )
          })}
      </ResourceList>
    </StandardPageWrapper>
  )
}
