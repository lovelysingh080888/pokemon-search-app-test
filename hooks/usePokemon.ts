// hooks/usePokemon.ts
import { useState, useEffect } from 'react';

const api = 'https://pokeapi.co/api/v2';

export interface PokemonType {
  name: string;
}

export interface Pokemon {
  [x: string]: any;
  name: string;
  url: string;
}


export const usePokemon = () => {
  const [types, setTypes] = useState<PokemonType[]>([]);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  /**
   * 
   * @param type Getting fetch by using type
   * @returns 
   */
  const fetchPokemonByType = async (type: string) => {
    try {
      const response = await fetch(`${api}/type/${type}`);
      const data = await response.json();
      return data.pokemon.map((pokemon: any) => pokemon.pokemon.name);
    } catch (error) {
      console.error(`Error fetching Pokémon of type ${type}:`, error);
      return [];
    }
  };



  useEffect(() => {
    const fetchTypes = async () => {
      const res = await fetch(`${api}/type`);
      const data = await res.json();
      setTypes(data.results);
    };

    const fetchPokemon = async () => {
      const res = await fetch(`${api}/pokemon?limit=100`);
      const data = await res.json();
      setPokemon(data.results);
    };

    fetchTypes();
    fetchPokemon();
  }, []);

  return { types, pokemon, fetchPokemonByType };
};


