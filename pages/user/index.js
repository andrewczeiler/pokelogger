import { useSession, signOut, signIn } from "next-auth/react";
import { Text } from '@chakra-ui/react';
import SideBar from '/components/SideBar.js';
import { useState, useEffect } from 'react';

export default function User(){
    const { data: session } = useSession();

    if(session){
        return (
            <>
                <SideBar userId={session.user.id} />
                <Text>{session.user.email}</Text> <br></br>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
        Not signed in <br />     
        <button onClick={() => signIn()}>Sign in</button>   
        </>
    )
}