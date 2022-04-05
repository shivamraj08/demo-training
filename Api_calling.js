
import { Text, View, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  callApi = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        this.setState({ data: response.data })
        console.log(response.data);
      }
      )
  }
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.textStyle}
            onPress={() => { this.callApi() }}>Api calling</Text>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
              return (<View style={styles.body}>
                <Text style={styles.idText}>{item.id}</Text>
                <Text style={styles.innerText}>{item.name}</Text>
                <Text style={styles.innerText}>{item.email}</Text>
                <Text style={styles.innerText}>{item.username}</Text>
              </View>
              )
            }}

          />

        </View>
      </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  container: {

    backgroundColor: 'lightgreen'
  },
  body: {
    fontSize: 20,
    borderWidth: 2,
    backgroundColor: 'skyblue'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  innerText: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: "Times New Roman",
  },
  idText: {
    fontSize: 20
  }
})