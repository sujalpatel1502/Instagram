import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='' component={Screen1} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator

const styles = StyleSheet.create({})