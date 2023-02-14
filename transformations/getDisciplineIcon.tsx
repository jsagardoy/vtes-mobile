import { Image, StyleSheet, View } from 'react-native';

const isSuperior = (discipline: string): boolean => {
  return discipline.toLocaleUpperCase().localeCompare(discipline) === 0;
};

export const getDisciplineIcon = (discipline: string) => {
  const disc = isSuperior(discipline) ? 'sup' : 'inf';
  const URL = `https://static.krcg.org/png_wb/disc/${disc}/${discipline
    .toLocaleLowerCase()
    .replaceAll(' ', '')}.png`;
  return <Image key={discipline} style={styles.logo} source={{ uri: URL }} />;
};
const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
});
