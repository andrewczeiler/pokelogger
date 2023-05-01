import { Input, Box, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';

export default function SearchBar( {setPokeFilter} ){
    const[searchParam, setSearchParam] = useState('')

    const inputHandler = (e) => {
        setSearchParam(e.target.value)
    }
    
    function setFilter(){
        setPokeFilter(searchParam);
    }

    return (
        <Box mt="1.5em" ml="15%" mr="15%">
            <Flex justifyContent="center"> 
                <Input variant="filled" _focus={{backgroundColor: "gray.100"}} borderRadius="0em" placeholder='Search Pokemon..' size='md' onChange={inputHandler}/>
                <Button borderRadius="0em" onClick={setFilter}><Search2Icon /></Button>
            </Flex>
        </Box>
    )
}