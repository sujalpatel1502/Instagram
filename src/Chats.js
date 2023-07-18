import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';


const Chats = (props) => {
    const [msg, setmsg] = useState("");
    const [items, setitems] = useState([])
    const listofitems = () => {
        setitems((sujal) => {
            return [...sujal, msg]
        })
        setmsg('')

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <KeyboardAvoidingView
                // behavior={Platform.OS === '' ? 'padding' : null}
                style={{ flex: 1 }}
            >


                <View style={{ flex: 1 }}>
                    <View style={{
                        // justifyContent: 'center',
                        // alignItems: 'center',



                    }}>

                        <View style={{

                            // justifyContent: 'center',
                            //alignItems: 'center',
                            margin: 20,
                            borderRadius: 20,
                            height: 50,
                        }}>

                            {
                                items.map((ite, index) => {
                                    return (
                                        <View style={{
                                            borderWidth: 1,
                                            margin: 10,
                                            borderRadius: 20,
                                        }}>
                                            <Text>
                                                {ite}
                                            </Text>
                                        </View>
                                    )
                                })
                            }


                            {/* <Text>{msg}</Text> */}



                        </View>
                    </View>
                    <View style={{
                        position: "absolute",
                        bottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        width: '90%',
                        alignSelf: 'center',
                        padding: 20,
                        flexDirection: "row"
                    }}>
                        <View style={{

                            alignItems: "center",

                            borderWidth: 1,
                            position: "absolute",
                            bottom: 10,
                            width: '90%',

                            padding: 20,
                            borderRadius: 30,

                        }}>
                            <TextInput placeholder='Send a message' value={msg} onChangeText={(text) => setmsg(text)} />


                        </View>
                        <View style={{
                            position: "absolute",
                            bottom: 10,
                            right: 5,
                            bottom: 30,

                        }}>
                            <TouchableOpacity onPress={listofitems}>
                                <Feather name="send" size={24} color="blue" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default Chats

const styles = StyleSheet.create({
    bottom: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    }
})