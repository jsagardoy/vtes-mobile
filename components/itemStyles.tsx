import { StatusBar, StyleSheet } from 'react-native';
export const itemStyles = StyleSheet.create({
  row: {
    borderBottomWidth: 1,
    borderBottomColor: '#bcbcbc',
    paddingBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    gap: 4,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  bannedName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    color: 'red',
    textDecorationLine: 'line-through',
  },
  bannedType: {
    color: 'red',
    textDecorationLine: 'line-through',
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {},
  type: {
    marginRight: 4,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  capacity: {
    flexDirection: 'row',
    width: 33,
    height: 33,
    borderRadius: 50,
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  nameAdv: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    maxWidth: 200,
  },
  capacityNumber: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  clan: {
    flexDirection: 'row',
    width: 35,
    maxWidth: 35,
    height: 35,
    maxHeight: 35,
  },
  adv: {
    flexDirection: 'row',
    width: 35,
    maxWidth: 35,
    height: 35,
    maxHeight: 35,
  },
  discipline: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  disciplineLibrary: {
    maxWidth: 35,
    width: 35,
  },
  cost: {
    width: 35,
    maxWidth: 35,
    height: 35,
    maxHeight: 35,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
