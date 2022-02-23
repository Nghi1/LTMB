import * as React from 'react';
import { TextInput,Checkbox,Button,FAB, Portal, Provider } from 'react-native-paper';
import { View, Text, StyleSheet,Image, } from 'react-native';
import Logo from './Logo';

const Register = () => {
  //TextBox
  const [text, setText] = React.useState("");

 
  const [state, setState] = React.useState({ open: false });


  const { open } = state;
  return (
      
        <View>
            <View>
                <View style={styles.Logo1}>
                    <Logo/>
                </View>
                <View>
                    <Text style={styles.Text}>REGISTER</Text>
                </View>
                <View >
                    <View style={styles.Tk}>
                        <TextInput 
                            type="outlined"
                            label="First Name"
                            value={text}
                            onChangeText={text => setText(text)}/>
                    </View>
                    <View style={styles.Tk}>
                        <TextInput 
                            type="outlined"
                            label="Last Name"
                            value={text}
                            onChangeText={text => setText(text)}/>
                    </View>
                    <View style={styles.Tk}>
                        <TextInput 
                            type="outlined"
                            label="Email"
                            value={text}
                            onChangeText={text => setText(text)}/>
                    </View>
                    <View style={styles.Tk}>
                        <TextInput
                        label="Password"
                        secureTextEntry
                        right={<TextInput.Icon name="eye" />}/>
                    </View>
                    <View style={styles.button}>
                        <Button mode="contained" onPress={() => console.log('Pressed')}>Create Account</Button>
                    </View>           
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Tk: {
        marginTop : 30,
        marginRight: 35,
        marginLeft: 40,
        marginBottom: -20
    },Text: {
        fontSize: 27,
        fontStyle: 'normal',
        fontFamily:  'Arial',
        marginTop : 50,
        marginLeft: 20,
        marginBottom:-15,
    },RmPw: {
        textAlign: 'right',
        fontStyle: 'normal',
        fontFamily:  'Arial',
        marginTop : 30,
        marginRight: 42,
        fontSize: 15,
    },button: {
        marginTop: 50,
        borderWidth: 1,
        borderColor:'#fff',
        marginLeft: 90,
        marginRight:90,
        borderRadius: 5,
        backgroundColor: '#fff',

    },Logo1: {
        marginTop: 50,
        alignSelf:'center',
        borderColor:'#fff',
        
 
        
    },
        


});
export default Register;