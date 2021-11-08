import { Trans } from '@lingui/macro'
import { useLocationLinkProps } from 'hooks/useLocationLinkProps'
import { X } from 'react-feather'
import { ExternalLink } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { useDarkModeManager } from 'state/user/hooks'

import {
  DISCORD_URL,
  FRAX_DUNE_ANALYTICS,
  FXS_DUNE_ANALYTICS,
  TELEGRAM_URL,
  TRADING_APP_URL,
  TWITTER_URL,
} from '../../constants/links'
import { IconWrap, MenuHeader, MenuItem, StyledMenu } from './styles'

const openExternalLink = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const goToPage = (setOpenBurgerMenu: (arg0: boolean) => void, navigate: any, page: string): void => {
  window.scrollTo(0, 0)
  setOpenBurgerMenu(false)
  navigate(page)
}

const Menu = ({ burgerMenuOpen, setOpenBurgerMenu }: any) => {
  const navigate = useNavigate()
  const { to: toEN } = useLocationLinkProps('en-US')
  const { to: toZH } = useLocationLinkProps('zh-CN')
  const [darkMode, toggleDarkMode] = useDarkModeManager()

  return (
    <StyledMenu burgerMenuOpen={burgerMenuOpen}>
      <IconWrap onClick={() => setOpenBurgerMenu(false)}>
        <X />
      </IconWrap>
      <div style={{ padding: '4rem 2rem', overflowY: 'scroll' }}>
        <MenuHeader>
          <Trans>Learn</Trans>
        </MenuHeader>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, '/algostable')}>
          <Trans>Algorithmic Design</Trans>
        </MenuItem>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, '/amos')}>
          <Trans>AMOs</Trans>
        </MenuItem>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, '/frax')}>
          <Trans>FRAX Token</Trans>
        </MenuItem>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, '/fxs')}>
          <Trans>FXS Token</Trans>
        </MenuItem>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, '/fpi')}>
          <Trans>FPI Token</Trans>
        </MenuItem>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, '/resources')}>
          <Trans>Resources</Trans>
        </MenuItem>
        <MenuHeader>
          <Trans>Analytics</Trans>
        </MenuHeader>
        <MenuItem onClick={() => openExternalLink(FRAX_DUNE_ANALYTICS)}>
          <Trans>FRAX Dashboard</Trans>
        </MenuItem>
        <MenuItem onClick={() => openExternalLink(FXS_DUNE_ANALYTICS)}>
          <Trans>FXS Dashboard</Trans>
        </MenuItem>
        <MenuHeader>
          <Trans>Community</Trans>
        </MenuHeader>
        <MenuItem onClick={() => openExternalLink(TELEGRAM_URL)}>Telegram</MenuItem>
        <MenuItem onClick={() => openExternalLink(DISCORD_URL)}>Discord</MenuItem>
        <MenuItem onClick={() => openExternalLink(TWITTER_URL)}>Twitter</MenuItem>
        <MenuHeader onClick={() => openExternalLink(TRADING_APP_URL)}>
          <Trans>Trading App</Trans>{' '}
          <div style={{ marginLeft: '5px' }}>
            <ExternalLink size={14} />
          </div>
        </MenuHeader>
        <MenuHeader>
          <Trans>Language</Trans>
        </MenuHeader>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, toEN)}>English</MenuItem>
        <MenuItem onClick={() => goToPage(setOpenBurgerMenu, navigate, toZH)}>简体中文</MenuItem>
        <MenuHeader>
          <Trans>Brightness</Trans>
        </MenuHeader>
        <MenuItem onClick={() => toggleDarkMode()}>
          {darkMode && <Trans>Switch Light Mode</Trans>}
          {!darkMode && <Trans>Switch Dark Mode</Trans>}
        </MenuItem>
      </div>
    </StyledMenu>
  )
}

export default Menu
