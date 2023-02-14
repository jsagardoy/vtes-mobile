import { StatusBar, StyleSheet } from 'react-native';
export const itemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  clan: { justifyContent: 'center' },
  discipline: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
