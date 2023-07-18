//import { StyleSheet, Text, View } from 'react-native'
//import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, Button, TouchableOpacity, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from "expo-image-picker"
//import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Profile from './Profile';

const LikeCom = () => {
    const [red, setred] = useState(true)
    const [count, setcount] = useState(0)
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            // + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", width: 150, justifyContent: "space-evenly", marginTop: 10 }}>

                    {red ? <AntDesign name="heart" size={24} color="red" onPress={() => { setred(!red) }} onPressIn={() => setcount(count + 1)} /> : <AntDesign name="heart" size={24} color="black" onPress={() => { setred(!red) }} />}


                    <EvilIcons name="comment" size={24} color="black" />
                    <Entypo name="share" size={24} color="black" />


                </View>
                <View style={{ position: "absolute", right: 10, marginTop: 5 }}>
                    <MaterialIcons name="save-alt" size={24} color="black" />
                </View>
            </View>
            <View style={{ left: 18 }}>
                <Text>Likes:{count}</Text>
                <Text>Date:{currentDate}</Text>
            </View>
        </View>
    )
}

export default LikeCom

const styles = StyleSheet.create({})