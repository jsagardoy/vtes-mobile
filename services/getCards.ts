import { Card, CardType } from '../types/data.types';

import { getCardTotalInfo } from './getCardTotalInfo';

const getCards = async (cardType: CardType) => {
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
    const result = await Promise.all(
      values.slice(0, 35).map(async (elem) => await getCardTotalInfo(elem))
    );

    return result;
  } catch (error) {
    console.error(error);
  }
};
export default getCards;
