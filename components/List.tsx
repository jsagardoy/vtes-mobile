import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { Card } from '../types/data.types';
import ListItem from './ListItem';
import ListSearchBar from './ListSearchBar';

interface Props {
  list: Card[];
}
const List = ({ list }: Props) => {
  const [newList, setNewList] = useState<Card[]>(list);
  const handleTextSearch = (textValue: string) => {
    setNewList(
      list.filter(
        (elem) =>
          elem &&
          ((elem.aka !== undefined &&
            elem.aka.length > 0 &&
            elem.aka.some((aka: string) =>
              aka.toLocaleLowerCase().includes(textValue.toLocaleLowerCase())
            )) ||
            (elem.name &&
              elem.name
                .toLocaleLowerCase()
                .includes(textValue.toLocaleLowerCase())) ||
            (elem.card_text &&
              elem.card_text
                .toLocaleLowerCase()
                .includes(textValue.toLocaleLowerCase())) ||
            (elem.name_variants &&
              elem.name_variants.length > 0 &&
              elem.name_variants.some((name) =>
                name.toLocaleLowerCase().includes(textValue.toLocaleLowerCase())
              )))
      )
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ListSearchBar textSearch={handleTextSearch} />
      <FlatList
        data={newList}
        renderItem={({ item, index }) => (
          <ListItem key={item.id} card={item} index={index} />
        )}
        keyExtractor={(item) => String(item.id)}
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
