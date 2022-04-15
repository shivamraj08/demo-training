import { View, Text,Button } from 'react-native'
import React from 'react';


const HomeScreen = ({ navigation }) => {
    return (
        
        <Button
            title="Go to Jane's profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Jane',place:'Noida' })
            }
        />
    );
};

export default HomeScreen;