// app/page.tsx
"use client"
import { useEffect, useState } from 'react';
import SearchForm from '@/components/SearchForm';
import PokemonList from '@/components/PokemonList';
import { usePokemon, Pokemon } from '@/hooks/usePokemon';

export default function Home() {
  const { types, pokemon } = usePokemon();
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>(pokemon);

  useEffect(() => {
    setFilteredPokemon(pokemon);
  }, [pokemon]);
  return (
    <div className="p-4">
      <SearchForm types={types} setFilteredPokemon={setFilteredPokemon} pokemon={pokemon} />
      {filteredPokemon.length > 0 ? <PokemonList pokemon={filteredPokemon} /> : <div className='justify-center mt-4 items-center flex'><p>No Pokémon found</p></div>} 
    </div>
  );
}
