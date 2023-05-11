import axios from "axios";
import {sortItem} from "../common/helpers";


const  baseURL='https://pokeapi.co/api/v2/'


export const fetchPokemons=async(limit )=>{
    try {
        const {data} = await axios.get(baseURL+`pokemon?limit=${limit}`)
        return data

    }catch (e){}
}
export const fetchPokemonS = async(from, till, type) => {
    let list = [];
    for(let i = from; i < till; i++)  {
        const data = await axios.get(baseURL + 'pokemon/' + i)
        list.push(data.data)
        console.log(data)
    }
    return sortItem(list , type)

}


export const getPokemon= async (id)=>{
    try{
        const {data} = await axios.get(baseURL+`pokemon/${id}`)
        return data
    }catch (error){}
}