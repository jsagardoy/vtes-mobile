import { Text, View } from 'react-native';

import { Card } from '../types/data.types';
import React from 'react';
import { getCardCostIcon } from '../transformations/getCardCost';
import { getClanIcon } from '../transformations/getClanIcon';
import { getDisciplineIcon } from '../transformations/getDisciplineIcon';
import { getTypeIcon } from '../transformations/getTypeIcon';
import { itemStyles } from './itemStyles';

interface Props {
  card: Card;
}
const LibraryItem = ({ card }: Props) => {
  return (
    <View style={itemStyles.container}>
      <View style={itemStyles.left}>
        <View style={itemStyles.type}>
          {card.types &&
            card.types.map((type, index) => (
              <View key={index}>{getTypeIcon(type, index)}</View>
            ))}
        </View>
        <View style={itemStyles.nameContainer}>
          <Text style={itemStyles.name}>{card.printed_name}</Text>
          {card.types.map((cardType) => (
            <Text key={cardType}>{cardType}</Text>
          ))}
        </View>
      </View>
      <View style={itemStyles.right}>
        <View style={itemStyles.clan}>
          {card.clans && card.clans.map((clan) => getClanIcon(clan))}
        </View>
        <View style={itemStyles.disciplineLibrary}>
          {card.disciplines &&
            card.disciplines.map((discipline) => getDisciplineIcon(discipline))}
        </View>

        <View style={itemStyles.cost}>
          {card.pool_cost && (
            <View style={itemStyles.cost}>
              {getCardCostIcon(card.pool_cost, 'pool')}
            </View>
          )}
          {card.blood_cost && (
            <Text style={itemStyles.cost}>
              {getCardCostIcon(card.blood_cost, 'blood')}
            </Text>
          )}
          {card.conviction_cost && (
            <Text style={itemStyles.cost}>
              {getCardCostIcon(card.conviction_cost, 'conviction')}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default LibraryItem;
