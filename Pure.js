 
import React, { Component } from 'react'
import { Text, View,StyleSheet,SafeAreaView, SectionList,TouchableOpacity,Image} from 'react-native'



const renderItem = ({item}) => {
    return (
        <View>
            <Text style={styles.text}>
                {item}
            </Text>
        </View>
    )
}
const sectionHeader=({section})=>{
    console.log(section);
    return(
    <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>
          {section.title.value}  
        </Text>
    </View>)
}


export default class Pure extends Component {
    constructor(props){
        super(props)
        this.state={
            Data : [
                {
                  title: {key :'1' , value : 'Test1' , description: 'test demo testing1' },
                  data: ["Pizza", "Burger", "Risotto"]
                },
                {
                  title: {key :'1' , value : "Sides", description: 'test demo testing2' },
                  data: ["French Fries", "Onion Rings", "Fried Shrimps"]
                },
                {
                  title: {key :'1' , value : "Drinks", description: 'test demo testing3' },
                  data: ["Water", "Coke", "Beer"]
                },
                {
                  title: {key :'1' , value : "Desserts", description: 'test demo testing4' },
                  data: ["Cheese Cake", "Ice Cream"]
                }
              ]
        }
    }

     addItem=()=>{
        
            this.setState({Data: [...this.state.Data, {
                title: { key: '1', value: "Breads", description: 'test demo testing5' },
                data: ["Indian Naan", "Kulcha"]
            }
            ]})
          
    }

    
  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.list}>
        <SectionList
            sections={this.state.Data}
            renderItem={renderItem}
            renderSectionHeader={sectionHeader}
            />
            <View>
        <TouchableOpacity
            onPress={() => {
                this.addItem()
                // addItem()
            }}>
                <View>
                <Image style={styles.button} 
                source={require('./src/assets/images/download1.png')} /> 
                {/* <Text style={{fontSize:20,margin:5}}>Add Item</Text> */}

                </View>
        </TouchableOpacity> 
        </View>
        </View>
    </SafeAreaView>
    )
  }
}
const styles=StyleSheet.create({
    innerContainer:{
    backgroundColor:'#F0A500',
    justifyContent:'center',
    alignItems:'center'
    },
    text:{
        fontSize:30,
        alignSelf:'center',
        margin:10

    },
    list:{
        flex: 1,
    },
    container:{
        flex:1,
        backgroundColor:'powderblue'
    },
    textStyle:{
        fontSize:40,
        fontWeight:'500',
    },
    button:{
        height:30,
        width:50,
        alignSelf:'center'
    }

})
