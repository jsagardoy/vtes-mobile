import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Card, CardType } from '../types/data.types';
import React, { useContext, useEffect, useState } from 'react';

import List from './List';
import getCards from '../services/getCards';
import useList from '../hooks/useList'

interface Props {
  cardType: CardType;
}
const CardList = ({ cardType }: Props) => {
  const amount: number = 100;
  const [loading, setLoading] = useState<boolean>(false);
  const { list, setList } = useList();
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(amount);

  const getData = async () => {
    setLoading(true);
    const value: Card[] = await getCards(cardType, start, end);
    setList(value);
    setLoading(false);
  };
  const getMoreData = async (newStart: number, newEnd: number) => {
    const value: Card[] = await getCards(cardType, newStart, newEnd);
    const newList: Card[] = [...list, ...value];
    setList(newList);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleMore = async () => {
    setStart(start + amount);
    setEnd(end + amount);
    await getMoreData((start ?? 0) + amount, (end ?? amount) + amount);
  };

  return loading ? (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size='large' color='#6495ED' />
    </View>
  ) : (
    <List list={list} handleMore={handleMore} />
  );
};
const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default CardList;
