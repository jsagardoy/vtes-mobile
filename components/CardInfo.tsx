import 'intl';
import 'intl/locale-data/jsonp/en.js';

import { Card, Links } from '../types/data.types';
import { Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

import SectionComponent from './SectionComponent';
import TextGroup from './TextGroup';
import { getCardCostIcon } from '../transformations/getCardCostIcon';
import { getClanIcon } from '../transformations/getClanIcon';
import { getDisciplineIcon } from '../transformations/getDisciplineIcon';
import { getFormatedList } from '../transformations/getFormatedList';
import { getTypeIcon } from '../transformations/getTypeIcon';
import { itemStyles } from './itemStyles';

interface Props {
  card: Card;
}
const CardInfo = ({ card }: Props) => {
  const {
    printed_name,
    adv,
    card_text,
    capacity,
    clans,
    disciplines,
    group,
    pool_cost,
    blood_cost,
    banned,
    conviction_cost,
    has_advanced,
    title,
    types,
    artists,
    flavor_text,
    draft,
    ordered_sets,
    rulings,
  } = card;

  const cleanText = (data: string, elem: string) => {
    return data.replaceAll(elem, '');
  };

  const buildLink = (data: string, links: Links[]) => {
    const position = links.findIndex((elem) => data.includes(elem.name));
    if (position === -1 || null || undefined) return;
    return (
      <View key={data}>
        <Text
          style={styles.hyperlink}
          onPress={() => Linking.openURL(links[position].url)}
        >
          {links[position].name}
        </Text>
        <Text>{cleanText(data, links[position].name)}</Text>
      </View>
    );
  };

  return (
    <ScrollView id='info' style={styles.info}>
      <View style={styles.costContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.card_name}>{printed_name}</Text>
          {adv ? (
            <View style={styles.types}>{getTypeIcon('adv', 0)}</View>
          ) : null}
        </View>
        {conviction_cost && (
          <Text>{getCardCostIcon(conviction_cost, 'conviction')}</Text>
        )}
        {pool_cost && <Text>{getCardCostIcon(pool_cost, 'pool')}</Text>}
        {blood_cost && <Text>{getCardCostIcon(blood_cost, 'blood')}</Text>}
        {capacity && (
          <View style={itemStyles.capacity}>
            <Text style={itemStyles.capacityNumber}>{capacity}</Text>
          </View>
        )}
      </View>
      {has_advanced ? (
        <Text style={styles.text}>Has an advanced version</Text>
      ) : null}

      {clans && clans.length > 0 ? (
        <View style={styles.clan}>
          {clans.map((clan) => {
            return getClanIcon(clan, true);
          })}
        </View>
      ) : null}
      {types && types.length > 0 ? (
        <View style={styles.types}>
          {types.map((type, index) => getTypeIcon(type, index, true))}
        </View>
      ) : null}
      <TextGroup title='Banned' data={banned} />
      {disciplines && disciplines.length > 0 ? (
        <View style={styles.disciplinesContainer}>
          <Text style={styles.title}>Disciplines:</Text>
          <View style={styles.disciplines}>
            {disciplines.map((discipline) => getDisciplineIcon(discipline))}
          </View>
        </View>
      ) : null}

      <TextGroup title='Group' data={group} />
      {/* <TextGroup title='Title:' data={title} /> */}
      <View style={styles.cardTextContainer}>
        <TextGroup data={card_text} />
      </View>
      <SectionComponent title='Draft:' data={draft} />
      {flavor_text && <Text style={styles.flavorText}>{flavor_text}</Text>}
      <View style={styles.smallTextContainer}>
        <SectionComponent title='Artists:' data={artists} />
        <SectionComponent title='Sets:' data={ordered_sets} />
      </View>
      {rulings && <Text style={styles.title}>Ruling:</Text>}
      {rulings && rulings.text.map((elem) => buildLink(elem, rulings.links))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  card_name: { fontWeight: 'bold', fontSize: 24 },
  clan: { flexDirection: 'row', alignItems: 'center' },
  disciplines: { flexDirection: 'row', alignItems: 'center' },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  disciplinesContainer: {
    marginVertical: 10,
    gap: 4,
    flexDirection: 'column',
  },
  title: { fontWeight: '700', marginRight: 4 },
  text: { fontSize: 16 },
  cardText: { fontSize: 16 },
  banned: { fontSize: 16, fontWeight: 'bold', color: 'crimson' },
  info: {
    gap: 1,
    backgroundColor: 'darkgray',
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    minHeight: 550,
    maxHeight: 550,
    height: 550,
    overflow: 'scroll',
    minWidth: 400,
    width: 400,
    maxWidth: 400,
  },
  smallTextContainer: { marginVertical: 10 },
  cardTextContainer: { marginVertical: 10 },
  types: { gap: 1, justifyContent: 'flex-start', fontSize: 10 },
  flavorText: { fontSize: 16, fontStyle: 'italic' },
  hyperlink: {
    color: 'blue',
    textDecorationLine: 'underline',
    maxWidth: 150,
  },
});
export default CardInfo;
