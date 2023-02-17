import { StatusBar, StyleSheet } from 'react-native';
export const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bcbcbc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    width: 150,
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 150,
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  type: {
    marginLeft: 10,
  },
  capacity: {
    flexDirection: 'row',
    marginVertical: 4,
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: 'darkred',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  capacityNumber: {
    flexDirection: 'row',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clan: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 14,
  },
  discipline: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  disciplineLibrary: {
    maxWidth: 35,
  },
  cost: {
    width: 45,
    maxWidth: 45,
  },
});
