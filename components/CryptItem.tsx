import { Text, TouchableHighlight, View } from 'react-native';

import { Card } from '../types/data.types';
import React from 'react';
import SectionComponent from './SectionComponent';
import TouchableItem from './TouchableItem';
import { getClanIcon } from '../transformations/getClanIcon';
import { getDisciplineIcon } from '../transformations/getDisciplineIcon';
import { getTypeIcon } from '../transformations/getTypeIcon';
import { itemStyles } from './itemStyles';

interface Props {
  card: Card;
}
const CryptItem = ({ card }: Props) => {
  return (
    <TouchableItem card={card}>
      <View style={itemStyles.row}>
        <View style={itemStyles.container}>
          <View style={itemStyles.nameContainer}>
            <View style={itemStyles.nameAdv}>
              <Text
                style={card.banned ? itemStyles.bannedName : itemStyles.name}
              >
                {card.printed_name}
              </Text>
              <View style={itemStyles.adv}>
                {card.adv && getTypeIcon('adv', 0)}
              </View>
            </View>
          </View>

          <View style={itemStyles.clan}>
            {card.clans && card.clans.map((clan) => getClanIcon(clan))}
          </View>
          <View style={itemStyles.capacity}>
            <Text style={itemStyles.capacityNumber}>{card.capacity}</Text>
          </View>
        </View>
        <View style={itemStyles.container}>
          <View style={itemStyles.title}>
            <Text>Group: {card.group}</Text>
            {card.title && <Text style={itemStyles.title}>{card.title}</Text>}
          </View>
          <View style={itemStyles.discipline}>
            {card.disciplines &&
              card.disciplines.map((discipline) =>
                getDisciplineIcon(discipline)
              )}
          </View>
        </View>
      </View>
    </TouchableItem>
  );
};

export default CryptItem;
