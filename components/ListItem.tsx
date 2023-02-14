import { Card } from '../types/data.types';
import CryptItem from './CryptItem';
import LibraryItem from './LibraryItem';
import React from 'react';
import { Text } from 'react-native';
interface Props {
  card: Card;
}
const ListItem = ({ card }: Props) => {
  if (card.types.some((elem) => elem.toLocaleLowerCase().includes('vampire'))) {
    return <CryptItem  card={card} />;
  }
  if (card.types.includes('library')) {
    return <LibraryItem card={card} />;
  }
};

export default ListItem;
