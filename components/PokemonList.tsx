// components/PokemonList.tsx
import { FC } from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "@/hooks/usePokemon";

interface PokemonListProps {
  pokemon: Pokemon[];
}

const PokemonList: FC<PokemonListProps> = ({ pokemon }) => {

  return (
    <div className="h-4 mt-4">
      <h4>Pokemon List</h4>
      <div className="grid mt-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1  gap-4">
        {pokemon.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
};
export default PokemonList;
