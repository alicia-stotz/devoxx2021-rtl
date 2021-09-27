import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { InputNumber } from '../../../shared/InputNumber';

import { IPokemon, PokedexContext } from '../../../../contexts/pokedex.context';
import { getPokemon } from '../../../../services/pokemon';

export interface IFinderProps {
  setPokemon: (pokemon: IPokemon) => void;
}

export const Finder = ({ setPokemon }: IFinderProps) => {
  const [inputNumber, setInputNumber] = React.useState<number>(0);
  const [invalidNumber, setInvalidNumber] = React.useState<boolean>(false);

  const { alreadyExist } = React.useContext(PokedexContext);

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
        <InputNumber
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
          setInvalidNumber={setInvalidNumber}
          error={invalidNumber ? "Le Pokemon est déjà présent dans le Pokedex." : undefined} />
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