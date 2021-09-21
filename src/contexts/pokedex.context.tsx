import React from 'react';

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

export const POKEMON: IPokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    order: 1,
    weight: 69,
    base_experience: 64,
    types: [
      {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
      },
      {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/"
      }
    ]
  }
];

export const POKEDEX: IPokemon[] = [
  {
    id: 1,
    name: "bulbasaur",
    height: 7,
    order: 1,
    weight: 69,
    base_experience: 64,
    types: [
      {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/"
      },
      {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/"
      }
    ]
  },
  {
    id: 16,
    name: "pidgey",
    height: 3,
    order: 21,
    weight: 18,
    base_experience: 50,
    types: [
      {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/"
      },
      {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/"
      }
    ]
  }
];

interface PokedexContextProps {
  pokemon: IPokemon[];

  removePokemon: (id: number) => void;
  addPokemon: (newPokemon: IPokemon) => void;
}

export const PokedexContext = React.createContext<PokedexContextProps>({
  pokemon: POKEDEX,

  removePokemon: (_id: number) => { /* */ },
  addPokemon: (_newPokemon: IPokemon) => { /* */ }
});

export const PokedexProvider: React.FC = ({ children }) => {
  const [pokemon, setPokemon] = React.useState<IPokemon[]>(POKEDEX);

  const removePokemon = (id: number): void => {
    const initialArray = [...pokemon];
    const findPokemonIndex = initialArray.findIndex((p: IPokemon) => p.id === id);
    if (findPokemonIndex > -1) {
      initialArray.splice(findPokemonIndex, 1)
      setPokemon(initialArray);
    }
  }

  const addPokemon = (newPokemon: IPokemon): void => {
    const list: IPokemon[] = [...pokemon];
    list.push(newPokemon);
    setPokemon(list);
  }

  return (
    <PokedexContext.Provider value={{
      pokemon,
      removePokemon,
      addPokemon
    }}>
      {children}
    </PokedexContext.Provider>
  )
}