import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Text,
    useDisclosure,
    Image,
    Flex,
    ModalFooter
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import PokemonLocations from '/components/PokemonLocations.js'
import { nationalIDs } from '/data/NationalIDs'


export default function PokemonInfo( {pokemon, dexType, iconColor, handleMouseEnterIcon, handleMouseLeaveIcon, iconVisibility} ){
    const {onOpen, onClose, isOpen} = useDisclosure();
    
    function firstLetterUppercase(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const nameExceptions = ['iron-valiant', 'roaring-moon', 'chi-yu', 'ting-lu', 'chien-pao', 'wo-chien', 'iron-thorns', 'iron-moth', 'iron-jugulis', 'iron-hands',
        'iron-bundle', 'iron-treads', 'sandy-shocks', 'slither-wing', 'flutter-mane', 'brute-bonnet', 'scream-tail', 'great-tusk'
    ]

    const differentNames = {
        'mr-mime-galar': 'Mr. Mime (Galar)',
        'mr-mime': 'Mr. Mime',
        'mime-jr': 'Mime Jr.',
        'mr-rime': 'Mr. Rime',
        'porygon-z': 'Porygon-Z',
        'jangmo-o': 'Jangmo-o',
        'hakamo-o': 'Hakamo-o',
        'kommo-o': 'Kommo-o',
        'type-null': 'Type: Null'
    }

    function formatPokemonNames(string){
        let ret = '';
        const names = string.split("-");
        if(nameExceptions.includes(string)){
            for(let i = 0; i < names.length; i++){
                const namePart = firstLetterUppercase(names[i]);
                ret += ' ' + namePart;
            }
        }
        else if(differentNames[string]){
            return differentNames[string]
        }
        else{
            if (names.length === 1){
                const name = firstLetterUppercase(names[0]);
                return name;
            }
            for(let i = 0; i < names.length; i++){
                const namePart = firstLetterUppercase(names[i]);
                if (i === 1){
                    ret += ' (' + namePart
                }
                else{
                    ret += ' ' + namePart;
                }
            }
            ret += ')'
        }
        return ret;
    }

    let imgUrl =  "/pokemon/" + nationalIDs[pokemon.name] + ".png";

    function formatNumber(number){
        if(number === -1){
            return "N/A";
        }
        else if(number >= 10000 && number < 20000){
            return (number - 10000) + " (IoA)";
        }
        else if(number >= 20000 && number < 30000){
            return (number - 20000) + " (CT)";
        }
        else if(number >= 30000 && number < 40000){
            return (number - 30000) + " (DA)";
        }

        return number;
    }

    return (
        <>  
            <InfoOutlineIcon onClick={onOpen} color={iconColor} onMouseEnter={handleMouseEnterIcon} onMouseLeave={handleMouseLeaveIcon} hidden={!iconVisibility} boxSize={Math.floor(window.innerWidth / 250)} opacity="70%" position="absolute" bottom="5%" left="5%" />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                    <ModalContent backgroundColor="#ebdcbc">
                    <ModalHeader m="-1em" mt="-0.5em" mb="-0.5em" mr="2em">
                        <Flex flexDir="row" alignItems="center" justifyContent="space-between">
                            <Flex flexDir="row" alignItems="center">
                                <Image src={imgUrl} alt={pokemon.name} />
                                <Text fontWeight="bold" fontSize="3xl">{formatPokemonNames(pokemon.name)}</Text>
                            </Flex>
                            <Text ml="0.5em" fontWeight="bold" fontSize="3xl">{"#" + formatNumber(pokemon.number)}</Text>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody maxHeight="50vh" overflowY="auto">
                            <PokemonLocations pokeName={pokemon.name} dexType={dexType} />
                    </ModalBody>
                    <ModalFooter />
                </ModalContent>
            </Modal>
        </>
    )
}