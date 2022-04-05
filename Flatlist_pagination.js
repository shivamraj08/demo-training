
import { Text, View, SafeAreaView, FlatList, StyleSheet, RefreshControl, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Flatlist_pagination() {
    const [count, setCount] = useState(40)
    const [myData, setMyData] = useState([])
    const [refresh, setRefresh] = useState(false)
    let listViewRef;
    // const color = ['yellow', 'pink', 'aqua', 'powderblue']
    let i = 0;
    useEffect(() => {
        URL = 'https://jsonplaceholder.typicode.com/comments';
        axios.get(URL)
            .then((response) => {
                setMyData(response.data.slice(0, count))
            })
    }, [])


    const onRefresh = () => {
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 2000);
    }

    const EndButton = () => {
        listViewRef.scrollToEnd({ animated: true })
    }

    const TopButton = () => {
        listViewRef.scrollToOffset({ offset: 0, animated: true })
    }



    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <Text
                    style={styles.header}>List of Users</Text>
            </View>
            <FlatList
                refreshControl={
                    <RefreshControl
                        onRefresh={onRefresh}
                        refreshing={refresh}
                    />
                }
                data={myData}
                renderItem={({ item }) => {
                    return (<View style={styles.body,
                     { backgroundColor: color[i++ % color.length] }}>

                        <Text style={styles.idText}>{item.id}</Text>


                        <Text> {'\t'}</Text>
                        <Text style={styles.innerText}>
                            {item.name}
                            {'\n'}
                            {item.email}
                        </Text>
                    </View>
                    )
                }}

                ref={(ref) => {
                    listViewRef = ref;
                }}
                onEndReached={() => {

                    axios.get(URL).then((response) => {

                        setMyData([...myData, ...response.data.slice(count, count + 40)])
                        setCount(count + 40)
                    })
                    alert('got it')
                }}
                onEndReachedThreshold={0.8}



            />

            <TouchableOpacity
                style={[styles.buttonstyle, { right: 28, top: 89, }]}
                onPress={EndButton}>

                <Image
                    style={styles.image}
                    source={require('./src/assets/images/down.png')}
                />


            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.buttonstyle, { right: 20, bottom: 50, }]}
                onPress={TopButton}>


                <Image
                    style={styles.image}
                    source={require('./src/assets/images/upArrow.jpeg')} />
            </TouchableOpacity>



        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    header: {
        borderWidth: 2,
        marginHorizontal: 10,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman',
        textAlign: 'center'
    },
    body: {
        fontSize: 20,
        borderWidth: 2,
        backgroundColor: '#54BAB9',
        flexDirection: 'row',
        marginTop: 15,
        padding: 20,
        borderRadius: 20,
        margin: 2


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
        fontSize: 20,
        fontWeight: '600',
        // backgroundColor:'#F4BBBB'

    },
    buttonstyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 10

    },
    text: {

        fontSize: 20
    },
    image: {
        height: 50,
        width: 40,
        borderRadius: 18
    }

})






