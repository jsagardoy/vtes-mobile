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

import { AntDesign } from '@expo/vector-icons';
import { Card } from '../types/data.types';
import CardInfo from './CardInfo';

interface Props {
  children: React.ReactElement;
  card: Card;
}

const TouchableItem = ({ children, card }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalInfoVisible, setModalInfoVisible] = useState<boolean>(false);

  const handleCard = () => {
    setModalVisible((prev) => !prev);
  };

  const handleClose = () => {
    setModalInfoVisible(false);
    setModalVisible(false);
  };

  const showInfo = () => {
    setModalInfoVisible((prev) => !prev);
    setModalVisible((prev) => !prev);
  };
  return (
    <View>
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
            <AntDesign.Button
              name='infocirlceo'
              size={24}
              color='black'
              backgroundColor={'transparent'}
              onPress={showInfo}
            />
            <AntDesign.Button
              onPress={handleClose}
              name='close'
              size={20}
              color='black'
              backgroundColor={'transparent'}
            />
          </View>
          <View id='imageContainer'>
            <View style={styles.arrowsContainer}>
              <AntDesign.Button
                name='left'
                size={24}
                color='darkgray'
                backgroundColor={'transparent'}
                onPress={showInfo}
                /*  disabled={isFirst()} */
              />
              <Image
                id='image'
                alt='card image'
                style={styles.image}
                source={{ uri: card.url }}
              />
              <AntDesign.Button
                name='right'
                size={24}
                color='darkgray'
                backgroundColor={'transparent'}
                onPress={showInfo}
                /* disabled={isLast()} */
              />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalInfoVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View id='modal' style={styles.modal}>
          <View id='actionbar' style={styles.actionBar}>
            <AntDesign.Button
              name='infocirlceo'
              size={24}
              color='black'
              backgroundColor={'transparent'}
              onPress={showInfo}
            />
            <AntDesign.Button
              onPress={handleClose}
              name='close'
              size={20}
              color='black'
              backgroundColor={'transparent'}
            />
          </View>
          <CardInfo card={card} />
        </View>
      </Modal>

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
    height: 500,
    width: 350,
    opacity: 1,
  },
  actionBar: {
    flex: 1,
    maxHeight: 45,
    flexDirection: 'row',
    width: 400,
    justifyContent: 'space-between',
    borderColor: 'black',
    backgroundColor: 'darkgray',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  info: {
    backgroundColor: 'darkgray',
    paddingTop: 2,
    paddingLeft: 1,
    minHeight: 500,
    maxHeight: 500,
    overflowY: 'scroll',
    maxWidth: 350,
    minWidth: 350,
  },
  arrowsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default TouchableItem;
