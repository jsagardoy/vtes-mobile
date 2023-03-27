import { Card } from '../types/data.types';
import CryptItem from './CryptItem';
import LibraryItem from './LibraryItem';
import React from 'react';
import { Text } from 'react-native';
interface Props {
  card: Card;
}
const ListItem = ({ card }: Props) => {
  if (
    card.types.some(
      (elem) =>
        elem.toLocaleLowerCase().includes('vampire') ||
        elem.toLocaleLowerCase().includes('imbued')
    )
  ) {
    return <CryptItem card={card} />;
  }

  return <LibraryItem card={card} />;
};

export default ListItem;
