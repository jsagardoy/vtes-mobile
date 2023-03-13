import {
  Button,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';

import { Card } from '../types/data.types';

interface Props {
  children: React.ReactElement;
  card: Card;
}

const TouchableItem = ({ children, card }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleCard = () => {
    setModalVisible((prev) => !prev);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View>
      {modalVisible && (
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View id='modal' style={styles.modal}>
            <View id='actionbar' style={styles.actionBar}>
              <Button title='otro' onPress={() => handleClose()} />
              <Button title='X' onPress={() => handleClose()} />
            </View>
            <View id='imageContainer' style={styles.imageContainer}>
              <Image
                id='image'
                alt='card image'
                style={styles.image}
                source={{ uri: card.url }}
              />
            </View>
          </View>
        </Modal>
      )}
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor='#DDDDDD'
        onPress={() => handleCard()}
      >
        {children}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    marginTop: StatusBar.currentHeight + 50,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    height: 550,
    width: 400,
    opacity: 1,
  },
  imageContainer: {},
  actionBar: {
    flex: 1,
    maxHeight: 35,
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-between',
    border: 2,
    borderColor: 'red',
  },
});
export default TouchableItem;
