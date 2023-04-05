import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { disciplines_inf } from '../services/getAllDisciplines';
import { getDisciplineIcon } from '../transformations/getDisciplineIcon';

const CryptSearchContent = () => {
  const initialDisciplines = disciplines_inf.map((elem) => ({
    name: elem,
    value: 0,
  }));
  const [discList, setDiscList] =
    useState<{ name: string; value: number }[]>(initialDisciplines);
  const handleDiscClick = (name: string) => {
    const discInd = discList.findIndex((elem) => elem.name === name);
    const disc = discList[discInd];
    const newDisc = { ...disc, value: disc.value === 2 ? 0 : disc.value + 1 };
    const newList = [...discList];
    newList[discInd] = newDisc;
    setDiscList(newList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.disciplinesContainer}>
        {discList.map((disc) => (
          <TouchableHighlight
            key={disc.name}
            activeOpacity={0.6}
            underlayColor='#DDDDDD'
            onPress={() => handleDiscClick(disc.name)}
          >
            {getDisciplineIcon(
              disc.value < 2 ? disc.name : disc.name.toUpperCase(),
              disc.value === 0
            )}
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' },
  disciplinesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
});
export default CryptSearchContent;
