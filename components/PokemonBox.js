import { Grid, GridItem, Flex, Text, Box } from '@chakra-ui/react';
import Pokemon from '/components/Pokemon.js';

export default function PokemonBox( {pokemons, dexInfo} ){

    if(!pokemons){
        return (
            null
        )
    }


    function firstLetterUppercase(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function splitDashAndUppercase(string){
        if(!string){
            return ''
        }
        let ret = '';
        const names = string.split("-");
        for(let i = 0; i < names.length; i++){
            const namePart = firstLetterUppercase(names[i]);
            ret += ' ' + namePart;
        }
        return ret;
    }


    const gridItems = pokemons?.map((pokemon) =>
        <GridItem key={pokemon.id}><Pokemon key={pokemon.id} pokemon={pokemon} dexInfo={dexInfo}/></GridItem>
    )

    

    let boxHeaderText;
    const boxType = pokemons[0].form;
    if(boxType == 'normal'){
        const pokeNum1 = pokemons[0].number;
        const pokeNum2 = pokemons[pokemons.length-1].number;
        if(pokeNum1 === pokeNum2){
            boxHeaderText = pokeNum1;
        }
        else {
            boxHeaderText = pokeNum1 + " - " + pokeNum2;
        }
    }
    else{
        boxHeaderText = splitDashAndUppercase(boxType);
    }
    
    return (
        <Flex mb="5%" flexDir="column" alignItems="center" width="100%" minWidth="25em">
            <Box width="28%" backgroundColor="#8b9c7c" borderRadius=".3em" marginBottom="1em" boxShadow="0px 0px 1px 1px">
                <Text color="black" fontWeight="bold" fontSize="2xl" align="center">{boxHeaderText}</Text>
            </Box>
            <Grid width="55%" templateColumns='repeat(6, 1fr)'>
                {gridItems}
            </Grid>
        </Flex>
    )

}