import { Card, CardType } from '../types/data.types'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Promise } from 'bluebird'
import { getCardTotalInfo } from './getCardTotalInfo'
import storage from './storage'

const getAllCards = async (cardType: CardType) => {
  const body = {
    type: [cardType],
  }
  const URL = 'https://api.krcg.org/card_search'
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }

  try {
    let allCards
    try {
      allCards = await storage.load({
        key: 'getAllCards',
        id: 'getAllCards',
        syncInBackground: false,
      })
      // ...
    } catch (error) {
      console.error(error)
      allCards = null
    }

    if (!allCards) {
      const response = await fetch(URL, requestOptions)
      const cardNames: string[] = await response.json()

      const cardTotalInfoList = await Promise.map(
        cardNames,
        async (elem) => {
          try {
            return await getCardTotalInfo(elem)
          } catch (error) {
            console.error(error)
            return null
          }
        },
        { concurrency: 3 }
      )

      try {
        await storage.save({
          key: 'getAllCards',
          id: 'getAllCards',
          data: cardTotalInfoList,
        })
      } catch (error) {
        console.error(error)
      }
      return cardTotalInfoList
    }
    if (allCards) {
      return allCards
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
export default getAllCards
