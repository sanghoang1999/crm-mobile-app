import styled from 'styled-components/native';
import { COLORS } from '../../constants/Theme';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
`;
export const ColumnView = styled.View`
  ${(props) => (props.flex ? `flex: ${props.flex};` : '')}
  flex-direction: column;
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ''}
${(props) =>
    props.paddingHorizontal
      ? `padding-horizontal: ${props.paddingHorizontal}px;`
      : ''}
`;
export const RowView = styled.View`
  ${(props) => (props.flex ? `flex: ${props.flex};` : '')}
  flex-direction: row;
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ''}
  ${(props) =>
    props.paddingHorizontal
      ? `padding-horizontal: ${props.paddingHorizontal}px;`
      : ''}
`;

export const ImageContainer = styled.Image.attrs((props) => ({
  resizeMode: 'contain',
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  ${(props) =>
    props.marginVertical ? `margin-vertical: ${props.marginVertical}px;` : ''}
  ${(props) =>
    props.marginRight ? `margin-right: ${props.marginRight}px;` : ''};
`;
export const IconContainer = styled.Image.attrs((props) => ({
  resizeMode: 'contain',
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  ${(props) =>
    props.marginRight ? `margin-right: ${props.marginRight}px;` : ''};
`;

export const AppText = styled.Text`
  ${(props) => (props.position ? `position: ${props.position};` : '')}
  ${(props) => (props.right ? `right: ${props.right}px;` : '')}
  ${(props) => (props.bottom ? `bottom: ${props.bottom}px;` : '')}
  ${(props) => (props.textColor ? `color: ${props.textColor};` : '')}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : '')}
  ${(props) =>
    props.textTransform ? `text-transform: ${props.textTransform};` : ''}
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}px;` : '')}
  ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')}
  ${(props) =>
    props.textDecoration ? `text-decoration: ${props.textDecoration};` : ''}
  ${(props) =>
    props.marginHorizontal
      ? `margin-horizontal: ${props.marginHorizontal}px;`
      : ''};
  ${(props) =>
    props.marginVertical ? `margin-vertical: ${props.marginVertical}px;` : ''};
`;
