import { View, Text, Button} from 'react-native'
import React from 'react'

const LoginScreen = ({navigation}) => {
    return (<View>
        <Text> This is Login Screen
            <Button
            title='Sign Up'
            onPress={()=>{
                navigation.navigate('SignUp',{name:'rishabh'})
            }}

            />
        </Text>
        
    </View>)
}

export default LoginScreen;