import styled from 'styled-components/native';
import {COLORS, PADDING} from '../../constants/Theme';

export const BorderView = styled.View`
  ${(props) => (props.flex ? `flex:${props.flex};` : '')}
  ${(props) => (props.marginTop ? `margin-top:${props.marginTop}px;` : '')}
  margin-horizontal: ${PADDING.MEDIUM}px;
  border-width: 1px;
  border-color: ${COLORS.APP_COLOR};
  padding-vertical: ${PADDING.SMALL}px;
  padding-horizontal: ${PADDING.MEDIUM}px;
`;
