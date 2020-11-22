import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  card: {
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
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 50,
    height: 64,
    width: 64,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  namebox: {
    marginLeft: 10,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  mock: {
    backgroundColor: 'rgba(83, 109, 254, 1)',
    width: '100%',
    height: 10,
  },
  timebox: {
    marginRight: 10,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
});
