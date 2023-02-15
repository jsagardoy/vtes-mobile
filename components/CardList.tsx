import { Card, CardType } from '../types/data.types';
import React, { useEffect, useState } from 'react';

import List from './List';
import getCards from '../services/getCards';

interface Props {
  cardType: CardType;
}
const CardList = ({ cardType }: Props) => {
  const [list, setList] = useState<Card[]>([]);
  const getData = async () => {
    const value: Card[] = await getCards(cardType);
    setList(value);
  };
  useEffect(() => {
    getData();
  }, []);

  return <List list={list} />;
};

export default CardList;
