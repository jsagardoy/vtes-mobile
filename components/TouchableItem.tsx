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
import React, { useEffect, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { Card } from '../types/data.types';
import CardInfo from './CardInfo';
import CardModal from './CardModal';
import useList from '../hooks/useList';

interface Props {
  children: React.ReactElement;
  card: Card;
}

const TouchableItem = ({ children, card }: Props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalInfoVisible, setModalInfoVisible] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [newCard, setNewCard] = useState<Card>(card);

  const { list } = useList();

  useEffect(() => {
    const index = list.findIndex((elem) => elem.id === card.id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, []);

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
  const handleBack = () => {
    const newIndex = currentIndex <= 0 ? currentIndex : currentIndex - 1;
    setCurrentIndex(newIndex);
    const backCard = list[newIndex];
    setNewCard(backCard);
  };
  const handleNext = () => {
    const newIndex =
      currentIndex >= list.length - 1 ? currentIndex : currentIndex + 1;
    setCurrentIndex(newIndex);
    const backCard = list[newIndex];
    setNewCard(backCard);
  };
  const isFirst = (): boolean => currentIndex === 0;
  const isLast = (): boolean => currentIndex === list.length - 1;

  return (
    <View>
      <CardModal
        visible={modalVisible}
        onRequestClose={handleClose}
        showInfo={showInfo}
        handleNext={handleNext}
        handleBack={handleBack}
        children={
          <Image
            id='image'
            alt='card image'
            style={styles.image}
            source={{ uri: newCard.url }}
          />
        }
        isFirst={isFirst}
        isLast={isLast}
      />
      <CardModal
        visible={modalInfoVisible}
        onRequestClose={handleClose}
        showInfo={showInfo}
        handleNext={handleNext}
        handleBack={handleBack}
        children={<CardInfo card={newCard} />}
        isFirst={isFirst}
        isLast={isLast}
      />

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
