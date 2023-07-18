import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Ionicons } from '@expo/vector-icons';
// const Stack = createNativeStackNavigator();
import Reels from './Reels';
const searc1 = [
    {
        id: "1",
        name: "random",

        //photo: require("../assets/s1.png")
        photo: require("../assets/s1.png")
    },
    {
        id: "2",
        name: "gdhguid",
        photo: require("../assets/s2.png")
    },
    {
        id: "3",
        name: "kphdiu",
        photo: require("../assets/s3.png")
    },
    {
        id: "4",
        name: "zdijdi",
        photo: require("../assets/s4.png")
    },
    {
        id: "5",
        name: "ropiid",
        photo: require("../assets/s5.png")
    },
    {
        id: "6",
        name: "nokdih",
        photo: require("../assets/s6.png")
    },
    {
        id: "7",
        name: "ofetyfyh",
        photo: require("../assets/s7.png")
    },
    {
        id: "8",
        name: "Himani",
        photo: require("../assets/main1.png")
    },
    {
        id: "9",
        name: "mumnai",
        photo: require("../assets/mi1.png")
    },
    {
        id: "10",
        name: "mumbai45",
        photo: require("../assets/mi2.png")
    }, {
        id: "11",
        name: "mu5",
        photo: require("../assets/mi3.png")
    }, {
        id: "12",
        name: "Meee",
        photo: require("../assets/mi4.png")
    }, {
        id: "13",
        name: "shradh",
        photo: require("../assets/himani.png")
    }, {
        id: "14",
        name: "janki",
        photo: require("../assets/krofile.png")
    }, {
        id: "15",
        name: "shradha",
        photo: require("../assets/main.png")
    },
    {
        id: "16",
        name: "helllo",
        photo: require("../assets/img1.png")
    },
    {
        id: "17",
        name: "whyyyy",
        photo: require("../assets/img2.png")
    },
    {
        id: "18",
        name: "kajol",
        photo: require("../assets/img3.png")
    },
    {
        id: "19",
        name: "aayushi",
        photo: require("../assets/img4.png")
    },
    {
        id: "20",
        name: "kiara",
        photo: require("../assets/img5.png")
    },
    {
        id: "21",
        name: "piara",
        photo: require("../assets/img8.png")
    },


];


const Proffeed = () => {
    const Tab = createMaterialTopTabNavigator();


    const Post = () => {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>




                    {
                        searc1.map((item, index) => {

                            return (
                                <View key={index} style={{ margin: 10, }}>
                                    <View style={{ width: 100, height: 150, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={item.photo} style={{ width: '100%', height: '100%' }} />

                                    </View>
                                </View>
                            )
                        })

                    }

                </View>
            </ScrollView>

        )

    }
    const Reels = () => {
        return (
            <ScrollView >
                <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>




                    {
                        searc1.map((item, index) => {

                            return (
                                <View key={index} style={{ margin: 10, }}>
                                    <View style={{ width: 100, height: 150, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={item.photo} style={{ width: '100%', height: '100%' }} />

                                    </View>
                                </View>
                            )
                        })

                    }

                </View>
            </ScrollView>

        )
    }
    const Saved = () => {
        return (
            <ScrollView >
                <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>




                    {
                        searc1.map((item, index) => {

                            return (
                                <View key={index} style={{ margin: 10, }}>
                                    <View style={{ width: 100, height: 150, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={item.photo} style={{ width: '100%', height: '100%' }} />

                                    </View>
                                </View>
                            )
                        })

                    }

                </View>
            </ScrollView>
        )
    }
    return (



        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIndicatorStyle: {
                    backgroundColor: 'black',
                    height: 1.5
                },
                // tabBarStyle: { backgroundColor: "red" },
                tabBarIcon: ({ focused, size, colour }) => {
                    let iconName;
                    if (route.name === "Post") {
                        iconName = focused ? "grid" : "grid-outline"
                    } else if (route.name === "Reels") {
                        iconName = focused ? "videocam" : "videocam-outline"
                    } else if (route.name === "Saved") {
                        iconName = focused ? "bookmark" : "bookmark-outline"
                    }

                    return <Ionicons name={iconName} size={size = 22} colour={colour} />

                }

            })

            }
        >
            <Tab.Screen name='Post' component={Post} />


            <Tab.Screen name='Reels' component={Reels} />


            <Tab.Screen name='Saved' component={Saved} />



        </Tab.Navigator>

    )

}

export default Proffeed

const styles = StyleSheet.create({})