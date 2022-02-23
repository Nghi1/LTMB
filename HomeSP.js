import * as React from 'react';
import { TextInput,Checkbox,FAB, Portal, Provider,BottomNavigation, Text } from 'react-native-paper';
import { View, StyleSheet,Image,Button } from 'react-native';
import { Linking } from 'react-native';
import Trang1 from './Trang1';
import Trang2 from './Trang2';
import HomeScreen from './HomeScreen';
import Products from './Products';
import Detail from './Detail';
import Favorite from './Favorite';
import Fillter from './Fillter';


const Home = () => {
  return(
    <HomeScreen/>
  )
};

const Favorites = () =>  {
  return(
    <Favorite/>
  )
};

const Creater = () =>  {
  return(
    <View style={styles.container}>
    <View>
      <Text style={styles.text3}>Trường Đại học Công Nghệ Đồng Nai</Text>
      <Text style={styles.text3}>Khoa Công nghệ</Text>
      <Text style={styles.text5}>Lập Trình Moblie</Text>
      <Text style={styles.text4}>GV: Đỗ Phúc Thịnh</Text>
    </View>
    <View style={styles.anh1}>
       <Trang1/>
       <Text style={styles.text1} >Bùi Minh Thái</Text>
       <Text style={styles.text1} >  151901162</Text>
    </View>
    <View style={styles.anh2}>
       <Trang2/>
       <Text style={styles.text1} >Vũ Thành Nghị</Text>
       <Text style={styles.text1} >   151901403</Text>
    </View>
    <View style={styles.button1}>
    <Button title='Profile Minh Thái' onPress={() => Linking.openURL('https://www.facebook.com/minhthai.2507')}/>
    </View>

    <View style={styles.button}>
    <Button title='Profile Vũ Nghị' onPress={() => Linking.openURL('https://www.facebook.com/profile.php?id=100007400776925')}/>
    </View>
    </View>
  )
};

const Fill = () => {
  return(
    <Fillter/>
  )
};

const HomeSP = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#6200EE' },
    { key: 'favorites', title: 'Favorites', icon: 'heart',color: '#FF3333' },
    { key: 'creater', title: 'Creater', icon: 'account',color: '#2196F3' },
    { key: 'fill', title: 'Fillter', icon: 'magnify', color: '#ECAB53'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    favorites: Favorites,
    creater: Creater,
    fill: Fill,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default HomeSP;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
   
  },
  button1: {
    marginTop: 50,
    marginLeft: 100,
    marginRight:100,
    borderRadius: 5,
    borderColor:'#3399ff',
    borderWidth: 1,
    
  },
  button: {
    marginTop: 20,
    borderWidth: 1,
    marginLeft: 110,
    marginRight:110,
    borderRadius: 5,
    borderColor:'#3399ff',
    backgroundColor: '#fff',
  },
  button2: {
    marginTop: 20,
    borderWidth: 1,
    borderColor:'#3399ff',
    marginLeft: 130,
    marginRight:130,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  anh1:{
    marginLeft:60,
    marginTop: 50,
  },
  anh2:{
    marginLeft: 220,
    marginTop: -140,
  },
  text1:{
    fontSize: 17,
    alignItems: 'center',
  },
  text3:{
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20,
    color: 'red'
  },text4:{
    fontSize: 17,
    marginLeft: 20,
    marginTop: 20,
    color: 'blue'
  },text5:{
    fontSize: 19,
    marginLeft: 20,
    marginTop: 20,
    color: 'blue'
  },

});