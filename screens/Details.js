import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid } from '../components';

const Details = (route, navigation) => {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <FocusedStatusBar barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true} />

      <View style={{
        width: '100%',
      }}>
      </View>


    </SafeAreaView>



  )
}

export default Details
