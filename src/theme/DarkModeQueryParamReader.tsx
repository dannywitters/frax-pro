import { parse } from 'qs'
import { useEffect } from 'react'
import { RoutesProps } from 'react-router-dom'
import { useAppDispatch } from 'state/hooks'

import { updateUserDarkMode } from '../state/user/actions'

export default function DarkModeQueryParamReader({ location }: RoutesProps): null {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!location) return
    //if (location.length < 2) return

    // @ts-ignore
    const parsed = parse(location, {
      parseArrays: false,
      ignoreQueryPrefix: true,
    })

    const theme = parsed.theme

    if (typeof theme !== 'string') return

    if (theme.toLowerCase() === 'light') {
      dispatch(updateUserDarkMode({ userDarkMode: false }))
    } else if (theme.toLowerCase() === 'dark') {
      dispatch(updateUserDarkMode({ userDarkMode: true }))
    }
  }, [dispatch, location])

  return null
}
