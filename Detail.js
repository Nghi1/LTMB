import * as React from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';
import HomeSP from './HomeSP';

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SANPHAM from './chitietsanpham';


const Detail = (props) => {
  const{productId}=props.route.params;
  const product=SANPHAM.filter(item=>item.id===productId)
    return(
      <FlatList
          data={product}
          renderItem={({ item }) =>
          <View>
<Image style={{width: 300, height: 300}} source={{uri: item.image}}/>
<Image style={{width: 300, height: 300}} source={{uri: item.image1}}/>
<Image style={{width: 300, height: 300}} source={{uri: item.image2}}/>
<Image style={{width: 300, height: 300}} source={{uri: item.image3}}/>
<Text>{item.name}</Text>
          </View>
          }
          keyExtractor={item => item.id}
          />  
      )
  };
  
  export default Detail;