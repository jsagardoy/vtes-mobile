import { Image, StyleSheet, Text } from 'react-native';

export const getClanIcon = (clan: string) => {
  const URL = `https://static.krcg.org/png_wb/clan/${clan
    .toLocaleLowerCase()
    .replaceAll(' ', '')}.png`;
  return (
    <Text key={clan} style={styles.container}>
      <Image key={clan} style={styles.logo} source={{ uri: URL }} />
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { alignSelf: 'center', width: 35, height: 35 },
});
