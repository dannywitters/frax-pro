import React from 'react'
import { FileText, Headphones, Youtube } from 'react-feather'

import {
  ResourceItem,
  ResourceItemDate,
  ResourceItemDesc,
  ResourceItemHeader,
  ResourceItemIcon,
  ResourceLink,
} from './styles'

interface Props {
  type: string
  title: string
  desc: string
  date: string
  link: string
}

function truncate(str: string) {
  return str.length > 50 ? str.substring(0, 47) + '...' : str
}

const ResourceCard: React.FC<Props> = ({ type, title, desc, date, link }) => (
  <ResourceItem>
    <ResourceItemHeader>
      {type === 'text' && (
        <ResourceItemIcon>
          <FileText />
        </ResourceItemIcon>
      )}
      {type === 'audio' && (
        <ResourceItemIcon>
          <Headphones />
        </ResourceItemIcon>
      )}
      {type === 'video' && (
        <ResourceItemIcon>
          <Youtube />
        </ResourceItemIcon>
      )}
      <ResourceItemDate>{date}</ResourceItemDate>
      <div style={{ margin: '0 5px' }}>-</div>
      <div style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{title}</div>
    </ResourceItemHeader>
    <ResourceItemDesc>{desc}</ResourceItemDesc>
    <ResourceLink href={link} target="_blank" rel="noreferrer">
      {truncate(link)}
    </ResourceLink>
  </ResourceItem>
)

export default ResourceCard
