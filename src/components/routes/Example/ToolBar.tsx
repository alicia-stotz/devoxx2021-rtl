import React from 'react';
import AddIcon from '@material-ui/icons/Add';

export interface IToolBarProps {
  numberOfPokemon: number;
}

export const Toolbar = ({ numberOfPokemon }: IToolBarProps) => {
  const [pokeball, setPokeball] = React.useState<number>(0);
  const [inputPokeball, setInputPokeball] = React.useState<number>(0);

  const typePokeballHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputPokeball(parseInt(e.currentTarget.value, 10));
  }

  const preventKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'e' || e.key === ',' || e.key === '.' || e.key === ';') {
      e.preventDefault();
    }
  }

  return <div className="tool-bar card">
    <div className="d-flex justify-content-between py-2 align-items-center">
      <div className="">
        <span className="me-2">Pokedex: <strong>{numberOfPokemon}</strong></span>
        <span className="text-secondary">|</span>
        <span className="ms-2">Pokeball: <strong>{pokeball}</strong></span>
      </div>
      <div className="input-group w-50">
        <input
          type="number"
          id="pokeball"
          name="pokeball"
          onInput={typePokeballHandler}
          title="Number of Pokeball to add"
          className="form-control form-control-sm"
          min="0"
          onKeyDown={preventKeyDownHandler}
          value={inputPokeball || ""}
          placeholder="ex: 5" />
        <button
          className="btn btn-outline-secondary btn-sm"
          title="Add number of Pokeball write in input"
          onClick={() => inputPokeball ? setPokeball(pokeball + inputPokeball) : {}}
          type="button">
          Ajouter les Pokeball
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          title="Add one Pokeball"
          onClick={() => setPokeball(pokeball + 1)}
          type="button">
          <AddIcon fontSize="small" />
        </button>
      </div>
    </div>
  </div>
};