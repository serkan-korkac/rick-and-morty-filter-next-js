'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useCharacters } from '@/hooks/useCharacters';
import { useFilterStore } from '@/store/useFilterStore';
import { Character } from '@/types/Character'; 
import Image from 'next/image';

export const CharacterList = () => {
  const { status, gender } = useFilterStore();
  const filters = { status, gender };

  const { data, isLoading, error } = useCharacters(filters);

  if (isLoading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center p-6 text-red-500">Error loading characters.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data?.results?.map((character: Character) => (
        <Card key={character.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <CardContent className="p-4">
            <Image 
              src={character.image} 
              width={400}
              height={400}
              alt={character.name} 
              className="w-full h-48 object-cover rounded-md" 
            />
            
            <h2 className="mt-4 text-lg font-semibold text-center text-gray-800">{character.name}</h2>

            <p className="text-center text-gray-600">{character.status} - {character.gender}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
