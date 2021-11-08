import { createReducer } from '@reduxjs/toolkit'
import { SupportedLocale } from 'constants/locales'

import { updateMatchesDarkMode, updateUserDarkMode, updateUserLocale } from './actions'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  matchesDarkMode: boolean // whether the dark mode media query matches
  userDarkMode: boolean | null // the user's choice for dark mode or light mode
  userLocale: SupportedLocale | null
  timestamp: number
}

export const initialState: UserState = {
  matchesDarkMode: false,
  userLocale: null,
  userDarkMode: null,
  timestamp: currentTimestamp(),
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateUserDarkMode, (state, action) => {
      state.userDarkMode = action.payload.userDarkMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateMatchesDarkMode, (state, action) => {
      state.matchesDarkMode = action.payload.matchesDarkMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateUserLocale, (state, action) => {
      state.userLocale = action.payload.userLocale
      state.timestamp = currentTimestamp()
    })
)
