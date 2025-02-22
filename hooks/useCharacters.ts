import { useQuery } from '@tanstack/react-query';
import { CharacterResponse } from '../types/Character'; 

export const useCharacters = (filters: Record<string, string | number>) => {
  const queryString = new URLSearchParams(
    Object.fromEntries(
      Object.entries(filters).map(([key, value]) => [key, String(value)])
    )
  ).toString();

  return useQuery<CharacterResponse>({
    queryKey: ['characters', filters],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character?${queryString}`);
      if (!res.ok) throw new Error('API request failed');
      return res.json();
    },
  });
};
