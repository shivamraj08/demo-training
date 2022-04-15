import { View, Text, Button} from 'react-native'
import React from 'react'



const SignUpScreen = ({navigation}) => {
    return (
    <View>
        <Text>
        This is Sign up Screen
    </Text>
    <Button
    title='Registerion'
    onPress={()=>{
        navigation.navigate('Register',{name:'ritesh'})
    }}
    />
    {/* <Text>
        {route.params.name}
    </Text> */}
        </View>)
}

export default SignUpScreen;