import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';
import React from 'react';

const DetailsHeader = ({data, navigation}) =>(
  <View style={{ width: '100%', height: 373}}>
    <Image source={data.image}
    resizeMode= 'cover'
    style={{ width: '100%', height: '100%'}}
    /> 
    <CircleButton 
    imgUrl={assets.heart}
    right={10}
    top={StatusBar.currentHeight -20}
    />
  </View>
)


const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <FocusedStatusBar barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true} />

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.5)',
        zIndex: 1,

      }}>
        <RectButton minWidth={170} fontSize={SIZES.large}
        {...SHADOWS.dark}/>
      </View>
      
      <FlatList 
        data = {data.bids}
        renderItem={({item}) => <DetailsBid bid={item} /> }
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {{ paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent = {() => (
          <React.Fragment>
            <DetailsHeader data = {data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font}} >

              <DetailsDesc  data ={data}/>

            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details
