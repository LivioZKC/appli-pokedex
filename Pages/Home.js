import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextParent, SafeAreaView, FlatList } from 'react-native';
import TitlePokemon from "../Components/TitlePokemon";
import PokeApi, {getPokemons} from "../Api/PokeApi";
import React, { useState, useEffect } from 'react';

export default function Home(props) {

    const { navigation, ...restProps} = props

    const [listPokemon, setListPokemon] = useState([])
    const [nextPage, setNextPage] = useState ("https://pokeapi.co/api/v2/pokemon")


    useEffect(() => {
        loadpokemon(nextPage)
    }, []);

    const loadpokemon = (url) => {
        getPokemons(url).then(datas => {
            setListPokemon([...listPokemon, ...datas.results])
            setNextPage(datas.next)
        })
    }

    return (

        <View style={styles.container}>
            <FlatList data={listPokemon}
                      style={styles.list}
                      numColumns={3}
                      renderItem={({item}) => <TitlePokemon name={item.name} url={item.url} navigation={navigation}/>}
                      keyExtractor={(item) => item.name}
                      onEndReachThreashold={0.5}
                      onEndReached = {() => {
                        loadpokemon(nextPage)
                      }}/>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
    },

});