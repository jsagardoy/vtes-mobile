import { Image, StyleSheet, Text } from 'react-native';

import { CardCostType } from '../types/data.types';

export const getCardCostIcon = (cost: string, costType: CardCostType) => {
  const data =
    costType === 'conviction'
      ? costType
      : costType.concat(cost.toLocaleLowerCase());
  const URL = `https://static.krcg.org/png_wb/icon/${data}.png`;
  return (
    <Text style={styles.container}>
      <Image style={styles.logo} source={{ uri: URL }} />
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { flex: 1, width: 35, height: 35, maxHeight: 35, maxWidth: 35 },
});
