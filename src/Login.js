import { TouchableOpacity, StyleSheet, Text, View, Dimensions, ImageBackground, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
// import  from '@mui/icons-material/ArrowBack';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Homepage from './Homepage';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfig';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Login = ({ navigation }) => {
    const app = initializeApp(firebaseConfig);

    const auth = getAuth(app);
    const [text, settext] = useState('');
    const [pass, setpass] = useState('');
    const [eye, seteye] = useState(true);
    const [email, setemail] = useState("")
    const [Password, setpassword] = useState("")
    const [validationMessag, setvalidationMessag] = useState('');

    // var text = "ggg"
    async function login() {
        if (email === '' || Password === '') {
            setvalidationMessag('required filled missing')
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, Password);
        } catch (error) {
            setvalidationMessag(error.message);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        height: windowHeight,
                    }}>
                        <ImageBackground source={require('../assets/hello.png')} style={
                            styles.img
                        }>
                            <AntDesign name="arrowleft" size={30}
                                style={styles.arro}
                            />
                            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                                <Entypo name="instagram" size={24} color="black" />
                                <Text>Sign In</Text>
                            </View>
                        </ImageBackground>

                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => { setemail(text) }}
                            placeholder='Enter Email'
                        />

                        <View style={{

                            flexDirection: 'row',
                            //backgroundColor: "red",

                        }}>
                            <TextInput
                                style={styles.input}
                                value={Password}

                                secureTextEntry={eye}
                                onChangeText={(pass) => { setpassword(pass) }}
                                placeholder='Enter Password'

                            />
                            <View>
                                <TouchableOpacity onPress={() => { seteye(!eye) }} style={styles.eye}>
                                    <Entypo name={eye ? 'eye' : 'eye-with-line'} size={24} color="black" />
                                </TouchableOpacity>

                            </View>


                        </View>
                        <View style={{ marginTop: 11, alignSelf: 'flex-end', marginHorizontal: 20 }}>
                            <Text >Forgot Password?</Text>
                        </View>
                        {<Text style={styles.error}>{validationMessag}</Text>}
                        <TouchableOpacity style={styles.butt} onPress={login}>
                            <Text> Login </Text>
                        </TouchableOpacity>

                        <View style={styles.goog}>

                            <AntDesign name="google" size={24} color="red" />
                            <AntDesign name="facebook-square" size={24} color="blue" />
                            <AntDesign name="github" size={24} color="black" />
                        </View>
                        <View style={styles.foot}>
                            <Text>Dont have an Account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                                <Text style={{ left: 5 }}>SignUp</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
//onPress={() => navigation.navigate("Tabb")}
export default Login

const styles = StyleSheet.create({
    img: {
        resizeMode: 'contain',
        height: windowHeight / 3,
        width: windowWidth,
    },
    input: {
        marginLeft: 40,
        height: 40,
        width: "79%",
        padding: 10,
        marginTop: 30,
        borderBottomWidth: 2,
    },
    butt: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: "#56BFA2",
        borderRadius: 20,
        width: 200,
        height: 50,

    },
    arro: {
        marginLeft: 10,
        marginTop: 10
    },
    goog: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: windowWidth,
        marginTop: 45,
    },
    eye: {
        marginTop: 40,
        right: 18,
    },
    foot: {
        // alignSelf: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        position: 'absolute',
        bottom: 1,
        alignSelf: 'flex-end',
        width: windowWidth,
        alignItems: 'center',
        margin: 10
    },
    error: {
        marginTop: 10,
        color: 'red',
    }
})