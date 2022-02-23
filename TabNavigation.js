import * as React from 'react';
import { View, StyleSheet,Image,Button,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSP from './HomeSP';
import Products from './Products';
import Detail from './Detail';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const TabNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeSP} options={{ headerTitleStyle:{alignSelf: 'center'}}}/>
          <Stack.Screen name="Products" component={Products}/>
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
      );
  };
  
  export default TabNavigation;