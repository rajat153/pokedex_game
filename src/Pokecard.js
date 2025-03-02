import React, { Component } from "react";
import "./Pokecard.css";
//import Image =


const PreD = (number) =>(
   number <=999 ? `00${number}`.slice(-3): number
 )
class Pokecard extends Component {
  render() {
    let ss = this.props.id;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src= {`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${PreD(ss)}.png`}
          alt="poke_image"
        />
        <p> Type: {this.props.type}</p>
        <p> EXP: {this.props.expi}</p>
      </div>
    );
  }
}

export default Pokecard;
