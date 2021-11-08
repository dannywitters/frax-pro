import styled from 'styled-components/macro'

export const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  text-align: center;
  min-height: 100vh;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
`

export const FooterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const StandardPageWrapper = styled.div`
  flex: 1;
  padding-top: 240px;
  padding-bottom: 160px;
  align-items: center;
  width: 100%;
`

export const HelpfulLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  align-items: center;
`

export const ExternalLinkText = styled.a`
  display: flex;
  align-items: center;
  font-weight: 300;
  text-decoration: underline;
  margin: 5px 0px;
`
