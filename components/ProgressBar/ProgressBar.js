import { Progress, Text, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function ProgressBar( {alreadyCaught, numOfPokemon} ){
    const caught = useSelector((state) => (state.caught.caught))

    const totalCaught = alreadyCaught + caught;

    const caughtPercentage = (totalCaught/numOfPokemon * 100).toFixed(2)

    return (
        <Box ml="15%" mr="15%">
            <Progress border=".08em solid black" minWidth="15em" value={((totalCaught)/numOfPokemon) * 100} height="1.5em" mt="2em" colorScheme="blackAlpha"> </Progress> 
            <Text whiteSpace="nowrap" fontWeight="bold" position="absolute" ml="1em" mt="-1.5em">{totalCaught + "/" + numOfPokemon + " caught (" + caughtPercentage + "%)"}</Text>
        </Box>
    )
}