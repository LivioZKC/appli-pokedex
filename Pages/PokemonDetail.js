import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import {getPokemons} from "../Api/PokeApi";
import React, {useState} from "react";
import baseimage from "../assets/icon.png";


export default function PokemonDetails(props) {

    const { navigation, route, ...restProps} = props
    const {pokemonDatas} = route.params
        console.log(pokemonDatas.name)
    const ImagePokemon = pokemonDatas.sprites.front_default



    const PokemonTypes = pokemonDatas.types.map((type, index) => {
        return (
            <Text style={styles.text} key={index}>{type.type.name.toLowerCase()}{"\n"}</Text>
        )
    });

    const PokemonAbilities = pokemonDatas.abilities.map((item, index) => {
        console.log(item.ability.name);
        return <Text style={styles.text} key={index}>{item.ability.name}{"\n"}</Text>;
    });



    return (
       /* <Text>Pokemon details</Text>*/

       <View style={styles.BlockDetails}>


               { ImagePokemon ?
                   ( <Image style={styles.images} source={{uri : ImagePokemon}} /> ):
                   ( <Image style={styles.images} source={ baseimage } /> )
               }
            <Text style={styles.PokemonName}>{pokemonDatas.name}</Text>

           <Text style={styles.PokemonId}> ID : {pokemonDatas.id}</Text>

           <Text style={styles.PokemonTitleOptions}>TYPES :{"\n"}
               <Text style={styles.PokemonOptions}> {PokemonTypes}{"\n"}</Text>
           </Text>

            <Text style={styles.PokemonTitleOptions}>ABILITES :{"\n"}
                <Text style={styles.PokemonOptions}>{PokemonAbilities} {"\n"}</Text>
            </Text>

           {/* <Text style={styles.PokemonCharacteristic}>{PokemonGameIndex}</Text>
            <Text style={styles.PokemonCharacteristic}>{PokemonGameVersion}</Text>*/}
        </View>

    )
}

const styles = StyleSheet.create({
    BlockDetails: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    images: {
        backgroundColor: "#fff",
        borderRadius: 50,
        width: 300,
        height: 300,
    },
    PokemonName: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: "uppercase",
        paddingTop: 10,
        paddingBottom: 20,
    },
    PokemonId: {
        fontSize: 18,
        paddingBottom: 20,
    },
    PokemonTitleOptions: {
        textAlign: "center",
        fontSize: 18,
    },
    PokemonOptions: {
      fontSize: 15,
    },
    text: {
        textAlign: 'center',
        textTransform: 'capitalize',
    }
});