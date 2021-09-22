import { IPokemon } from "../contexts/pokedex.context";

export const getPokemon = async (numeroOfPokemon: number): Promise<IPokemon> => {
  console.log(numeroOfPokemon)
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${numeroOfPokemon}`,
    { method: "get" }
  );

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }
  return response.json();
}