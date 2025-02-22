// API veri çekme işlemi
export const fetchCharacters = async (filters: Record<string, string>) => {
  const queryString = new URLSearchParams(filters).toString();
  const res = await fetch(`https://rickandmortyapi.com/api/character?${queryString}`);
  if (!res.ok) throw new Error('API request failed');
  return res.json();
};
