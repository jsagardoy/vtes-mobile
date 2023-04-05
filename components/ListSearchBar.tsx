import { Icon, SearchBar } from '@rneui/themed';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, TextInput, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

interface Props {
  textSearch: (text: string) => void;
  showSearchModal: () => void;
}
const ListSearchBar = ({ textSearch, showSearchModal }: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleOnChange = (newValue: string) => {
    setSearch(newValue);
    textSearch(newValue);
  };
 

  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <SearchBar
          lightTheme
          placeholder='Search...'
          style={styles.search}
          onChangeText={(newValue: string) => handleOnChange(newValue)}
          value={search}
        />
      </View>

      <AntDesign.Button
        name='ellipsis1'
        size={20}
        color='black'
        backgroundColor={'transparent'}
        onPress={showSearchModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: StatusBar.currentHeight + 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'darkgray',
    borderBottomWidth: 1,
    marginBottom: 2,
  },
  searchWrapper: { flex: 1 },
  search: { backgroundColor: 'transparent', color: 'black' },
});

export default ListSearchBar;
