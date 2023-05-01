import { Text, HStack, Spinner } from '@chakra-ui/react';

export default function LoadingPage(){
    return (
        <>
            <HStack width="50%" ml="45%" mb="10%" mt="45vh" alignItems="center">
                <Text>Loading...</Text>
                <Spinner></Spinner>
            </HStack>
        </>
    )
}