import { Button, View } from 'react-native';

import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button title='Crypt' onPress={() => navigation.navigate('Crypt')} />
      <Button title='Library' onPress={() => navigation.navigate('Library')} />
    </View>
  );
};

export default Home;
