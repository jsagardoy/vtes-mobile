import { Image, StyleSheet, Text } from 'react-native';

import { View } from 'react-native';

export const getClanIcon = (clan: string, showName?: boolean) => {
  let newClan;
  const clanTranformation = clan.toLowerCase().replaceAll(' ', '');
  switch (clanTranformation) {
    case 'gargoyle':
      newClan = 'gargoyles';
      break;
    case 'harbingerofskulls':
      newClan = 'harbingersofskulls';
      break;
    case 'daughterofcacophony':
      newClan = 'daughtersofcacophony';
      break;
    case 'ahrimane':
      newClan = 'ahrimanes';
      break;

    default:
      newClan = clanTranformation;
      break;
  }
  const URL = `https://static.krcg.org/png_wb/clan/${newClan}.png`;
  return (
    <View key={clan} style={styles.container}>
      <Image key={clan} style={styles.logo} source={{ uri: URL }} />
      {showName && <Text style={styles.clan_text}>{clan}</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  clan_text: { fontSize: 16 },
  logo: { width: 35, height: 35 },
});
