import { Text, TouchableHighlight, View } from 'react-native';

import { Card } from '../types/data.types';
import React from 'react';
import TouchableItem from './TouchableItem';
import { getClanIcon } from '../transformations/getClanIcon';
import { getDisciplineIcon } from '../transformations/getDisciplineIcon';
import { itemStyles } from './itemStyles';

interface Props {
  card: Card;
}
const CryptItem = ({ card }: Props) => {
  const handleCrypt = () => {
    console.log(card.printed_name);
  };
  return (
    <TouchableItem card={card}>
      <View style={itemStyles.container}>
        <View style={itemStyles.nameContainer}>
          <Text style={itemStyles.name}>{card.printed_name}</Text>
          <Text>Group: {card.group}</Text>
        </View>
        <View style={itemStyles.right}>
          <View style={itemStyles.clan}>
            {card.clans && card.clans.map((clan) => getClanIcon(clan))}
          </View>
          <View style={itemStyles.discipline}>
            {card.disciplines &&
              card.disciplines.map((discipline) =>
                getDisciplineIcon(discipline)
              )}
          </View>

          <View style={itemStyles.capacity}>
            <Text style={itemStyles.capacityNumber}>{card.capacity}</Text>
          </View>
        </View>
      </View>
    </TouchableItem>
  );
};

export default CryptItem;
