import { Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { EditIcon, DeleteIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Box,
    Image
  } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setCaught } from './ProgressBar/caughtSlice.js';

export default function PokedexItem( {dexInfo} ){
    const [ editMode, setEditMode ] = useState(false);
    const [ removeItem, setRemoveItem ] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { data: session } = useSession();
    const router = useRouter();
    const dispatch = useDispatch();

    const link = "/pokedex/" + dexInfo.name;
    function redirectTo(e){
        e.stopPropagation();
        router.push(link, undefined, { shallow: true })
        if(dexInfo.name !== router.query.dexName){
            dispatch(setCaught(0))
        }
    }

    const handleDelete = async (e) => {
        e.stopPropagation();
        try{
            let res = await fetch('/api/delete/dex', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: session.user.id,
                    pokedex: dexInfo.name
                }),
            })
            if(router.query.dexName === dexInfo.name){
                router.reload();
            }
            onClose();
            setRemoveItem(true)
        }
        catch (err){
            console.log(err);
        }
      }

    if(removeItem){
        return (
            null
        )
    }
    if(editMode == false){
        return (
            <Button 
                colorScheme='gray' 
                variant='ghost' 
                onClick={redirectTo} 
                borderRadius="0"
                m='.5vh'
                minHeight="4.5vh"
                justifyContent="space-between"
                _hover={{bg: "#a3d126"}}
            >
                <Flex>
                    <Image src="/pokedex_icon.png" alt="oops" maxHeight="2vh" />
                    <Box width="230px">
                        <Text overflow="hidden" color="gray.200" ml="1em" textAlign="left">
                            {dexInfo.name}
                        </Text>
                    </Box>
                </Flex>
                <EditIcon right={0} onClick={e => {
                                        e.stopPropagation();
                                        setEditMode(true);
                                    }
                                }
                />
            </Button>
        )
    }
    else{
        return (
            <>
            <Button
                colorScheme='gray' 
                borderRadius="0"
                variant='ghost' 
                minHeight="4.5vh"
                m='.5vh'
                justifyContent="space-between"
                _hover={{bg: "#a3d126"}}
            >
                <Flex>
                    <SmallCloseIcon mr="1em" onClick={e => {
                                                e.stopPropagation();
                                                setEditMode(false);
                                            }
                                        }
                                    />
                    <Box width="210px">
                        <Text overflow="hidden" color="gray.200" textAlign="left">
                            {dexInfo.name}
                        </Text>
                    </Box>
                </Flex>
                <DeleteIcon zIndex="2" onClick={onOpen}/>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                    <ModalContent>
                    <ModalHeader mr="1em">
                        {"Are you sure you would like to delete " + dexInfo.name + "? You cannot undo this action."}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={handleDelete}>
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </>
        )
    }
}



/*
else{
        return (
            <>
            <Button
                colorScheme='gray' 
                borderRadius="0"
                variant='ghost' 
                onClick={redirectTo} 
                minHeight="4.5vh"
                m='.5vh'
                justifyContent="space-between"
                _hover={{bg: "#a3d126"}}
            >
                <Flex>
                    <SmallCloseIcon mr="1em" onClick={e => {
                                                e.stopPropagation();
                                                setEditMode(false);
                                            }
                                        }
                                    />
                    <Box width="210px">
                        <Text overflow="hidden" color="gray.200" textAlign="center">
                            {dexInfo.name}
                        </Text>
                    </Box>
                </Flex>
                <DeleteIcon zIndex="2" onClick={onOpen}/>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                    <ModalContent>
                    <ModalHeader mr="1em">
                        Are you sure you would like to delete? You cannot undo this action.
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={handleDelete}>
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            </>
        )
    }*/