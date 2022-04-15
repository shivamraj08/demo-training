import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation'

const Stack = createNativeStackNavigator()

const StackNav=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Navigation' component={Navigation}/>
            {/* <Stack.Screen name='Navigation' component={Navigation}/> */}
        </Stack.Navigator>
    
    
    </NavigationContainer>
  )
}

export default StackNav;