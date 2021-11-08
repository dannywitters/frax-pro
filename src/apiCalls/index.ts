import axios from 'axios'

import { API_MAIN, API_PROTOCOL_REVENUE, RESOURCES_LIST } from '../constants/links'

export const getApiMainResults = async (): Promise<any> => {
  const results = await axios.get(API_MAIN)

  if (!results.data) {
    throw new Error('API is down')
  }
  return results.data
}

export const getApiRevenueResults = async (): Promise<any> => {
  const results = await axios.get(API_PROTOCOL_REVENUE)

  if (!results.data) {
    throw new Error('API is down')
  }
  return results.data
}

export const getResourceList = async (lang: string): Promise<any> => {
  const results = await axios.get(RESOURCES_LIST[lang])

  if (!results.data) {
    throw new Error('API is down')
  }
  return results.data
}
