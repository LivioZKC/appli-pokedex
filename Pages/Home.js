import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextParent, SafeAreaView, FlatList } from 'react-native';
import CustomButton from "../Components/Button";
import TitlePokemon from "../Components/TitlePokemon";
import PokeApi, {getPokemons} from "../Api/PokeApi";
import React, { useState, useEffect } from 'react';

export default function Home(props) {

    const { navigation, ...restProps} = props

    const [listPokemon, setListPokemon] = useState([])
    const [nextPage, setNextPage] = useState ("https://pokeapi.co/api/v2/pokemon")


    const loadpokemons = (url) => {
        getPokemons(url).then(datas => {
            setListPokemon([...listPokemon,...datas.results])
            setNextPage(datas.next)
        })
    }

    useEffect(() => {
        loadpokemons(nextPage)
    }, []);




    return (
        /*<View style={styles.container}>
          <Text>{TextParent}</Text>
          <StatusBar style="auto" />
          {/!*<CustomButton color={"blue"} text={"BTN-1"} displaycolor={displaycolor} />*!/}
            <CustomButton color={"blue"} text={"BTN-1"} setTextparent={setTextparent} />
            <CustomButton color={"red"} text={"BTN-2"} setTextparent={setTextparent} />
            <CustomButton color={"green"} text={"BTN-3"} setTextparent={setTextparent} />

            <SafeAreaView style={styles.container}>
                <FlatList
                data={listPokemon}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onEndReached={this.handleLoadMore} />
            </SafeAreaView>
        </View>*/

        <View style={styles.container}>
            <FlatList
                style={styles.list}
                numColumns={3}
                data={listPokemon}
                keyExtractor={(item) => item.name}
                renderItem={({item}) => <TitlePokemon name={item.name} url={item.url} navigation={navigation}/>}
                onEndReachThreashold={0.5}
                OnendReach = {() => {
                    loadpokemons(nextPage)
                }}
            />
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