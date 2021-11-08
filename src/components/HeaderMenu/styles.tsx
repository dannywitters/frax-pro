import styled from 'styled-components/macro'

export const StyledMenu = styled.nav<{ burgerMenuOpen?: number }>`
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bg0};
  height: 100vh;
  width: 100vw;
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999;
  display: ${({ burgerMenuOpen }) => (burgerMenuOpen ? 'flex' : 'none')};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
    }
  }
`

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 22px;
  right: 15px;
`

export const MenuHeader = styled.div`
  display: flex;
  margin: 20px 0px 10px 0px;
  font-weight: 600;
  display: flex;
  align-items: center;
`

export const MenuItem = styled.div`
  padding: 10px 0px;
  font-weight: 300;
`
