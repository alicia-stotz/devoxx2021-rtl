import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { IPokemon, IPokemonType } from '../../../contexts/pokedex.context';

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
            <th scope="row">Taille</th>
            <td title="Pokemon information - height">{pokemon.height}</td>
          </tr>
          <tr>
            <th scope="row">Poids</th>
            <td title="Pokemon information - weight">{pokemon.weight}</td>
          </tr>
          <tr>
            <th scope="row">Expérience de base</th>
            <td title="Pokemon information - base experience">{pokemon.base_experience}</td>
          </tr>
          {
            (showInformation && pokemon.types) &&
            <tr>
              <th scope="row">Types</th>
              <td title="Pokemon information - types">
                {
                  pokemon.types.map((item: IPokemonType, index: number) =>
                    <React.Fragment key={index}>
                      <a className="text-capitalize"
                        href={item.type.url}
                        rel="noreferrer"
                        target="_blank">
                        {item.type.name}
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
        Informations
      </a>
      {
        type ?
          (type === "Mine" ?
            <button
              className="btn btn-danger"
              disabled={!removeFct}
              onClick={removeFct ? () => removeFct(pokemon.id) : () => { }}
              title="Remove Pokemon">
              Relacher
            </button> :
            <button
              className="btn btn-success"
              title="Add Pokemon"
              onClick={addFct ? () => addFct(pokemon.id) : () => { }}
              disabled={!pokeball || !addFct}>
              Attraper
            </button>
          )
          : null
      }
    </div>
  </div>
}