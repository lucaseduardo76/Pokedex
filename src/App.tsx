
import { useEffect } from 'react'
import {Home} from './pages/home'

export const App = () =>{
 
useEffect(()=>{
    const getPokemonlist = async() => {

        let req = await fetch('https://pokeapi.co/api/v2/pokemon/84/')
        let json = req.json

        console.log(json + 'asdasdasds')
        return json
    }
},[])

  return(
    <div>
      <Home/>
    </div>
  )
}