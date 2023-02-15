import { Image, StyleSheet, Text, View } from 'react-native';

const isSuperior = (discipline: string): boolean => {
  return discipline.toLocaleUpperCase().localeCompare(discipline) === 0;
};

export const getDisciplineIcon = (discipline: string) => {
  const disc = isSuperior(discipline) ? 'sup' : 'inf';
  const URL = `https://static.krcg.org/png_wb/disc/${disc}/${discipline
    .toLocaleLowerCase()
    .replaceAll(' ', '')}.png`;
  return (
    <Text style={styles.container}>
      <Image key={discipline} style={styles.logo} source={{ uri: URL }} />
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {},
  logo: {},
});
