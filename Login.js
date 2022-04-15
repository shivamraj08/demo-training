import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

export default function App({ navigation }) {

    const [hide, sethide] = useState(true)
    const [email, setEmail] = useState('')
    const [emailValidError, setEmailValidError] = useState('');

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (val.length === 0) {
            setEmailValidError('  Email address must be enter');
        } else if (reg.test(val) === false) {
            setEmailValidError('  Enter valid email address');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imagebg}
                source={require('./src/assets/images/icLoginBg_2022-03-24/icLoginBg.png')}
            />
            <View style={styles.headerLogin}>
                <View >
                    <Text style={styles.textStyle}>{'Login'}</Text>
                </View>
                <View>
                    <Text
                        style={styles.textStyle1}>
                        {'Enter your details to Continue'}
                    </Text>
                </View>

                <View style={styles.emailText}>
                    <Text > {'Email'}</Text>
                    <TextInput
                    style={styles.textPlaceHolder}
                        placeholder=' Enter your mail'
                        value={email}
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={value => {
                            setEmail(value);
                            handleValidEmail(value);
                        }}
                    />

                </View>
                {emailValidError ? <Text style={{ color: 'red' }}>{emailValidError}</Text> : null}


                <View style={styles.passText}>
                    <Text>
                        {'Password'}
                    </Text>
                    <TextInput
                    style={styles.textPlaceHolder}
                        placeholder='Enter your Password'
                        secureTextEntry={hide ? true : false}
                    />

                    <TouchableOpacity
                        style={styles.imageEye}
                        onPress={() => sethide(!hide)}>
                        {/* {!hide? <Image
              resizeMode="contain"
              source={require('./src/assets/images/icVisible_2022-03-24/icVisible.png')}
              style={{ width: 20, height: 20 }}
            />:
            <Image

              source={require('../TrainingProject/src/assets/images/offeye.png')}
              style={{ width: 20, height: 20 }}
            />} */}

                        <Image
                            resizeMode="contain"
                            source={hide ? require('./src/assets/images/icVisible_2022-03-24/icVisible.png') : require('../TrainingProject/src/assets/images/offeye.png')}
                            style={styles.imageBoth}
                        />
                    </TouchableOpacity>


                </View>
                <TouchableOpacity>
                    <Text style={styles.textForgot} >
                        {'Forgot Password?'}
                    </Text>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity

                    >
                        <Text
                            style={styles.loginButton}>
                            {'LOGIN'}
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.notReg}>
                    <Text style={styles.textNotReg}>
                        {'Not Registered Yet? '}
                        <Text
                            onPress={() => navigation.navigate('Register')}
                            style={styles.textReg}>
                            {'Register'}
                        </Text>
                    </Text>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 30,
    },
    header: {
        fontSize: 20,
        fontWeight: '600'
    },
    textStyle1: {
        color: 'grey',
        fontSize: 15,
        marginLeft: 30,
        margin: 10
    },
    imagebg: {
        height: 230,
        width: 400,
        marginLeft: 20,
        position: 'absolute'
    },
    emailText: {
        height: '13%',
        borderRadius: 3,
        borderWidth: 0.3,
        borderColor: 'grey',
        padding:15,
        margin:20,
        marginBottom:1
    },
    textForgot: {
        color: 'grey',
        fontSize: 15,
        marginLeft: 250,
        margin: 10
    },
    loginButton: {
        fontSize: 18,
        fontWeight: '600',
        height: 55,
        backgroundColor: '#F1E1A6',
        textAlign: 'center',
        margin: 18,
        padding: 14,
    },
    textNotReg: {
        textAlign: 'center',
        fontSize: 16,
        margin: 10,
        color:'#696969'
    },
    textReg: {
        fontSize: 18,
        fontWeight: '800',
        color:'black'
    },
    imageEye: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    passText: {
        height: '13%',
        margin: 20,
        borderRadius: 3,
        borderWidth: 0.3,
        borderColor: 'grey',
        padding:15
    },
    notReg: {
        marginTop: 20
    },
    imageBoth: {
        width: 25, height: 25
    },
    headerLogin:{
        marginTop: 180 
    },
    textPlaceHolder:{
        paddingTop:2
    }
})