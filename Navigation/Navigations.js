import {Button, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import PokemonDetails from "../Pages/PokemonDetail";
import Research from "../Pages/Research";
import Test from "../Pages/Test";
import Parametre from "../Pages/Parametre";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function PokemonStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PokemonDetails" component={PokemonDetails} />


        </Stack.Navigator>
    )
}


function PokemonStack2() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Research" component={Research} />
        </Stack.Navigator>
    )
}

function PokemonStack3() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
    )
}


export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{ showIcon: true }}>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: {backgroundColor:"black"} }}
                            name="home"
                            component={PokemonStack}/>
                <Tab.Screen options={{title: "Research", headerTintColor: "white", headerStyle: {backgroundColor:"black"}}}
                            name="Research"
                            component={PokemonStack2}/>
                <Tab.Screen options={{title: "test", headerTintColor: "white", headerStyle: {backgroundColor:"black"}}}
                            name="Test"
                            component={PokemonStack3}/>
                <Tab.Screen options={{title: "Paramètre", headerTintColor: "white", headerStyle: ""}}
                            name="Parametre"
                            component={PokemonStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({


});
// ... other code from the previous section