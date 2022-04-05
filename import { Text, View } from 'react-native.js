import { Text, View } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import SectionList from 'react-native/Libraries/Lists/SectionList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  callApi = () => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=94116c2f326848febdba9ec9b3f09924').then((response) => {
        this.setState({ data: response.data })
        console.log(response.data);
      }
      )
  }

  render() {
    return (
      <View style={StyleSheet.pageStyle}>
        <Text style={styles.textStyle}
            onPress={() => { this.callApi() }}>Api calling</Text>
        <SectionList
        sections={data}
        renderItem={({item})=>
        <Text>{item}</Text>
        }
        renderSectionHeader={({section:{title}})=>
      <Text>{section}</Text>}
        keyExtractor={(item,index)=>index}
        />

            
      </View>
    )
  }
}


const styles=StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
})