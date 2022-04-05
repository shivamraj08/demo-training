import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'



export default function App() {
    const [hide, sethide] = useState(true)
    const [confirmhide, setConfirmhide] = useState(true)
    const [email, setEmail] = useState('')
    const [emailValidError, setEmailValidError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [handlepass, sethandlePass] = useState('');
    const [check, setCheck] = useState(true)
    // const [matched,setmatched]=useState('');



    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (val.length === 0) {
            setEmailValidError(' ');
        } else if (reg.test(val) === false) {
            setEmailValidError('  Enter valid email address');
        } else if (reg.test(val) === true) {
            setEmailValidError('');
        }
    };

    const handleError = (val) => {
        if (val.length == 0)
            sethandlePass(' ');
        else if (val.length < 8)
            sethandlePass('   Password must be 8 character');
        else
            sethandlePass('   Password is not matched');

    };

    const validPassword = () => {
        if (password === confirmPassword)
            return true;
        else {
            return false;
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.imagebg}
                source={require('./src/assets/images/icLoginBg_2022-03-24/icLoginBg.png')}
            />
            <View style={styles.maincontainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyle}>{'Register'}</Text>
                </View>
                <View>
                    <Text
                        style={styles.textStyle1}>
                        {'Enter your details to Continue'}
                    </Text>
                </View>
                <View style={styles.emailText}>
                    <Text > {'Name'}</Text>
                    <TextInput
                        style={{ margin: 3 }}
                        placeholder='Enter your Name'

                    />
                </View>


                <View style={styles.emailText}>
                    <Text > {'Email'}</Text>
                    <TextInput
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
                        {' Password'}
                    </Text>
                    <TextInput
                        placeholder=' Create your Password'
                        secureTextEntry={!hide ? true : false}
                        onChangeText={value => {
                            setPassword(value);
                            handleError(value);
                        }}
                    />

                    <TouchableOpacity
                        style={styles.imageEye}
                        onPress={() => sethide(!hide)}>
                        <Image
                            resizeMode="contain"
                            source={hide ? require('./src/assets/images/icVisible_2022-03-24/icVisible.png') : require('../TrainingProject/src/assets/images/offeye.png')}
                            style={{ width: 20, height: 20 }}
                        />

                    </TouchableOpacity>

                </View>
                {handlepass ? <Text style={{ color: 'red' }}>{handlepass}</Text> : null}


                <View style={styles.passText}>
                    <Text>
                        {' Confirm Password'}
                    </Text>
                    <TextInput
                        placeholder=' Re-enter your Password'
                        secureTextEntry={!confirmhide ? true : false}
                        onChangeText={value => {
                            setConfirmPassword(value);

                        }}
                    />


                    <TouchableOpacity
                        style={styles.imageEye}
                        onPress={() => setConfirmhide(!confirmhide)}>
                        <Image
                            resizeMode="contain"
                            source={confirmhide ? require('./src/assets/images/icVisible_2022-03-24/icVisible.png') : require('../TrainingProject/src/assets/images/offeye.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.checkImg}>
                    <TouchableOpacity
                        onPress={() => setCheck(!check)}>
                        <Image
                            resizeMode="contain"
                            source={check ? require('./src/assets/images/icCheck_2022-03-24/icCheck.png') : require('./src/assets/images/CheckBox.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>

                    <Text style={styles.terms} >
                        {'Agree To Terms of Service & Privacy Policy'}
                    </Text>

                </View>


                <View>
                    <TouchableOpacity>
                        <Text
                            style={styles.regButton}
                            onPress={() => {
                                validPassword()
                                    ? alert('Register Successful')
                                    : alert('Password not matching')
                            }}>
                            {'REGISTER'}
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.notReg}>
                    <TouchableOpacity>
                        <Text style={styles.textNotReg}>
                            {'Already have an account?'}
                            <Text style={styles.textReg}>
                                {'Login'}
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '1%'
    },
    innerContainer: {
        marginBottom: 1
    },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '4%',
        borderColor: 'grey',


    },maincontainer:{
        marginTop:180
    },
    header: {
        fontSize: 20,
        fontWeight: '600'
    },
    textStyle1: {
        color: 'grey',
        fontSize: 15,
        marginLeft: '4%',
        margin: '1%',



    },
    imagebg: {
        height: 230,
        width: 400,
        marginLeft: '3%',
        position:'absolute'

    },
    emailText: {
        height: '9%',
        borderRadius: 1,
        margin: 10, borderWidth: 1,
        borderColor: 'grey',
        padding: 12

    },

    regButton: {
        fontSize: 20,
        fontWeight: '600',
        height: 55,
        backgroundColor: '#F1E1A6',
        textAlign: 'center',
        margin: '3%',
        padding: 17

    },
    textNotReg: {
        textAlign: 'center',
        fontSize: 18,
        margin: '3%',
        color: 'grey'
    },
    textReg: {
        fontSize: 20,
        fontWeight: '800',
        color: 'black'
    },
    imageEye: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    passText: {
        height: '9%',
        margin: '2%',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 12

    },
    notReg: {
        marginTop: '1%',
        paddingBottom: 20,
        marginTop:40
    },
    checkImg: {
        flexDirection: 'row',
        margin: 15,
        padding: '2%'
    },
    terms: {
        marginLeft: 5,
        fontSize: 16,
        color: 'grey'
    }

})