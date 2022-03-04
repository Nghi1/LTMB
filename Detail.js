import * as React from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';
import HomeSP from './HomeSP';
import { Entypo } from '@expo/vector-icons'; 
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SANPHAMS from './chitietsanpham';


const Detail = (props) => {
  const{productId}=props.route.params;
  const product=SANPHAMS.filter(item=>item.id===productId)
    return(
      <FlatList
          data={product}
          renderItem={({ item }) =>
          <View>
            <Entypo style={{alignSelf:"center"}} name="star" size={24} color="black" />
<Image style={{width: 300, height: 300}} source={{uri: item.image}}/>
<Text>{item.mota}</Text>
<Text>{item.name}</Text>
          </View>
          }
          keyExtractor={item => item.id}
          />  
      )
  };
  
  export default Detail;