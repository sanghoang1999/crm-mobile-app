
import styled from 'styled-components/native';
import {COLORS} from '../../constants/Theme';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;

export const CircleView = styled.View`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  background-color: ${COLORS.APP_COLOR};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  ${(props) => (props.top ? `top:${props.top}px;` : '')}
  ${(props) => (props.left ? `left:${props.left}px;` : '')}
  ${(props) => (props.right ? `right:${props.right}px;` : '')}
  ${(props) => (props.bottom ? `bottom:${props.bottom}px;` : '')}
`;
