import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import {getPokemons} from "../Api/PokeApi";
import React, {useState} from "react";
import baseimage from "../assets/icon.png";


export default function TitlePokemon(props) {
    
    const { url, name, navigation, ...restProps} = props

    const [pokemonDatas, setPokemonDatas] = useState([])
    const [pokemonImg, setPokemonImg] = useState(null)

    if (pokemonDatas.length === 0) {
            getPokemons(url).then(datas => {
                setPokemonDatas(datas)
                setPokemonImg(datas.sprites.front_default)
            })

    }
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("PokemonDetails", {
            pokemonDatas : pokemonDatas} )}>
            <View style={styles.containerImage}>
                { pokemonImg ?
                    ( <Image style={styles.images} source={{uri : pokemonImg}} /> ):
                    ( <Image style={styles.images} source={ baseimage } /> )
                }
            </View>

            <View style={styles.container.info}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: "10%",
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
    },
    images: {
        backgroundColor: "#fff",
        borderRadius: 50,
        width: 100,
        height: 100,
    }
});