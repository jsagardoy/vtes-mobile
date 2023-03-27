import { StyleSheet, Text, View } from 'react-native';

import { getFormatedList } from '../transformations/getFormatedList';

interface Props {
  title: string;
  data: any;
}
const SectionComponent = ({ title, data }: Props) => {
  const isArray: boolean = Array.isArray(data);
  if (!data) {
    return;
  }

  if (!isArray) {
    return (
      <View>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.text}>{data} </Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.title}>{title} </Text>
      <Text>{getFormatedList(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontWeight: '700',
  },
  text: {},
});

export default SectionComponent;
