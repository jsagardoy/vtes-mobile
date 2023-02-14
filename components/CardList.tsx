import React, { useEffect, useState } from 'react';

import { Card } from '../types/data.types';
import List from './List';
import getCards from '../services/getCards';

const CardList = () => {
  const [list, setList] = useState<Card[]>([]);
  const getData = async () => {
    const value:Card[] = await getCards('crypt');
    setList(value);
  };
  useEffect(() => {
    getData();
  }, []);

  return <List list={list} />;
};

export default CardList;
