import React from 'react';
import {View} from 'react-native';
import {COLORS, PADDING} from '../../../constants/Theme';
import {
  AppText,
  ImageContainer,
  RowView,
} from '../../style/generalComponentStyle';

const CustomerFindingItem = ({name, image}) => {
  return (
    <View
      style={{
        backgroundColor: `${COLORS.APP_COLOR_BLUR}`,
        marginVertical: PADDING.SMALL,
        marginHorizontal: PADDING.SMALL,
        paddingVertical: PADDING.MEDIUM,
        paddingHorizontal: PADDING.LARGE,
        borderRadius: 10,
        elevation: 4,
      }}>
      <RowView alignItems={'center'}>
        <ImageContainer width={50} height={50} source={image} />
        <AppText marginHorizontal={10}>{name}</AppText>
      </RowView>
    </View>
  );
};
export default CustomerFindingItem;
