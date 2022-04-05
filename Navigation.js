import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
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
const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={{flexDirection:'row'}}>
            <Text>This is {route.params.name}'s profile </Text>
            <Text>from {route.params.place} </Text>
            <Button
                title='Search'
                onPress={() =>
                    navigation.navigate('Search')} />
        </View>
    )
};

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
}

const LoginScreen = (navigation) => {
    return (<View>
        <Text> This is Login Screen
            <Button
            title='Sign Up'
            onPress={()=>{
                navigation.navigate('Sign Up')
            }}

            />
        </Text>
    </View>)
}

const SignUpScreen = (navigation) => {
    return (
    <View>
        <Text>
        This is Sign up Screen
    </Text>
    <Button
    title='Registration Successfully'
    onPress={()=>{
        navigation.navigate('SearchScreen')
    }}
    />
        </View>)
}


export default MyStack;