// components/PokemonCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg h-[300px]">
  <div className='w-full h-1/2 flex  justify-center '>
  <Image className='w-1/2 h-full' width={100} height={200}  src='https://i.pinimg.com/736x/70/4b/bd/704bbdf2f8328b62160eb1244ac9ece5.jpg' alt='pic' />
  </div>
  <div className="px-6 h-1/2 bg-gray-100 pt-11">
    <div className="font-bold text-xl text-black mb-2">{pokemon.name}</div>
    <Link href={`/pokemon/${pokemon.name}`} className="text-blue-500 hover:text-blue-700">
      Details →
    </Link>
  </div>
</div>
);

export default PokemonCard;
