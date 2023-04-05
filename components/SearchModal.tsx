import { Modal, StatusBar, StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import CryptSearchContent from './CryptSearchContent';
import React from 'react';

interface Props {
  showModal: boolean;
  handleCloseModal: () => void;
  cardType: string;
}
const SearchModal = ({ showModal, handleCloseModal, cardType }: Props) => {
  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={showModal}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.container}>
        <View id='actionbar' style={styles.actionBar}>
          <AntDesign.Button
            onPress={handleCloseModal}
            name='close'
            size={20}
            color='black'
            backgroundColor={'transparent'}
          />
        </View>

        {cardType.toLowerCase() === 'crypt' ? (
          <CryptSearchContent />
        ) : (
          <View>
            <Text>library</Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 50,
    /* justifyContent: 'center', */
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flex: 1,
  },

  actionBar: {
    flex: 1,
    maxHeight: 45,
    flexDirection: 'row',
    width: 400,
    justifyContent: 'flex-end',
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
    minHeight: 900,
    height: 900,
    maxHeight: 900,
    overflowY: 'scroll',
    maxWidth: 400,
    minWidth: 400,
  },
});
export default SearchModal;
