import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: auto;
`

export const TabHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 60px;
  flex-shrink: 0;
  color: ${({ theme }) => theme.text2};

  :hover,
  :focus {
    color: ${({ theme }) => theme.text1};
  }
`

export const TabSelect = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.bg3};
  border-right: ${({ theme }) => (theme.darkMode ? '1px solid #26292c' : '1px solid #f1f1f1')};
  border-bottom: ${({ selected, theme }) => (selected ? theme.modalBBOn : theme.modalBBOff)};
  font-size: 0.9rem;
  transition: 250ms ease border-bottom;
  &:last-child {
    border-right: none;
  }
  &:hover {
    border-bottom: ${({ theme }) => theme.modalBBOn};
  }
`

export const BodyWrap = styled.div`
  overflow-y: auto;
`

export const IconWrapper = styled.div<{ size?: number }>`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 2px;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '32px')};
    width: ${({ size }) => (size ? size + 'px' : '32px')};
  }
`

export const Row = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: ${({ theme }) => (theme.darkMode ? '1px solid #26292c' : '1px solid #f3f3f3')};
  height: 65px;
  padding: 0 15px;
  cursor: pointer;
  transition: 125ms ease background-color;
  &:hover {
    background: ${({ theme }) => (theme.darkMode ? '#3d4144' : '#f5f5f5')};
  }
`

export const RowInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const RowChainInfo = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text6};
  margin-top: 3px;
`

export const ChainInfo = styled.a`
  margin-right: 5px;

  &:hover {
    text-decoration: underline;
  }
`
