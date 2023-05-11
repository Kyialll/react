import "../../App.css"
import {useState,useEffect} from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import {fetchPokemons} from "../../api/fetchPokemons";
import Pagination from "../../components/Pagination/Pagination";
import {fetchPokemonS} from "../../api/fetchPokemons";
import {Button} from "@mui/material";



const MainPage=()=>{
    const [pokemonList,setPokemonList]=useState([])
    const [offset,setOffset]=useState(0)
    const [page,setPage]=useState(1)
    const [pageCount, setPageCount]=useState(0)
    const [sort,setSort]=useState('')








    const limit=80
    useEffect(()=>{
        fetchPokemons(limit)
            .then ((data)=>{
                setPokemonList(data.results)
                setPageCount(Math.ceil(10))

            });
    },[])
    const handleChangePage=(e)=>{
        setPage(e)
        setOffset((e-1)*8)

    }
    const sortWeight=()=>{
        fetchPokemonS(10,20,'weight').then(s=>setPokemonList(s))

    }
    const sortAttack=()=>{
        fetchPokemonS(10,20,'attack').then(s=>setPokemonList(s))

    }



    return(

            <>
            <div className="container">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={sortWeight}>
                    Sort Weight
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={sortAttack}>
                 Sort Attack
                </Button>
                <div className="pokemonList">
                    {pokemonList.slice(offset,offset+8).map((pokemon)=><PokemonCard
                        key={pokemon.name} pokemon={pokemon}/>)}
                </div>
            </div>
                <div className={"paginationWrapper"}>

                    <Pagination
                        handleChangePage={(number)=>handleChangePage(number)}
                        page={page}
                        count={pageCount}
                    />
                </div>
            </>


    );
}
export default MainPage;