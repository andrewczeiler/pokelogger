import { Tag, Flex, Text, Box } from '@chakra-ui/react';

export default function PokedexHeader( {dexInfo} ){
    if(!dexInfo){
        return null
    }

    const gameNameFormat = {
        "allgames": "All Games",
        "pokemonhome": "Pokemon Home",
        "scarletviolet": "Scarlet/Violet",
        "legendsarceus": "Legends: Arceus",
        "bdsp": "Brilliant Diamond/Shining Pearl",
        "swordshield": "Sword/Shield",
        "letsgopikachueevee": "Let's Go, Pikachu/Eevee!",
        "ultrasunmoon": "Ultra Sun/Moon",
        "sunmoon": "Sun/Moon",
        "oras": "Omega Ruby/Alpha Sapphire",
        "xy": "X/Y",
        "black2white2": "Black 2/White 2",
        "blackwhite": "Black/White",
        "hgss": "HeartGold/SoulSilver",
        "diamondpearlplatinum": "Diamond/Pearl/Platinum",
        "rubysapphireemerald": "Ruby/Sapphire/Emerald",
        "frlg": "FireRed/LeafGreen",
        "goldsilvercrystal": "Gold/Silver/Crystal",
        "redblueyellow": "Red/Blue/Yellow"
    }

    if(dexInfo.shiny){
        return (
            <Flex flexDir="row" marginLeft="15%" marginRight="15%" mt="5vh" alignItems="center" justifyContent="space-between">
                <Box width="65%">
                <Text overflow="hidden" whiteSpace="nowrap" mr="0.5em" fontSize="4xl">{dexInfo.name}</Text>
                </Box>
                <Box>
                <Tag borderRadius="0.1em" whiteSpace="nowrap" backgroundColor="blue.500" color="white" fontWeight="bold" ml="1em" mt=".1em" colorScheme='teal' height="1.5em">{gameNameFormat[dexInfo.type]}</Tag>
                <Tag borderRadius="0.1em" whiteSpace="nowrap" backgroundColor="pink.500" color="white" fontWeight="bold" ml="1em" mt=".1em" colorScheme='teal' height="1.5em">Shiny</Tag>
                </Box>
            </Flex>
        )
    }
    else{
        return (
            <Flex flexDir="row" marginLeft="15%" marginRight="15%" mt="5vh" alignItems="center" justifyContent="space-between">
                <Box width="65%">
                <Text overflow="hidden" whiteSpace="nowrap" mr="0.5em" fontSize="4xl">{dexInfo.name}</Text>
                </Box>
                <Box>
                <Tag overflow="hidden" borderRadius="0.1em" whiteSpace="nowrap" backgroundColor="blue.500" color="white" fontWeight="bold" ml="1em" mt=".1em" colorScheme='teal' height="1.5em">{gameNameFormat[dexInfo.type]}</Tag>
                </Box>
            </Flex>
        )
    }
}