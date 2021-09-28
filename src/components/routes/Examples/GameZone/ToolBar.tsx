import React from 'react';
import AddIcon from '@material-ui/icons/Add';

import { InputNumber } from '../../../shared/InputNumber';
import { NotificationType, useNotification } from '../../../shared/Notification';

const POKEBALL_PRICE = 50;

export interface IToolBarProps {
  numberOfPokemon: number;
  numberOfPokeball: number;
  numberOfDollar: number;
  setNumberOfPokeball: (pokeball: number) => void;
  setNumberOfDollar: (dollar: number) => void;
}

export const ToolBar = ({
  numberOfPokemon,
  numberOfPokeball,
  numberOfDollar,
  setNumberOfPokeball,
  setNumberOfDollar
}: IToolBarProps) => {
  const [inputPokeball, setInputPokeball] = React.useState<number>(0);
  const { addNotification } = useNotification();

  const fakePromise = (pokeballNumber: number): Promise<number> => {
    return Promise.resolve(pokeballNumber);
  }

  const onClickWithPromise = async (pNumber: number) => {
    if (numberOfDollar >= pNumber * POKEBALL_PRICE) {
      const pokeballNumber = await fakePromise(pNumber);
      setNumberOfPokeball(numberOfPokeball + pokeballNumber);
      setNumberOfDollar(numberOfDollar - POKEBALL_PRICE);
      addNotification(NotificationType.SUCCESS, `Vous avez acheté ${pNumber} pokeball`);
    } else {
      addNotification(NotificationType.ERROR, "Vous n'avez plus assez d'argent");
    }
  }

  return <div className="tool-bar card px-3">
    <div className="d-flex justify-content-between py-2 align-items-center">
      <div className="information">
        <span className="me-2" title="Number of pokemon in pokedex">
          Pokedex: <strong>{numberOfPokemon}</strong>
        </span>
        <span className="text-secondary">|</span>
        <span className="mx-2" title="Number of pokeball">
          Pokeball: <strong>{numberOfPokeball}</strong>
        </span>
        <span className="text-secondary">|</span>
        <span className="ms-2" title="Number of dollar">
          $: <strong>{numberOfDollar}</strong>
        </span>
      </div>
      <InputNumber
        inputNumber={inputPokeball}
        placeholder="ex : 5"
        id="pokeballNumber"
        name="Pokeball number"
        title="Number of pokeball to add"
        setInputNumber={setInputPokeball}
        componentClass="w-50"
        children={
          <>
            <button
              className="btn btn-outline-secondary btn-sm"
              title="Add number of Pokeball write in input"
              disabled={!inputPokeball}
              onClick={() => inputPokeball ? onClickWithPromise(inputPokeball) : {}}
              type="button">
              Ajouter les Pokeball
            </button>
            <button
              className="btn btn-outline-secondary btn-sm"
              title={numberOfDollar >= POKEBALL_PRICE ? "Add one Pokeball" : "Not enough money"}
              disabled={numberOfDollar < POKEBALL_PRICE}
              onClick={() => {
                setNumberOfPokeball(numberOfPokeball + 1);
                setNumberOfDollar(numberOfDollar - POKEBALL_PRICE)
              }}
              type="button">
              <AddIcon fontSize="small" />
            </button>
          </>
        } />
    </div>
  </div>
};