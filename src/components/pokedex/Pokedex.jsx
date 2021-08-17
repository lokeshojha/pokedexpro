import React from "react";
import './pokedex.css';
import { Pokelist } from '../pokelist/Pokelist';
import  { PokeSearchResult } from '../pokeSearchResult/PokeSearchResult';
                          


export const Pokedex = ({handlePokeSearch , pokemons,handleClick , selectedPokemon}) =>{
    //console.log(pokemons[0]);
    return(
        <div className="pokedex-container">
            
            <div className="pokelist-container">
            
           <Pokelist 
           handleClick = {handleClick}
           pokemons={pokemons}
           handlePokeSearch={handlePokeSearch}/>
        </div>
         <div className="pokesearchresult-container">
             {
                 selectedPokemon ? <PokeSearchResult showResult={true}  
                                    sprite={JSON.parse(selectedPokemon.sprites).animated}
                                    id={selectedPokemon.id}
                                    height={selectedPokemon.height}
                                    weight={selectedPokemon.weight}
                                    name = {selectedPokemon.name}/> 
                                 : <PokeSearchResult showResult = {false}/>
             }
         </div>
         </div>
         
    )
}