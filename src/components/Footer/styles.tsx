import styled from 'styled-components/macro'

export const FooterFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 2rem;
  border-top: 1px solid rgb(104 104 104 / 19%);
  width: 100%;
  max-width: 1440px;
`

export const LinkWrapper = styled.div`
  margin-left: auto;
  display: flex;
`

export const Link = styled.a`
  &:hover {
    text-decoration: underline;
  }
`
