import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Card, CardType } from '../types/data.types';
import React, { useContext, useEffect, useState } from 'react';

import List from './List';
import getAllCards from '../services/getAllCards';
import getCards from '../services/getCards';
import useList from '../hooks/useList';

interface Props {
  cardType: CardType;
}
const CardList = ({ cardType }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { list, setList } = useList();


  const getData = async () => {
    setLoading(true);
    /*  const value: Card[] = await getCards(cardType, start, end); */
    const value: Card[] = await getAllCards(cardType);

    setList(value.sort((a, b) => a.printed_name.localeCompare(b.printed_name)));
    setLoading(false);
  };
  
  useEffect(() => {
    getData();
  }, []);



  return loading ? (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size='large' color='#6495ED' />
    </View>
  ) : (
    <List list={list}/>
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
