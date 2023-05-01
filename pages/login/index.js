import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button
  } from '@chakra-ui/react'

import { useState } from 'react';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    function handleUsernameChange(e){
        setUsername(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }


    //"https://pokeapi.co/api/v2/pokedex/28" for dlc
    /*
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokedex/1")
          .then((response) => response.json())
          .then((data) => {
            setData(data?.pokemon_entries);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, []);
    
    const test = data.map(pokemon => 
        console.log(pokemon.name)
    )
    
    let dataString;
    for (let i = 0; i < 809; i++){
        //if (!pokemons.includes(data[i]?.pokemon_species.name)){
          //dataString += '"' + data[i]?.pokemon_species.name + '",'
          //dataString += "{userId: userId, dexName: name, form: 'crown-tundra', number: " + data[i]?.entry_number + ", name: '" + data[i]?.pokemon_species.name + "'},\n";
        //}
        dataString += '"' + data[i]?.pokemon_species.name + '",'
    }

    console.log(dataString)*/
    

    /*
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
          .then((response) => response.json())
          .then((data) => {
            setData(data?.results);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, []);

    let dataString;

    for(let i = 0; i < 1280; i++){
        if(data){
            dataString += "'" + data[i]?.name + "': '" + data[i]?.url.split("https://pokeapi.co/api/v2/pokemon/")[1].split("/")[0] + "',\n"
        }
    }


    console.log(dataString)*/



    //use this to create new pokemon locations in supabase
    /*
    useEffect(() => {
        fetch("/api/create/locations")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, []);
    */
    /*
    for(let i = 0; i < 60; i++){
      console.log("{userId: userId, dexName: name, form: 'dynamax-adventures', number: " + (i+2) + ", name: ''},")
    }*/



    return(
        null
    )
}
