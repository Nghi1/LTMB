import * as React from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Products';
import Detail from './Detail';
import HomeScreen from './HomeScreen';
import Favorite from './Favorite';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fill from './Fillter'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const HomeStack =()=>{
  return(
    <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, headerTitleStyle:{alignSelf: 'center'}}} />
          <Stack.Screen name="Products" component={Products}/>
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
  )
}
const FavStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='FavoritesScreen' component={Favorite} />
    </Stack.Navigator>
  )
}
const HomeTab=()=>{
  return(
     <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeTab') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Fav') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name='HomeTab' component={HomeStack} options={{headerShown: false}}/>
        <Tab.Screen name='Fav' component={FavStack} options={{headerShown: false}}/>
      </Tab.Navigator>
  )
}
const FilterStack=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='FilterScreen' component={Fill}/>
    </Stack.Navigator>
  )
}
export default function Navigation (){
    return (
        <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeTab} />
        <Drawer.Screen name="Filter" component={FilterStack} />
      </Drawer.Navigator>
      </NavigationContainer>
      );
  };