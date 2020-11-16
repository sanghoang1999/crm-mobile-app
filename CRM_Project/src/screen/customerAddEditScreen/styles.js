import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    flexDirection: 'column',
  },
  form: {
    width: '100%',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 15,
  },
  field: {
    marginHorizontal: 15,
    marginVertical: 5,
  },
  input: {
    fontSize: 16,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 10,
    width: '100%',
    height: 40,
  },
  btn_upload: {
    backgroundColor: 'rgba(83, 109, 254, 1)',
    marginHorizontal: 15,
    paddingVertical: 4,
    alignItems: 'center',
    borderRadius: 3,
  },
  img: {
    marginVertical: 35,
    width: '70%',
    height: 210,
    alignSelf: 'center',
  },
  form_btn: {
    width: '35%',
    height: 45,
    borderRadius: 40,
    backgroundColor: 'rgba(83, 109, 254, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form_btn_text: {
    fontSize: 22,
    color: 'white',
  },
});
