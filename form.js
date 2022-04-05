// import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView, Modal } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useRef } from 'react'
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

// const MyStack=()=>{
//   navigation.navigate("Logi")
// }

export default function form() {
  const [email, setEmail] = useState('')
  const [emailValidError, setEmailValidError] = useState('');
  const [name, setName] = useState('')
  const [nameValidError, setNameValidError] = useState('');
  const listViewRef = useRef()
  const [data, setData] = useState([])
  const [check, setCheck] = useState(true)
  const [index, setIndex] = useState(-1)
  const [update, setUpdateCheck] = useState(false)
  const [toggle, setToggle] = useState('Add Details');
  const [modalOpen, setModalOpen] = useState(false);


  const validName = val => {
    let reg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (val.length === 0) {
      setNameValidError('  Name is not Valid')
      setCheck(true)
    } else if (reg.test(val) === false) {
      setNameValidError('  Enter valid name')
      setCheck(true)
    } else if (reg.test(val) === true) {
      setNameValidError('')
      setCheck(false)
    }
  };

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setEmailValidError('  Email address must be enter');
      setCheck(true)
    } else if (reg.test(val) === false) {
      setEmailValidError('  Enter valid email address');
      setCheck(true)
    } else if (reg.test(val) === true) {
      setEmailValidError('');
      setCheck(false)
    }
  };
  const addData = () => {
    // setModalOpen(true);
    if (update) {
      data[index].name = name;
      data[index].email = email;
      setToggle('Add Details');
      setUpdateCheck()
      setName('')
      setEmail('')
    } else {
      setData([...data, { name: name, email: email }]);
      setName('')
      setEmail('')
      // listViewRef.current.scrollToEnd();
      // setModalOpen(false);
    }
  }
  const deleteData = (i) => {
    data.splice(i, 1);
    setData([...data])
  }

  const editData = (i) => {
    setToggle('Update Details')
    setName(data[i].name)
    setEmail(data[i].email)
    setUpdateCheck(true)
    setModalOpen(!modalOpen)
  }



  const renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <View style={styles.card}>
          <View style={styles.firstContainer}>
            <View style={{ width: "80%" }}>
              <Text>{`Name:${item.name}`}</Text>
              <Text>{`Email:${item.email}`}</Text>
            </View>
            <View style={styles.imageStyle}>
              <TouchableOpacity
                onPress={() => {
                  let i = data.findIndex(ele => ele == item)
                  deleteData(i);
                }}>
                <Image
                  style={styles.delImage}
                  source={require('./src/assets/images/deleteIcon.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.lastView}>
              <TouchableOpacity
                onPress={() => {
                  let i = data.findIndex(ele => ele == item)
                  setIndex(i)
                  editData(i);
                }}>
                <Image
                  style={styles.editImage}
                  source={require('./src/assets/images/edit.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <View >
      <View style={styles.mainContainer}>
        <Text style={styles.header}>{'Form'}</Text>
      </View>
      <View style={styles.Container}>
        <View>
          <TextInput
            value={name}
            style={styles.body}
            placeholder='Full Name'
            value={name}
            onChangeText={value => {
              setName(value);
              validName(value);
            }} />
          <Text style={styles.nameError}>{nameValidError ? nameValidError : null}</Text>
          <TextInput
            value={email}
            style={styles.body}
            placeholder='Email'
            value={email}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
        </View>
        {emailValidError ? <Text style={styles.emailError}>{emailValidError}</Text> : null}
        <View style={styles.addButton}>
          <TouchableOpacity
            onPress={addData}
            disabled={check}>
            <Text style={styles.addDetails}>
              {toggle}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button
      style={styles.styleButton}
      title="Show Details" onPress={() => setModalOpen(!modalOpen)} />

      <View style={styles.innerHeader}>
        <Modal visible={modalOpen}
        animationType="slide"
        >
          <View>
            <Text style={styles.regDetails}>
              {'Registration Details'}
            </Text>
            <TouchableOpacity
            onPress={()=> setModalOpen(!modalOpen) }>
              <Image
              style={styles.cancelButton}
              source={require('./src/assets/images/Cancel.png')}
              />
            </TouchableOpacity>
            <FlatList
              data={data}
              renderItem={renderItem}
              ref={listViewRef}
            />
          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: '10%',
    color: 'white'
  },
  body: {
    height: 50,
    borderRadius: 5,
    margin: '5%',
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    backgroundColor: 'white',
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Container: {
    height: 280,
    borderRadius: 2,
    marginTop: '5%',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 5,
    backgroundColor: '#90E0EF'
  },
  addDetails: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    fontWeight: '500',
    width: 130,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 130,
    marginTop: 15,
    backgroundColor: '#00FFDD'
  },
  regDetails: {
    fontSize: 20,
    fontWeight: '700',
    margin: 40,
    borderRadius: 1,
    textAlign: 'center',
  },
  // innerHeader: {
  //   height: 350,
  //   borderRadius: 3,
  //   marginTop: '5%',
  //   borderWidth: 1,
  //   borderColor: 'grey',
  //   margin: 5
  // },
  imageStyle: {
    flexDirection: 'row'
  },
  image: {
    height: 50,
    width: 40,
    borderRadius: 18,
    marginLeft: 350
  },
  mainContainer: {
    backgroundColor: 'black'
  },
  card: {
    height: 70,
    borderRadius: 3,
    marginTop: '3%',
    borderWidth: 2,
    borderColor: 'grey',
    margin: 5,
    backgroundColor: '#B4ECE3',
    paddingLeft: 10,
    paddingTop: 10
  },
  delImage: {
    height: 35,
    width: 30,
    borderRadius: 10,
    marginBottom: 150,
    position: 'absolute'
  },
  editImage: {
    height: 35,
    width: 30,
    borderRadius: 10,
    marginLeft: 35,
    marginBottom: 200,
    position: 'absolute'
  },
  emailError: {
    color: 'red'
  },
  lastView: {
    marginRight: 100
  },
  nameError: {
    color: 'red',
    height: 15
  },
  cancelButton:{
    height:30,
    width:30,
    borderRadius:5,
    marginLeft:350,
  }
})