import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export interface IPokemonType {
  name: string;
  url: string;
}

export interface IPokemon {
  id: number;
  name: string;
  height: number;
  order: number;
  weight: number;
  base_experience: number;
  types?: IPokemonType[];
}

export interface IPokemonCardProps {
  pokemon: IPokemon;
  type?: "Mine" | "Grass";
  pokeball?: boolean;
  removeFct?: (id: number) => void;
  addFct?: (id: number) => void;
}

export const PokemonCard = ({ pokemon, type, pokeball, removeFct, addFct }: IPokemonCardProps) => {
  const [showInformation, setShowInformation] = React.useState<Boolean>(false);

  return <div className="pokemon-card card mb-2">
    <div className="card-body"
      title={type ? (type === "Mine" ? "Pokemon card: Pokedex" : "Pokemon card") : "Pokemon card"}>
      <div className="d-flex align-items-baseline justify-content-between">
        <h5 className="card-title text-capitalize" title="Pokemon name">{pokemon.name}</h5>
        <span title="Pokemon number">{pokemon.order}</span>
      </div>

      <h6 className="card-subtitle mb-2 text-muted">{type === "Mine" ? "Pokedex" : ""}</h6>
      <table className="table table-striped table-sm" title="Pokemon information">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Height</th>
            <td title="Pokemon information - height">{pokemon.height}</td>
          </tr>
          <tr>
            <th scope="row">Weight</th>
            <td title="Pokemon information - weight">{pokemon.weight}</td>
          </tr>
          <tr>
            <th scope="row">Base experience</th>
            <td title="Pokemon information - base experience">{pokemon.base_experience}</td>
          </tr>
          {
            (showInformation && pokemon.types) &&
            <tr>
              <th scope="row">Types</th>
              <td title="Pokemon information - types">
                {
                  pokemon.types.map((type: IPokemonType, index: number) =>
                    <React.Fragment key={index}>
                      <a className="text-capitalize"
                        href={type.url}
                        rel="noreferrer"
                        target="_blank">
                        {type.name}
                      </a><br />
                    </React.Fragment>
                  )
                }
              </td>
            </tr>
          }
        </tbody>
        {
          pokemon.types ?
            <tfoot>
              <tr>
                <td className="text-center" colSpan={2}>
                  <button type="button"
                    onClick={() => setShowInformation(!showInformation)}
                    className="btn btn-link btn-sm w-100 bg-white"
                    title={showInformation ? "Show less information" : "Show more information"}>
                    {
                      showInformation ?
                        <KeyboardArrowUpIcon fontSize="small" />
                        : <KeyboardArrowDownIcon fontSize="small" />
                    }

                  </button>
                </td>
              </tr>
            </tfoot>
            : null
        }
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
        type ?
          (type === "Mine" ?
            <button
              className="btn btn-danger"
              disabled={!removeFct}
              onClick={removeFct ? () => removeFct(pokemon.id) : () => { }}
              title="Remove Pokemon">
              Remove
            </button> :
            <button
              className="btn btn-success"
              title="Add Pokemon"
              onClick={addFct ? () => addFct(pokemon.id) : () => { }}
              disabled={!pokeball && !addFct}>
              Add to Pokedex
            </button>
          )
          : null
      }
    </div>
  </div>
}