import { Card } from '../types/data.types';
import CryptItem from './CryptItem';
import LibraryItem from './LibraryItem';
import React from 'react';
import { Text } from 'react-native';
interface Props {
  card: Card;
  index: number;
}
const ListItem = ({ card, index }: Props) => {
  if (
    card.types.some(
      (elem) =>
        elem.toLocaleLowerCase().includes('vampire') ||
        elem.toLocaleLowerCase().includes('imbued')
    )
  ) {
    return <CryptItem card={card} index={index} />;
  }

  return <LibraryItem card={card} />;
};

export default ListItem;
