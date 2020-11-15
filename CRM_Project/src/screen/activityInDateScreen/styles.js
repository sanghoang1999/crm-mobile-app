import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
  },
  searchBar: {
    fontSize: 20,
    margin: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderColor: 'rgba(204, 204, 204, 1)',
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    margin: 10,
    color: 'white',
    fontSize: 24,
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
  },
  listContainer: {
    margin: 10,
    width: '90%',
    flex: 1,
  },
  item: {
    width: '100%',
    height: 83,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'rgba(204, 204, 204, 1)',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
  floatbtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 51,
    height: 60,
    width: 60,
    backgroundColor: '#00A3FF',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
