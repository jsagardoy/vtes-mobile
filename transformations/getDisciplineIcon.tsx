import { Image, StyleSheet, View } from 'react-native';

const isSuperior = (discipline: string): boolean => {
  return discipline.toLocaleUpperCase().localeCompare(discipline) === 0;
};

export const getDisciplineIcon = (discipline: string, opacity?: boolean) => {
  const disc = isSuperior(discipline) ? 'sup' : 'inf';
  const URL = `https://static.krcg.org/png_wb/disc/${disc}/${discipline
    .toLocaleLowerCase()
    .replaceAll(' ', '')}.png`;
  return (
    <View key={discipline} style={styles.container}>
      {opacity && <View style={styles.logoOpaque} />}
      <Image style={styles.logo} source={{ uri: URL }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  logo: {
    width: 35,
    height: 35,
  },
  logoOpaque: {
    width: 35,
    height: 35,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
