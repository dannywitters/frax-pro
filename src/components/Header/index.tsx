import { Trans } from '@lingui/macro'
import useScrollPosition from '@react-hook/window-scroll'
import { LOCALE_LABEL, SupportedLocale } from 'constants/locales'
import { useLocationLinkProps } from 'hooks/useLocationLinkProps'
import useTheme from 'hooks/useTheme'
import { useRef, useState } from 'react'
import { ExternalLink, Globe, Menu, Moon } from 'react-feather'
import { useDarkModeManager } from 'state/user/hooks'

import { ReactComponent as FraxIcon } from '../../assets/svgs/frax.svg'
import {
  DISCORD_URL,
  FRAX_DUNE_ANALYTICS,
  FXS_DUNE_ANALYTICS,
  TELEGRAM_URL,
  TRADING_APP_URL,
  TWITTER_URL,
} from '../../constants/links'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import HeaderMenu from '../HeaderMenu'
import {
  ControlCard,
  ControlCardRow,
  ControlCardRowLink,
  ControlCardRowLinkB,
  ControlFrame,
  ControlHeader,
  ControlHeaderLink,
  HeaderFrame,
  IconFrame,
  LanguageCard,
  LanguageCardRow,
  MenuFrame,
  ToggleButton,
  ToggleFrame,
} from './styles'

function LanguageMenuItem({ locale, key }: { locale: SupportedLocale; key: string }) {
  const { to } = useLocationLinkProps(locale)

  if (!to) return null

  return (
    <LanguageCardRow key={key} to={to}>
      {LOCALE_LABEL[locale]}
    </LanguageCardRow>
  )
}

export default function Header() {
  const [burgerMenuOpen, setOpenBurgerMenu] = useState(false)
  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggleMenu = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggleMenu : undefined)
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const { white, black } = useTheme()
  const scrollY = useScrollPosition()

  return (
    <HeaderFrame showBackground={scrollY > 45}>
      <IconFrame to="/" size={40}>
        <FraxIcon className={darkMode ? 'logoLight' : 'logoDark'} width="36px" height="100%" title="Frax Logo" />
      </IconFrame>
      <ControlFrame>
        <ControlHeader>
          <Trans>Learn</Trans>
          <ControlCard>
            <ControlCardRow>
              <ControlCardRowLink to="/algostable">
                <Trans>Algorithmic Design</Trans>
              </ControlCardRowLink>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLink to="/amos">
                <Trans>AMOs</Trans>
              </ControlCardRowLink>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLink to="/frax">
                <Trans>FRAX Token</Trans>
              </ControlCardRowLink>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLink to="/fxs">
                <Trans>FXS Token</Trans>
              </ControlCardRowLink>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLink to="/fpi">
                <Trans>FPI Token</Trans>
              </ControlCardRowLink>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLink to="/resources">
                <Trans>Resources</Trans>
              </ControlCardRowLink>
            </ControlCardRow>
          </ControlCard>
        </ControlHeader>
        <ControlHeader>
          <Trans>Analytics</Trans>
          <ControlCard>
            <ControlCardRow>
              <ControlCardRowLinkB href={FRAX_DUNE_ANALYTICS} target="_blank">
                <Trans>FRAX Dashboard</Trans>
              </ControlCardRowLinkB>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLinkB href={FXS_DUNE_ANALYTICS} target="_blank">
                <Trans>FXS Dashboard</Trans>
              </ControlCardRowLinkB>
            </ControlCardRow>
          </ControlCard>
        </ControlHeader>
        <ControlHeader>
          <Trans>Community</Trans>
          <ControlCard>
            <ControlCardRow>
              <ControlCardRowLinkB href={TELEGRAM_URL} target="_blank">
                <Trans>Telegram</Trans>
              </ControlCardRowLinkB>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLinkB href={DISCORD_URL} target="_blank">
                <Trans>Discord</Trans>
              </ControlCardRowLinkB>
            </ControlCardRow>
            <ControlCardRow>
              <ControlCardRowLinkB href={TWITTER_URL} target="_blank">
                <Trans>Twitter</Trans>
              </ControlCardRowLinkB>
            </ControlCardRow>
          </ControlCard>
        </ControlHeader>
        <ControlHeaderLink href={TRADING_APP_URL} target="_blank">
          <Trans>Trading App</Trans>{' '}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }}>
            <ExternalLink size={14} />
          </div>
        </ControlHeaderLink>
      </ControlFrame>
      <ToggleFrame>
        <ToggleButton onClick={() => toggleDarkMode()}>
          <Moon color={darkMode ? white : black} />
        </ToggleButton>
        <div ref={node as any}>
          <ToggleButton marginLeft={15} onClick={toggleMenu}>
            <Globe color={darkMode ? white : black} />
          </ToggleButton>
          {open && (
            <LanguageCard>
              <LanguageMenuItem locale="en-US" key="en-US" />
              <LanguageMenuItem locale="zh-CN" key="zh-CN" />
            </LanguageCard>
          )}
        </div>
      </ToggleFrame>
      <MenuFrame onClick={() => setOpenBurgerMenu(true)}>
        <Menu color={darkMode ? white : black} />
      </MenuFrame>
      <HeaderMenu burgerMenuOpen={burgerMenuOpen} setOpenBurgerMenu={setOpenBurgerMenu} />
    </HeaderFrame>
  )
}
