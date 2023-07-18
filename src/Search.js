import { FlatList, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import filter from "lodash.filter"
import { MaterialIcons } from '@expo/vector-icons';


const searc = [
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
const Search = () => {
    const [show, setshow] = useState('')
    const [Searchterm, setsearchterm] = useState("");
    const [searchedarray, setsearchedarray] = useState([])

    const serachfunc = (text) => {
        if (text) {
            const newdata = searc.filter(
                function (item) {
                    const itemData = item.name
                        ? item.name.toUpperCase()
                        : "".toUpperCase()
                    const textdata = text.toUpperCase();
                    return itemData.indexOf(textdata) > -1;
                }
            )
            setsearchedarray(newdata);
            setsearchterm(text);
        } else {
            setsearchedarray(searc);
            setsearchterm(text)
        }
    }




    return (
        <SafeAreaView>
            <ScrollView >
                <View style={{ flex: 1 }}>
                    <View style={{ width: 25, top: 45, left: 30 }}>
                        <AntDesign name="search1" size={24} color="black" />
                    </View>

                    <View style={{ flexDirection: "row", borderWidth: 1, justifyContent: "center", alignItems: "center", margin: 10, borderRadius: 25, height: 50 }}>
                        <TextInput placeholder='Search' autoCapitalize='none' autoCorrect={false} onChangeText={(text) => serachfunc(text)}
                            value={Searchterm}

                        />
                        <TouchableOpacity style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 6 }}
                            onPress={() => { setsearchterm('') }}
                        >
                            <MaterialIcons name="cancel" size={24} color="black" />
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>


                        <Text>{show}</Text>

                        {
                            Searchterm.length == 0 ? searc.map((item, index) => {

                                return (
                                    <View key={index} style={{ margin: 10, }}>
                                        <View style={{ width: 100, height: 150, justifyContent: "center", alignItems: "center" }}>
                                            <Image source={item.photo} style={{ width: '100%', height: '100%' }} />
                                            <Text>{item.name}</Text>
                                        </View>
                                    </View>
                                )
                            })
                                : searchedarray.map((item, index) => {

                                    return (

                                        <View key={index} style={{ margin: 10, }}>

                                            <View style={{ width: 100, height: 150, justifyContent: "center", alignItems: "center" }}>
                                                <Image source={item.photo} style={{ width: '100%', height: '100%' }} />
                                                <Text>{item.name}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                        }
                        {/* <FlatList
                            data={Searchterm.length == 0 ? searc : searchedarray}
                            numColumns={3}
                            renderItem={(item) => {
                                return (
                                    <View>
                                        <Text>{item.item.name}</Text>
                                        <Image
                                            source={item.item.photo}
                                            key={item.id}
                                            // resizeMethod='stretch'
                                            resizeMode='stretch'
                                            style={{ width: 140, height: 200 }} />
                                    </View>

                                )
                            }}
                        /> */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Search

const styles = StyleSheet.create({})

