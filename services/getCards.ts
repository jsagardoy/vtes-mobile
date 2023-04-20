import { Card, CardType } from '../types/data.types'

import { Storage } from 'expo-storage'
import { getCardTotalInfo } from './getCardTotalInfo'

const getCards = async (cardType: CardType, start: number, end: number) => {
  const body = {
    type: [cardType],
  }
  const URL = 'https://api.krcg.org/card_search'
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  try {
    await Storage.remove({ key: 'getCards' })
    const sessionData = await Storage.getItem({ key: 'getCards' })
    if (sessionData) {
      const result = JSON.parse(sessionData)
      return result
    }
    if (!sessionData) {
      const data = await fetch(URL, opt)
      const values: string[] = await data.json()

      const result = await Promise.all(
        values
          .slice(start, end)
          .map(async (elem) => await getCardTotalInfo(elem))
      )
      await Storage.setItem({ key: 'getCards', value: JSON.stringify(result) })
      return result
    }
  } catch (error) {
    console.error(error)
  }
}
export default getCards
