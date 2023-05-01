import { Flex, Text, Image, Button, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import PokedexItem from '/components/PokedexItem.js';
import AddPokedex from '/components/AddPokedex.js';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';

export default function SideBar( {userId, screenWidth, sideBarVisible, fullSideBar, handleLeftArrowClick, handleRightArrowClick} ){
    const [data, setData] = useState();

    const url = "/api/read/dexes?userId=" + userId;
  
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, [url]);

    data?.result?.sort(function(a,b) {
        return a.id - b.id
    })

    const pokedexItems = data?.result?.map((dex) => 
        <PokedexItem key={dex.id} dexInfo={dex} />
    )

    let width = "0px";
    let hidden = false;
    let closeBtn = false;
    if(fullSideBar && screenWidth < 800){
        width = "100%"
        closeBtn = true;
    }
    else if(!sideBarVisible || ((screenWidth < 800) && !fullSideBar)){
        width = "0px";
        hidden = true;
        closeBtn = false;
    }
    else{
        width = "350px";
        closeBtn = false;
    }
    
    return (
        <Flex flexDir="row">
            <Flex
                pos="fixed"
                top="0"
                bottom="0"
                w={width}
                left="0"
                flexDir="column"
                justifyContent="space-between"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                backgroundColor="#74941c"
                padding="3vh"
                overflowY="hidden"
                hidden={hidden}
                zIndex="10"
            >
                {width === "100%" ? 
                    <Flex
                        flexDir="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Flex justifyContent="left">
                            <Image src="/pokeball.png" alt="err" width="50px"/>
                            <Text ml="10px" color="black" fontFamily="monospace" fontSize="2xl">
                                PokeLogger
                            </Text>
                        </Flex>

                        <CloseIcon hidden={!closeBtn} onClick={handleLeftArrowClick} _hover = {{color: "blue.800", cursor: "pointer"}}/>
                    </Flex>
                    :
                    <Flex
                        flexDir="row"
                        justifyContent="left"
                        alignItems="center"
                    >
                        <Image src="/pokeball.png" alt="err" width="50px"/>
                        <Text ml="10px" color="black" fontFamily="monospace" fontSize="2xl">
                            PokeLogger
                        </Text>

                        <CloseIcon hidden={!closeBtn} onClick={handleLeftArrowClick} _hover = {{color: "blue.800", cursor: "pointer"}}/>
                    </Flex>
                }
                <Flex flexDir="column">
                    <Flex 
                        flexDir="column"
                        overflowY="auto"
                        maxHeight="60vh"
                    >
                        {pokedexItems}
                    </Flex>
                    <AddPokedex userId={userId}/>
                </Flex>
                <Flex>
                    <Button height="35px" ml="0.5em" variant="ghost" onClick={() => signOut()}>
                        <Image height="20px" src="/logout.png" alt="logout" />
                    </Button>
                </Flex>
            </Flex>
            <Box hidden={!(fullSideBar || !sideBarVisible || (screenWidth < 800 && !fullSideBar))} onClick={handleRightArrowClick} left="0" backgroundColor="#5a7316" top="0" bottom="0" position="fixed" width="1.2em" _hover = {{cursor: "pointer"}}>
                <ArrowRightIcon position="absolute" top="45vh"/>
            </Box>
            <Box hidden={fullSideBar || !sideBarVisible || (screenWidth < 800 && !fullSideBar)} onClick={handleLeftArrowClick} left="350px" backgroundColor="#5a7316" top="0" bottom="0" position="fixed" width="1.2em" _hover = {{cursor: "pointer"}}>
                <ArrowLeftIcon position="absolute" top="45vh"/>
            </Box>
        </Flex>
    )
}