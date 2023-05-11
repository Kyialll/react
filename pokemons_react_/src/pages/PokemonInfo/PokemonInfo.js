import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPokemon} from "../../api/fetchPokemons";
import {Button} from "@mui/material";

const PokemonInfo = ()=>{
    const {id} =useParams();
    const [pokemon,setPokemon] = useState();


    useEffect(()=>{
        getPokemon(id).then((data=>setPokemon(data)));
        },[ id, pokemon ])


    const Navigate=useNavigate()
    const Back=()=>{
        Navigate(-1)
    }

    return(
            <div className={"pokemonInfo_container"}>
                <Button
                    variant={"contained"}
                    color={"secondary"}
                onClick={Back}>
                    Back
                </Button>

            <div className={"pokemonInfo_wrapper"}>
                <div className={"pokemonImage"}>
                    <img src={pokemon?.sprites.other.dream_world.front_default} alt={"pokemon"}/>
                </div>
                <div className={"pokemonInfo"}>
                    <div className={"pokemonName"}>
                        Name:{pokemon?.name}
                    </div>
                    <div className={"mainInfo"}>
                        <h4> Height:{pokemon?.height}</h4>
                        <h4>Weight:{pokemon?.weight}</h4>
                        <h4>Attack:{pokemon?.stats[1].base_stat}</h4>
                    </div>

                    <div className={"pokemonType"}>
                        <div className={"firstType"}>
                            <h4>Type:{pokemon?.types[0]?.type?.name}</h4>
                            <h4>Ability:{pokemon?.abilities[0].ability.name}</h4>
                            <img src={pokemon?.sprites.front_default} alt={"pokemon"}/>
                            <img src={pokemon?.sprites.back_default} alt={"pokemon"}/>
                            <img src={pokemon?.sprites.other.home.front_shiny} alt={"pokemon"}/>
                        </div>
                        <div className={"secondType"}>
                            <h4>Type:{pokemon?.types[1]?.type?.name}</h4>
                            <h4>Ability:{pokemon?.abilities[1].ability.name}</h4>
                            <img src={pokemon?.sprites.front_shiny} alt={"pokemon"}/>
                            <img src={pokemon?.sprites.back_shiny} alt={"pokemon"}/>
                        </div>





                    </div>

                </div>

        </div>
        </div>

    )
}

export default PokemonInfo;