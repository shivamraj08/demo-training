import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
          <TouchableOpacity>
            <Image style={styles.arrow}
              source={
                require('./src/assets/images/arrow.png')
              } />
          </TouchableOpacity>
            <Text style={styles.heading}>{'  Select Payment'}</Text>
            
            
          </View>
          <View>
            <Text style={styles.styleText}>
              {'Total'}
            </Text>
            <Text style={styles.styleAmount}>
              {'$762.45'}
            </Text>
          </View>
          <View style={styles.body}>
            <View>
              <TouchableOpacity>
                <Image style={styles.image}
                  source={
                    require('./src/assets/images/card.jpeg')
                  } />
                <Text style={styles.credit}
                onPress={()=>{Alert.alert('Credit Card ')}}>
                  {'     Credit Card'}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image style={styles.image}
                  source={
                    require('./src/assets/images/netBanking.jpeg')
                  } />
                <Text style={styles.netBank}
                onPress={()=>{Alert.alert('Net Banking')}}>
                  {'Net Banking'}
                </Text>
              </TouchableOpacity>
            </View>


          </View>

          <View style={styles.innerbody}>
            <View>
              <TouchableOpacity>
                <Image style={styles.image}
                  source={
                    require('./src/assets/images/cash.png')
                  } />
                <Text style={styles.cash}
                onPress={()=>{Alert.alert('Cash Withdraw')}}>
                
                  {'Cash'}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Image style={styles.image}
                  source={
                    require('./src/assets/images/giftcard.png')
                  } />
                <Text style={styles.giftcard}
                onPress={()=>{Alert.alert('Gift Card')}}>
                  {'GiftCard'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20

  },
  innerContainer: {
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  heading: {
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    // alignSelf:'center',
    // backgroundColor:'skyblue',
    fontWeight: '700'
  },
  body: {
    flex: 0.4,
    flexDirection: 'row',
    height: 30,
    width: 30,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,

  },
  arrow: {
    height: 30,
    width: 30,
  },
  image: {
    height: 120,
    width: 120,
    margin: 20,
    borderWidth:1
  },
  styleText: {
    fontSize: 20,
    marginTop: 20,
    alignSelf: 'center'

  },
  styleAmount: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 10,
    alignSelf: 'center'
  },
  innerbody: {
    flexDirection: 'row'
  },
  credit: {
    fontSize: 20,

  },

  cash: {
    fontSize: 20,
    alignSelf: 'center'
  },
  netBank: {
    fontSize: 20,
    alignSelf: 'center'
  },
  giftcard: {
    fontSize: 20,
    alignSelf: 'center'
  }

})