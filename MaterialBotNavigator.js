import react from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Icon';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs();