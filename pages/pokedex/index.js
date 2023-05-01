import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalFooter, 
    ModalBody, 
    FormControl,
    FormLabel,
    FormErrorMessage,
    RadioGroup,
    Radio,
    Select,
    Input,
    HStack,
    VStack,
    Text} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import LoadingPage from '@/components/LoadingPage';
import Head from 'next/head'

export default function PokedexPageRedirect(){
    const [ dexes, setDexes ] = useState([])
    const router = useRouter();
    const { data: session } = useSession();
    const [ shiny, setShiny ] = useState('no');
    const [ series, setSeries ] = useState('allgames');
    const [ type, setType ] = useState('regional');
    const [ dlc, setDlc ] = useState('no');
    const [ failedCreation, setFailedCreation ] = useState(false);
    const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm()

    function onSubmit(values) {
        try{
            fetch('/api/create/dex', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    dexName: values.dexName, 
                    shiny: shiny,
                    series: series,
                    type: type,
                    dlc: dlc,
                    userId: session.user.id
                }),
            })
            .then(response => response.json())
            .then(data => {
                if(!data.error){
                    window.location.href = "/pokedex/" + data.result.name;
                }
                else {
                    setFailedCreation(true);
                    console.log("Unable to create Pokedex (Name already taken?).")
                }
            })
        }
        catch (err){
            console.log(err);
        }
    }
    
    const url = "/api/read/dexes?userId=" + session?.user.id;
  
    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setDexes(data?.result);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, [url]);

    if(dexes.length === 0){
        return (
            <LoadingPage />
        )
    }

    else if(dexes.length > 0){
        const link = "/pokedex/" + dexes[0].name;
        router.push(link, undefined, { shallow: true })
    }

    else if(session) {
        return (
            <>
                <Head>
                    <title>Create Your First Pokedex</title>
                </Head>
                <Modal isOpen={true}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Create Your First Pokedex</ModalHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ModalBody>
                                <VStack spacing="20px">
                                    <FormControl isInvalid={errors.name}>
                                        <FormLabel htmlFor='dexName'>Pokedex Name</FormLabel>
                                        <Input 
                                            type='text'
                                            id='dexName'
                                            placeholder='Caught em all'
                                            {...register('dexName', {
                                                required: 'Name is required',
                                                minLength: { value: 3, message: 'Minimum length is 3'},
                                                maxLength: { value: 20, message: 'Maximum length is 20'}
                                            })}
                                        />
                                        <FormErrorMessage>{errors.name && errors.message}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl as='fieldset'>
                                        <FormLabel as='legend'>Shiny</FormLabel>
                                        <RadioGroup onChange={setShiny} value={shiny} defaultValue='no'>
                                            <HStack spacing='20px'>
                                                <Radio value='yes'>Yes</Radio>
                                                <Radio value='no'>No</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Game</FormLabel>
                                        <Select onChange={(e) => setSeries(e.target.value)}>
                                            <option value='allgames'>All Games</option>
                                            <option value='pokemonhome'>Pokemon Home</option>
                                            <option value='scarletviolet'>Scarlet/Violet</option>
                                            <option value='legendsarceus'>Legends: Arceus</option>
                                            <option value='bdsp'>Brilliant Diamond/Shining Pearl</option>
                                            <option value='swordshield'>Sword/Shield</option>
                                            <option value='letsgopikachueevee'>Let&apos;s Go, Pikachu/Eevee!</option>
                                            <option value='ultrasunmoon'>Ultra Sun/Moon</option>
                                            <option value='sunmoon'>Sun/Moon</option>
                                            <option value='oras'>Omega Ruby/Alpha Sapphire</option>
                                            <option value='xy'>X/Y</option>
                                            <option value='black2white2'>Black 2/White 2</option>
                                            <option value='blackwhite'>Black/White</option>
                                            <option value='hgss'>HeartGold/SoulSilver</option>
                                            <option value='diamondpearlplatinum'>Diamond/Pearl/Platinum</option>
                                            <option value='rubysapphireemerald'>Ruby/Sapphire/Emerald</option>
                                            <option value='frlg'>FireRed/LeafGreen</option>
                                            <option value='goldsilvercrystal'>Gold/Silver/Crystal</option>
                                            <option value='redblueyellow'>Red/Blue/Yellow</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl as='fieldset' hidden={series === 'allgames' 
                                                                || series === 'pokemonhome' 
                                                                || series === 'scarletviolet' 
                                                                || series === 'legendsarceus'
                                                                || series === 'swordshield'
                                                                || series === 'letsgopikachueevee'
                                                                || series === 'goldsilvercrystal'
                                                                || series === 'redblueyellow'
                                                                }>
                                        <FormLabel as='legend'>Dex Type</FormLabel>
                                        <RadioGroup onChange={setType} value={type} defaultValue='regional'>
                                            <HStack spacing='20px'>
                                                <Radio value='regional'>Regional</Radio>
                                                <Radio value='national'>National</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl as='fieldset' hidden={series !== 'swordshield'}>
                                        <FormLabel as='legend'>DLC</FormLabel>
                                        <RadioGroup onChange={setDlc} value={dlc} defaultValue='no'>
                                            <HStack spacing='20px'>
                                                <Radio value='yes'>Add</Radio>
                                                <Radio value='no'>Don&apos;t Add</Radio>
                                            </HStack>
                                        </RadioGroup>
                                    </FormControl>
                                </VStack>
                            </ModalBody>
                            <ModalFooter>
                                <Text color="red" hidden={!failedCreation}>Pokedex name already in use.</Text>
                                <Button colorScheme='teal' marginLeft="3vh" type='submit' isLoading={isSubmitting}>Create</Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            </>
        )
    }

    else{
        router.push("/");
    }

        
}
