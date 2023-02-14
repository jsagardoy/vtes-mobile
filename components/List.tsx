import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

import { Card } from '../types/data.types';
import ListItem from './ListItem';
import React from 'react';

interface Props {
  list: Card[];
}
const List = ({ list }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem key={item.id} card={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 5 || 15,
    marginHorizontal: 20,
  },
  item: {
    flex: 1,
  },
});

export default List;
