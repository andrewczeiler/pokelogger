import PokemonBox from '/components/PokemonBox.js';
import { Flex } from '@chakra-ui/react';

export default function PokemonBoxManager( {pokemons, dexInfo} ){
    if(!pokemons){
        return (
            null
        )
    }

    function makeBoxes(pokemonArray, priorIndex){
        const length = pokemonArray.length;
        const numBoxes = Math.ceil(length / 30);

        pokemonArray.sort(function(a,b) {
            return a.id - b.id
        })

        let pokeBoxes = new Array(numBoxes);
        for(let i = 0; i < numBoxes; i++){
            pokeBoxes[i] = pokemonArray.slice(i * 30, i * 30 + 30);
        }

        return pokeBoxes.map((pokes, index) => 
            <PokemonBox key={index + priorIndex} pokemons={pokes} dexInfo={dexInfo}/>
        )

    }

    function groupBy(array, property) {
        var hash = {};
        for (var i = 0; i < array.length; i++) {
            if (!hash[array[i][property]]) hash[array[i][property]] = [];
            hash[array[i][property]].unshift(array[i]);
        }
        return hash;
    }

    const pokemonSorted = [...pokemons].sort(function(a,b) {
        return a.form - b.form
    })

    

    const groupedPokemons = groupBy(pokemonSorted, 'form');


    let pokemonBoxes = new Array();
    Object.keys(groupedPokemons).forEach(function(key, index){
        pokemonBoxes.push(makeBoxes(groupedPokemons[key], index * 1000))
    })

    pokemonBoxes = pokemonBoxes.flat()

    return (
        <Flex flexDir="column" m="3%" flexWrap="wrap" width="100%">
            {pokemonBoxes}
        </Flex>
    )
}