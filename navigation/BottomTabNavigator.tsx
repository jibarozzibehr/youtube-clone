import { FontAwesome, Foundation, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootTabParamList, RootTabScreenProps } from '../types';
import React from 'react';

import HomeStack from './HomeStack';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { StatusBar } from 'react-native';

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeStack}
                options={({ navigation }: RootTabScreenProps<'Home'>) => ({
                    //title: 'Tab One',
                    
                    tabBarIcon: ({ color }) => <Foundation name="home" size={24} color={color} />,
                    headerShown: false,
                    /* headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                        })}>
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ), */
                })}
            />
            <BottomTab.Screen
                name="Explore"
                component={TabTwoScreen}
                options={{
                    //title: 'Tab Two',
                    tabBarIcon: ({ color }) => <Ionicons name="compass-outline" size={24} color={color} />,
                }}
            />
    
            <BottomTab.Screen
                name="New"
                component={TabTwoScreen}
                options={{
                    //title: 'Tab Two',
                    tabBarIcon: ({ color }) => <AntDesign name="pluscircle" size={24} color={color} />,
                }}
            />
    
            <BottomTab.Screen
                name="Subscriptions"
                component={TabTwoScreen}
                options={{
                    //title: 'Tab Two',
                    tabBarIcon: ({ color }) => <MaterialIcons name="subscriptions" size={24} color={color} />,
                }}
            />
    
            <BottomTab.Screen
                name="Library"
                component={TabTwoScreen}
                options={{
                    //title: 'Tab Two',
                    tabBarIcon: ({ color }) => <MaterialIcons name="video-collection" size={24} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );

    /* const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

    function TabTwoNavigator() {

    } */
}