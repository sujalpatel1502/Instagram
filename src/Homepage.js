import { FlatList, StyleSheet, Text, View, Image, Button, TouchableOpacity, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './FirebaseConfig';
import { getFirestore, onSnapshot } from 'firebase/firestore'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from "expo-image-picker"
import { Query, addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
//import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Profile from './Profile';
import LikeCom from './LikeCom';
import Chats from './Chats';


const persons = [
    {
        id: "1",
        name: "Tanya",

        photo: require("../assets/img1_1.png")
    },
    {
        id: "2",
        name: "random",
        photo: require("../assets/img1.png")
    },
    {
        id: "3",
        name: "kriti sanon",
        photo: require("../assets/img2.png")
    },
    {
        id: "4",
        name: "janki",
        photo: require("../assets/img3.png")
    },
    {
        id: "5",
        name: "Aayushi",
        photo: require("../assets/img4.png")
    },
    {
        id: "6",
        name: "kiara",
        photo: require("../assets/img5.png")
    },
    {
        id: "7",
        name: "esha",
        photo: require("../assets/img8.png")
    },
    {
        id: "8",
        name: "ana",
        photo: require("../assets/img6.png")
    },

];

const Feed = [
    {
        id: "1",


        photo: require("../assets/surya_1.png")
    },
    {
        id: "2",

        photo: require("../assets/main1.png")
    },
    {
        id: "3",

        photo: require("../assets/surya.png")
    },
    {
        id: "4",

        photo: require("../assets/mi1.png")
    },
    {
        id: "5",

        photo: require("../assets/mi2.png")
    },
    {
        id: "6",

        photo: require("../assets/mi3.png")
    },
    {
        id: "7",

        photo: require("../assets/mi4.png")
    },
    {
        id: "8",

        photo: require("../assets/mi5.png")
    },

];


const Homepage = ({ navigation }) => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app)
    const db = getFirestore(app);
    const auth = getAuth()
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
    //const [type, setType] = useState(CameraType.back);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [red, setred] = useState(true)
    const [count, setcount] = useState(0)
    const [dataa, setdataa] = useState([])
    const [storydata, setstorydata] = useState([])





    useEffect(() => {
        const ref = collection(db, "InstaFeed");
        onSnapshot(ref, (InstaFeed) =>
            setdataa(InstaFeed.docs.map((category) => ({
                id: category.id,
                data: category.data()
            })))

        )
    }, [])

    useEffect(() => {
        const ref = collection(db, "Story");
        onSnapshot(ref, (Story) =>
            setstorydata(Story.docs.map((category) => ({
                id: category.id,
                data: category.data()
            })))

        )
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>

                <View>
                    {/* <View style={{ justifyContent: "center", alignItems: "center" }}>

                    </View> */}
                    <View style={styles.logo}>

                        <TouchableOpacity onPress={() => pickImage()}>
                            <Entypo name="camera" size={24}
                            />
                        </TouchableOpacity>

                        <Text>Instagram</Text>
                        <View style={{ right: 10 }}>

                            <TouchableOpacity onPress={() => navigation.navigate("Chats")}>
                                <FontAwesome5 name="location-arrow" size={24} color="black" />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View >
                        <FlatList

                            horizontal
                            data={storydata}
                            renderItem={({ item, id }) => {

                                return (
                                    <View>
                                        <Image source={{ uri: item.data.Picture }} style={{ height: 70, width: 70, borderRadius: 40, margin: 10 }} />
                                        <View style={{
                                            position: 'absolute', bottom: 20, left: 10
                                        }}>

                                            {item.data.id == 1 ? <Entypo style={{ left: 45, bottom: 6 }} name="circle-with-plus" size={20} color="blue" /> : null}
                                        </View>

                                        <Text style={{ textAlign: 'center' }}>{item.data.Name}</Text>

                                        {/* <Image source={{ uri: item.uri }} key={id} style={{ height: 50, width: 50 }} /> */}
                                        {/* <Image */}
                                    </View>

                                );
                            }


                            }
                        />
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <FlatList
                            data={dataa}
                            renderItem={({ item, id }) => {
                                return (
                                    <View>
                                        <View style={{ marginTop: 10, flexDirection: "row", margin: 6 }}>
                                            <Image source={{ uri: item.data.Picture }} resizeMode='contain' style={{ height: 50, width: 50, borderRadius: 50 }} />
                                            <Text style={{ marginLeft: 10, marginTop: 10 }}>{item.data.Title}</Text>
                                            <Entypo style={{ marginTop: 10, position: "absolute", right: 15 }} name="dots-three-horizontal" size={24} color="black" />
                                        </View>
                                        <Image source={{ uri: item.data.Picture }} style={{ height: 400, width: 400, resizeMode: "contain" }} />
                                        <LikeCom />
                                    </View>

                                )
                            }
                            }
                        />

                        {/* <Image source={require('../assets/main1.png')} style={{ height: 400, width: 400 }} resizeMode="stretch" /> */}
                    </View>
                    {/* <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", width: 150, justifyContent: "space-evenly", marginTop: 10 }}>

                        {red ? <AntDesign name="heart" size={24} color="red" onPress={() => { setred(!red) }} onPressIn={() => setcount(count + 1)} /> : <AntDesign name="heart" size={24} color="black" onPress={() => { setred(!red) }} />}


                        <EvilIcons name="comment" size={24} color="black" />
                        <Entypo name="share" size={24} color="black" />


                    </View>
                    <View style={{ position: "absolute", right: 10, marginTop: 5 }}>
                        <MaterialIcons name="save-alt" size={24} color="black" />
                    </View>
                </View> */}
                    {/* <View style={{ left: 5 }}>
                    <Text>Likes:{count}</Text>
                    <Text>Date:{currentDate}</Text>
                </View> */}

                </View>
                {/* <View style={{ justifyContent: "space-between", marginTop: 30, flexDirection: "row", bottom: 0 }}> */}
                {/* <Entypo name="home" size={24} color="black" /> */}
                {/* <FontAwesome name="search" size={24} color="black" /> */}
                {/* <MaterialIcons name="add-box" size={24} color="black" /> */}
                {/* <MaterialCommunityIcons name="movie-search-outline" size={24} color="black" /> */}
                {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}> */}
                {/* <Image source={require('../assets/profile.png')} style={{ height: 30, width: 30, borderRadius: 50, right: 8 }} /> */}
                {/* </TouchableOpacity> */}
                {/* </View> */}


            </ScrollView>
        </SafeAreaView >
    )
}

export default Homepage

const styles = StyleSheet.create({
    logo: {
        flexDirection: "row",
        justifyContent: "space-between", left: 4


    }
})