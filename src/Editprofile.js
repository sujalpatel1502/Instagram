import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import Profile from './Profile'

const Editprofile = ({ navigation }) => {
    const [userName, setUserName] = useState('SUJAL PATEL')

    const name = "sujal";
    const navigate = useNavigation()
    return (

        <SafeAreaView>


            <View>
                <Text>Editprofile</Text>
            </View>
            <View>
                <TextInput
                    value={userName}

                    onChangeText={(text) => setUserName(text)}
                    placeholder='Enter any value'
                    style={styles.inputStyle}

                />
                <Button
                    title='Go Next'
                // onPress={() => {
                //     navigation.navigate('Profile', {
                //         paramKey: userName,
                //     })
                // }}
                //onPress={() => navigate.goBack()}


                />
            </View>

        </SafeAreaView>



    )
}
// 1817
export default Editprofile

const styles = StyleSheet.create({
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
    },
})