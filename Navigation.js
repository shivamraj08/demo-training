import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen'
import SearchScreen from './SearchScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import Login from './Login';
import Register from './Register'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Form from './Form'


const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const MyStack = () => {
    return (

            <Tab.Navigator screenOptions={{
                tabBarActiveBackgroundColor: 'white',
                tabBarActiveTintColor:'black',
                tabBarInactiveTintColor:'brown',
                // tabBarHideOnKeyboard:(false)
                tabBarStyle:{backgroundColor:'#D8D2CB'}
            }}
            >
                <Tab.Screen
                    name="Form"
                    component={Form}
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ focused }) => {
                            return (
                            <Image
                                    style={{ height: 20, width: 20 }}
                                    source=
                                    {{ uri: focused ? 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png' : 'https://cdn-icons-png.flaticon.com/512/1946/1946488.png' }}
                                />
                            )
                        },
                        tabBarColor:'#3E8E7E'
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source={{ uri: !focused ? 'https://cdn-icons.flaticon.com/png/128/2040/premium/2040504.png?token=exp=1649244325~hmac=f7521f5e2e1ec03a14c68daee31185ee' : 'https://cdn-icons-png.flaticon.com/128/503/503849.png' }} />
                            )
                        },
                        tabBarColor:'#00AFC1'
                    }}
                />
                <Tab.Screen name="Search" component={SearchScreen}
                    options={{
                        title: 'Search',
                        
                        tabBarIcon: ({ focused }) => {
                            return (

                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source=
                                    {{ uri: focused ? 'https://cdn-icons-png.flaticon.com/128/49/49116.png' : 'https://cdn-icons.flaticon.com/png/128/2989/premium/2989907.png?token=exp=1649242025~hmac=6a5cd99e6d56f5de051ae9ded1b58142' }}
                                />
                            )
                        },
                        tabBarColor:'#42C2FF'
                    }}
                />
                {/* <Tab.Screen name="LoginScreen" component={LoginScreen} /> */}
                {/* <Tab.Screen name="SignUp" component={SignUpScreen} /> */}
                <Tab.Screen name="Register" component={Register}
                    options={{
                        title: 'Register',
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source=
                                    {{ uri: focused ? 'https://cdn-icons-png.flaticon.com/128/2921/2921087.png' : 'https://cdn-icons-png.flaticon.com/128/2910/2910768.png' }}
                                />)
                        },
                        tabBarColor:'#B667F1'
                    }} />
                <Tab.Screen name="Login" component={Login}
                    options={{
                        title: 'Login',
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    style={{ height: 20, width: 20 }}
                                    source=
                                    {{ uri: focused ? 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png' : 'https://cdn-icons.flaticon.com/png/128/2321/premium/2321232.png?token=exp=1649242455~hmac=0d94da88d39a010430fd287b300303ce' }}
                                />

                            )
                        },
                        tabBarColor:'#FF5C8D'
                    }} />
            </Tab.Navigator>

    );
};
// const HomeScreen = ({ navigation }) => {
//     return (
//         <Button
//             title="Go to profile"
//             onPress={() =>
//                 navigation.navigate('Profile', { name: 'David' })
//             }
//         />
//     );r
// };
// const ProfileScreen = ({ navigation, route }) => {
//     return (
//         <View style={{flexDirection:'row'}}>
//             <Text>This is {route.params.name}'s profile </Text>

//             <Button
//                 title='Search'
//                 onPress={() =>
//                     navigation.navigate('Search')} />
//         </View>
//     )
// };

// const SearchScreen = ({ navigation, route }) => {
//     return (
//         <View>
//             <Text>This is Search Screen</Text>
//             <Button
//                 title='Login'
//                 onPress={() => {
//                     navigation.navigate('Login')
//                 }}
//             />
//         </View>
//     )
// }

// const LoginScreen = ({navigation}) => {
//     return (<View>
//         <Text> This is Login Screen
//             <Button
//             title='Sign Up'
//             onPress={()=>{
//                 navigation.navigate('SignUp',{name:'rishabh'})
//             }}

//             />
//         </Text>

//     </View>)
// }

// const SignUpScreen = ({navigation,route}) => {
//     return (
//     <View>
//         <Text>
//         This is Sign up Screen
//     </Text>
//     <Button
//     title='Go to profile again'
//     onPress={()=>{
//         navigation.push('Profile',{name:'ritesh'})
//     }}
//     />
//     <Text>
//         {route.params.name}
//     </Text>
//         </View>)
// }


export default MyStack;