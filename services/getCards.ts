import { Card } from '../types/data.types';
import { getCardTotalInfo } from './getCardTotalInfo';

const getCards = async (cardType: 'crypt' | 'library') => {
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
    console.log(values.slice(0, 2));
    const result = await Promise.all(
      values.slice(0, 2).map(async (elem) => await getCardTotalInfo(elem))
    );

    return result;
  } catch (error) {
    console.error(error);
  }
};
export default getCards;
