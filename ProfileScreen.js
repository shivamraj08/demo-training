import { View, Text,Button} from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={{flexDirection:'row'}}>
            {/* <Text>This is {route.params.name}'s profile </Text> */}
            
            <Button
                title='Search'
                onPress={() =>
                    navigation.navigate('Search')} />
        </View>
    )
};

export default ProfileScreen;