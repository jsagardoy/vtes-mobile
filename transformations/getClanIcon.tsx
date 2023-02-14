import { Image, StyleSheet, View } from 'react-native';

export const getClanIcon = (clan: string) => {
  const URL = `https://static.krcg.org/png_wb/clan/${clan
    .toLocaleLowerCase()
    .replaceAll(' ', '')}.png`;
  return <Image key={clan} style={styles.logo} source={{ uri: URL }} />;
};
const styles = StyleSheet.create({
  container: {},
  logo: {
    width: 30,
    height: 30,
  },
});
