import React,{ Component } from "react";
import images from '../images/3.jpg';
import './App.css';
import { pokemonData } from './../data/pokemonData'
import { Pokedex } from './pokedex/Pokedex'

class App extends Component {
  constructor(){
    super(); // super is used to call the constructor of parent class
    this.state = {
      searchField: '',
      pokemons: [],
      selectedPokemon:null,

    }
  }
  componentDidMount(){
    this.setState({pokemons:pokemonData})
    
  }

  handlePokeSearch = (searchValue) =>{
    this.setState({searchField : searchValue})
  }
  handleClick = (name) =>{

    const pokemons = this.state.pokemons;
    let selectedPokemon = pokemons.find(pokemon=>pokemon.name === name)
    this.setState({selectedPokemon})
  }
  render(){
    const searchField = this.state.searchField;
    const pokemons=this.state.pokemons;
    let searchedPokemons = pokemons.filter(pokemon =>{
                  return pokemon.name 
                  ? pokemon.name.toLowerCase().includes(searchField.toLowerCase()):false
    })

    return(
      <div className = "App" style={{ backgroundImage: `url(${images})`, }} >
       <h1>Pokedex</h1>
       <Pokedex
       handlePokeSearch={this.handlePokeSearch}
       handleClick={this.handleClick}
       pokemons={searchedPokemons}
       selectedPokemon={this.state.selectedPokemon}/>

      </div>
    )
  }
}

export default App;
