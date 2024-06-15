interface PokemonDetails {
    name: string;
    types: { type: { name: string } }[];
    sprites: { front_default: string };
    stats: { stat: { name: string } }[];
    abilities: { ability: { name: string } }[];
    moves: { move: { name: string } }[];
}

/**
 * 
 * @param name Getting fetch by using name
 * @returns 
 */
async function fetchPokemon(name: string): Promise<PokemonDetails> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await res.json();
    return pokemon;
}

const fetchPokemonByType = async (type: string) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        return data.pokemon.map((pokemon: any) => pokemon.pokemon.name);
    } catch (error) {
        console.error(`Error fetching Pokémon of type ${type}:`, error);
        return [];
    }
};
const api = {
    fetchPokemon,
    fetchPokemonByType
};
export default api;