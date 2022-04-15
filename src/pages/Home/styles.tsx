import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 240px;
  padding-bottom: 160px;
  align-items: center;
  flex: 1;
  z-index: 1;
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0px;
`

export const SectionTitle = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text3};
`

export const SectionDesc = styled.div`
  max-width: 600px;
  line-height: 1.5;
  margin: 20px auto;
  color: ${({ theme }) => theme.text5};
`

export const TokenCardWrapper = styled.div`
  display: flex;
  max-width: 1340px;
  width: 100%;
  margin-top: 40px;
  padding: 0px 32px;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    max-width: 960px;
    flex-wrap: wrap;
  `};
`

export const TokenCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: ${({ theme }) => theme.bg0};
  box-shadow: ${({ theme }) => (theme.darkMode ? null : 'rgb(155 151 151 / 15%) 0px 8px 24px')};
  border-radius: 20px;
  flex: 1 1 0%;
  height: 400px;

  &:not(:first-child) {
    margin-left: 32px;

    ${({ theme }) => theme.mediaWidth.upToSmall`
      margin: 20px 0px 0px;
    `};
  };

  ${({ theme }) => theme.mediaWidth.upToLarge`
    max-width: calc(50% - 16px);
    min-width: calc(50% - 16px);
    
    &:nth-child(3) {
      margin: 32px 0px 0px;
    };
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 100%;
    min-width: 100%;
  `};
}
`

export const TokenIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`

export const TokenDescription = styled.div`
  margin-top: 15px;
  margin-bottom: auto;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`

export const TokenLearnLink = styled(NavLink)`
  text-decoration: underline;
  margin-left: 3px;
  cursor: pointer;
`

export const TokenNumberFormat = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: auto;
`

export const TokenNumberDesc = styled.div`
  font-size: 0.9em;
  color: #878787;
`

export const TokenTradeButton = styled.div`
  width: 100%;
  height: 55px;
  background: #126809;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
`

export const FPINotice = styled.div`
  color: ${({ theme }) => theme.text4};
  line-height: 1.5;
  padding: 0 25px;
`

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 100px auto;
  padding: 0 60px;
  overflow: hidden;
`
