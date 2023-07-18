import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { SafeAreaView } from 'react-native-safe-area-context';
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './FirebaseConfig';
import { getFirestore, onSnapshot } from 'firebase/firestore'
import { Query, addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import * as  ImagePicker from 'expo-image-picker'


const AddPost = () => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app)
    const db = getFirestore(app);
    const auth = getAuth()

    const [image, setImage] = useState();
    const [picture, setpicture] = useState(null)
    const [title, settitle] = useState('')
    const [data, setdata] = useState([])
    // useEffect(() => {
    const uploadtofirestore = async () => {
        if (picture && title) {
            const docRef = await addDoc(collection(db, "InstaFeed"), {
                Title: title,
                Picture: picture
            })
                .then(() => {
                    // alert('uploaded')
                    console.log('uploaded');
                })
        }
        //picture('');

    }


    // },)

    useEffect(() => {
        const ref = collection(db, "InstaFeed");
        onSnapshot(ref, (InstaFeed) =>
            setdata(InstaFeed.docs.map((category) => ({
                id: category.id,
                data: category.data()
            })))

        )
    }, [])


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [15, 16],
            quality: 1,
        });

        console.log(result);
        if (!result.canceled) {
            setImage(result.uri);
        }
    }
    useEffect(() => {
        const uploadImage = async () => {
            const blobImage = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.onerror = function () {
                    reject(new TypeError("Network request Failed"));
                };
                xhr.responseType = "blob";
                xhr.open("GET", image, true);
                xhr.send(null);
            });
            // Create the file metadata
            /** @type {any} */
            const metadata = {
                contentType: 'image/jpeg'
            };
            // Upload file and metadata to the object 'images/mountains.jpg'
            // instead of images you can give any other folder to fetch the images from the particular folders
            const storageRef = ref(storage, 'images/' + Date.now());
            const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);
            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    //console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            // console.log('Upload is paused');
                            break;
                        case 'running':
                            // console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;
                        // ...
                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                        // console.log('File available at', downloadURL);
                        // for sending link of images to firestore

                        setpicture(downloadURL);


                    });
                }
            );
        }
        if (image != null) {
            uploadImage();
            setImage(image);
        }
    }, [image])




    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView >




            <View style={{ backgroundColor: "#D6EAF8", height: "100%", width: "100%" }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text>AddPost</Text>
                </View>

                <View style={{ justifyContent: "center", alignItems: "center", margin: 5 }}>
                    <TouchableOpacity style={{ borderWidth: 2, borderRadius: 20, width: "50%", alignItems: "center" }} onPress={pickImage}>
                        <Text>Select Image</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    {image && <Image source={{ uri: image }} style={{ width: "70%", height: "70%" }} />}
                </View>
                <View>
                    <TextInput
                        placeholder='Enter your id'
                        value={title}
                        onChangeText={(text) => settitle(text)}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: 'center',
                            textAlign: "center",
                            // marginTop: 40,
                            // backgroundColor: "#00FFFF",
                            borderWidth: 1,
                            borderRadius: 20,
                            width: 200,
                            height: 50,
                        }}


                    />

                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>

                    {image ? <TouchableOpacity style={{ borderWidth: 2, borderRadius: 20, height: "30%", width: "60%", alignItems: "center", justifyContent: "center", backgroundColor: "#D6EAF8" }}
                        onPress={() => { uploadtofirestore() }}
                    >
                        <Text>Post</Text>
                    </TouchableOpacity> : null}

                </View>

            </View>


        </SafeAreaView>
    )
}

export default AddPost

const styles = StyleSheet.create({})

