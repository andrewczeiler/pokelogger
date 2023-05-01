import { useSession, signIn } from "next-auth/react"
import { Flex, Text, Button, UnorderedList, ListItem, Link } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import Head from 'next/head'

export default function Component() { 
    const { data: session } = useSession();
    const router = useRouter();

    function redirectTo(){
        if(session){
            router.push("/pokedex/", undefined, { shallow: true })
        }
        else{
            signIn();
        }
    }
    
    if(session){
        router.push("/pokedex/", undefined, { shallow: true })
    }

    return (
        <>
            <Head>
                <title>Pokedex Logger</title>
            </Head>
            <Flex flexDir="column" width="70%" ml="15%" mb="10%" mt="10vh" alignItems="center">
                <Flex flexDir="column">
                <Text textAlign="center" fontSize="6xl" mb="0.5em">PokeLogger</Text>
                <Text textAlign="left" fontSize="medium">Welcome to PokeLogger! This is a fanmade Pokedex tracking website for all mainline Pokemon games. An updated list of all of the Pokemon games implemented is given below:</Text>
                <UnorderedList width="90%" mt="1.5em" mb="0.5em">
                    <ListItem><strong>Generation 9:</strong> Scarlet/Violet</ListItem>
                    <ListItem><strong>Generation 8:</strong> Legends: Arceus, Brilliant Diamond/Shining Pearl, and Sword/Shield</ListItem>
                    <ListItem><strong>Generation 7:</strong> Let&apos;s Go, Pikachu!/Let&apos;s Go, Eevee!, Ultra Sun/Ultra Moon, and Sun/Moon</ListItem>
                    <ListItem><strong>Generation 6:</strong> Omega Ruby/Alpha Sapphire and X/Y</ListItem>
                    <ListItem><strong>Generation 5:</strong> Black 2/White 2 and Black/White</ListItem>
                    <ListItem><strong>Generation 4:</strong> HeartGold/SoulSilver and Diamond/Pearl/Platinum</ListItem>
                    <ListItem><strong>Generation 3:</strong> FireRed/LeafGreen and Ruby/Sapphire/Emerald</ListItem>
                    <ListItem><strong>Generation 2:</strong> Gold/Silver/Crystal</ListItem>
                    <ListItem><strong>Generation 1:</strong> Red/Blue/Yellow</ListItem>
                </UnorderedList>
                <Text width="90%" textAlign="left" fontSize="xs">*All of the above games have Regional/National dexes as well as DLC options where applicable*</Text>
                <Text textAlign="left" mt="1.5em">Feel free to reach out and <Link color="blue" fontWeight="bold" href="mailto:pokedexlogger@gmail.com">email</Link> if you have an suggestions, questions, or want to report a bug! </Text>
                </Flex>
                <Button rightIcon={<ArrowForwardIcon/>} mt="2em" width="10em" borderRadius="0" onClick={redirectTo}>Let&apos;s Start!</Button>
            </Flex>
        </>
    )

}
