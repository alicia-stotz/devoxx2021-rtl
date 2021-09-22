import React from 'react';

export interface IPokemonType {
  slot?: number;
  type: {
    name: string;
    url: string;
  }
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
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
      }
    ]
  }
];

export const FREE_POKEMON: IPokemon = {
  id: 10,
  name: "caterpie",
  height: 3,
  order: 14,
  weight: 29,
  base_experience: 39,
  types: [
    {
      type: {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/"
      }
    }
  ]
}

export const POKEMON_WITHOUT_TYPE: IPokemon[] = [
  {
    id: 20,
    name: "raticate",
    height: 7,
    order: 27,
    weight: 185,
    base_experience: 145,
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
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/"
        }
      },
      {
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/"
        }
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
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/"
        }
      },
      {
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/"
        }
      }
    ]
  }
];

interface PokedexContextProps {
  pokemon: IPokemon[];
  freePokemon: IPokemon | null;

  removePokemon: (id: number) => void;
  addPokemon: (newPokemon: IPokemon) => void;
  addFreePokemon: (newPokemon: IPokemon) => void,
  removeFreePokemon: () => void,
  alreadyExist: (numeroOfPokemon: number) => boolean;
}

export const PokedexContext = React.createContext<PokedexContextProps>({
  pokemon: POKEDEX,
  freePokemon: FREE_POKEMON,

  removePokemon: (_id: number) => { /* */ },
  addPokemon: (_newPokemon: IPokemon) => { /* */ },
  addFreePokemon: (_newPokemon: IPokemon) => { /* */ },
  removeFreePokemon: () => { /* */ },
  alreadyExist: (_numeroOfPokemon: number) => { return true }
});

export const PokedexProvider: React.FC = ({ children }) => {
  const [pokemon, setPokemon] = React.useState<IPokemon[]>(POKEDEX);
  const [freePokemon, setFreePokemon] = React.useState<IPokemon | null>(FREE_POKEMON);

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

  const removeFreePokemon = (): void => {
    setFreePokemon(null);
  }

  const addFreePokemon = (newPokemon: IPokemon): void => {
    setFreePokemon(newPokemon);
  }

  const alreadyExist = (numeroOfPokemon: number): boolean => {
    return !!pokemon.find((item: IPokemon) => item.order === numeroOfPokemon);
  }

  return (
    <PokedexContext.Provider value={{
      pokemon,
      freePokemon,
      removePokemon,
      addPokemon,
      removeFreePokemon,
      addFreePokemon,
      alreadyExist
    }}>
      {children}
    </PokedexContext.Provider>
  )
}