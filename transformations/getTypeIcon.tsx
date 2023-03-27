import { Image, StyleSheet, Text, View } from 'react-native';

export const getTypeIcon = (
  cardType: string,
  index: number,
  showName?: boolean
) => {
  if (cardType.toLowerCase() === ('vampire' || 'imbued')) {
    return;
  }
  /* const data =
    cardType === 'Action Modifier' ? 'modifier' : cardType.toLowerCase(); */

  let data;
  switch (cardType) {
    case 'Action Modifier':
      data = 'modifier';
      break;
    case 'Political Action':
      data = 'political';
      break;

    default:
      data = cardType.toLowerCase();
  }

  const URL = `https://static.krcg.org/png_wb/icon/${data}.png`;
  return (
    <View key={index} style={styles.container}>
      <Image style={styles.logo} source={{ uri: URL }} />
      {showName && <Text style={styles.type_text}>{cardType}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  type_text: { fontSize: 16 },
  logo: { width: 35, height: 35 },
});
