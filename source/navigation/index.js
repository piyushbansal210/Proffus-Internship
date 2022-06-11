import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home'

import LOGO from '../assets/images/logo.png'


const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: () => null,
                        headerLeft: () => (
                            <Image
                                source={LOGO}
                                style={styles.imageContainer}
                            />
                        ),
                        headerRight: () => (
                            <Ionicons name="md-reorder-three" size={32} color="#2C6975" style={styles.iconContainer} />
                        ),
                        headerStyle: {
                            backgroundColor: 'white',
                            shadowColor: 'black',
                            elevation: 20,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        marginLeft: 20
    },
    iconContainer: {
        marginRight: 20
    }
})