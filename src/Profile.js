import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
//import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Entypo } from '@expo/vector-icons';
import Editprof1 from './Editprof1';
import Proffeed from './Proffeed';
import Editprofile from './Editprofile';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { NavigationContainer, useRoute } from "@react-navigation/native"
const Tab = createMaterialTopTabNavigator();

const Profile = ({ navigation }) => {
    const [edit, setedit] = useState(false)
    const route = useRoute()
    const name4 = route.params?.paramKey

    return (
        <>


            <SafeAreaView>
                <View>
                    {/* <Navbar /> */}
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

                    <View style={{
                        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 20
                    }}>
                        <View style={{
                            alignItems: "center"
                        }}>
                            <Image source={require('../assets/krofile.png')} style={{ height: 90, width: 90, borderRadius: 50 }} />
                        </View>



                        <View style={{ alignItems: "center" }}>
                            <Text>10 </Text>
                            <Text>posts</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text>500 </Text>
                            <Text>Followers</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text>250 </Text>
                            <Text>Following</Text>
                        </View>



                    </View>
                    <View style={{ left: 20, bottom: 5 }}>
                        <Text>{name4}</Text>
                    </View>


                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", padding: 10 }}>
                        <View style={{ borderWidth: 1, borderRadius: 10, width: "45%", alignItems: "center" }}>
                            {/* <TouchableOpacity onPress={() => navigation.navigate("Editprofile")}> */}
                            <TouchableOpacity onPress={() => setedit(true)}>
                                <Text>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderWidth: 1, borderRadius: 10, width: "45%", alignItems: "center" }}>
                            <TouchableOpacity>
                                <Text>Share Profile</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* 229817731 */}
                </View>






            </SafeAreaView>

            <Proffeed />

        </>

    )
}

export default Profile

const styles = StyleSheet.create({})