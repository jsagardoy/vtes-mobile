import { Modal, StatusBar, StyleSheet, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from 'react';

interface Props {
  visible: boolean;
  onRequestClose: () => void;
  showInfo: () => void;
  handleNext: () => void;
  handleBack: () => void;
  children: React.ReactNode;
  isFirst: () => boolean;
  isLast: () => boolean;
}

const CardModal = ({
  visible,
  onRequestClose,
  showInfo,
  handleNext,
  handleBack,
  children,
  isFirst,
  isLast,
}: Props) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
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
            onPress={onRequestClose}
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
              onPress={handleBack}
              disabled={isFirst()}
            />
            {children}
            <AntDesign.Button
              name='right'
              size={24}
              color='darkgray'
              backgroundColor={'transparent'}
              onPress={handleNext}
              disabled={isLast()}
            />
          </View>
        </View>
      </View>
    </Modal>
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
    width: 350,
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

export default CardModal;
