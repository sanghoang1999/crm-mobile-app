import styled from 'styled-components/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {PADDING} from '../../constants/Theme';

export const Container = styled(KeyboardAwareScrollView).attrs((props) => ({
  keyboardOpeningTime: Number.MAX_SAFE_INTEGER,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrows: 1,
  },
}))`
  flex: 1;
`;
