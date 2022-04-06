import Home from '../Pages/Home';
import {Button, View, Text, StyleSheet} from 'react-native';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetails from "../Pages/PokemonDetail";

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


export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: {backgroundColor:"black"} }}
                            name="home"
                            component={PokemonStack}/>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: ""}}
                            name="Research"
                            component={PokemonStack}/>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: ""}}
                            name="Teams"
                            component={PokemonStack}/>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: ""}}
                            name="Profils"
                            component={PokemonStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({


});
// ... other code from the previous section