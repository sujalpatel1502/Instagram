import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login';
import SignUp from './SignUp';
const Stack = createNativeStackNavigator();
const Authentication = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Sign Up' component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Authentication

const styles = StyleSheet.create({})