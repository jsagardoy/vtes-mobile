import { Card, CardType } from '../types/data.types';

import { Promise } from 'bluebird';
import { getCardTotalInfo } from './getCardTotalInfo';

const getAllCards = async (cardType: CardType) => {
  const body = {
    type: [cardType],
  };
  const URL = 'https://api.krcg.org/card_search';
  const opt = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  try {
    const data = await fetch(URL, opt);
    const values: string[] = await data.json();
    const result = Promise.map(
      values,
      async (elem) => await getCardTotalInfo(elem),
      { concurrency: 100 }
    );
    /*   const result = await Promise.all(
      values.map(async (elem) => await getCardTotalInfo(elem))
    ); */
    return result;
  } catch (error) {
    console.error(error);
  }
};
export default getAllCards;
