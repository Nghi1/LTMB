import * as React from 'react';
import { View, StyleSheet,Image,Button,Text, FlatList, TouchableOpacity } from 'react-native';
import LoaiSanPham from './LoaiSanPham';
import HomeSP from './HomeSP';

import Detail from './Detail';



const HomeScreen = (props) => {
    return(
        <FlatList
          data={LoaiSanPham}
          renderItem={({ item }) =>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate('Products')}>
            <View style={styles.View}>
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