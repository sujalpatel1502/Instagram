import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Video } from "expo-av"
import Ionic from "react-native-vector-icons/Ionicons"
const SingleReels = ({ item, index, currentIndex }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const videoRef = useRef(null)
    const [mute, setmute] = useState(true)
    const onBuffer = buffer => {
        console.log("buffring", buffer)
    }
    const onError = error => {
        console.log("error", error)
    }
    return (
        <View>
            <TouchableOpacity
                onPress={() => setmute(!mute)}
                style={{ width: windowWidth, height: windowHeight, position: 'relative' }}
            // <TouchableOpacity style={{
            //     width: "100%",
            //     height: "100%",
            //     position: "absolute"
            // }}
            >


                <Video
                    videoRef={videoRef}
                    onBuffer={onBuffer}
                    onError={onError}
                    // repeat={true}
                    isLooping
                    resizeMode='cover'

                    shouldPlay={true}
                    paused={false}
                    source={item.video}
                    isMuted={mute}

                    style={{
                        width: "100%",
                        height: "100%",

                    }}

                />
            </TouchableOpacity>
            <Ionic name='volume-mute' style={{ fontSize: mute ? 20 : 0, color: "white", position: "absolute", top: windowHeight / 2.3, left: windowWidth / 2.3 }} />
            {/* <View style={{ width: 32, height: 32, borderRadius: 100, backgroundColor: "white", margin: 10 }}> */}

            {/* <TouchableOpacity> */}
            {/* <View>
                        <Image source={item.profile} style={{ width: 50, height: 50, resizeMode: "cover", borderRadius: 100, }} />
                    </View> */}
            {/* </TouchableOpacity> */}
            {/* <View style={{
                position: 'absolute',
                width: windowWidth,
                zIndex: 1,
                bottom: 80,
                padding: 10
            }}>
                <View>
                    <TouchableOpacity style={{ width: '150' }}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 32,
                                height: 32,
                                borderRadius: 100,
                                backgroundColor: 'white',
                                margin: 10
                            }}>
                                <Image
                                    source={item.profile}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover',
                                        borderRadius: 100
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>
        // </View>

    )
}

export default SingleReels

const styles = StyleSheet.create({})