import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import {getPokemons} from "../Api/PokeApi";
import React, {useState} from "react";
import baseimage from "../assets/icon.png";


export default function PokemonDetails(props) {

    const { navigation, route, ...restProps} = props
    const {pokemonDatas} = route.params
        console.log(pokemonDatas.name)
    const ImagePokemon = pokemonDatas.sprites.front_default

    /*const PokemonAbilities = pokemonDatas.abilities.map((item, index) => {
        console.log(item.PokemonAbilities.name);
        return <Text key={index}>{item.PokemonAbilities.name}</Text>;
    });*/

    const PokemonAbilities = pokemonDatas.abilities.map((item, index) => {
        console.log(item.ability.name);
        return <Text key={index}>{item.ability.name}</Text>;
    });

    /*const PokemonGameIndex = pokemonDatas.game_indices.map((item, index) => {
        console.log(item.game_index.name);
        return <Text key={index}>{item.game_index.name}</Text>;
    });

    const PokemonGameVersion = pokemonDatas.version.map((item, index) => {
        console.log(item.version.name);
        return <Text key={index}>{item.version.name}</Text>;
    });*/


    return (
       /* <Text>Pokemon details</Text>*/

       <View style={styles.BlockDetails}>

           { ImagePokemon ?
               ( <Image style={styles.images} source={{uri : ImagePokemon}} /> ):
               ( <Image style={styles.images} source={ baseimage } /> )
           }
            <Text style={styles.PokemonName}>{pokemonDatas.name}</Text>
            <Text style={styles.PokemonCharacteristic}>{PokemonAbilities}</Text>
           {/* <Text style={styles.PokemonCharacteristic}>{PokemonGameIndex}</Text>
            <Text style={styles.PokemonCharacteristic}>{PokemonGameVersion}</Text>*/}
        </View>

    )
}

const styles = StyleSheet.create({
    BlockDetails: {
        alignItems: "center",
        justifyContent: "center",
    },
    images: {
        backgroundColor: "#fff",
        borderRadius: 50,
        width: 300,
        height: 300,
    }
});