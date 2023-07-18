import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper"
import {
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer"
import { Ionicons } from '@expo/vector-icons';
import Homepage from './Homepage';
//import Icon from 'react-native-vector-icons/Ionicons'
const Signout = () => {
    <Text>Signed Out</Text>
}
const Drawercontent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <Image
                    source={require('../assets/krofile.png')}
                    style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10, left: 7 }}

                />
                <Text style={{ color: "white", left: 5 }}>SUJAL PATEL</Text>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>
            {/* <TouchableOpacity onPress={() => props.navigation.navigate("Signout")}>
                <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccco" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name='exit-outline' size={22} />
                        <Text style={{ marginLeft: 7 }}>Sign Out</Text>
                    </View>
                </View>
            </TouchableOpacity> */}
        </View>




    )
}

export default Drawercontent

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})