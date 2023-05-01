import { useState } from 'react';
import { Image, Box, Skeleton } from '@chakra-ui/react';
import PokemonInfo from '/components/PokemonInfo.js';
import { nationalIDs } from '/data/NationalIDs';
import { useDispatch } from 'react-redux';
import { incrementCaught, decrementCaught } from './ProgressBar/caughtSlice';


export default function Pokemon( {pokemon, dexInfo} ){
    const [ caught, setCaught ] = useState(pokemon.caught);
    const [ load, setLoad ] = useState(false);
    const [ iconVisibility, setIconVisibility ] = useState(false);
    const [ iconColor, setIconColor ] = useState("black");
    const dispatch = useDispatch();


    function setLoadStatus(){
      setLoad(!load);
    }

    const pokemonId = nationalIDs[pokemon.name];


    const handleCaughtStatus = async (e) => {
      e.preventDefault();
      try{
          let res = await fetch('/api/update/pokemon', {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  id: pokemon.id,
                  caught: !caught
              }),
          })
          setCaught(!caught);
          if(!caught){
            dispatch(incrementCaught())
          }
          else{
            dispatch(decrementCaught())
          }
      }
      catch (err){
          console.log(err);
      }
    }

    let imgUrl;
    if(dexInfo.shiny){
      let multiPart = pokemonId.split("-")
      if(multiPart[0] <= 905){
        imgUrl = "/pokemon/shiny/" + pokemonId + ".png"
      }
      else if(multiPart[0] >= 1009){
        imgUrl = "/pokemon/" + pokemonId + ".png"
      }
      else{
        imgUrl = "/pokemon/other/official-artwork/shiny/" + pokemonId + ".png"
      }
    }
    else{
      imgUrl = "/pokemon/" + pokemonId + ".png"
    }

    const imageColor = caught ? '#507634' : '#95de5f';

    function handleMouseEnterIcon(){
      setIconVisibility(true);
      setIconColor("darkblue");
    }

    function handleMouseLeaveIcon(){
      setIconVisibility(false);
      setIconColor("black");
    }

    return (
      <>
        <Box margin="3%" position="relative" >
          <div width='100%'>
            <Skeleton hidden={load} margin=".6vh" width={window.innerWidth / 20} height={window.innerWidth / 20} borderRadius="0.2em" />
            <Image onMouseEnter={(e) => setIconVisibility(true)} onMouseLeave={(e) => setIconVisibility(false)} hidden={!load} onLoad={setLoadStatus} onClick={handleCaughtStatus} display="block" boxShadow="0px 0px 3px 0px" _hover={{boxShadow: "0px 0px 10px 0px black"}} borderRadius=".2em" loading="eager" opacity='90%' width='100%' backgroundColor={imageColor} src={imgUrl} alt={pokemon.name}/>
            <PokemonInfo pokemon={pokemon} dexType={dexInfo.type} iconColor={iconColor} handleMouseEnterIcon={handleMouseEnterIcon} handleMouseLeaveIcon={handleMouseLeaveIcon} iconVisibility={iconVisibility}/>
          </div>
        </Box>
      </>
    )
}