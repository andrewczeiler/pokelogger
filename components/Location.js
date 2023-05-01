import { Text, UnorderedList, ListItem } from '@chakra-ui/react';

export default function Location( {locationData} ){
    if (!locationData || locationData.length == 0){
        return null
    }

    const locationNameFormat = {
        "scarlet": "Scarlet", 
        "violet": "Violet", 
        "legendsarceus": "Legends: Arceus", 
        "brilliantdiamond": "Brilliant Diamond", 
        "shiningpearl": "Shining Pearl", 
        "sword": "Sword", 
        "shield": "Shield",
        "sworddlc": "Sword",
        "shielddlc": "Shield",
        "letsgopikachu": "Let's Go, Pikachu!",
        "letsgoeevee": "Let's Go, Eevee!",
        "ultrasun": "Ultra Sun",
        "ultramoon": "Ultra Moon",
        "sun": "Sun",
        "moon": "Moon",
        "omegaruby": "Omega Ruby",
        "alphasapphire": "Alpha Sapphire",
        "x": "X",
        "y": "Y",
        "black2": "Black 2",
        "white2": "White 2",
        "black": "Black",
        "white": "White",
        "heartgold": "HeartGold",
        "soulsilver": "SoulSilver",
        "platinum": "Platinum",
        "diamond": "Diamond",
        "pearl": "Pearl",
        "emerald": "Emerald",
        "firered": "FireRed",
        "leafgreen": "LeafGreen",
        "ruby": "Ruby",
        "sapphire": "Sapphire",
        "crystal": "Crystal",
        "gold": "Gold",
        "silver": "Silver",
        "yellow": "Yellow",
        "red": "Red",
        "blue": "Blue"
    }

    function formatGameName(string){
        return locationNameFormat[string]
    }


    return (
        <>
        <Text fontWeight="bold" fontSize="2xl">{"Pokémon " + formatGameName(locationData[0]?.game)}</Text>
        <UnorderedList>
            {locationData.map((location, index) => 
                <ListItem key={index}>{location.location}</ListItem>
            )}
        </UnorderedList>
        </>
    )
}