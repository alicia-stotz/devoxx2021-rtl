import React from 'react';

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  order: number;
  weight: number;
  base_experience: number;
}

export const PokemonCard = (pokemon: IPokemon, type: "Mine" | "Grass") => {
  return <div className="card">
    <div className="card-body">
      <div className="d-flex align-items-baseline justify-content-between">
        <h5 className="card-title text-capitalize">{pokemon.name}</h5>
        <span>{pokemon.order}</span>
      </div>

      <h6 className="card-subtitle mb-2 text-muted">{type}</h6>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Height</th>
            <td>{pokemon.height}</td>
          </tr>
          <tr>
            <th scope="row">Weight</th>
            <td>{pokemon.weight}</td>
          </tr>
          <tr>
            <th scope="row">Base experience</th>
            <td>{pokemon.base_experience}</td>
          </tr>
        </tbody>
      </table>
      <a type="button"
        href={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
        target="_blank"
        rel="noreferrer"
        className="btn btn-light mx-2"
        title="View Pokemon information">
        All information
      </a>
      {
        type === "Mine" ?
          <button className="btn btn-danger">Remove</button>
          : <button className="btn btn-success">Add to Pokedex</button>
      }
    </div>
  </div>
}