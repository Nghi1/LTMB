import * as React from 'react';
import { View, StyleSheet,Image,Button,Text, FlatList, TouchableOpacity } from 'react-native';
import LoaiSanPham from './LoaiSanPham';
import { useNavigation } from '@react-navigation/native';
import HomeSP from './HomeSP';

import Detail from './Detail';



const HomeScreen = () => {
  const navigation = useNavigation();
    return(
        <FlatList
          data={LoaiSanPham}
          renderItem={({ item }) =><TouchableOpacity 
          onPress={() => navigation.navigate('Products', {categoryId: item.id})}> 
            <View style={{backgroundColor: item.color}}>
              <Text>{item.name}</Text>
            </View>
            </TouchableOpacity>
          }
          keyExtractor={item => item.id}  
        />
      )
  };
  
const styles = StyleSheet.create({

});
  export default HomeScreen;