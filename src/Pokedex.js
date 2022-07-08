import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css" 

class pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, type: "fire", base_experience: 62, name: "Charmander" },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    let title ;
    if(this.props.isWinner){
      title = <h1 className="Pokedex-winner">Winning Hand</h1>
    }else{
      title = <h1 className="Pokedex-loser">Losing Hand</h1>


    }
  
    return (
      <div className="Pokedex">
        <h1>Pokedex</h1>
        <p>Total Experience: {this.props.exp}</p>
        {/* <p>{this.props.isWinner?"WINNER":"LOSER"}</p> */}
        {title}
        <div className="Pokedex-card">
        {this.props.pokemon.map((p, key) => (
          <Pokecard
            key={p.id}
            name={p.name}
            id={p.id}
            type={p.type}
            expi={p.base_experience}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default pokedex;
