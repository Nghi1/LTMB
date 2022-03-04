import * as React from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';
import HomeSP from './HomeSP';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SANPHAMS from './chitietsanpham';


const Favorite = () => {
  const product=SANPHAMS.filter(item=>item.isFav===true)
    return(
      <FlatList
          data={product}
          renderItem={({ item }) =>
          <View>
<Image style={{width: 300, height: 300}} source={{uri: item.image}}/>
<Text>{item.mota}</Text>
<Text>{item.name}</Text>
          </View>
          }
          keyExtractor={item => item.id}
          />  
      )
  };
  
  export default Favorite;