import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export const HeaderFrame = styled.div<{ showBackground: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  padding: 1rem;
  z-index: 21;
  /* Background slide effect on scroll. */
  background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
  background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
  transition: background-position 0.1s, box-shadow 0.1s;
  background-blend-mode: hard-light;
`

export const IconFrame = styled(NavLink)<{ size?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
`

export const ControlFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: none;
  `};
`

export const ControlCard = styled.div`
  position: absolute;
  top: 2.2rem;
  left: -1rem;
  min-width: 200px;
  border-radius: 8px;
  height: 0px;
  width: 0px;
  overflow: hidden;
  text-align: left;
  background: ${({ theme }) => (theme.darkMode ? theme.black : theme.white)};
  z-index: 999;

  box-shadow: rgb(0 0 0 / 4%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px,
    rgb(0 0 0 / 4%) 0px 24px 32px;
`

export const ControlCardRow = styled.div`
  text-decoration: none;
  margin: 0px;
  border-radius: 0.5rem;
  width: fit-content;
  padding: 0px;
  font-weight: 300;
`

export const ControlCardRowLink = styled(NavLink)`
  padding: 0px;
  text-decoration: none;
  display: block;
  margin: 0.75rem 0px;
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.text2};

  :hover,
  :focus {
    color: ${({ theme }) => theme.text1};
  }
`

export const ControlCardRowLinkB = styled.a`
  padding: 0px;
  text-decoration: none;
  display: block;
  margin: 0.75rem 0px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text2};

  :hover,
  :focus {
    color: ${({ theme }) => theme.text1};
  }
`

export const ControlHeader = styled.div`
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  display: flex;
  margin: 0 15px;
  padding: 0.5rem 0rem;
  cursor: pointer;
  position: relative;
  height: 100%;
  align-items: center;

  &:hover ${ControlCard} {
    width: auto;
    height: auto;
    max-height: 1500px;
    padding: 0.5rem 1rem;
    opacity: 1;
    transition: max-height 0.4s ease 3s;
  }
`

export const ControlHeaderLink = styled.a`
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  display: flex;
  margin: 0 15px;
  cursor: pointer;
  position: relative;
  height: 100%;
  align-items: center;
`

export const ToggleFrame = styled.div`
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: none;
  `};
`

export const ToggleButton = styled.div<{ marginLeft?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft + 'px' : null)};
`

export const LanguageCard = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0.5rem;
  border-radius: 8px;
  height: auto;
  width: auto;
  overflow: hidden;
  text-align: right;
  background: ${({ theme }) => (theme.darkMode ? theme.black : theme.white)};
  padding: 0.5rem 1rem;

  box-shadow: rgb(0 0 0 / 4%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px, rgb(0 0 0 / 4%) 0px 16px 24px,
    rgb(0 0 0 / 4%) 0px 24px 32px;
`

export const LanguageCardRow = styled(NavLink)`
  text-decoration: none;
  display: block;
  margin: 0.75rem 0px;
  cursor: pointer;
  color: ${({ theme }) => theme.text2};

  :hover,
  :focus {
    color: ${({ theme }) => theme.text1};
  }
`

export const MenuFrame = styled.div`
  display: none;
  justify-content: flex-end;
  cursor: pointer;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    display: flex;
  `};
`
