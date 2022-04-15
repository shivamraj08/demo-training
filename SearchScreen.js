import { View, Text,Button} from 'react-native'
import React from 'react'

const SearchScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>This is Search Screen</Text>
            <Button
                title='Login'
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />
        </View>
    )
};

export default SearchScreen;