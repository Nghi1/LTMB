import * as React from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import SANPHAMS from './chitietsanpham';

const Products = (props) => {
  const navigation = useNavigation();
  const{categoryId}=props.route.params;
  const products=SANPHAMS.filter(item=>item.categoryId===categoryId)
    return(
      <FlatList
          data={products}
          renderItem={({ item }) =>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Detail', {productId: item.id})}>
            <View>
              <Image style={{width: 175, height: 300, marginLeft: 20, marginTop: 20,}} source={{uri: item.image}}/>
            </View>
           
              <View>
                <Text style={styles.text}>{item.name}</Text>
              </View> 
              <View>
                <Text style={styles.text1}>Đạo Diễn: {item.daoDien}</Text>
              </View>
              <View>
                <Text style={styles.text2}>Quốc Gia: {item.quocGia}</Text>
              </View>
              <View>
                <Text style={styles.text3}>Năm Sản xuất: {item.Nam}</Text>
              </View>
              <View>
               <Text style={styles.text4}>Ngôn Ngữ: {item.ngonNgu}</Text>
             </View>
              <View>
                <Text style={styles.text5}>Thể loại: {item.theLoai}</Text>
              </View>
              <View style={styles.boder}>
                
              </View>
          </TouchableOpacity>
          
          }
          keyExtractor={item => item.id}
          />  
      )
  };
  const styles = StyleSheet.create({
    boder:{
      marginTop: -300,
      marginLeft: 200,
      marginRight: 1,
     
      height: 300,
      borderRadius: 5,
      borderColor:'#000000',
      borderWidth: 2,
     
    },
    text:{
      fontSize: 16,
      marginLeft: 203,
      marginTop: -295,
      color: '	#1E90FF'
    },
    text1:{
      fontSize: 11,
      marginLeft: 205,
      marginTop: -245
    },
    text2:{
      fontSize: 11,
      marginLeft: 205,
      marginTop: -220
    },
    text3:{
      fontSize: 11,
      marginLeft: 205,
      marginTop: -195
    },
    text4:{
      fontSize: 11,
      marginLeft: 205,
      marginTop: -170
    },
    text5:{
      fontSize: 11,
      marginLeft: 205,
      marginTop: -145
    },


  });
  
  export default Products;
  /* <Text style={styles.text1}>Đạo Diễn: {item.daoDien}</Text>
  <Text style={styles.text1}>Quốc Gia: {item.quocGia}</Text>
  <Text style={styles.text1}>Ngôn Ngữ: {item.ngonNgu}</Text>
  <Text style={styles.text1}>Thể loại: {item.theLoai}</Text>*/