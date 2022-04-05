import { View, Text, StyleSheet, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'



export default function App() {
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
      <View>
        <View>
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
            placeholder='Enter your mail'
            value={email}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />

        </View>
        {emailValidError ? <Text style={{color:'red'}}>{emailValidError}</Text> : null}


        <View style={styles.passText}>
          <Text>
            {'Password'}
          </Text>
          <TextInput
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
          <TouchableOpacity>
            <Text
              style={styles.loginButton}>
              {'LOGIN'}
            </Text>
          </TouchableOpacity>
        </View>


        <View style={styles.notReg}>
          <TouchableOpacity>
            <Text style={styles.textNotReg}>
              {'Not Registered yet?'}
              <Text style={styles.textReg}>
                {'Register'}
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
    flex: 1
  },
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,

  },
  header: {
    fontSize: 20,
    fontWeight: '600'
  },
  textStyle1: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 20,
    margin: 10


  },
  imagebg: {
    height: 230,
    width: 400,
    marginLeft: 20

  },
  emailText: {
    height: 50,
    borderRadius: 3,
    margin: 10, borderWidth: 2,
    borderColor: 'grey',

  },
  textForgot: {
    color: 'grey',
    fontSize: 15,
    marginLeft: 230,
    margin: 10
  },
  loginButton: {
    fontSize: 25,
    fontWeight: '600',
    height: 55,
    backgroundColor: '#F1E1A6',
    textAlign: 'center',
    margin: 20,
    padding: 10

  },
  textNotReg: {
    textAlign: 'center',
    fontSize: 20,
    margin: 40,
  },
  textReg: {
    fontSize: 20,
    fontWeight: '800',
  },
  imageEye: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  passText: {
    height: 50,
    margin: 10,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: 'grey',


  },
  notReg: {
    marginTop: 100
  },
  imageBoth:{
    width: 20, height: 20
  }

})