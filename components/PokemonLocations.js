import { useEffect, useState } from 'react';
import { Skeleton } from '@chakra-ui/react';
import Location from '/components/Location.js';

export default function PokemonLocations( {pokeName, dexType } ){
    const [ locationData, setLocationData ] = useState([])
    const [ isLoaded, setIsLoaded ] = useState(false)

    const url = "/api/read/locations/" + dexType + "?pokemonName=" + pokeName;

    useEffect(() => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setLocationData(data);
            setIsLoaded(true)
          })
          .catch((err) => {
            console.log(err.message);
          });
    }, [url]);
    
    let locations = new Array();
    Object.keys(locationData).forEach(function(key, index){
        locations.push(<Location key={index} locationData={locationData[key]}/>)
    })




    return (
      <>
        <Skeleton height="40vh" isLoaded={isLoaded}>
          {locations}
        </Skeleton>
      </>
    )
    


}