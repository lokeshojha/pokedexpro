import React from "react";
import './pokelist.css';
import { Pokecard } from "../pokecard/Pokecard" 
import { Searchbox } from "../searchbox/Searchbox";

export const Pokelist = ({pokemons, handlePokeSearch, handleClick }) => {
    return (
        <div className = "pokelist">
             <Searchbox  handlePokeSearch={handlePokeSearch}/>
            {
                pokemons.map(x=>{
                    let sprite=null;
                    try{ 
                        sprite=JSON.parse(x.sprites);
                        sprite=sprite.normal;
                    }catch(error){

                    }
                    return x.name ? <Pokecard 
                    key = {x.id}
                    id={x.id} 
                    name = {x.name}
                     y={sprite}
                     handleClick={handleClick}/> : null;
                     
                    }
                )
            }
           
           
        </div>
    )
}

