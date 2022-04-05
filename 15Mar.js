
import { Text, View, SafeAreaView, FlatList, StyleSheet, SectionList, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      newText: 'Read more',
      len: 2,
      counter: 2,
    }
  }

  componentDidMount() {
    this.callApi();
  }


  updatedView = () => {
    this.setState({ counter: this.state.counter + 1 })
    if (this.state.counter % 2 == 0) {
      this.setState({ newText: 'Read Less' });
      this.setState({ len: 6 })
    }
    else {
      this, this.setState({ newText: 'Read More' });
      this.setState({ len: 2 });
    }
  }


  callApi = async () => {
    try {
      let response = await axios.get(
        'https://newsapi.org/v2/everything?q=apple&from=2022-03-13&to=2022-03-13&sortBy=popularity&apiKey=f8c46f592ac94158bce2cf66ffa8af18')
      this.setState({
        data: response.data.articles.reduce((accum, current) => {
          // console.log("inside reduce",accum,current)
          let group = accum.find(x => x.author === current.author);
          if (!group) {
            group = { name: current.author, data: [] }
            accum.push(group);
          }
          group.data.push(current);
          return accum;
        }, [])
      })
      console.log(this.state.data)
    }
    catch (err) { console.log(err) }
  }




  render() {
    return (
      <SafeAreaView style={styles.mainContainer} >
        <View style={styles.container}>
          <View style={{ backgroundColor: '#c3dbc9' }}>
            <Text style={styles.header}>Today News </Text>
          </View>


          <SectionList
            sections={this.state.data}
            renderItem={({ item }) => {
              return (
                <View style={styles.body}>
                  <Image style={styles.image}
                    source={{ uri: item.urlToImage }}
                  />
                  <Text
                    numberOfLines={this.state.len}
                    style={styles.innerText}>
                    {item.description}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.text1} onPress={() => {
                      this.updatedView()
                    }}>
                      {this.state.newText}
                    </Text>
                  </TouchableOpacity>
                </View>
              )

            }}
            renderSectionHeader={({ section }) => {
              return (
                <View style={styles.innerHeader}>
                <Text style={styles.header}>
                  {section.name}
                </Text>
                </View>
              )
            }}
            keyExtractor={item => item.id}
          />



        </View>
      </SafeAreaView>

    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    backgroundColor: 'black'
  },
  body: {
    fontSize: 20,
    margin: 20,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#E6D5B8'
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
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontFamily: 'Times New Roman'
  },
  image: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    margin: 10, borderRadius: 20,

  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  innerHeader: {
    width: '100%',
    backgroundColor: '#5EE6EB',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  }
})






