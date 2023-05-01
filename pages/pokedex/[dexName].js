import { Text, Flex, Button, Spinner } from '@chakra-ui/react';
import {ArrowForwardIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router';
import { useSession, signIn } from "next-auth/react";
import Head from 'next/head'
import Pokedex from '/components/Pokedex.js';

export default function PokedexPage(){
    const router = useRouter();
    const { data: session } = useSession();

    if(session){
        return (
          <>
          <Head>
            <title>{"Pokedex " + router.query.dexName}</title>
          </Head>
          <Pokedex userId={session.user.id} pokedex={router.query.dexName} />
          </>
        )
    }
   
    return (
      <>
        <Head>
            <title>Login</title>
          </Head>
        <Flex flexDir="column" width="50%" ml="25%" mt="40vh" alignItems="center">
          <Text textAlign="center" fontSize="3xl">Log in to view your Pokedexes!</Text>
          <Button rightIcon={<ArrowForwardIcon/>} mt="2em" width="8em" borderRadius="0" onClick={() => signIn()}>Login</Button>
        </Flex>
      </>
    )
}