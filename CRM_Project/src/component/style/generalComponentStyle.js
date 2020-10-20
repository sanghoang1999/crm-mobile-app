import styled from 'styled-components/native';

export const ColumnView = styled.View`
  ${(props) => (props.flex ? `flex: ${props.flex};` : '')}
  flex-direction: column;
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
`;
export const RowView = styled.View`
  ${(props) => (props.flex ? `flex: ${props.flex};` : '')}
  flex-direction: row;
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
`;

export const ImageContainer = styled.Image.attrs((props) => ({
  resizeMode: 'contain',
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  ${(props) =>
    props.marginVertical ? `margin-vertical: ${props.marginVertical}px;` : ''}
`;
export const IconContainer = styled.Image.attrs((props) => ({
  resizeMode: 'contain',
}))`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
