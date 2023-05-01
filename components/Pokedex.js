import { Flex, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SideBar from '/components/SideBar.js';
import PokemonBoxManager from '/components/PokemonBoxManager.js';
import ProgressBar from '/components/ProgressBar/ProgressBar.js';
import PokedexHeader from '/components/PokedexHeader.js';
import LoadingPage from './LoadingPage';
import SearchBar from './SearchBar.js';


export default function Pokedex( { userId, pokedex } ){
    const [ pokemon, setPokemon ] = useState();
    const [ dexInfo, setDexInfo ] = useState();
    const [ sideBarVisible, setSideBarVisible ] = useState(true);
    const [ fullSideBar, setFullSideBar ] = useState(false);
    const [ loaded, setLoaded ] = useState(false);
    const [ pokeFilter, setPokeFilter] = useState('')
    const width = useWindowDimension();
    const router = useRouter();

    const url = "/api/read/dex?userId=" + userId + "&pokedex=" + pokedex;

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPokemon(data.pokemons);
          setDexInfo(data.dexInfo);
          setLoaded(true)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, [url]);

    if(pokemon?.length === 0){
      const link = "/pokedex/";
      router.push(link, undefined, { shallow: true })
    }

    function passSetPokeFilter(filter){
      setPokeFilter(filter);
    }


    let caught = 0;
    pokemon?.map((pokemon) => {
        if(pokemon.caught === true){
            caught++;
        }
    })

    function setLeftMargin(){
      if(width < 800 && !fullSideBar){
        return "0"
      }
      if(sideBarVisible && !fullSideBar){
        return "350px"
      }
      else{
        return "0"
      }
    }

    if(width > 800 && fullSideBar){
      setFullSideBar(false)
    }


    
    function handleLeftArrowClick(){
      setFullSideBar(false)
      setSideBarVisible(false)
    }

    function handleRightArrowClick(){
      setFullSideBar(true)
      setSideBarVisible(true)
    }

    if(!loaded){
      return (
        <LoadingPage />
      )
    }

    return (
      <>
        <Box marginLeft={setLeftMargin}>
          <PokedexHeader dexInfo={dexInfo} />
          <SearchBar setPokeFilter={passSetPokeFilter}/>
          <Box mb="2em">
            <ProgressBar alreadyCaught={caught} numOfPokemon={pokemon?.length} />
          </Box>
        </Box>
        <SideBar screenWidth={width} fullSideBar={fullSideBar} userId={userId} sideBarVisible={sideBarVisible} handleRightArrowClick={handleRightArrowClick} handleLeftArrowClick={handleLeftArrowClick}/>
        <Flex marginLeft={setLeftMargin}>
            <PokemonBoxManager pokemons={pokemon.filter((poke) => poke.name.includes(pokeFilter))} dexInfo={dexInfo}/>
        </Flex>
      </>
    )
}

function useWindowDimension() {
  const [dimension, setDimension] = useState(window.innerWidth);
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setDimension(window.innerWidth);
    }, 50); // 100ms
    window.addEventListener('resize', debouncedResizeHandler);
    return () => window.removeEventListener('resize', debouncedResizeHandler);
  }, []); // Note this empty array. this effect should run only on mount and unmount
  return dimension;
}

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  }
}