// app/pokemon/[name]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Api from '@/services/ApiCall';  
interface PokemonDetailsProps {
  params: { name: string };
}

export default async function PokemonDetails({ params }: PokemonDetailsProps) {
  const pokemon = await Api.fetchPokemon(params.name);

  return (
    <div className="p-4">
      <nav className="breadcrumb mb-4">
        <Link href="/">Home</Link> &gt; <span>{pokemon.name}</span>
      </nav>
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-teal-300 p-4">
          <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={200} className="mx-auto" />
        </div>
        <div className="bg-yellow-300 p-4">
          <h1 className="text-2xl font-bold mb-2">Name: {pokemon.name}</h1>
          <p className="mb-2"><span className="font-semibold">Type:</span> {pokemon.types.map(t => t.type.name).join(', ')}</p>
          <p className="mb-2"><span className="font-semibold">Stats:</span> {pokemon.stats.map(s => s.stat.name).join(', ')}</p>
          <p className="mb-2"><span className="font-semibold">Abilities:</span> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
          <p className="mb-2"><span className="font-semibold">Some Moves:</span> {pokemon.moves.slice(0, 6).map(m => m.move.name).join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
