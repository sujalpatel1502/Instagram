import { StyleSheet, Text, View, Image } from 'react-native';
import Homepage from './Homepage';
import Chats from './Chats';
import Profile from './Profile';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Search from './Search';
import { createDrawerNavigator } from "@react-navigation/drawer"
import Screen1 from './Screen1';
import Reels from './Reels';
import Drawercontent from './Drawercontent';
import Editprofile from './Editprofile';
import Login from './Login';
import AddPost from './AddPost';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function DrawerRoutes() {
    return (
        <Drawer.Navigator drawerContent={props => <Drawercontent {...props} />} screenOptions={{ headerShown: false, drawerActiveBackgroundColor: "#aa18ea", drawerActiveTintColor: "#fff", drawerLabelStyle: { marginLeft: -25 } }} initialRouteName='Profile'>
            <Drawer.Screen options={{
                drawerIcon: () => {
                    return (
                        <Ionicons name="person-circle-outline" size={22} />
                    )
                }
            }} name='Profile' component={Profile}
            />
            <Drawer.Screen options={{
                drawerIcon: () => {
                    return (
                        <Ionicons name="bookmark-outline" size={22} />
                    )
                }
            }}
                name='Saved' component={Screen1} />
            <Drawer.Screen options={{
                drawerIcon: () => {
                    return (
                        <Ionicons name="settings-outline" size={22} />
                    )
                }
            }}
                name='Settings' component={Screen1} />
            <Drawer.Screen options={{
                drawerIcon: () => {
                    return (
                        <Ionicons name="log-out-outline" size={22} />
                    )
                }
            }} name='Signout' component={Login} />
        </Drawer.Navigator>
    )
}
function Tabb() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName;
                    if (route.name === "Hompage") {
                        iconName = focused ? "home" : "home-outline"
                    } else if (route.name === "search") {
                        iconName = focused ? "search" : "search-outline"
                    } else if (route.name === "Reels") {
                        iconName = focused ? "videocam" : "videocam-outline"
                    } else if (route.name === "Add Post") {
                        iconName = focused ? "add" : "add-outline"
                    }
                    return (route.name === "Profile1" ? <Image source={require('../assets/krofile.png')} style={{ height: 30, width: 30, borderRadius: 50, right: 8, borderWidth: 2, borderColor: "black" }} /> : <Ionicons name={iconName} size={size} color={color} />
                    )
                }
            })
            }>
            <Tab.Screen name='Hompage' component={Homepage} />
            <Tab.Screen name='search' component={Search} />
            <Tab.Screen name='Add Post' component={AddPost} />
            <Tab.Screen name='Reels' component={Reels} />
            <Tab.Screen name='Profile1' component={DrawerRoutes} />
        </Tab.Navigator>
    )
}
const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name='Tabb' component={Tabb} />
                <Stack.Screen name='Chats' component={Chats} />
                <Stack.Screen name='Editprofile' component={Editprofile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Screens

const styles = StyleSheet.create({})