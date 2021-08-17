import React from "react";
import './poke-search-result.css';

export const PokeSearchResult =  ({showResult,name , sprite, id, height, weight })=> {
    return (
        <div className ="poke-result-card">
            {
                showResult ? <div>
                    <img className= "pokemon-animated-sprite" alt="pokemon" src={sprite}/>
                    
                    <p>name: {name}</p>
                    <p>id: {id}</p>
                    <p>height: {height}</p>
                    <p>weight: {weight}</p>
                </div>
                :
                <h2>Welcome to pokedex!!</h2>
                
            }
            
        </div>
    )
}