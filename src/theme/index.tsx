import React, { useMemo } from 'react'
import {
  createGlobalStyle,
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components/macro'

import { useIsDarkMode } from '../state/user/hooks'
import { Colors } from './styled'

export * from './components'

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280,
}

// Migrating to a standard z-index system https://getbootstrap.com/docs/5.0/layout/z-index/
// Please avoid using deprecated numbers
export enum Z_INDEX {
  deprecated_zero = 0,
  deprecated_content = 1,
  dropdown = 1000,
  sticky = 1020,
  fixed = 1030,
  modalBackdrop = 1040,
  offcanvas = 1050,
  modal = 1060,
  popover = 1070,
  tooltip = 1080,
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

function colors(darkMode: boolean): Colors {
  return {
    darkMode,
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#FBFBFB' : '#4e4e4e',
    text4: darkMode ? '#FBFBFB' : '#878787',
    text5: darkMode ? '#FBFBFB' : '#606060',
    text6: darkMode ? '#B1B1B1' : '#545454',

    // backgrounds / greys
    bg0: darkMode ? '#191b1d' : '#FFF',
    bg1: darkMode ? '#212429' : '#F7F8FA',
    bg2: darkMode ? '#2C2F36' : '#EDEEF2',
    bg3: darkMode ? '#171818' : '#FFF',

    // modal backgrounds
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    modalBBOn: darkMode ? '3px solid #fff' : '3px solid #333',
    modalBBOff: darkMode ? '3px solid #26292c' : '3px solid #e5e5e5',

    // backgrounds / greys
    bgColor: darkMode ? '#000' : '#f9f9f9',
    bgImage: darkMode
      ? 'linear-gradient(315deg, #2d3436 0%, #000000 74%)'
      : 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
  }
}

function theme(darkMode: boolean): DefaultTheme {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',
    shadow2: darkMode ? '0 4px 8px 0 rgb(0 0 0 / 5%)' : '0 4px 8px 0 rgb(47 128 237 / 5%)',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()
  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

export const ThemedGlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.text1};
    background-color: ${({ theme }) => theme.bgColor};
    background-image: ${({ theme }) => theme.bgImage};
    overflow-y: scroll;
  }

  body {
    width: 100%;
    margin: 0;
    padding: 0;
    margin: 0px auto;
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  .logoDark path {
    stroke: ${({ theme }) => theme.black}; 
  }

  .logoLight path {
    stroke: ${({ theme }) => theme.white}; 
  }

  .logoDark g {
    fill: ${({ theme }) => theme.black}; 
  }

  .logoLight g {
    fill: ${({ theme }) => theme.white}; 
  }
`
