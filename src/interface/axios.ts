import axios from 'axios'

export const Req = async () =>{    

    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')

    return response.data

}