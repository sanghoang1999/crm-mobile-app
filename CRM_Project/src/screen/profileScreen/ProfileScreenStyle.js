import styled from 'styled-components/native';
import {COLORS} from '../../constants/Theme';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

export const ViewOptionItem = styled.View`
  justify-content: center;
  border-top-width: 0.5px;
  border-color: ${COLORS.BORDER_GREY};
  ${(props) => (props.borderBottom ? `border-bottom-width: 0.5px;` : '')}
`;
export const OptionItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  padding-horizontal: 20px;
  justify-content: space-between;
`;
