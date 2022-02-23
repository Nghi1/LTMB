import * as React from 'react';
import { TextInput,Checkbox,Button,FAB, Portal, Provider } from 'react-native-paper';
import { View, Text, StyleSheet,Image, } from 'react-native';
import Logo from './Logo';
import Register from './Register';

const LoginTest = () => {
  //TextBox
  const [text, setText] = React.useState("");
  //Checkbox
  const [checked, setChecked] = React.useState(false);
  //FAB 
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
        <View>
            <View>
                <View style={styles.Logo1}>
                    <Logo/>
                </View>
                <View>
                    <Text style={styles.Text}>LOGIN</Text>
                </View>
                <View >
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
                    <View >
                        <Text style={styles.RmPw}>Remember password
                        <Checkbox 
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                        setChecked(!checked);
                        }}/>
                        </Text>                
                    </View>
                    <View style={styles.button}>
                        <Button mode="contained" onPress={() => console.log('Pressed')}>Login</Button>
                    </View>
                    <View>
                        <Text style={styles.Cr}>@CoppyRight | Minh Thái & Vũ Nghị</Text>
                    </View>              
                </View>
            </View>
            <Provider>
                <Portal>
                    <FAB.Group
                        style={styles.fab}
                        open={open}
                        icon={open ? 'calendar-today' : 'plus'}
                        actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'star',
                            label: 'Star',
                        onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                        onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Remind',
                            onPress: () => console.log('Pressed notifications'),
                            small: false,
                        },
                        ]}
                            onStateChange={onStateChange}
                            onPress={() => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
            </Portal>
        </Provider>
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
        fontSize: 30,
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
        marginTop: 20,
        borderWidth: 1,
        borderColor:'#fff',
        marginLeft: 130,
        marginRight:130,
        borderRadius: 5,
        backgroundColor: '#fff',
    },Cr: {
        textAlign: 'center',
        marginTop: 158,
        
    },fab: {
        color: '#660099',
        marginBottom: 10,
 
        
    },Logo1: {
        marginTop: 50,
        alignSelf:'center',
        borderColor:'#fff',
        
 
        
    },
        


});
export default LoginTest;