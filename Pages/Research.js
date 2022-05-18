import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, FlatList, View, StyleSheet, Text, Image } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import { getPokemonByName } from '../Api/PokeApi';


function PokemonSearch(){
    const [pokemon, setPokemon] = useState([]);
    const [pokemonName, setPokemonName] = useState('');
    function searchPokemon(){
        getPokemonByName(pokemonName.toLowerCase()).then((datas) => {
            if(datas !== undefined){
                console.log(datas.abilities)
                setPokemon(datas);
            }else{
                setPokemon([]);
            }
        })
    }
    return (
        <View style={styles.pokemonGrid}>


            <StatusBar style="auto" />
            <TextInput
                style={styles.input}
                placeholder="Cherchez votre pokemon préféré !"
                placeholderTextColor="#A9A9A9"
                onChangeText={(text) => {
                    setPokemonName(text);
                }}
                onEndEditing={() => {
                    searchPokemon();
                }}
            />
            {pokemon.sprites &&

            <View>
                <View style={styles.imageBox}>
                    <View style={styles.imageBoxLeft}>
                        <Image source={{uri: pokemon.sprites.front_default}} style={styles.image}/>
                    </View>
                    <View style={styles.imageBoxRight}>
                        <Text style={styles.pokeName}>{pokemon.name}</Text>
                        <Text>ID : {pokemon.id}</Text>
                        <Text>Type :  {pokemon.types.map((type, index) => {
                            return (
                                <Text key={index}>{type.type.name} </Text>
                            )
                        })}</Text>

                        <View>
                        </View>
                        <Text>Habilities : </Text>
                        {pokemon.abilities.map((ability, index) => {
                            return (
                                <Text>{ability.ability.name} </Text>
                            )
                        })}
                    </View>
                </View>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1.5,
        padding: 12,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 20,
    },
    imageBox: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '95%',
        height: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.10,
    },
    imageBoxLeft: {
        width: '50%',
        padding: 10,
    },
    imageBoxRight: {
        width: '50%',
        padding: 10,
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 200,
        height: 200,
    },
    pokeName: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 10,

    },
});

export default PokemonSearch;