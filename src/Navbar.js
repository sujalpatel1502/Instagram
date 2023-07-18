
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Navbar = ({ navigation }) => {
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", top: 7, left: 4 }}>
                <View style={{ flexDirection: "row" }}>
                    <Entypo name="lock" size={28} color="black" />
                    <Text>sujalpatel_19</Text>
                </View>
                <View style={{ flexDirection: "row", right: 4 }}>
                    <MaterialIcons name="add-box" size={28} color="black" />
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>

                        <Entypo name="menu" size={28} color="black" />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({})