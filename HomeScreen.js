import * as React from 'react';
import { View, StyleSheet,ImageBackground,Button,Text, FlatList, TouchableOpacity } from 'react-native';
import LoaiSanPham from './LoaiSanPham';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
    return(
        <FlatList
          data={LoaiSanPham}
          renderItem={({ item }) =>
          <TouchableOpacity style={styles.background}
            onPress={() => navigation.navigate('Products', {categoryId: item.id})}> 
            <View><ImageBackground source={item.image} resizeMode="cover" >
              <Text style={styles.text} >{item.name}</Text></ImageBackground>
            </View>
          </TouchableOpacity>
          }
          keyExtractor={item => item.id}  
        />
      )
  };
  
const styles = StyleSheet.create({
  background: {
      marginTop: 10,
      marginLeft: 20,
      marginRight:20,
      marginBottom: 10,
      height: 180,
      borderRadius: 5,
      borderColor:'#000000',
      borderWidth: 1,
},
  text:{
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 149,
    color:'black'
  },
});
  export default HomeScreen;
