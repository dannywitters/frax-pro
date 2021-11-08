import styled from 'styled-components/macro'

export const ResourceList = styled.div`
  margin: 75px auto;
  padding: 0 25px;
  max-width: 500px;
  text-align: left;
`

export const ResourceItem = styled.div`
  margin-bottom: 50px;
`

export const ResourceItemHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ResourceItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

export const ResourceItemDate = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
`

export const ResourceItemDesc = styled.div`
  font-weight: 300;
  color: ${({ theme }) => theme.text6};
  margin: 5px 0px;
`

export const ResourceLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.text6};
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
