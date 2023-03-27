import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

interface Props {
  title?: string;
  data?: string;
}
const TextGroup = ({ title, data }: Props) => {
  return (
    data && (
      <View style={styles.textContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Text style={styles.text}>{data}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontWeight: '700', marginRight: 4 },
  text: { fontSize: 16 },
  cardText: { fontSize: 16 },
});
export default TextGroup;
