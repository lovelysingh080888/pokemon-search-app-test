// components/SearchForm.tsx
import { useState, ChangeEvent, FC } from 'react';
import { PokemonType, Pokemon } from '../hooks/usePokemon';
import Api from "@/services/ApiCall";

interface SearchFormProps {
  types: PokemonType[];
  setFilteredPokemon: (pokemon: Pokemon[]) => void;
  pokemon: Pokemon[];
}

const SearchForm: FC<SearchFormProps> = ({ types, setFilteredPokemon, pokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleSearch = async () => {
    let filtered: Pokemon[] = [];

    if (selectedType) {
      const pokemonOfType = await Api.fetchPokemonByType(selectedType);
      filtered = pokemon.filter(p => pokemonOfType.indexOf(p.name) !== -1 && p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    } else {
      filtered = pokemon.filter(p => p.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
    setFilteredPokemon(filtered);
  };

  return (
    <div className="flex flex-col space-y-4 lg:w-1/3 sm:w-full xs:w-full">
      <select
        className="p-2 border border-gray-300 rounded-md"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="p-2 bg-blue-500 text-white rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;