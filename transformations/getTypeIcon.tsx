import { Image, StyleSheet, Text } from 'react-native';

export const getTypeIcon = (cardType: string, index: number) => {
  const data = cardType.toLocaleLowerCase();
  const URL = `https://static.krcg.org/png_wb/icon/${data}.png`;
  return (
    <Text key={index} style={styles.container}>
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
  logo: { flex: 1, width: 35, height: 35 },
});
