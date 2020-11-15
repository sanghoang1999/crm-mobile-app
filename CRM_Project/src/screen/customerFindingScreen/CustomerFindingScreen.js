import {FlatList, TextInput, View} from 'react-native';
import React from 'react';
import {
  ColumnView,
  ContainerView,
} from '../../component/style/generalComponentStyle';
import {ImageIndex} from '../../assets/images/imageIndex';
import CustomerFindingItem from '../../component/item/customerFindingItem/CustomerFindingItem';
import {COLORS, PADDING} from '../../constants/Theme';
import AppStatusBar from '../../component/AppStatusBar/AppStatusBar';
const CustomerFindingScreen = ({navigation, route}) => {
  const data = [
    {name: 'hihi', image: ImageIndex.default_avatar, id: Math.random()},
    {name: 'hihi', image: ImageIndex.default_avatar, id: Math.random()},
    {name: 'hihi', image: ImageIndex.default_avatar, id: Math.random()},
    {name: 'hihi', image: ImageIndex.default_avatar, id: Math.random()},
    {name: 'hihi', image: ImageIndex.default_avatar, id: Math.random()},
    {name: 'hihi', image: ImageIndex.default_avatar, id: Math.random()},
    {name: 'hihi', image: ImageIndex.default_avatar, id: Math.random()},
  ];
  return (
    <ContainerView>
        <AppStatusBar/>
      <ColumnView
        flex={1}
        paddingHorizontal={PADDING.LARGE}
        justifyContent={'center'}>
        <View
          style={{
            backgroundColor: `${COLORS.WHITE}`,
            marginVertical: PADDING.SMALL,
            marginHorizontal: PADDING.SMALL,
            paddingHorizontal: PADDING.LARGE,
            borderRadius: 50,
            elevation: 4,
          }}>
          <TextInput
            placeholder={'Tìm kiếm'}
            style={{paddingVertical: PADDING.SMALL}}
          />
        </View>
      </ColumnView>
      <ColumnView flex={6}>
        <FlatList
          style={{
            paddingHorizontal: PADDING.LARGE,
          }}
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <CustomerFindingItem name={item.name} image={item.image} />
          )}
        />
      </ColumnView>
    </ContainerView>
  );
};
export default CustomerFindingScreen;
