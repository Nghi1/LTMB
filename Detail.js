import * as React from 'react';
import { FlatList, } from 'react-native-gesture-handler';
import SANPHAM from './chitietsanpham';
import { Avatar, Card,Button, Title, Paragraph, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Linking } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
const LeftContent = props => <Avatar.Icon {...props} icon="filmstrip" />
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#58ACFA',
    accent: '#f1c40f',
  },
};
const Detail = (props) => {
const{productId}=props.route.params;
  const product=SANPHAM.filter(item=>item.id===productId)
    return(
      
      <FlatList
          data={product}
          renderItem={({ item }) =>
          
          <PaperProvider theme={theme}><Entypo style={{alignSelf:"center"}} name="star" size={24} color="black" />
            <Card style={{margin:10}} >
              <Card.Title title={item.name} subtitle={item.nam} left={LeftContent} />
              <Card.Cover style={{width:355, height:200}} source={{ uri: item.image}} />
              <Card.Content>
                <Title>{item.nametag}</Title>
                <Paragraph style={{marginTop:20}}>{item.cotTruyen}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button mode="contained" onPress={() => Linking.openURL(item.trailer)}>Trailer</Button>
                <Button mode="contained" onPress={() => console.log('Pressed')} style={{marginLeft:10}}>Xem phim</Button>
              </Card.Actions>
            </Card>
          </PaperProvider>
          }
          keyExtractor={item => item.id}
      />  
    )};
  
  export default Detail;