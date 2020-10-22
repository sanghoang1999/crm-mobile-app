import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    height: 108,
    width: 108,
    backgroundColor: 'rgba(83, 109, 254, 1)',
  },
  container: {
    backgroundColor: 'white',
    // alignItems: 'center',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
    height: 120,
  },
  img: {
    height: 65,
    width: 137,
  },
  card: {
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(83, 109, 254, 1)',
    height: 200,
    padding: 10,
  },
  textSection: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    width: '30%',
  },
  content: {
    width: '70%',
  },
  radiogroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radio: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
