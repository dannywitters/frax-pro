import { X } from 'react-feather'
import styled from 'styled-components/macro'

export const CloseIcon = styled(X)<{ onClick: () => void }>`
  cursor: pointer;
`

export const PageTitle = styled.div`
  font-weight: 600;
  font-size: 2.4rem;
  padding: 0 20px;
`

export const PageDesc = styled.div`
  font-weight: 200;
  margin-top: 25px;
  line-height: 1.5;
  font-size: 1.2rem;
  padding: 0 20px;
`
