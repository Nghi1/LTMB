import * as React from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';
import HomeSP from './HomeSP';
import { useNavigation } from '@react-navigation/native';
import Detail from './Detail';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SANPHAMS from './Sanpham';


const Products = (props) => {
  const navigation = useNavigation();
  const{categoryId}=props.route.params;
  const products=SANPHAMS.filter(item=>item.categoryId===categoryId)
    return(
      <FlatList
          data={products}
          renderItem={({ item }) =>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Detail', {productId: item.id})}><View>
<Image style={{width: 300, height: 300}} source={{uri: item.image}}/>
<Text>{item.name}</Text>
          </View></TouchableOpacity>
          }
          keyExtractor={item => item.id}
          />  
      )
  };
  
  export default Products;