import React from 'react';
import AddIcon from '@material-ui/icons/Add';

export interface IToolBarProps {
  numberOfPokemon: number;
  numberOfPokeball: number;
  withFakePromise?: boolean;
  setNumberOfPokeball: (pokeball: number) => void;
}

export const ToolBar = ({ numberOfPokemon, numberOfPokeball, withFakePromise, setNumberOfPokeball }: IToolBarProps) => {
  const [inputPokeball, setInputPokeball] = React.useState<number>(0);

  const typePokeballHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setInputPokeball(parseInt(e.currentTarget.value, 10));
  }

  const preventKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'e' || e.key === ',' || e.key === '.' || e.key === ';') {
      e.preventDefault();
    }
  }

  const fakePromise = (pokeballNumber: number): Promise<number> => {
    return Promise.resolve(pokeballNumber);
  }

  const onClickWithPromise = async (pNumber: number) => {
    const pokeballNumber = await fakePromise(pNumber);
    setNumberOfPokeball(numberOfPokeball + pokeballNumber);
  }

  return <div className="tool-bar card px-3">
    <div className="d-flex justify-content-between py-2 align-items-center">
      <div className="information">
        <span className="me-2" title="Number of pokemon in pokedex">
          Pokedex: <strong>{numberOfPokemon}</strong>
        </span>
        <span className="text-secondary">|</span>
        <span className="ms-2" title="Number of pokeball">
          Pokeball: <strong>{numberOfPokeball}</strong>
        </span>
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
          placeholder="ex : 5" />
        <button
          className="btn btn-outline-secondary btn-sm"
          title="Add number of Pokeball write in input"
          disabled={!inputPokeball}
          onClick={() => inputPokeball ?
            (withFakePromise ? onClickWithPromise(inputPokeball) : setNumberOfPokeball(numberOfPokeball + inputPokeball))
            : {}}
          type="button">
          Ajouter les Pokeball
        </button>
        <button
          className="btn btn-outline-secondary btn-sm"
          title="Add one Pokeball"
          onClick={() => setNumberOfPokeball(numberOfPokeball + 1)}
          type="button">
          <AddIcon fontSize="small" />
        </button>
      </div>
    </div>
  </div>
};