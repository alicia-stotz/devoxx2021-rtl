import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { IPokemon, PokedexContext } from '../../../../contexts/pokedex.context';
import { getPokemon } from '../../../../services/pokemon';

export interface IFinderProps {
  setPokemon: (pokemon: IPokemon) => void;
}

export const Finder = ({ setPokemon }: IFinderProps) => {
  const [inputNumber, setInputNumber] = React.useState<number>(0);
  const [invalidNumber, setInvalidNumber] = React.useState<boolean>(false);

  const { alreadyExist } = React.useContext(PokedexContext);

  const typeNumberHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setInputNumber(parseInt(e.currentTarget.value, 10));
    setInvalidNumber(false);
  }

  const preventKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'e' || e.key === ',' || e.key === '.' || e.key === ';') {
      e.preventDefault();
    }
  }

  const findPokemon = async () => {
    if (alreadyExist(inputNumber)) {
      console.warn('Pokemon already exist in the Pokedex');
      setInvalidNumber(true);
    } else {
      const newPokemon = await getPokemon(inputNumber);
      setInvalidNumber(false);
      setPokemon(newPokemon);
    }
  }

  return <div className="finder mt-5">
    <h5 title="Find pokemon section" className="d-flex align-items-center">
      <AddCircleIcon />
      Rechercher un nouveau Pokemon</h5>
    <div className="card mt-3">
      <div className="card-body">
        <div className="input-group has-validation">
          <input
            type="number"
            id="pokemonNumber"
            name="pokemon number"
            onInput={typeNumberHandler}
            title="Numero of pokemon to search"
            className={`form-control ${invalidNumber ? " is-invalid" : ""}`}
            min="0"
            onKeyDown={preventKeyDownHandler}
            value={inputNumber || ""}
            placeholder="ex : 15" />
          {
            invalidNumber ?
              <div className="invalid-feedback" title="Pokemon already exist">
                Le Pokemon est déjà présent dans le Pokedex.
              </div>
              : null
          }
        </div>
      </div>
      <div className="card-footer bg-white">
        <button
          className="btn btn-outline-secondary"
          title="Search Pokemon"
          disabled={!inputNumber}
          onClick={() => inputNumber ? findPokemon() : {}}
          type="button">
          Rechercher
        </button>
      </div>
    </div>
  </div>
};