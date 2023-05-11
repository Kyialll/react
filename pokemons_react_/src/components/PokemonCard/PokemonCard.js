
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"



const PokemonCard=({pokemon})=>{
    const [image,setImage]=useState('')
    useEffect(()=>{
        axios.get (pokemon.url).then((data)=>{
            setImage(data.data?.sprites?.other?.dream_world?.front_default)
        })
    },[pokemon.url])

    return(
        <React.Fragment>
            <Link to={`/pokemon/${pokemon?.name}`}
            style={{textDecoration:"none"}}>
                <div className="pokemonCard">
                    {pokemon?.name}
                    <img src={image}
                         alt="pokemon"/>
                </div>
            </Link>

        </React.Fragment>

    )


}



export default PokemonCard;