import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useState } from 'react';

import { Card } from '../types/data.types';
import ListItem from './ListItem';

interface Props {
  list: Card[];
  handleMore: () => void;
}
const List = ({ list, handleMore }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => <ListItem key={item.id} card={item} />}
        keyExtractor={(item) => String(item.id)}
        onEndReached={handleMore}
        onEndReachedThreshold={3}
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
